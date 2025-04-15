var k = (o, e, g) => new Promise((n, t) => {
  var a = (r) => {
    try {
      l(g.next(r));
    } catch (p) {
      t(p);
    }
  }, m = (r) => {
    try {
      l(g.throw(r));
    } catch (p) {
      t(p);
    }
  }, l = (r) => r.done ? n(r.value) : Promise.resolve(r.value).then(a, m);
  l((g = g.apply(o, e)).next());
});
import { openBlock as s, createElementBlock as i, resolveDirective as So, normalizeClass as F, renderSlot as c, normalizeProps as u, guardReactiveProps as d, createElementVNode as h, Fragment as R, renderList as P, createTextVNode as C, toDisplayString as j, createBlock as w, resolveDynamicComponent as S, createCommentVNode as $, mergeProps as D, toHandlers as $o, withDirectives as x, vShow as z, createVNode as _o, Transition as Co, withCtx as O, withModifiers as M, resolveComponent as zo, normalizeStyle as E } from "vue";
const Ao = "google", To = "google", Vo = "google", Lo = "google", qo = "google", Fo = "google", Ro = "google", Po = "google", Do = "google", Mo = "google", Eo = "google", Bo = "google", Uo = "google", Io = "google", No = "google", Wo = "google", Ho = "google", Zo = "google", Ko = "google", Go = "google", Jo = "google", Yo = "google", Qo = "google", Xo = "google", oe = "google", ee = "google", ge = "google", ae = "google", ne = "google", te = "google", le = "google", se = "google", re = "google", ie = "google", ce = "google", ue = "google", de = "google", he = "google", pe = "google", me = "google", be = "google", fe = "google", ye = "google", ke = "google", ve = "google", we = "google", xe = "google", Oe = "google", je = "google", Se = "google", $e = "google", _e = "google", Ce = "google", ze = "google", Ae = "google", Te = "google", Ve = "google", Le = "google", qe = "google", Fe = "google", Re = "google", Pe = "google", De = "google", Me = "google", Ee = "google", Be = "google", Ue = "google", Ie = "google", Ne = "google", We = "google", He = "google", Ze = "google", Ke = "google", Ge = "google", Je = "google", Ye = "google", Qe = "google", Xe = "google", og = "google", eg = "google", gg = "google", ag = "google", ng = "google", tg = "google", lg = "google", sg = "google", rg = "google", ig = "google", cg = "google", ug = "google", dg = "google", hg = "google", pg = "google", mg = "google", bg = "google", fg = "google", yg = "google", kg = "google", vg = "google", wg = "google", xg = "google", Og = "google", jg = "google", Sg = "google", $g = "google", _g = "google", Cg = "google", zg = "google", Ag = "google", Tg = "google", Vg = "google", Lg = "google", qg = "google", Fg = "google", Rg = "google", Pg = "google", Dg = "google", Mg = "google", Eg = "google", Bg = "google", Ug = "google", Ig = "google", Ng = "google", Wg = "google", Hg = "google", Zg = "google", Kg = "google", Gg = "google", Jg = "google", Yg = "google", Qg = "google", Xg = "google", oa = "google", ea = "google", ga = "google", aa = "google", na = "google", ta = "google", la = "google", sa = "google", ra = "google", ia = "google", ca = "google", ua = "google", da = "google", ha = "google", pa = "google", ma = "google", ba = "google", fa = "google", ya = "google", ka = "google", va = "google", wa = "google", xa = "google", Oa = "google", ja = "google", Sa = "google", $a = "google", _a = "google", Ca = "google", za = "google", Aa = "google", Ta = "google", Va = "google", La = "google", qa = "google", Fa = "google", Ra = "google", Pa = "google", Da = "google", Ma = "google", Ea = "google", Ba = "google", Ua = "google", Ia = "google", Na = "google", Wa = "google", Ha = "google", Za = "google", Ka = "google", Ga = "google", Ja = "google", Ya = "google", Qa = "google", Xa = "google", on = "google", en = "google", gn = "google", an = "google", nn = "google", tn = "google", ln = "google", sn = "google", rn = "google", cn = "google", un = "google", dn = "google", hn = "google", pn = "google", mn = "google", bn = "google", fn = "google", yn = "google", kn = "google", vn = "google", wn = "google", xn = "google", On = "google", jn = "google", Sn = "google", $n = "google", _n = "google", Cn = "google", zn = "google", An = "google", Tn = "google", Vn = "google", Ln = "google", qn = "google", Fn = "google", Rn = "google", Pn = "google", Dn = "google", Mn = "google", En = "google", Bn = "google", Un = "google", In = "google", Nn = "google", Wn = "google", Hn = "google", Zn = "google", Kn = "google", Gn = "google", Jn = "google", Yn = "google", Qn = "google", Xn = "google", ot = "google", et = "google", gt = "google", at = "google", nt = "google", tt = "google", lt = "google", st = "google", rt = "google", it = "google", ct = "google", ut = "google", dt = "google", ht = "google", pt = "google", mt = "google", bt = "google", ft = "google", yt = "google", kt = "google", vt = "google", wt = "google", xt = "google", Ot = "google", jt = "google", St = "google", $t = "google", _t = "google", Ct = "google", zt = "google", At = "google", Tt = "google", Vt = "google", Lt = "google", qt = "google", Ft = "google", Rt = "google", Pt = "google", Dt = "google", Mt = "google", Et = "google", Bt = "google", Ut = "google", It = "google", Nt = "google", Wt = "google", Ht = "google", Zt = "google", Kt = "google", Gt = "google", Jt = "google", Yt = "google", Qt = "google", Xt = "google", ol = "google", el = "google", gl = "google", al = "google", nl = "google", tl = "google", ll = "google", sl = "google", rl = "google", il = "google", cl = "google", ul = "google", dl = "google", hl = "google", pl = "google", ml = "google", bl = "google", fl = "google", yl = "google", kl = "google", vl = "google", wl = "google", xl = "google", Ol = "google", jl = "google", Sl = "google", $l = "google", _l = "google", Cl = "google", zl = "google", Al = "google", Tl = "google", Vl = "google", Ll = "google", ql = "google", Fl = "google", Rl = "google", Pl = "google", Dl = "google", Ml = "google", El = "google", Bl = "google", Ul = "google", Il = "google", Nl = "google", Wl = "google", Hl = "google", Zl = "google", Kl = "google", Gl = "google", Jl = "google", Yl = "google", Ql = "google", Xl = "google", os = "google", es = "google", gs = "google", as = "google", ns = "google", ts = "google", ls = "google", ss = "google", rs = "google", is = "google", cs = "google", us = "google", ds = "google", hs = "google", ps = "google", ms = "google", bs = "google", fs = "google", ys = "google", ks = "google", vs = "google", ws = "google", xs = "google", Os = "google", js = "google", Ss = "google", $s = "google", _s = "google", Cs = "google", zs = "google", As = "google", Ts = "google", Vs = "google", Ls = "google", qs = "google", Fs = "google", Rs = "google", Ps = "google", Ds = "google", Ms = "google", Es = "google", Bs = "google", Us = "google", Is = "google", Ns = "google", Ws = "google", Hs = "google", Zs = "google", Ks = "google", Gs = "google", Js = "google", Ys = "google", Qs = "google", Xs = "google", or = "google", er = "google", gr = "google", ar = "google", nr = "google", tr = "google", lr = "google", sr = "google", rr = "google", ir = "google", cr = "google", ur = "google", dr = "google", hr = "google", pr = "google", mr = "google", br = "google", fr = "google", yr = "google", kr = "google", vr = "google", wr = "google", xr = "google", Or = "google", jr = "google", Sr = "google", $r = "google", _r = "google", Cr = "google", zr = "google", Ar = "google", Tr = "google", Vr = "google", Lr = "google", qr = "google", Fr = "google", Rr = "google", Pr = "google", Dr = "google", Mr = "google", Er = "google", Br = "google", Ur = "google", Ir = "google", Nr = "google", Wr = "google", Hr = "google", Zr = "google", Kr = "google", Gr = "google", Jr = "google", Yr = "google", Qr = "google", Xr = "google", oi = "google", ei = "google", gi = "google", ai = "google", ni = "google", ti = "google", li = "google", si = "google", ri = "google", ii = "google", ci = "google", ui = "google", di = "google", hi = "google", pi = "google", mi = "google", bi = "google", fi = "google", yi = "google", ki = "google", vi = "google", wi = "google", xi = "google", Oi = "google", ji = "google", Si = "google", $i = "google", _i = "google", Ci = "google", zi = "google", Ai = "google", Ti = "google", Vi = "google", Li = "google", qi = "google", Fi = "google", Ri = "google", Pi = "google", Di = "google", Mi = "google", Ei = "google", Bi = "google", Ui = "google", Ii = "google", Ni = "google", Wi = "google", Hi = "google", Zi = "google", Ki = "google", Gi = "google", Ji = "google", Yi = "google", Qi = "google", Xi = "google", oc = "google", ec = "google", gc = "google", ac = "google", nc = "google", tc = "google", lc = "google", sc = "google", rc = "google", ic = "google", cc = "google", uc = "google", dc = "google", hc = "google", pc = "google", mc = "google", bc = "google", fc = "google", yc = "google", kc = "google", vc = "google", wc = "google", xc = "google", Oc = "google", jc = "google", Sc = "google", $c = "google", _c = "google", Cc = "google", zc = "google", Ac = "google", Tc = "google", Vc = "google", Lc = "google", qc = "google", Fc = "google", Rc = "google", Pc = "google", Dc = "google", Mc = "google", Ec = "google", Bc = "google", Uc = "google", Ic = "google", Nc = "google", Wc = "google", Hc = "google", Zc = "google", Kc = "google", Gc = "google", Jc = "google", Yc = "google", Qc = "google", Xc = "google", ou = "google", eu = "google", gu = "google", au = "google", nu = "google", tu = "google", lu = "google", su = "google", ru = "google", iu = "google", cu = "google", uu = "google", du = "google", hu = "google", pu = "google", mu = "google", bu = "google", fu = "google", yu = "google", ku = "google", vu = "google", wu = "google", xu = "google", Ou = "google", ju = "google", Su = "google", $u = "google", _u = "google", Cu = "league", zu = "other", Au = "other", Tu = "other", Vu = "other", Lu = "other", qu = "other", Fu = "other", Ru = "other", Pu = "other", Du = "other", Mu = "other", Eu = "other", Bu = "other", Uu = "other", Iu = "other", Nu = "other", Wu = "other", Hu = "other", Zu = "other", Ku = "other", Gu = "other", Ju = "other", Yu = {
  abeezee: Ao,
  abel: To,
  "abhaya-libre": "google",
  aboreto: Vo,
  "abril-fatface": "google",
  aclonica: Lo,
  acme: qo,
  actor: Fo,
  adamina: Ro,
  "advent-pro": "google",
  "aguafina-script": "google",
  "akaya-kanadaka": "google",
  "akaya-telivigala": "google",
  akronim: Po,
  akshar: Do,
  aladin: Mo,
  alata: Eo,
  alatsi: Bo,
  "albert-sans": "google",
  aldrich: Uo,
  alef: Io,
  alegreya: No,
  "alegreya-sans": "google",
  "alegreya-sans-sc": "google",
  "alegreya-sc": "google",
  aleo: Wo,
  "alex-brush": "google",
  "alfa-slab-one": "google",
  alice: Ho,
  alike: Zo,
  "alike-angular": "google",
  allan: Ko,
  allerta: Go,
  "allerta-stencil": "google",
  allison: Jo,
  allura: Yo,
  almarai: Qo,
  almendra: Xo,
  "almendra-display": "google",
  "almendra-sc": "google",
  "alumni-sans": "google",
  "alumni-sans-collegiate-one": "google",
  "alumni-sans-inline-one": "google",
  "alumni-sans-pinstripe": "google",
  amarante: oe,
  amaranth: ee,
  "amatic-sc": "google",
  amethysta: ge,
  amiko: ae,
  amiri: ne,
  amita: te,
  anaheim: le,
  andada: se,
  "andada-pro": "google",
  andika: re,
  "andika-new-basic": "google",
  "anek-bangla": "google",
  "anek-devanagari": "google",
  "anek-gujarati": "google",
  "anek-gurmukhi": "google",
  "anek-kannada": "google",
  "anek-latin": "google",
  "anek-malayalam": "google",
  "anek-odia": "google",
  "anek-tamil": "google",
  "anek-telugu": "google",
  angkor: ie,
  "annie-use-your-telescope": "google",
  "anonymous-pro": "google",
  antic: ce,
  "antic-didone": "google",
  "antic-slab": "google",
  anton: ue,
  antonio: de,
  anybody: he,
  arapey: pe,
  arbutus: me,
  "arbutus-slab": "google",
  "architects-daughter": "google",
  archivo: be,
  "archivo-black": "google",
  "archivo-narrow": "google",
  "are-you-serious": "google",
  "aref-ruqaa": "google",
  arima: fe,
  "arima-madurai": "google",
  arimo: ye,
  arizonia: ke,
  armata: ve,
  arsenal: we,
  artifika: xe,
  arvo: Oe,
  arya: je,
  asap: Se,
  "asap-condensed": "google",
  asar: $e,
  asset: _e,
  assistant: Ce,
  astloch: ze,
  asul: Ae,
  athiti: Te,
  "atkinson-hyperlegible": "google",
  atma: Ve,
  "atomic-age": "google",
  aubrey: Le,
  audiowide: qe,
  "autour-one": "google",
  average: Fe,
  "average-sans": "google",
  "averia-gruesa-libre": "google",
  "averia-libre": "google",
  "averia-sans-libre": "google",
  "averia-serif-libre": "google",
  "azeret-mono": "google",
  b612: Re,
  "b612-mono": "google",
  babylonica: Pe,
  "bad-script": "google",
  bahiana: De,
  bahianita: Me,
  "bai-jamjuree": "google",
  "bakbak-one": "google",
  ballet: Ee,
  "baloo-2": "google",
  "baloo-bhai-2": "google",
  "baloo-bhaijaan-2": "google",
  "baloo-bhaina-2": "google",
  "baloo-chettan-2": "google",
  "baloo-da-2": "google",
  "baloo-paaji-2": "google",
  "baloo-tamma-2": "google",
  "baloo-tammudu-2": "google",
  "baloo-thambi-2": "google",
  "balsamiq-sans": "google",
  balthazar: Be,
  bangers: Ue,
  barlow: Ie,
  "barlow-condensed": "google",
  "barlow-semi-condensed": "google",
  barriecito: Ne,
  barrio: We,
  basic: He,
  baskervville: Ze,
  battambang: Ke,
  baumans: Ge,
  bayon: Je,
  "be-vietnam": "google",
  "be-vietnam-pro": "google",
  "beau-rivage": "google",
  "bebas-neue": "google",
  belgrano: Ye,
  bellefair: Qe,
  belleza: Xe,
  bellota: og,
  "bellota-text": "google",
  benchnine: eg,
  benne: gg,
  bentham: ag,
  "berkshire-swash": "google",
  besley: ng,
  "beth-ellen": "google",
  bevan: tg,
  "bhutuka-expanded-one": "google",
  "big-shoulders-display": "google",
  "big-shoulders-inline-display": "google",
  "big-shoulders-inline-text": "google",
  "big-shoulders-stencil-display": "google",
  "big-shoulders-stencil-text": "google",
  "big-shoulders-text": "google",
  "bigelow-rules": "google",
  "bigshot-one": "google",
  bilbo: lg,
  "bilbo-swash-caps": "google",
  biorhyme: sg,
  "biorhyme-expanded": "google",
  birthstone: rg,
  "birthstone-bounce": "google",
  biryani: ig,
  bitter: cg,
  "biz-udgothic": "google",
  "biz-udmincho": "google",
  "biz-udpgothic": "google",
  "biz-udpmincho": "google",
  "black-and-white-picture": "google",
  "black-han-sans": "google",
  "black-ops-one": "google",
  blaka: ug,
  "blaka-hollow": "google",
  blinker: dg,
  "bodoni-moda": "google",
  bokor: hg,
  "bona-nova": "google",
  bonbon: pg,
  "bonheur-royale": "google",
  boogaloo: mg,
  "bowlby-one": "google",
  "bowlby-one-sc": "google",
  brawler: bg,
  "bree-serif": "google",
  "brygada-1918": "google",
  "bubblegum-sans": "google",
  "bubbler-one": "google",
  buda: fg,
  buenard: yg,
  bungee: kg,
  "bungee-hairline": "google",
  "bungee-inline": "google",
  "bungee-outline": "google",
  "bungee-shade": "google",
  butcherman: vg,
  "butterfly-kids": "google",
  cabin: wg,
  "cabin-condensed": "google",
  "cabin-sketch": "google",
  "caesar-dressing": "google",
  cagliostro: xg,
  cairo: Og,
  caladea: jg,
  calistoga: Sg,
  calligraffitti: $g,
  cambay: _g,
  cambo: Cg,
  candal: zg,
  cantarell: Ag,
  "cantata-one": "google",
  "cantora-one": "google",
  capriola: Tg,
  caramel: Vg,
  carattere: Lg,
  cardo: qg,
  carme: Fg,
  "carrois-gothic": "google",
  "carrois-gothic-sc": "google",
  "carter-one": "google",
  castoro: Rg,
  catamaran: Pg,
  caudex: Dg,
  caveat: Mg,
  "caveat-brush": "google",
  "cedarville-cursive": "google",
  "ceviche-one": "google",
  "chakra-petch": "google",
  changa: Eg,
  "changa-one": "google",
  chango: Bg,
  "charis-sil": "google",
  charm: Ug,
  charmonman: Ig,
  chathura: Ng,
  "chau-philomene-one": "google",
  "chela-one": "google",
  "chelsea-market": "google",
  chenla: Wg,
  cherish: Hg,
  "cherry-cream-soda": "google",
  "cherry-swash": "google",
  chewy: Zg,
  chicle: Kg,
  chilanka: Gg,
  chivo: Jg,
  chonburi: Yg,
  cinzel: Qg,
  "cinzel-decorative": "google",
  "clicker-script": "google",
  coda: Xg,
  "coda-caption": "google",
  codystar: oa,
  coiny: ea,
  combo: ga,
  comfortaa: aa,
  comforter: na,
  "comforter-brush": "google",
  "comic-neue": "google",
  "coming-soon": "google",
  commissioner: ta,
  "concert-one": "google",
  condiment: la,
  content: sa,
  "contrail-one": "google",
  convergence: ra,
  cookie: ia,
  copse: ca,
  corben: ua,
  corinthia: da,
  cormorant: ha,
  "cormorant-garamond": "google",
  "cormorant-infant": "google",
  "cormorant-sc": "google",
  "cormorant-unicase": "google",
  "cormorant-upright": "google",
  courgette: pa,
  "courier-prime": "google",
  cousine: ma,
  coustard: ba,
  "covered-by-your-grace": "google",
  "crafty-girls": "google",
  creepster: fa,
  "crete-round": "google",
  "crimson-pro": "google",
  "crimson-text": "google",
  "croissant-one": "google",
  crushed: ya,
  cuprum: ka,
  "cute-font": "google",
  cutive: va,
  "cutive-mono": "google",
  damion: wa,
  "dancing-script": "google",
  dangrek: xa,
  "darker-grotesque": "google",
  "david-libre": "google",
  "dawning-of-a-new-day": "google",
  "days-one": "google",
  dekko: Oa,
  "dela-gothic-one": "google",
  delius: ja,
  "delius-swash-caps": "google",
  "delius-unicase": "google",
  "della-respira": "google",
  "denk-one": "google",
  devonshire: Sa,
  dhurjati: $a,
  "didact-gothic": "google",
  diplomata: _a,
  "diplomata-sc": "google",
  "dm-mono": "google",
  "dm-sans": "google",
  "dm-serif-display": "google",
  "dm-serif-text": "google",
  "do-hyeon": "google",
  dokdo: Ca,
  domine: za,
  "donegal-one": "google",
  dongle: Aa,
  "doppio-one": "google",
  dorsa: Ta,
  dosis: Va,
  dotgothic16: La,
  "dr-sugiyama": "google",
  "duru-sans": "google",
  dynalight: qa,
  dynapuff: Fa,
  "eagle-lake": "google",
  "east-sea-dokdo": "google",
  eater: Ra,
  "eb-garamond": "google",
  economica: Pa,
  eczar: Da,
  "edu-nsw-act-foundation": "google",
  "edu-qld-beginner": "google",
  "edu-sa-beginner": "google",
  "edu-tas-beginner": "google",
  "edu-vic-wa-nt-beginner": "google",
  "el-messiri": "google",
  electrolize: Ma,
  elsie: Ea,
  "elsie-swash-caps": "google",
  "emblema-one": "google",
  "emilys-candy": "google",
  "encode-sans": "google",
  "encode-sans-condensed": "google",
  "encode-sans-expanded": "google",
  "encode-sans-sc": "google",
  "encode-sans-semi-condensed": "google",
  "encode-sans-semi-expanded": "google",
  engagement: Ba,
  englebert: Ua,
  enriqueta: Ia,
  ephesis: Na,
  epilogue: Wa,
  "erica-one": "google",
  esteban: Ha,
  estonia: Za,
  "euphoria-script": "google",
  ewert: Ka,
  exo: Ga,
  "exo-2": "google",
  "expletus-sans": "google",
  explora: Ja,
  fahkwang: Ya,
  "familjen-grotesk": "google",
  "fanwood-text": "google",
  farro: Qa,
  farsan: Xa,
  fascinate: on,
  "fascinate-inline": "google",
  "faster-one": "google",
  fasthand: en,
  "fauna-one": "google",
  faustina: gn,
  federant: an,
  federo: nn,
  felipa: tn,
  fenix: ln,
  festive: sn,
  figtree: rn,
  "finger-paint": "google",
  finlandica: cn,
  "fira-code": "google",
  "fira-mono": "google",
  "fira-sans": "google",
  "fira-sans-condensed": "google",
  "fira-sans-extra-condensed": "google",
  "fjalla-one": "google",
  "fjord-one": "google",
  flamenco: un,
  flavors: dn,
  "fleur-de-leah": "google",
  "flow-block": "google",
  "flow-circular": "google",
  "flow-rounded": "google",
  fondamento: hn,
  "fontdiner-swanky": "google",
  forum: pn,
  "francois-one": "google",
  "frank-ruhl-libre": "google",
  fraunces: mn,
  "freckle-face": "google",
  "fredericka-the-great": "google",
  fredoka: bn,
  "fredoka-one": "google",
  freehand: fn,
  fresca: yn,
  frijole: kn,
  fruktur: vn,
  "fugaz-one": "google",
  fuggles: wn,
  "fuzzy-bubbles": "google",
  gabriela: xn,
  gaegu: On,
  gafata: jn,
  galada: Sn,
  galdeano: $n,
  galindo: _n,
  "gamja-flower": "google",
  gantari: Cn,
  gayathri: zn,
  gelasio: An,
  "gemunu-libre": "google",
  genos: Tn,
  "gentium-book-basic": "google",
  "gentium-book-plus": "google",
  "gentium-plus": "google",
  geo: Vn,
  georama: Ln,
  geostar: qn,
  "geostar-fill": "google",
  "germania-one": "google",
  "gfs-didot": "google",
  "gfs-neohellenic": "google",
  "gideon-roman": "google",
  gidugu: Fn,
  "gilda-display": "google",
  girassol: Rn,
  "give-you-glory": "google",
  "glass-antiqua": "google",
  glegoo: Pn,
  "gloria-hallelujah": "google",
  glory: Dn,
  gluten: Mn,
  "goblin-one": "google",
  "gochi-hand": "google",
  goldman: En,
  gorditas: Bn,
  "gothic-a1": "google",
  gotu: Un,
  "goudy-bookletter-1911": "google",
  "gowun-batang": "google",
  "gowun-dodum": "google",
  graduate: In,
  "grand-hotel": "google",
  grandstander: Nn,
  "grape-nuts": "google",
  "gravitas-one": "google",
  "great-vibes": "google",
  "grechen-fuemen": "google",
  grenze: Wn,
  "grenze-gotisch": "google",
  "grey-qo": "google",
  griffy: Hn,
  gruppo: Zn,
  gudea: Kn,
  gugi: Gn,
  gulzar: Jn,
  gupter: Yn,
  gurajada: Qn,
  gwendolyn: Xn,
  habibi: ot,
  "hachi-maru-pop": "google",
  hahmlet: et,
  halant: gt,
  "hammersmith-one": "google",
  hanalei: at,
  "hanalei-fill": "google",
  handlee: nt,
  hanuman: tt,
  "happy-monkey": "google",
  harmattan: lt,
  "headland-one": "google",
  heebo: st,
  "henny-penny": "google",
  "hepta-slab": "google",
  "herr-von-muellerhoff": "google",
  "hi-melody": "google",
  "hina-mincho": "google",
  hind: rt,
  "hind-guntur": "google",
  "hind-madurai": "google",
  "hind-siliguri": "google",
  "hind-vadodara": "google",
  "holtwood-one-sc": "google",
  "homemade-apple": "google",
  homenaje: it,
  hubballi: ct,
  hurricane: ut,
  "ibarra-real-nova": "google",
  "ibm-plex-mono": "google",
  "ibm-plex-sans": "google",
  "ibm-plex-sans-arabic": "google",
  "ibm-plex-sans-condensed": "google",
  "ibm-plex-sans-devanagari": "google",
  "ibm-plex-sans-hebrew": "google",
  "ibm-plex-sans-kr": "google",
  "ibm-plex-sans-thai": "google",
  "ibm-plex-sans-thai-looped": "google",
  "ibm-plex-serif": "google",
  iceberg: dt,
  iceland: ht,
  "im-fell-double-pica": "google",
  "im-fell-double-pica-sc": "google",
  "im-fell-dw-pica": "google",
  "im-fell-dw-pica-sc": "google",
  "im-fell-english": "google",
  "im-fell-english-sc": "google",
  "im-fell-french-canon": "google",
  "im-fell-french-canon-sc": "google",
  "im-fell-great-primer": "google",
  "im-fell-great-primer-sc": "google",
  imbue: pt,
  "imperial-script": "google",
  imprima: mt,
  inconsolata: bt,
  inder: ft,
  "indie-flower": "google",
  "ingrid-darling": "google",
  inika: yt,
  "inknut-antiqua": "google",
  "inria-sans": "google",
  "inria-serif": "google",
  inspiration: kt,
  inter: vt,
  "irish-grover": "google",
  "island-moments": "google",
  "istok-web": "google",
  italiana: wt,
  italianno: xt,
  itim: Ot,
  "jacques-francois": "google",
  "jacques-francois-shadow": "google",
  jaldi: jt,
  "jetbrains-mono": "google",
  "jim-nightshade": "google",
  joan: St,
  "jockey-one": "google",
  "jolly-lodger": "google",
  jomhuria: $t,
  jomolhari: _t,
  "josefin-sans": "google",
  "josefin-slab": "google",
  jost: Ct,
  "joti-one": "google",
  jua: zt,
  judson: At,
  julee: Tt,
  "julius-sans-one": "google",
  junge: Vt,
  jura: Lt,
  "just-another-hand": "google",
  "just-me-again-down-here": "google",
  k2d: qt,
  kadwa: Ft,
  "kaisei-decol": "google",
  "kaisei-harunoumi": "google",
  "kaisei-opti": "google",
  "kaisei-tokumin": "google",
  kalam: Rt,
  kameron: Pt,
  kanit: Dt,
  kantumruy: Mt,
  "kantumruy-pro": "google",
  karantina: Et,
  karla: Bt,
  karma: Ut,
  katibeh: It,
  "kaushan-script": "google",
  kavivanar: Nt,
  kavoon: Wt,
  "kdam-thmor-pro": "google",
  "keania-one": "google",
  "kelly-slab": "google",
  kenia: Ht,
  khand: Zt,
  khmer: Kt,
  khula: Gt,
  kings: Jt,
  "kirang-haerang": "google",
  "kite-one": "google",
  "kiwi-maru": "google",
  "klee-one": "google",
  knewave: Yt,
  kodchasan: Qt,
  "koh-santepheap": "google",
  koho: Xt,
  "kolker-brush": "google",
  kosugi: ol,
  "kosugi-maru": "google",
  "kotta-one": "google",
  koulen: el,
  kranky: gl,
  kreon: al,
  kristi: nl,
  "krona-one": "google",
  krub: tl,
  kufam: ll,
  "kulim-park": "google",
  "kumar-one": "google",
  "kumar-one-outline": "google",
  "kumbh-sans": "google",
  kurale: sl,
  "la-belle-aurore": "google",
  lacquer: rl,
  laila: il,
  "lakki-reddy": "google",
  lalezar: cl,
  lancelot: ul,
  langar: dl,
  lateef: hl,
  lato: pl,
  "lavishly-yours": "google",
  "league-gothic": "google",
  "league-script": "google",
  "league-spartan": "google",
  "leckerli-one": "google",
  ledger: ml,
  lekton: bl,
  lemon: fl,
  lemonada: yl,
  lexend: kl,
  "lexend-deca": "google",
  "lexend-exa": "google",
  "lexend-giga": "google",
  "lexend-mega": "google",
  "lexend-peta": "google",
  "lexend-tera": "google",
  "lexend-zetta": "google",
  "libre-barcode-128": "google",
  "libre-barcode-128-text": "google",
  "libre-barcode-39": "google",
  "libre-barcode-39-extended": "google",
  "libre-barcode-39-extended-text": "google",
  "libre-barcode-39-text": "google",
  "libre-barcode-ean13-text": "google",
  "libre-baskerville": "google",
  "libre-bodoni": "google",
  "libre-caslon-display": "google",
  "libre-caslon-text": "google",
  "libre-franklin": "google",
  licorice: vl,
  "life-savers": "google",
  "lilita-one": "google",
  "lily-script-one": "google",
  limelight: wl,
  "linden-hill": "google",
  literata: xl,
  "liu-jian-mao-cao": "google",
  livvic: Ol,
  lobster: jl,
  "lobster-two": "google",
  "londrina-outline": "google",
  "londrina-shadow": "google",
  "londrina-sketch": "google",
  "londrina-solid": "google",
  "long-cang": "google",
  lora: Sl,
  "love-light": "google",
  "love-ya-like-a-sister": "google",
  "loved-by-the-king": "google",
  "lovers-quarrel": "google",
  "luckiest-guy": "google",
  lusitana: $l,
  lustria: _l,
  "luxurious-roman": "google",
  "luxurious-script": "google",
  "m-plus-1": "google",
  "m-plus-1-code": "google",
  "m-plus-1p": "google",
  "m-plus-2": "google",
  "m-plus-code-latin": "google",
  "m-plus-rounded-1c": "google",
  "ma-shan-zheng": "google",
  macondo: Cl,
  "macondo-swash-caps": "google",
  mada: zl,
  magra: Al,
  "maiden-orange": "google",
  maitree: Tl,
  "major-mono-display": "google",
  mako: Vl,
  mali: Ll,
  mallanna: ql,
  mandali: Fl,
  manjari: Rl,
  manrope: Pl,
  mansalva: Dl,
  manuale: Ml,
  marcellus: El,
  "marcellus-sc": "google",
  "marck-script": "google",
  margarine: Bl,
  "markazi-text": "google",
  "marko-one": "google",
  marmelad: Ul,
  martel: Il,
  "martel-sans": "google",
  marvel: Nl,
  mate: Wl,
  "mate-sc": "google",
  "maven-pro": "google",
  mclaren: Hl,
  "mea-culpa": "google",
  meddon: Zl,
  medievalsharp: Kl,
  "medula-one": "google",
  "meera-inimai": "google",
  megrim: Gl,
  "meie-script": "google",
  "meow-script": "google",
  merienda: Jl,
  "merienda-one": "google",
  merriweather: Yl,
  "merriweather-sans": "google",
  metal: Ql,
  "metal-mania": "google",
  metamorphous: Xl,
  metrophobic: os,
  michroma: es,
  milonga: gs,
  miltonian: as,
  "miltonian-tattoo": "google",
  mina: ns,
  mingzat: ts,
  miniver: ls,
  "miriam-libre": "google",
  mirza: ss,
  "miss-fajardose": "google",
  mitr: rs,
  "mochiy-pop-one": "google",
  "mochiy-pop-p-one": "google",
  modak: is,
  "modern-antiqua": "google",
  mogra: cs,
  mohave: us,
  molengo: ds,
  molle: hs,
  monda: ps,
  monofett: ms,
  monoton: bs,
  "monsieur-la-doulaise": "google",
  montaga: fs,
  "montagu-slab": "google",
  montecarlo: ys,
  montez: ks,
  montserrat: vs,
  "montserrat-alternates": "google",
  "montserrat-subrayada": "google",
  "moo-lah-lah": "google",
  "moon-dance": "google",
  moul: ws,
  moulpali: xs,
  "mountains-of-christmas": "google",
  "mouse-memoirs": "google",
  "mr-bedfort": "google",
  "mr-dafoe": "google",
  "mr-de-haviland": "google",
  "mrs-saint-delafield": "google",
  "mrs-sheppards": "google",
  "ms-madi": "google",
  mukta: Os,
  "mukta-mahee": "google",
  "mukta-malar": "google",
  "mukta-vaani": "google",
  mulish: js,
  murecho: Ss,
  museomoderno: $s,
  "my-soul": "google",
  "mystery-quest": "google",
  "nanum-brush-script": "google",
  "nanum-gothic": "google",
  "nanum-gothic-coding": "google",
  "nanum-myeongjo": "google",
  "nanum-pen-script": "google",
  neonderthaw: _s,
  "nerko-one": "google",
  neucha: Cs,
  neuton: zs,
  "new-rocker": "google",
  "new-tegomin": "google",
  "news-cycle": "google",
  newsreader: As,
  niconne: Ts,
  niramit: Vs,
  "nixie-one": "google",
  nobile: Ls,
  nokora: qs,
  norican: Fs,
  nosifer: Rs,
  notable: Ps,
  "nothing-you-could-do": "google",
  "noticia-text": "google",
  "noto-emoji": "google",
  "noto-kufi-arabic": "google",
  "noto-music": "google",
  "noto-naskh-arabic": "google",
  "noto-nastaliq-urdu": "google",
  "noto-rashi-hebrew": "google",
  "noto-sans": "google",
  "noto-sans-adlam": "google",
  "noto-sans-adlam-unjoined": "google",
  "noto-sans-anatolian-hieroglyphs": "google",
  "noto-sans-arabic": "google",
  "noto-sans-armenian": "google",
  "noto-sans-avestan": "google",
  "noto-sans-balinese": "google",
  "noto-sans-bamum": "google",
  "noto-sans-bassa-vah": "google",
  "noto-sans-batak": "google",
  "noto-sans-bengali": "google",
  "noto-sans-bhaiksuki": "google",
  "noto-sans-brahmi": "google",
  "noto-sans-buginese": "google",
  "noto-sans-buhid": "google",
  "noto-sans-canadian-aboriginal": "google",
  "noto-sans-carian": "google",
  "noto-sans-caucasian-albanian": "google",
  "noto-sans-chakma": "google",
  "noto-sans-cham": "google",
  "noto-sans-cherokee": "google",
  "noto-sans-coptic": "google",
  "noto-sans-cuneiform": "google",
  "noto-sans-cypriot": "google",
  "noto-sans-deseret": "google",
  "noto-sans-devanagari": "google",
  "noto-sans-display": "google",
  "noto-sans-duployan": "google",
  "noto-sans-egyptian-hieroglyphs": "google",
  "noto-sans-elbasan": "google",
  "noto-sans-elymaic": "google",
  "noto-sans-georgian": "google",
  "noto-sans-glagolitic": "google",
  "noto-sans-gothic": "google",
  "noto-sans-grantha": "google",
  "noto-sans-gujarati": "google",
  "noto-sans-gunjala-gondi": "google",
  "noto-sans-gurmukhi": "google",
  "noto-sans-hanifi-rohingya": "google",
  "noto-sans-hanunoo": "google",
  "noto-sans-hatran": "google",
  "noto-sans-hebrew": "google",
  "noto-sans-hk": "google",
  "noto-sans-imperial-aramaic": "google",
  "noto-sans-indic-siyaq-numbers": "google",
  "noto-sans-inscriptional-pahlavi": "google",
  "noto-sans-inscriptional-parthian": "google",
  "noto-sans-javanese": "google",
  "noto-sans-jp": "google",
  "noto-sans-kaithi": "google",
  "noto-sans-kannada": "google",
  "noto-sans-kayah-li": "google",
  "noto-sans-kharoshthi": "google",
  "noto-sans-khmer": "google",
  "noto-sans-khojki": "google",
  "noto-sans-khudawadi": "google",
  "noto-sans-kr": "google",
  "noto-sans-lao": "google",
  "noto-sans-lepcha": "google",
  "noto-sans-limbu": "google",
  "noto-sans-linear-a": "google",
  "noto-sans-linear-b": "google",
  "noto-sans-lisu": "google",
  "noto-sans-lycian": "google",
  "noto-sans-lydian": "google",
  "noto-sans-mahajani": "google",
  "noto-sans-malayalam": "google",
  "noto-sans-mandaic": "google",
  "noto-sans-manichaean": "google",
  "noto-sans-marchen": "google",
  "noto-sans-masaram-gondi": "google",
  "noto-sans-math": "google",
  "noto-sans-mayan-numerals": "google",
  "noto-sans-medefaidrin": "google",
  "noto-sans-meetei-mayek": "google",
  "noto-sans-meroitic": "google",
  "noto-sans-miao": "google",
  "noto-sans-modi": "google",
  "noto-sans-mongolian": "google",
  "noto-sans-mono": "google",
  "noto-sans-mro": "google",
  "noto-sans-multani": "google",
  "noto-sans-myanmar": "google",
  "noto-sans-n-ko": "google",
  "noto-sans-nabataean": "google",
  "noto-sans-new-tai-lue": "google",
  "noto-sans-newa": "google",
  "noto-sans-nushu": "google",
  "noto-sans-ogham": "google",
  "noto-sans-ol-chiki": "google",
  "noto-sans-old-hungarian": "google",
  "noto-sans-old-italic": "google",
  "noto-sans-old-north-arabian": "google",
  "noto-sans-old-permic": "google",
  "noto-sans-old-persian": "google",
  "noto-sans-old-sogdian": "google",
  "noto-sans-old-south-arabian": "google",
  "noto-sans-old-turkic": "google",
  "noto-sans-oriya": "google",
  "noto-sans-osage": "google",
  "noto-sans-osmanya": "google",
  "noto-sans-pahawh-hmong": "google",
  "noto-sans-palmyrene": "google",
  "noto-sans-pau-cin-hau": "google",
  "noto-sans-phags-pa": "google",
  "noto-sans-phoenician": "google",
  "noto-sans-psalter-pahlavi": "google",
  "noto-sans-rejang": "google",
  "noto-sans-runic": "google",
  "noto-sans-samaritan": "google",
  "noto-sans-saurashtra": "google",
  "noto-sans-sc": "google",
  "noto-sans-sharada": "google",
  "noto-sans-shavian": "google",
  "noto-sans-siddham": "google",
  "noto-sans-sinhala": "google",
  "noto-sans-sogdian": "google",
  "noto-sans-sora-sompeng": "google",
  "noto-sans-soyombo": "google",
  "noto-sans-sundanese": "google",
  "noto-sans-syloti-nagri": "google",
  "noto-sans-symbols": "google",
  "noto-sans-symbols-2": "google",
  "noto-sans-syriac": "google",
  "noto-sans-tagalog": "google",
  "noto-sans-tagbanwa": "google",
  "noto-sans-tai-le": "google",
  "noto-sans-tai-tham": "google",
  "noto-sans-tai-viet": "google",
  "noto-sans-takri": "google",
  "noto-sans-tamil": "google",
  "noto-sans-tamil-supplement": "google",
  "noto-sans-tc": "google",
  "noto-sans-telugu": "google",
  "noto-sans-thaana": "google",
  "noto-sans-thai": "google",
  "noto-sans-thai-looped": "google",
  "noto-sans-tifinagh": "google",
  "noto-sans-tirhuta": "google",
  "noto-sans-ugaritic": "google",
  "noto-sans-vai": "google",
  "noto-sans-wancho": "google",
  "noto-sans-warang-citi": "google",
  "noto-sans-yi": "google",
  "noto-sans-zanabazar-square": "google",
  "noto-serif": "google",
  "noto-serif-ahom": "google",
  "noto-serif-armenian": "google",
  "noto-serif-balinese": "google",
  "noto-serif-bengali": "google",
  "noto-serif-devanagari": "google",
  "noto-serif-display": "google",
  "noto-serif-dogra": "google",
  "noto-serif-ethiopic": "google",
  "noto-serif-georgian": "google",
  "noto-serif-grantha": "google",
  "noto-serif-gujarati": "google",
  "noto-serif-gurmukhi": "google",
  "noto-serif-hebrew": "google",
  "noto-serif-jp": "google",
  "noto-serif-kannada": "google",
  "noto-serif-khmer": "google",
  "noto-serif-kr": "google",
  "noto-serif-lao": "google",
  "noto-serif-malayalam": "google",
  "noto-serif-myanmar": "google",
  "noto-serif-nyiakeng-puachue-hmong": "google",
  "noto-serif-sc": "google",
  "noto-serif-sinhala": "google",
  "noto-serif-tamil": "google",
  "noto-serif-tangut": "google",
  "noto-serif-tc": "google",
  "noto-serif-telugu": "google",
  "noto-serif-thai": "google",
  "noto-serif-tibetan": "google",
  "noto-serif-yezidi": "google",
  "noto-traditional-nushu": "google",
  "nova-cut": "google",
  "nova-flat": "google",
  "nova-mono": "google",
  "nova-oval": "google",
  "nova-round": "google",
  "nova-script": "google",
  "nova-slim": "google",
  "nova-square": "google",
  ntr: Ds,
  numans: Ms,
  nunito: Es,
  "nunito-sans": "google",
  "nuosu-sil": "google",
  "odibee-sans": "google",
  "odor-mean-chey": "google",
  offside: Bs,
  oi: Us,
  "old-standard-tt": "google",
  oldenburg: Is,
  ole: Ns,
  "oleo-script": "google",
  "oleo-script-swash-caps": "google",
  "oooh-baby": "google",
  "open-sans": "google",
  "open-sans-condensed": "google",
  oranienbaum: Ws,
  orbitron: Hs,
  oregano: Zs,
  "orelega-one": "google",
  orienta: Ks,
  "original-surfer": "google",
  oswald: Gs,
  "otomanopee-one": "google",
  outfit: Js,
  "over-the-rainbow": "google",
  overlock: Ys,
  "overlock-sc": "google",
  overpass: Qs,
  "overpass-mono": "google",
  ovo: Xs,
  oxanium: or,
  oxygen: er,
  "oxygen-mono": "google",
  pacifico: gr,
  padauk: ar,
  palanquin: nr,
  "palanquin-dark": "google",
  "palette-mosaic": "google",
  pangolin: tr,
  paprika: lr,
  parisienne: sr,
  "passero-one": "google",
  "passion-one": "google",
  "passions-conflict": "google",
  "pathway-gothic-one": "google",
  "patrick-hand": "google",
  "patrick-hand-sc": "google",
  pattaya: rr,
  "patua-one": "google",
  pavanam: ir,
  "paytone-one": "google",
  peddana: cr,
  peralta: ur,
  "permanent-marker": "google",
  petemoss: dr,
  "petit-formal-script": "google",
  petrona: hr,
  philosopher: pr,
  piazzolla: mr,
  piedra: br,
  "pinyon-script": "google",
  "pirata-one": "google",
  plaster: fr,
  play: yr,
  playball: kr,
  "playfair-display": "google",
  "playfair-display-sc": "google",
  "plus-jakarta-sans": "google",
  podkova: vr,
  "poiret-one": "google",
  "poller-one": "google",
  poly: wr,
  pompiere: xr,
  "pontano-sans": "google",
  "poor-story": "google",
  poppins: Or,
  "port-lligat-sans": "google",
  "port-lligat-slab": "google",
  "potta-one": "google",
  "pragati-narrow": "google",
  praise: jr,
  prata: Sr,
  preahvihear: $r,
  "press-start-2p": "google",
  pridi: _r,
  "princess-sofia": "google",
  prociono: Cr,
  prompt: zr,
  "prosto-one": "google",
  "proza-libre": "google",
  "pt-mono": "google",
  "pt-sans": "google",
  "pt-sans-caption": "google",
  "pt-sans-narrow": "google",
  "pt-serif": "google",
  "pt-serif-caption": "google",
  "public-sans": "google",
  "puppies-play": "google",
  puritan: Ar,
  "purple-purse": "google",
  pushster: Tr,
  qahiri: Vr,
  quando: Lr,
  quantico: qr,
  quattrocento: Fr,
  "quattrocento-sans": "google",
  questrial: Rr,
  quicksand: Pr,
  quintessential: Dr,
  qwigley: Mr,
  "qwitcher-grypen": "google",
  "racing-sans-one": "google",
  "radio-canada": "google",
  radley: Er,
  rajdhani: Br,
  rakkas: Ur,
  raleway: Ir,
  "raleway-dots": "google",
  ramabhadra: Nr,
  ramaraja: Wr,
  rambla: Hr,
  "rammetto-one": "google",
  "rampart-one": "google",
  ranchers: Zr,
  rancho: Kr,
  ranga: Gr,
  rasa: Jr,
  rationale: Yr,
  "ravi-prakash": "google",
  "readex-pro": "google",
  recursive: Qr,
  "red-hat-display": "google",
  "red-hat-mono": "google",
  "red-hat-text": "google",
  "red-rose": "google",
  redacted: Xr,
  "redacted-script": "google",
  redressed: oi,
  "reem-kufi": "google",
  "reenie-beanie": "google",
  "reggae-one": "google",
  revalia: ei,
  "rhodium-libre": "google",
  ribeye: gi,
  "ribeye-marrow": "google",
  righteous: ai,
  risque: ni,
  "road-rage": "google",
  roboto: ti,
  "roboto-condensed": "google",
  "roboto-flex": "google",
  "roboto-mono": "google",
  "roboto-serif": "google",
  "roboto-slab": "google",
  rochester: li,
  "rock-salt": "google",
  "rocknroll-one": "google",
  rokkitt: si,
  romanesco: ri,
  "ropa-sans": "google",
  rosario: ii,
  rosarivo: ci,
  "rouge-script": "google",
  rowdies: ui,
  "rozha-one": "google",
  rubik: di,
  "rubik-beastly": "google",
  "rubik-bubbles": "google",
  "rubik-burned": "google",
  "rubik-dirt": "google",
  "rubik-distressed": "google",
  "rubik-glitch": "google",
  "rubik-iso": "google",
  "rubik-marker-hatch": "google",
  "rubik-maze": "google",
  "rubik-microbe": "google",
  "rubik-mono-one": "google",
  "rubik-moonrocks": "google",
  "rubik-puddles": "google",
  "rubik-wet-paint": "google",
  ruda: hi,
  rufina: pi,
  "ruge-boogie": "google",
  ruluko: mi,
  "rum-raisin": "google",
  "ruslan-display": "google",
  "russo-one": "google",
  ruthie: bi,
  rye: fi,
  sacramento: yi,
  sahitya: ki,
  sail: vi,
  saira: wi,
  "saira-condensed": "google",
  "saira-extra-condensed": "google",
  "saira-semi-condensed": "google",
  "saira-stencil-one": "google",
  salsa: xi,
  sanchez: Oi,
  sancreek: ji,
  sansita: Si,
  "sansita-swashed": "google",
  sarabun: $i,
  sarala: _i,
  sarina: Ci,
  sarpanch: zi,
  "sassy-frass": "google",
  satisfy: Ai,
  "sawarabi-gothic": "google",
  "sawarabi-mincho": "google",
  scada: Ti,
  scheherazade: Vi,
  "scheherazade-new": "google",
  schoolbell: Li,
  "scope-one": "google",
  "seaweed-script": "google",
  "secular-one": "google",
  "sedgwick-ave": "google",
  "sedgwick-ave-display": "google",
  sen: qi,
  "send-flowers": "google",
  sevillana: Fi,
  "seymour-one": "google",
  "shadows-into-light": "google",
  "shadows-into-light-two": "google",
  shalimar: Ri,
  shanti: Pi,
  share: Di,
  "share-tech": "google",
  "share-tech-mono": "google",
  "shippori-antique": "google",
  "shippori-antique-b1": "google",
  "shippori-mincho": "google",
  "shippori-mincho-b1": "google",
  shojumaru: Mi,
  "short-stack": "google",
  shrikhand: Ei,
  siemreap: Bi,
  "sigmar-one": "google",
  signika: Ui,
  "signika-negative": "google",
  silkscreen: Ii,
  simonetta: Ni,
  "single-day": "google",
  sintony: Wi,
  "sirin-stencil": "google",
  "six-caps": "google",
  skranji: Hi,
  "slabo-13px": "google",
  "slabo-27px": "google",
  slackey: Zi,
  smokum: Ki,
  smooch: Gi,
  "smooch-sans": "google",
  smythe: Ji,
  sniglet: Yi,
  snippet: Qi,
  "snowburst-one": "google",
  "sofadi-one": "google",
  sofia: Xi,
  solway: oc,
  "song-myung": "google",
  "sonsie-one": "google",
  sora: ec,
  "sorts-mill-goudy": "google",
  "source-code-pro": "google",
  "source-sans-3": "google",
  "source-sans-pro": "google",
  "source-serif-4": "google",
  "source-serif-pro": "google",
  "space-grotesk": "google",
  "space-mono": "google",
  spartan: gc,
  "special-elite": "google",
  spectral: ac,
  "spectral-sc": "google",
  "spicy-rice": "google",
  spinnaker: nc,
  spirax: tc,
  splash: lc,
  "spline-sans": "google",
  "spline-sans-mono": "google",
  "squada-one": "google",
  "square-peg": "google",
  "sree-krushnadevaraya": "google",
  sriracha: sc,
  srisakdi: rc,
  staatliches: ic,
  stalemate: cc,
  "stalinist-one": "google",
  "stardos-stencil": "google",
  stick: uc,
  "stick-no-bills": "google",
  "stint-ultra-condensed": "google",
  "stint-ultra-expanded": "google",
  "stix-two-math": "google",
  "stix-two-text": "google",
  stoke: dc,
  strait: hc,
  "style-script": "google",
  stylish: pc,
  "sue-ellen-francisco": "google",
  "suez-one": "google",
  "sulphur-point": "google",
  sumana: mc,
  sunflower: bc,
  sunshiney: fc,
  "supermercado-one": "google",
  sura: yc,
  suranna: kc,
  suravaram: vc,
  suwannaphum: wc,
  "swanky-and-moo-moo": "google",
  syncopate: xc,
  syne: Oc,
  "syne-mono": "google",
  "syne-tactile": "google",
  "tai-heritage-pro": "google",
  tajawal: jc,
  tangerine: Sc,
  tapestry: $c,
  taprom: _c,
  tauri: Cc,
  taviraj: zc,
  teko: Ac,
  telex: Tc,
  "tenali-ramakrishna": "google",
  "tenor-sans": "google",
  "text-me-one": "google",
  texturina: Vc,
  thasadith: Lc,
  "the-girl-next-door": "google",
  "the-nautigal": "google",
  tienne: qc,
  tillana: Fc,
  timmana: Rc,
  tinos: Pc,
  "tiro-bangla": "google",
  "tiro-devanagari-hindi": "google",
  "tiro-devanagari-marathi": "google",
  "tiro-devanagari-sanskrit": "google",
  "tiro-gurmukhi": "google",
  "tiro-kannada": "google",
  "tiro-tamil": "google",
  "tiro-telugu": "google",
  "titan-one": "google",
  "titillium-web": "google",
  tomorrow: Dc,
  tourney: Mc,
  "trade-winds": "google",
  "train-one": "google",
  trirong: Ec,
  trispace: Bc,
  trocchi: Uc,
  trochut: Ic,
  truculenta: Nc,
  trykker: Wc,
  "tulpen-one": "google",
  "turret-road": "google",
  "twinkle-star": "google",
  ubuntu: Hc,
  "ubuntu-condensed": "google",
  "ubuntu-mono": "google",
  uchen: Zc,
  ultra: Kc,
  "uncial-antiqua": "google",
  underdog: Gc,
  "unica-one": "google",
  unifrakturcook: Jc,
  unifrakturmaguntia: Yc,
  unkempt: Qc,
  unlock: Xc,
  unna: ou,
  updock: eu,
  urbanist: gu,
  "vampiro-one": "google",
  varela: au,
  "varela-round": "google",
  varta: nu,
  "vast-shadow": "google",
  vazirmatn: tu,
  "vesper-libre": "google",
  "viaoda-libre": "google",
  vibes: lu,
  vibur: su,
  vidaloka: ru,
  viga: iu,
  voces: cu,
  volkhov: uu,
  vollkorn: du,
  "vollkorn-sc": "google",
  voltaire: hu,
  vt323: pu,
  "vujahday-script": "google",
  "waiting-for-the-sunrise": "google",
  wallpoet: mu,
  "walter-turncoat": "google",
  warnes: bu,
  "water-brush": "google",
  waterfall: fu,
  wellfleet: yu,
  "wendy-one": "google",
  whisper: ku,
  windsong: vu,
  "wire-one": "google",
  "work-sans": "google",
  "xanh-mono": "google",
  yaldevi: wu,
  "yanone-kaffeesatz": "google",
  yantramanav: xu,
  "yatra-one": "google",
  yellowtail: Ou,
  "yeon-sung": "google",
  "yeseva-one": "google",
  yesteryear: ju,
  yomogi: Su,
  yrsa: $u,
  "yuji-boku": "google",
  "yuji-mai": "google",
  "yuji-syuku": "google",
  "yusei-magic": "google",
  "zcool-kuaile": "google",
  "zcool-qingke-huangyou": "google",
  "zcool-xiaowei": "google",
  "zen-antique": "google",
  "zen-antique-soft": "google",
  "zen-dots": "google",
  "zen-kaku-gothic-antique": "google",
  "zen-kaku-gothic-new": "google",
  "zen-kurenaido": "google",
  "zen-loop": "google",
  "zen-maru-gothic": "google",
  "zen-old-mincho": "google",
  "zen-tokyo-zoo": "google",
  zeyada: _u,
  "zhi-mang-xing": "google",
  "zilla-slab": "google",
  "zilla-slab-highlight": "google",
  "blackout-midnight": "league",
  "blackout-sunrise": "league",
  "blackout-two-am": "league",
  "chunk-five": "league",
  junction: Cu,
  "league-gothic-condensed": "league",
  "league-mono": "league",
  "league-mono-condensed": "league",
  "league-mono-extended": "league",
  "league-mono-narrow": "league",
  "league-mono-wide": "league",
  "ostrich-sans": "league",
  "ostrich-sans-dashed": "league",
  "ostrich-sans-inline": "league",
  "ostrich-sans-rounded": "league",
  "material-icons": "icons",
  "material-icons-outlined": "icons",
  "material-icons-rounded": "icons",
  "material-icons-sharp": "icons",
  "material-icons-two-tone": "icons",
  "noto-color-emoji": "icons",
  aileron: zu,
  "apfel-grotezk": "other",
  "argentum-sans": "other",
  bagnard: Au,
  "bagnard-sans": "other",
  "bluu-next": "other",
  bravura: Tu,
  "bravura-text": "other",
  carlito: Vu,
  "clear-sans": "other",
  "comic-mono": "other",
  "cooper-hewitt": "other",
  "dejavu-math": "other",
  "dejavu-mono": "other",
  "dejavu-sans": "other",
  "dejavu-serif": "other",
  "dseg-weather": "other",
  dseg14: Lu,
  dseg7: qu,
  firago: Fu,
  "golos-ui": "other",
  "hauora-sans": "other",
  "ia-writer-duo": "other",
  "ia-writer-duospace": "other",
  "ia-writer-mono": "other",
  "ia-writer-quattro": "other",
  iosevka: Ru,
  karmilla: Pu,
  metropolis: Du,
  mononoki: Mu,
  norwester: Eu,
  "noto-mono": "other",
  opendyslexic: Bu,
  "syne-italic": "other",
  unifont: Uu,
  vazir: Iu,
  "victor-mono": "other",
  yakuhanjp: Nu,
  yakuhanjps: Wu,
  yakuhanmp: Hu,
  yakuhanmps: Zu,
  yakuhanrp: Ku,
  yakuhanrps: Gu,
  youngserif: Ju
};
var v = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Qu(o, e, g, n) {
  var t = -1, a = o == null ? 0 : o.length;
  for (n && a && (g = o[++t]); ++t < a; )
    g = e(g, o[t], t, o);
  return g;
}
var Xu = Qu;
function od(o) {
  return function(e) {
    return o == null ? void 0 : o[e];
  };
}
var ed = od, gd = ed, ad = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "s"
}, nd = gd(ad), td = nd, ld = typeof v == "object" && v && v.Object === Object && v, sd = ld, rd = sd, id = typeof self == "object" && self && self.Object === Object && self, cd = rd || id || Function("return this")(), ud = cd, dd = ud, hd = dd.Symbol, V = hd;
function pd(o, e) {
  for (var g = -1, n = o == null ? 0 : o.length, t = Array(n); ++g < n; )
    t[g] = e(o[g], g, o);
  return t;
}
var md = pd, bd = Array.isArray, fd = bd, B = V, eo = Object.prototype, yd = eo.hasOwnProperty, kd = eo.toString, y = B ? B.toStringTag : void 0;
function vd(o) {
  var e = yd.call(o, y), g = o[y];
  try {
    o[y] = void 0;
    var n = !0;
  } catch (a) {
  }
  var t = kd.call(o);
  return n && (e ? o[y] = g : delete o[y]), t;
}
var wd = vd, xd = Object.prototype, Od = xd.toString;
function jd(o) {
  return Od.call(o);
}
var Sd = jd, U = V, $d = wd, _d = Sd, Cd = "[object Null]", zd = "[object Undefined]", I = U ? U.toStringTag : void 0;
function Ad(o) {
  return o == null ? o === void 0 ? zd : Cd : I && I in Object(o) ? $d(o) : _d(o);
}
var Td = Ad;
function Vd(o) {
  return o != null && typeof o == "object";
}
var Ld = Vd, qd = Td, Fd = Ld, Rd = "[object Symbol]";
function Pd(o) {
  return typeof o == "symbol" || Fd(o) && qd(o) == Rd;
}
var Dd = Pd, N = V, Md = md, Ed = fd, Bd = Dd, Ud = 1 / 0, W = N ? N.prototype : void 0, H = W ? W.toString : void 0;
function go(o) {
  if (typeof o == "string")
    return o;
  if (Ed(o))
    return Md(o, go) + "";
  if (Bd(o))
    return H ? H.call(o) : "";
  var e = o + "";
  return e == "0" && 1 / o == -Ud ? "-0" : e;
}
var Id = go, Nd = Id;
function Wd(o) {
  return o == null ? "" : Nd(o);
}
var L = Wd, Hd = td, Zd = L, Kd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Gd = "\\u0300-\\u036f", Jd = "\\ufe20-\\ufe2f", Yd = "\\u20d0-\\u20ff", Qd = Gd + Jd + Yd, Xd = "[" + Qd + "]", oh = RegExp(Xd, "g");
function eh(o) {
  return o = Zd(o), o && o.replace(Kd, Hd).replace(oh, "");
}
var gh = eh, ah = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function nh(o) {
  return o.match(ah) || [];
}
var th = nh, lh = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function sh(o) {
  return lh.test(o);
}
var rh = sh, ao = "\\ud800-\\udfff", ih = "\\u0300-\\u036f", ch = "\\ufe20-\\ufe2f", uh = "\\u20d0-\\u20ff", dh = ih + ch + uh, no = "\\u2700-\\u27bf", to = "a-z\\xdf-\\xf6\\xf8-\\xff", hh = "\\xac\\xb1\\xd7\\xf7", ph = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mh = "\\u2000-\\u206f", bh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lo = "A-Z\\xc0-\\xd6\\xd8-\\xde", fh = "\\ufe0e\\ufe0f", so = hh + ph + mh + bh, ro = "['\u2019]", Z = "[" + so + "]", yh = "[" + dh + "]", io = "\\d+", kh = "[" + no + "]", co = "[" + to + "]", uo = "[^" + ao + so + io + no + to + lo + "]", vh = "\\ud83c[\\udffb-\\udfff]", wh = "(?:" + yh + "|" + vh + ")", xh = "[^" + ao + "]", ho = "(?:\\ud83c[\\udde6-\\uddff]){2}", po = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "[" + lo + "]", Oh = "\\u200d", K = "(?:" + co + "|" + uo + ")", jh = "(?:" + f + "|" + uo + ")", G = "(?:" + ro + "(?:d|ll|m|re|s|t|ve))?", J = "(?:" + ro + "(?:D|LL|M|RE|S|T|VE))?", mo = wh + "?", bo = "[" + fh + "]?", Sh = "(?:" + Oh + "(?:" + [xh, ho, po].join("|") + ")" + bo + mo + ")*", $h = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _h = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ch = bo + mo + Sh, zh = "(?:" + [kh, ho, po].join("|") + ")" + Ch, Ah = RegExp([
  f + "?" + co + "+" + G + "(?=" + [Z, f, "$"].join("|") + ")",
  jh + "+" + J + "(?=" + [Z, f + K, "$"].join("|") + ")",
  f + "?" + K + "+" + G,
  f + "+" + J,
  _h,
  $h,
  io,
  zh
].join("|"), "g");
function Th(o) {
  return o.match(Ah) || [];
}
var Vh = Th, Lh = th, qh = rh, Fh = L, Rh = Vh;
function Ph(o, e, g) {
  return o = Fh(o), e = g ? void 0 : e, e === void 0 ? qh(o) ? Rh(o) : Lh(o) : o.match(e) || [];
}
var Dh = Ph, Mh = Xu, Eh = gh, Bh = Dh, Uh = "['\u2019]", Ih = RegExp(Uh, "g");
function Nh(o) {
  return function(e) {
    return Mh(Bh(Eh(e).replace(Ih, "")), o, "");
  };
}
var fo = Nh;
function Wh(o, e, g) {
  var n = -1, t = o.length;
  e < 0 && (e = -e > t ? 0 : t + e), g = g > t ? t : g, g < 0 && (g += t), t = e > g ? 0 : g - e >>> 0, e >>>= 0;
  for (var a = Array(t); ++n < t; )
    a[n] = o[n + e];
  return a;
}
var Hh = Wh, Zh = Hh;
function Kh(o, e, g) {
  var n = o.length;
  return g = g === void 0 ? n : g, !e && g >= n ? o : Zh(o, e, g);
}
var Gh = Kh, Jh = "\\ud800-\\udfff", Yh = "\\u0300-\\u036f", Qh = "\\ufe20-\\ufe2f", Xh = "\\u20d0-\\u20ff", op = Yh + Qh + Xh, ep = "\\ufe0e\\ufe0f", gp = "\\u200d", ap = RegExp("[" + gp + Jh + op + ep + "]");
function np(o) {
  return ap.test(o);
}
var yo = np;
function tp(o) {
  return o.split("");
}
var lp = tp, ko = "\\ud800-\\udfff", sp = "\\u0300-\\u036f", rp = "\\ufe20-\\ufe2f", ip = "\\u20d0-\\u20ff", cp = sp + rp + ip, up = "\\ufe0e\\ufe0f", dp = "[" + ko + "]", A = "[" + cp + "]", T = "\\ud83c[\\udffb-\\udfff]", hp = "(?:" + A + "|" + T + ")", vo = "[^" + ko + "]", wo = "(?:\\ud83c[\\udde6-\\uddff]){2}", xo = "[\\ud800-\\udbff][\\udc00-\\udfff]", pp = "\\u200d", Oo = hp + "?", jo = "[" + up + "]?", mp = "(?:" + pp + "(?:" + [vo, wo, xo].join("|") + ")" + jo + Oo + ")*", bp = jo + Oo + mp, fp = "(?:" + [vo + A + "?", A, wo, xo, dp].join("|") + ")", yp = RegExp(T + "(?=" + T + ")|" + fp + bp, "g");
function kp(o) {
  return o.match(yp) || [];
}
var vp = kp, wp = lp, xp = yo, Op = vp;
function jp(o) {
  return xp(o) ? Op(o) : wp(o);
}
var Sp = jp, $p = Gh, _p = yo, Cp = Sp, zp = L;
function Ap(o) {
  return function(e) {
    e = zp(e);
    var g = _p(e) ? Cp(e) : void 0, n = g ? g[0] : e.charAt(0), t = g ? $p(g, 1).join("") : e.slice(1);
    return n[o]() + t;
  };
}
var Tp = Ap, Vp = Tp, Lp = Vp("toUpperCase"), qp = Lp, Fp = fo, Rp = qp, Pp = Fp(function(o, e, g) {
  return o + (g ? " " : "") + Rp(e);
}), Dp = Pp, Mp = fo, Ep = Mp(function(o, e, g) {
  return o + (g ? "-" : "") + e.toLowerCase();
}), _ = Ep, Bp = Object.defineProperty, Up = Object.defineProperties, Ip = Object.getOwnPropertyDescriptors, Y = Object.getOwnPropertySymbols, Np = Object.prototype.hasOwnProperty, Wp = Object.prototype.propertyIsEnumerable, Q = (o, e, g) => e in o ? Bp(o, e, { enumerable: !0, configurable: !0, writable: !0, value: g }) : o[e] = g, b = (o, e) => {
  for (var g in e || (e = {}))
    Np.call(e, g) && Q(o, g, e[g]);
  if (Y)
    for (var g of Y(e))
      Wp.call(e, g) && Q(o, g, e[g]);
  return o;
}, X = (o, e) => Up(o, Ip(e));
const Hp = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(o) {
      this.autoscroll && o && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var o;
      const e = ((o = this.$refs.dropdownMenu) == null ? void 0 : o.children[this.typeAheadPointer]) || !1;
      if (e) {
        const g = this.getDropdownViewport(), { top: n, bottom: t, height: a } = e.getBoundingClientRect();
        if (n < g.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (t > g.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (g.height - a);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, Zp = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let o = 0; o < this.filteredOptions.length; o++)
        if (this.selectable(this.filteredOptions[o])) {
          this.typeAheadPointer = o;
          break;
        }
    },
    open(o) {
      o && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let o = this.typeAheadPointer - 1; o >= 0; o--)
        if (this.selectable(this.filteredOptions[o])) {
          this.typeAheadPointer = o;
          break;
        }
    },
    typeAheadDown() {
      for (let o = this.typeAheadPointer + 1; o < this.filteredOptions.length; o++)
        if (this.selectable(this.filteredOptions[o])) {
          this.typeAheadPointer = o;
          break;
        }
    },
    typeAheadSelect() {
      const o = this.filteredOptions[this.typeAheadPointer];
      o && this.selectable(o) && this.select(o);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Kp = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(o) {
      this.mutableLoading = o;
    }
  },
  methods: {
    toggleLoading(o = null) {
      return o == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = o;
    }
  }
}, q = (o, e) => {
  const g = o.__vccOpts || o;
  for (const [n, t] of e)
    g[n] = t;
  return g;
}, Gp = {}, Jp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Yp = /* @__PURE__ */ h("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Qp = [
  Yp
];
function Xp(o, e) {
  return s(), i("svg", Jp, Qp);
}
const om = /* @__PURE__ */ q(Gp, [["render", Xp]]), em = {}, gm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, am = /* @__PURE__ */ h("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), nm = [
  am
];
function tm(o, e) {
  return s(), i("svg", gm, nm);
}
const lm = /* @__PURE__ */ q(em, [["render", tm]]), oo = {
  Deselect: om,
  OpenIndicator: lm
}, sm = {
  mounted(o, { instance: e }) {
    if (e.appendToBody) {
      const {
        height: g,
        top: n,
        left: t,
        width: a
      } = e.$refs.toggle.getBoundingClientRect();
      let m = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      o.unbindPosition = e.calculatePosition(o, e, {
        width: a + "px",
        left: m + t + "px",
        top: l + n + g + "px"
      }), document.body.appendChild(o);
    }
  },
  unmounted(o, { instance: e }) {
    e.appendToBody && (o.unbindPosition && typeof o.unbindPosition == "function" && o.unbindPosition(), o.parentNode && o.parentNode.removeChild(o));
  }
};
function rm(o) {
  const e = {};
  return Object.keys(o).sort().forEach((g) => {
    e[g] = o[g];
  }), JSON.stringify(e);
}
let im = 0;
function cm() {
  return ++im;
}
const um = {
  components: b({}, oo),
  directives: { appendToBody: sm },
  mixins: [Hp, Zp, Kp],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (o) => o
    },
    selectable: {
      type: Function,
      default: (o) => !0
    },
    getOptionLabel: {
      type: Function,
      default(o) {
        return typeof o == "object" ? o.hasOwnProperty(this.label) ? o[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(o)}.
https://vue-select.org/api/props.html#getoptionlabel`) : o;
      }
    },
    getOptionKey: {
      type: Function,
      default(o) {
        if (typeof o != "object")
          return o;
        try {
          return o.hasOwnProperty("id") ? o.id : rm(o);
        } catch (e) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, o, e);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(o, e, g) {
        return (e || "").toLocaleLowerCase().indexOf(g.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(o, e) {
        return o.filter((g) => {
          let n = this.getOptionLabel(g);
          return typeof n == "number" && (n = n.toString()), this.filterBy(g, n, e);
        });
      }
    },
    createOption: {
      type: Function,
      default(o) {
        return typeof this.optionList[0] == "object" ? { [this.label]: o } : o;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (o) => ["function", "boolean"].includes(typeof o)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: o, multiple: e }) {
        return o && !e;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (o, e) => o
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(o, e, { width: g, top: n, left: t }) {
        o.style.top = n, o.style.left = t, o.style.width = g;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: o, open: e, mutableLoading: g }) {
        return o ? !1 : e && !g;
      }
    },
    uid: {
      type: [String, Number],
      default: () => cm()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let o = this.modelValue;
      return this.isTrackingValues && (o = this.$data._value), o != null && o !== "" ? [].concat(o) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const o = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: b({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (e) => this.search = e.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: o,
        listFooter: o,
        header: X(b({}, o), { deselect: this.deselect }),
        footer: X(b({}, o), { deselect: this.deselect })
      };
    },
    childComponents() {
      return b(b({}, oo), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const o = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return o;
      const e = this.search.length ? this.filter(o, this.search, this) : o;
      if (this.taggable && this.search.length) {
        const g = this.createOption(this.search);
        this.optionExists(g) || e.unshift(g);
      }
      return e;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(o, e) {
      const g = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(o, e, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && g() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(o) {
        this.isTrackingValues && this.setInternalValueFromOptions(o);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(o) {
      this.$emit(o ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(o) {
      Array.isArray(o) ? this.$data._value = o.map((e) => this.findOptionFromReducedValue(e)) : this.$data._value = this.findOptionFromReducedValue(o);
    },
    select(o) {
      this.$emit("option:selecting", o), this.isOptionSelected(o) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(o) : (this.taggable && !this.optionExists(o) && (this.$emit("option:created", o), this.pushTag(o)), this.multiple && (o = this.selectedValue.concat(o)), this.updateValue(o), this.$emit("option:selected", o)), this.onAfterSelect(o);
    },
    deselect(o) {
      this.$emit("option:deselecting", o), this.updateValue(this.selectedValue.filter((e) => !this.optionComparator(e, o))), this.$emit("option:deselected", o);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(o) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(o) {
      typeof this.modelValue == "undefined" && (this.$data._value = o), o !== null && (Array.isArray(o) ? o = o.map((e) => this.reduce(e)) : o = this.reduce(o)), this.$emit("update:modelValue", o);
    },
    toggleDropdown(o) {
      const e = o.target !== this.searchEl;
      e && o.preventDefault();
      const g = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || g.filter(Boolean).some((n) => n.contains(o.target) || n === o.target)) {
        o.preventDefault();
        return;
      }
      this.open && e ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(o) {
      return this.selectedValue.some((e) => this.optionComparator(e, o));
    },
    isOptionDeselectable(o) {
      return this.isOptionSelected(o) && this.deselectFromDropdown;
    },
    optionComparator(o, e) {
      return this.getOptionKey(o) === this.getOptionKey(e);
    },
    findOptionFromReducedValue(o) {
      const e = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(o), g = [...this.options, ...this.pushedTags].filter(e);
      return g.length === 1 ? g[0] : g.find((n) => this.optionComparator(n, this.$data._value)) || o;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let o = null;
        this.multiple && (o = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(o);
      }
    },
    optionExists(o) {
      return this.optionList.some((e) => this.optionComparator(e, o));
    },
    normalizeOptionForSlot(o) {
      return typeof o == "object" ? o : { [this.label]: o };
    },
    pushTag(o) {
      this.pushedTags.push(o);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: o, multiple: e } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: o, multiple: e }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(o) {
      const e = (t) => (t.preventDefault(), !this.isComposing && this.typeAheadSelect()), g = {
        8: (t) => this.maybeDeleteValue(),
        9: (t) => this.onTab(),
        27: (t) => this.onEscape(),
        38: (t) => (t.preventDefault(), this.typeAheadUp()),
        40: (t) => (t.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((t) => g[t] = e);
      const n = this.mapKeydown(g, this);
      if (typeof n[o.keyCode] == "function")
        return n[o.keyCode](o);
    }
  }
}, dm = ["dir"], hm = ["id", "aria-expanded", "aria-owns"], pm = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, mm = ["disabled", "title", "aria-label", "onClick"], bm = {
  ref: "actions",
  class: "vs__actions"
}, fm = ["disabled"], ym = { class: "vs__spinner" }, km = ["id"], vm = ["id", "aria-selected", "onMouseover", "onClick"], wm = {
  key: 0,
  class: "vs__no-options"
}, xm = /* @__PURE__ */ C(" Sorry, no matching options. "), Om = ["id"];
function jm(o, e, g, n, t, a) {
  const m = So("append-to-body");
  return s(), i("div", {
    dir: g.dir,
    class: F(["v-select", a.stateClasses])
  }, [
    c(o.$slots, "header", u(d(a.scope.header))),
    h("div", {
      id: `vs${g.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${g.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (l) => a.toggleDropdown(l))
    }, [
      h("div", pm, [
        (s(!0), i(R, null, P(a.selectedValue, (l, r) => c(o.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(l),
          deselect: a.deselect,
          multiple: g.multiple,
          disabled: g.disabled
        }, () => [
          (s(), i("span", {
            key: g.getOptionKey(l),
            class: "vs__selected"
          }, [
            c(o.$slots, "selected-option", u(d(a.normalizeOptionForSlot(l))), () => [
              C(j(g.getOptionLabel(l)), 1)
            ]),
            g.multiple ? (s(), i("button", {
              key: 0,
              ref_for: !0,
              ref: (p) => t.deselectButtons[r] = p,
              disabled: g.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${g.getOptionLabel(l)}`,
              "aria-label": `Deselect ${g.getOptionLabel(l)}`,
              onClick: (p) => a.deselect(l)
            }, [
              (s(), w(S(a.childComponents.Deselect)))
            ], 8, mm)) : $("", !0)
          ]))
        ])), 256)),
        c(o.$slots, "search", u(d(a.scope.search)), () => [
          h("input", D({ class: "vs__search" }, a.scope.search.attributes, $o(a.scope.search.events)), null, 16)
        ])
      ], 512),
      h("div", bm, [
        x(h("button", {
          ref: "clearButton",
          disabled: g.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...l) => a.clearSelection && a.clearSelection(...l))
        }, [
          (s(), w(S(a.childComponents.Deselect)))
        ], 8, fm), [
          [z, a.showClearButton]
        ]),
        c(o.$slots, "open-indicator", u(d(a.scope.openIndicator)), () => [
          g.noDrop ? $("", !0) : (s(), w(S(a.childComponents.OpenIndicator), u(D({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        c(o.$slots, "spinner", u(d(a.scope.spinner)), () => [
          x(h("div", ym, "Loading...", 512), [
            [z, o.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, hm),
    _o(Co, { name: g.transition }, {
      default: O(() => [
        a.dropdownOpen ? x((s(), i("ul", {
          id: `vs${g.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${g.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = M((...l) => a.onMousedown && a.onMousedown(...l), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...l) => a.onMouseUp && a.onMouseUp(...l))
        }, [
          c(o.$slots, "list-header", u(d(a.scope.listHeader))),
          (s(!0), i(R, null, P(a.filteredOptions, (l, r) => (s(), i("li", {
            id: `vs${g.uid}__option-${r}`,
            key: g.getOptionKey(l),
            role: "option",
            class: F(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(l) && r === o.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(l),
              "vs__dropdown-option--highlight": r === o.typeAheadPointer,
              "vs__dropdown-option--disabled": !g.selectable(l)
            }]),
            "aria-selected": r === o.typeAheadPointer ? !0 : null,
            onMouseover: (p) => g.selectable(l) ? o.typeAheadPointer = r : null,
            onClick: M((p) => g.selectable(l) ? a.select(l) : null, ["prevent", "stop"])
          }, [
            c(o.$slots, "option", u(d(a.normalizeOptionForSlot(l))), () => [
              C(j(g.getOptionLabel(l)), 1)
            ])
          ], 42, vm))), 128)),
          a.filteredOptions.length === 0 ? (s(), i("li", wm, [
            c(o.$slots, "no-options", u(d(a.scope.noOptions)), () => [
              xm
            ])
          ])) : $("", !0),
          c(o.$slots, "list-footer", u(d(a.scope.listFooter)))
        ], 40, km)), [
          [m]
        ]) : (s(), i("ul", {
          key: 1,
          id: `vs${g.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Om))
      ]),
      _: 3
    }, 8, ["name"]),
    c(o.$slots, "footer", u(d(a.scope.footer)))
  ], 10, dm);
}
const Sm = /* @__PURE__ */ q(um, [["render", jm]]);
const $m = (o, e) => {
  const g = o.__vccOpts || o;
  for (const [n, t] of e)
    g[n] = t;
  return g;
}, _m = {
  name: "UniversalFontPicker",
  components: {
    vSelect: Sm
  },
  props: {
    placeholder: {
      type: String,
      default: "Search for a font"
    },
    modelValue: {
      type: String,
      required: !0
    },
    recommendedFonts: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.infiniteScroll);
  },
  data() {
    return {
      fontsLoaded: /* @__PURE__ */ new Set(),
      allFonts: Object.keys(Yu).map((o) => `${o}`),
      observer: null,
      limit: 10,
      search: ""
    };
  },
  computed: {
    fonts() {
      const o = this.recommendedFonts.map((e) => _(e));
      return [.../* @__PURE__ */ new Set([...o, ...this.allFonts])];
    },
    filteredFonts() {
      return this.fonts.filter(
        (o) => o.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    fetchedFonts() {
      return this.loadFonts(this.filteredFonts.slice(0, this.limit)), this.filteredFonts.slice(0, this.limit);
    },
    internalModelValue() {
      return _(this.modelValue);
    },
    hasNextPage() {
      return this.fetchedFonts.length < this.filteredFonts.length;
    }
  },
  methods: {
    startCase: Dp,
    kababCase: _,
    onOpen() {
      return k(this, null, function* () {
        this.hasNextPage && (yield this.$nextTick(), this.observer.observe(this.$refs.load));
      });
    },
    onClose() {
      this.observer.disconnect();
    },
    infiniteScroll(g) {
      return k(this, arguments, function* ([{ isIntersecting: o, target: e }]) {
        if (o) {
          const n = e.offsetParent, t = e.offsetParent.scrollTop;
          this.limit += 10, yield this.$nextTick(), n.scrollTop = t;
        }
      });
    },
    loadFonts(o) {
      return k(this, null, function* () {
        o.forEach((e) => {
          if (!this.fontsLoaded.has(e)) {
            this.fontsLoaded.add(e);
            const g = document.getElementsByTagName("HEAD")[0], n = document.createElement("link");
            n.rel = "stylesheet", n.type = "text/css", n.href = `https://cdn.jsdelivr.net/npm/@fontsource/${e}/index.css`, g.appendChild(n);
          }
        });
      });
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler() {
        this.modelValue && this.loadFonts([this.internalModelValue]);
      }
    }
  }
}, Cm = {
  ref: "load",
  class: "loader"
};
function zm(o, e, g, n, t, a) {
  const m = zo("v-select");
  return s(), w(m, {
    class: "universal-font-picker",
    placeholder: g.placeholder,
    options: a.fetchedFonts,
    filterable: !1,
    clearable: !1,
    onSearch: e[0] || (e[0] = (l) => t.search = l),
    modelValue: a.internalModelValue,
    onOpen: a.onOpen,
    onClose: a.onClose,
    "onUpdate:modelValue": e[1] || (e[1] = (l) => o.$emit("update:modelValue", a.startCase(l)))
  }, {
    "selected-option": O((l) => [
      (s(), i("div", {
        class: "universal-font-picker__selected-option",
        style: E({ "font-family": a.startCase(l.label) }),
        key: l.label
      }, j(l.label), 5))
    ]),
    option: O((l) => [
      (s(), i("div", {
        class: "universal-font-picker__option",
        style: E({ "font-family": a.startCase(l.label) }),
        key: l.label
      }, j(l.label), 5))
    ]),
    "list-footer": O(() => [
      x(h("li", Cm, " Loading more options... ", 512), [
        [z, a.hasNextPage]
      ])
    ]),
    _: 1
  }, 8, ["placeholder", "options", "modelValue", "onOpen", "onClose"]);
}
const Vm = /* @__PURE__ */ $m(_m, [["render", zm], ["__scopeId", "data-v-24695718"]]);
export {
  Vm as default
};
