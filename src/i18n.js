// Bilingual support: O'zbekcha lotin (manba til) <-> O'zbekcha kirill.
//
// The whole UI is authored in Latin Uzbek. Rather than maintaining a parallel
// Cyrillic dictionary for hundreds of strings (static labels *and* dynamic data
// — shop names, news, chats…), we transliterate the rendered text in place.
// A TreeWalker converts existing text on switch, and a MutationObserver keeps
// new/changed nodes converted as the user navigates. Icon ligatures (.ico) and
// anything marked `.notr` are skipped so glyphs and the language options stay
// intact. The original Latin is remembered per node so switching back is exact.

const KEY = 'yq-lang';
const VALID = ['latin', 'cyrillic'];

export function getLang() {
  try { const v = localStorage.getItem(KEY); if (VALID.includes(v)) return v; } catch (e) {}
  return 'latin';
}

export function saveLang(l) {
  try { localStorage.setItem(KEY, VALID.includes(l) ? l : 'latin'); } catch (e) {}
}

// ---- Transliteration -------------------------------------------------------

const APO = "['ʻ‘’`´]"; // ' ʻ ‘ ’ ` ´
const DIGRAPHS = [
  ['Sh', 'Ш'], ['SH', 'Ш'], ['sh', 'ш'],
  ['Ch', 'Ч'], ['CH', 'Ч'], ['ch', 'ч'],
  ['Yo', 'Ё'], ['YO', 'Ё'], ['yo', 'ё'],
  ['Yu', 'Ю'], ['YU', 'Ю'], ['yu', 'ю'],
  ['Ya', 'Я'], ['YA', 'Я'], ['ya', 'я'],
  ['Ye', 'Е'], ['YE', 'Е'], ['ye', 'е'],
  ['Ts', 'Ц'], ['ts', 'ц'],
];
const SINGLE = {
  a: 'а', b: 'б', c: 'с', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж',
  k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т',
  u: 'у', v: 'в', w: 'в', x: 'х', y: 'й', z: 'з',
};

export function toCyrillic(input) {
  let s = input;
  // o' / g' must bind to their apostrophe before the y-digraphs (so "yo'l" ->
  // й+ў+л, not ё+...). Convert them (with any apostrophe variant) first.
  s = s.replace(new RegExp('O' + APO, 'g'), 'Ў').replace(new RegExp('o' + APO, 'g'), 'ў');
  s = s.replace(new RegExp('G' + APO, 'g'), 'Ғ').replace(new RegExp('g' + APO, 'g'), 'ғ');
  for (const [a, b] of DIGRAPHS) s = s.split(a).join(b);
  // Word-initial e -> э (ye/yo/… already consumed above). Cyrillic range guards
  // against treating a post-digraph letter as word-initial.
  s = s.replace(/(^|[^A-Za-zЀ-ӿ])E/g, '$1Э');
  s = s.replace(/(^|[^A-Za-zЀ-ӿ])e/g, '$1э');
  // Any leftover apostrophe is the glottal stop (tutuq belgisi) -> ъ.
  s = s.replace(new RegExp(APO, 'g'), 'ъ');
  s = s.replace(/[A-Za-z]/g, (ch) => {
    const low = ch.toLowerCase();
    const cyr = SINGLE[low];
    if (!cyr) return ch;
    return ch === low ? cyr : cyr.toUpperCase();
  });
  return s;
}

// ---- Live DOM application --------------------------------------------------

const orig = new WeakMap();
const SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
let lang = 'latin';
let observer = null;

function skip(textNode) {
  let el = textNode.parentElement;
  while (el) {
    if (SKIP_TAGS[el.tagName]) return true;
    const cl = el.classList;
    if (cl && (cl.contains('ico') || cl.contains('notr'))) return true;
    el = el.parentElement;
  }
  return false;
}

function convert(tn) {
  if (skip(tn)) return;
  const v = tn.nodeValue;
  // Only Latin-bearing text is fresh source; our own output is pure Cyrillic.
  if (v && /[A-Za-z]/.test(v)) {
    orig.set(tn, v);
    tn.nodeValue = toCyrillic(v);
  }
}

function walk(node, fn) {
  const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) fn(n);
}

function startObserver(root) {
  if (observer) return;
  const opts = { subtree: true, childList: true, characterData: true };
  observer = new MutationObserver((muts) => {
    observer.disconnect();
    for (const m of muts) {
      if (m.type === 'characterData') convert(m.target);
      else m.addedNodes.forEach((n) => {
        if (n.nodeType === 3) convert(n);
        else if (n.nodeType === 1) walk(n, convert);
      });
    }
    observer.observe(root, opts);
  });
  observer.observe(root, opts);
}

function stopObserver() {
  if (observer) { observer.disconnect(); observer = null; }
}

export function applyLang(l) {
  lang = VALID.includes(l) ? l : 'latin';
  const root = document.getElementById('root');
  if (!root) return;
  if (lang === 'cyrillic') {
    walk(root, convert);
    startObserver(root);
  } else {
    stopObserver();
    walk(root, (tn) => {
      if (orig.has(tn)) { tn.nodeValue = orig.get(tn); orig.delete(tn); }
    });
  }
}
