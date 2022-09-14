var Co = (e, c, u) => new Promise((a, r) => {
  var o = (g) => {
    try {
      n(u.next(g));
    } catch (l) {
      r(l);
    }
  }, t = (g) => {
    try {
      n(u.throw(g));
    } catch (l) {
      r(l);
    }
  }, n = (g) => g.done ? a(g.value) : Promise.resolve(g.value).then(o, t);
  n((u = u.apply(e, c)).next());
});
import * as Ge from "vue";
import { openBlock as D, createElementBlock as K, resolveDirective as We, normalizeClass as Wo, renderSlot as Q, normalizeProps as X, guardReactiveProps as no, createElementVNode as lo, Fragment as Ho, renderList as Jo, createTextVNode as Eo, toDisplayString as ko, createBlock as yo, resolveDynamicComponent as Lo, createCommentVNode as zo, mergeProps as Ko, toHandlers as He, withDirectives as Po, vShow as Zo, createVNode as he, Transition as Je, withCtx as vo, withModifiers as Yo, resolveComponent as Qo, normalizeStyle as Xo } from "vue";
const Ke = "google", Ze = "google", Ye = "google", Qe = "google", Xe = "google", on = "google", en = "google", nn = "google", tn = "google", an = "google", gn = "google", ln = "google", rn = "google", sn = "google", cn = "google", un = "google", dn = "google", fn = "google", pn = "google", hn = "google", mn = "google", bn = "google", yn = "google", vn = "google", kn = "google", wn = "google", xn = "google", On = "google", Sn = "google", jn = "google", _n = "google", $n = "google", An = "google", Tn = "google", Cn = "google", Ln = "google", zn = "google", Pn = "google", En = "google", Vn = "google", Mn = "google", Fn = "google", Rn = "google", qn = "google", In = "google", Dn = "google", Bn = "google", Nn = "google", Un = "google", Gn = "google", Wn = "google", Hn = "google", Jn = "google", Kn = "google", Zn = "google", Yn = "google", Qn = "google", Xn = "google", ot = "google", et = "google", nt = "google", tt = "google", at = "google", gt = "google", lt = "google", rt = "google", st = "google", it = "google", ct = "google", ut = "google", dt = "google", ft = "google", pt = "google", ht = "google", mt = "google", bt = "google", yt = "google", vt = "google", kt = "google", wt = "google", xt = "google", Ot = "google", St = "google", jt = "google", _t = "google", $t = "google", At = "google", Tt = "google", Ct = "google", Lt = "google", zt = "google", Pt = "google", Et = "google", Vt = "google", Mt = "google", Ft = "google", Rt = "google", qt = "google", It = "google", Dt = "google", Bt = "google", Nt = "google", Ut = "google", Gt = "google", Wt = "google", Ht = "google", Jt = "google", Kt = "google", Zt = "google", Yt = "google", Qt = "google", Xt = "google", oa = "google", ea = "google", na = "google", ta = "google", aa = "google", ga = "google", la = "google", ra = "google", sa = "google", ia = "google", ca = "google", ua = "google", da = "google", fa = "google", pa = "google", ha = "google", ma = "google", ba = "google", ya = "google", va = "google", ka = "google", wa = "google", xa = "google", Oa = "google", Sa = "google", ja = "google", _a = "google", $a = "google", Aa = "google", Ta = "google", Ca = "google", La = "google", za = "google", Pa = "google", Ea = "google", Va = "google", Ma = "google", Fa = "google", Ra = "google", qa = "google", Ia = "google", Da = "google", Ba = "google", Na = "google", Ua = "google", Ga = "google", Wa = "google", Ha = "google", Ja = "google", Ka = "google", Za = "google", Ya = "google", Qa = "google", Xa = "google", og = "google", eg = "google", ng = "google", tg = "google", ag = "google", gg = "google", lg = "google", rg = "google", sg = "google", ig = "google", cg = "google", ug = "google", dg = "google", fg = "google", pg = "google", hg = "google", mg = "google", bg = "google", yg = "google", vg = "google", kg = "google", wg = "google", xg = "google", Og = "google", Sg = "google", jg = "google", _g = "google", $g = "google", Ag = "google", Tg = "google", Cg = "google", Lg = "google", zg = "google", Pg = "google", Eg = "google", Vg = "google", Mg = "google", Fg = "google", Rg = "google", qg = "google", Ig = "google", Dg = "google", Bg = "google", Ng = "google", Ug = "google", Gg = "google", Wg = "google", Hg = "google", Jg = "google", Kg = "google", Zg = "google", Yg = "google", Qg = "google", Xg = "google", ol = "google", el = "google", nl = "google", tl = "google", al = "google", gl = "google", ll = "google", rl = "google", sl = "google", il = "google", cl = "google", ul = "google", dl = "google", fl = "google", pl = "google", hl = "google", ml = "google", bl = "google", yl = "google", vl = "google", kl = "google", wl = "google", xl = "google", Ol = "google", Sl = "google", jl = "google", _l = "google", $l = "google", Al = "google", Tl = "google", Cl = "google", Ll = "google", zl = "google", Pl = "google", El = "google", Vl = "google", Ml = "google", Fl = "google", Rl = "google", ql = "google", Il = "google", Dl = "google", Bl = "google", Nl = "google", Ul = "google", Gl = "google", Wl = "google", Hl = "google", Jl = "google", Kl = "google", Zl = "google", Yl = "google", Ql = "google", Xl = "google", or = "google", er = "google", nr = "google", tr = "google", ar = "google", gr = "google", lr = "google", rr = "google", sr = "google", ir = "google", cr = "google", ur = "google", dr = "google", fr = "google", pr = "google", hr = "google", mr = "google", br = "google", yr = "google", vr = "google", kr = "google", wr = "google", xr = "google", Or = "google", Sr = "google", jr = "google", _r = "google", $r = "google", Ar = "google", Tr = "google", Cr = "google", Lr = "google", zr = "google", Pr = "google", Er = "google", Vr = "google", Mr = "google", Fr = "google", Rr = "google", qr = "google", Ir = "google", Dr = "google", Br = "google", Nr = "google", Ur = "google", Gr = "google", Wr = "google", Hr = "google", Jr = "google", Kr = "google", Zr = "google", Yr = "google", Qr = "google", Xr = "google", os = "google", es = "google", ns = "google", ts = "google", as = "google", gs = "google", ls = "google", rs = "google", ss = "google", is = "google", cs = "google", us = "google", ds = "google", fs = "google", ps = "google", hs = "google", ms = "google", bs = "google", ys = "google", vs = "google", ks = "google", ws = "google", xs = "google", Os = "google", Ss = "google", js = "google", _s = "google", $s = "google", As = "google", Ts = "google", Cs = "google", Ls = "google", zs = "google", Ps = "google", Es = "google", Vs = "google", Ms = "google", Fs = "google", Rs = "google", qs = "google", Is = "google", Ds = "google", Bs = "google", Ns = "google", Us = "google", Gs = "google", Ws = "google", Hs = "google", Js = "google", Ks = "google", Zs = "google", Ys = "google", Qs = "google", Xs = "google", oi = "google", ei = "google", ni = "google", ti = "google", ai = "google", gi = "google", li = "google", ri = "google", si = "google", ii = "google", ci = "google", ui = "google", di = "google", fi = "google", pi = "google", hi = "google", mi = "google", bi = "google", yi = "google", vi = "google", ki = "google", wi = "google", xi = "google", Oi = "google", Si = "google", ji = "google", _i = "google", $i = "google", Ai = "google", Ti = "google", Ci = "google", Li = "google", zi = "google", Pi = "google", Ei = "google", Vi = "google", Mi = "google", Fi = "google", Ri = "google", qi = "google", Ii = "google", Di = "google", Bi = "google", Ni = "google", Ui = "google", Gi = "google", Wi = "google", Hi = "google", Ji = "google", Ki = "google", Zi = "google", Yi = "google", Qi = "google", Xi = "google", oc = "google", ec = "google", nc = "google", tc = "google", ac = "google", gc = "google", lc = "google", rc = "google", sc = "google", ic = "google", cc = "google", uc = "google", dc = "google", fc = "google", pc = "google", hc = "google", mc = "google", bc = "google", yc = "google", vc = "google", kc = "google", wc = "google", xc = "google", Oc = "google", Sc = "google", jc = "google", _c = "google", $c = "google", Ac = "google", Tc = "google", Cc = "google", Lc = "google", zc = "google", Pc = "google", Ec = "google", Vc = "google", Mc = "google", Fc = "google", Rc = "google", qc = "google", Ic = "google", Dc = "google", Bc = "google", Nc = "google", Uc = "google", Gc = "google", Wc = "google", Hc = "google", Jc = "google", Kc = "google", Zc = "google", Yc = "google", Qc = "google", Xc = "google", ou = "google", eu = "google", nu = "google", tu = "google", au = "google", gu = "google", lu = "google", ru = "google", su = "google", iu = "google", cu = "google", uu = "google", du = "google", fu = "google", pu = "google", hu = "google", mu = "google", bu = "google", yu = "google", vu = "google", ku = "google", wu = "google", xu = "google", Ou = "google", Su = "google", ju = "google", _u = "google", $u = "google", Au = "google", Tu = "google", Cu = "google", Lu = "google", zu = "google", Pu = "google", Eu = "google", Vu = "google", Mu = "google", Fu = "google", Ru = "google", qu = "google", Iu = "google", Du = "google", Bu = "google", Nu = "google", Uu = "google", Gu = "google", Wu = "google", Hu = "google", Ju = "google", Ku = "google", Zu = "google", Yu = "google", Qu = "google", Xu = "google", od = "google", ed = "google", nd = "google", td = "google", ad = "google", gd = "google", ld = "google", rd = "google", sd = "google", id = "google", cd = "google", ud = "google", dd = "google", fd = "google", pd = "google", hd = "google", md = "google", bd = "google", yd = "google", vd = "google", kd = "google", wd = "google", xd = "google", Od = "google", Sd = "google", jd = "google", _d = "google", $d = "google", Ad = "google", Td = "google", Cd = "google", Ld = "google", zd = "google", Pd = "google", Ed = "google", Vd = "google", Md = "google", Fd = "google", Rd = "google", qd = "google", Id = "google", Dd = "google", Bd = "google", Nd = "google", Ud = "google", Gd = "google", Wd = "google", Hd = "league", Jd = "other", Kd = "other", Zd = "other", Yd = "other", Qd = "other", Xd = "other", of = "other", ef = "other", nf = "other", tf = "other", af = "other", gf = "other", lf = "other", rf = "other", sf = "other", cf = "other", uf = "other", df = "other", ff = "other", pf = "other", hf = "other", mf = "other", bf = {
  abeezee: Ke,
  abel: Ze,
  "abhaya-libre": "google",
  aboreto: Ye,
  "abril-fatface": "google",
  aclonica: Qe,
  acme: Xe,
  actor: on,
  adamina: en,
  "advent-pro": "google",
  "aguafina-script": "google",
  "akaya-kanadaka": "google",
  "akaya-telivigala": "google",
  akronim: nn,
  akshar: tn,
  aladin: an,
  alata: gn,
  alatsi: ln,
  "albert-sans": "google",
  aldrich: rn,
  alef: sn,
  alegreya: cn,
  "alegreya-sans": "google",
  "alegreya-sans-sc": "google",
  "alegreya-sc": "google",
  aleo: un,
  "alex-brush": "google",
  "alfa-slab-one": "google",
  alice: dn,
  alike: fn,
  "alike-angular": "google",
  allan: pn,
  allerta: hn,
  "allerta-stencil": "google",
  allison: mn,
  allura: bn,
  almarai: yn,
  almendra: vn,
  "almendra-display": "google",
  "almendra-sc": "google",
  "alumni-sans": "google",
  "alumni-sans-collegiate-one": "google",
  "alumni-sans-inline-one": "google",
  "alumni-sans-pinstripe": "google",
  amarante: kn,
  amaranth: wn,
  "amatic-sc": "google",
  amethysta: xn,
  amiko: On,
  amiri: Sn,
  amita: jn,
  anaheim: _n,
  andada: $n,
  "andada-pro": "google",
  andika: An,
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
  angkor: Tn,
  "annie-use-your-telescope": "google",
  "anonymous-pro": "google",
  antic: Cn,
  "antic-didone": "google",
  "antic-slab": "google",
  anton: Ln,
  antonio: zn,
  anybody: Pn,
  arapey: En,
  arbutus: Vn,
  "arbutus-slab": "google",
  "architects-daughter": "google",
  archivo: Mn,
  "archivo-black": "google",
  "archivo-narrow": "google",
  "are-you-serious": "google",
  "aref-ruqaa": "google",
  arima: Fn,
  "arima-madurai": "google",
  arimo: Rn,
  arizonia: qn,
  armata: In,
  arsenal: Dn,
  artifika: Bn,
  arvo: Nn,
  arya: Un,
  asap: Gn,
  "asap-condensed": "google",
  asar: Wn,
  asset: Hn,
  assistant: Jn,
  astloch: Kn,
  asul: Zn,
  athiti: Yn,
  "atkinson-hyperlegible": "google",
  atma: Qn,
  "atomic-age": "google",
  aubrey: Xn,
  audiowide: ot,
  "autour-one": "google",
  average: et,
  "average-sans": "google",
  "averia-gruesa-libre": "google",
  "averia-libre": "google",
  "averia-sans-libre": "google",
  "averia-serif-libre": "google",
  "azeret-mono": "google",
  b612: nt,
  "b612-mono": "google",
  babylonica: tt,
  "bad-script": "google",
  bahiana: at,
  bahianita: gt,
  "bai-jamjuree": "google",
  "bakbak-one": "google",
  ballet: lt,
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
  balthazar: rt,
  bangers: st,
  barlow: it,
  "barlow-condensed": "google",
  "barlow-semi-condensed": "google",
  barriecito: ct,
  barrio: ut,
  basic: dt,
  baskervville: ft,
  battambang: pt,
  baumans: ht,
  bayon: mt,
  "be-vietnam": "google",
  "be-vietnam-pro": "google",
  "beau-rivage": "google",
  "bebas-neue": "google",
  belgrano: bt,
  bellefair: yt,
  belleza: vt,
  bellota: kt,
  "bellota-text": "google",
  benchnine: wt,
  benne: xt,
  bentham: Ot,
  "berkshire-swash": "google",
  besley: St,
  "beth-ellen": "google",
  bevan: jt,
  "bhutuka-expanded-one": "google",
  "big-shoulders-display": "google",
  "big-shoulders-inline-display": "google",
  "big-shoulders-inline-text": "google",
  "big-shoulders-stencil-display": "google",
  "big-shoulders-stencil-text": "google",
  "big-shoulders-text": "google",
  "bigelow-rules": "google",
  "bigshot-one": "google",
  bilbo: _t,
  "bilbo-swash-caps": "google",
  biorhyme: $t,
  "biorhyme-expanded": "google",
  birthstone: At,
  "birthstone-bounce": "google",
  biryani: Tt,
  bitter: Ct,
  "biz-udgothic": "google",
  "biz-udmincho": "google",
  "biz-udpgothic": "google",
  "biz-udpmincho": "google",
  "black-and-white-picture": "google",
  "black-han-sans": "google",
  "black-ops-one": "google",
  blaka: Lt,
  "blaka-hollow": "google",
  blinker: zt,
  "bodoni-moda": "google",
  bokor: Pt,
  "bona-nova": "google",
  bonbon: Et,
  "bonheur-royale": "google",
  boogaloo: Vt,
  "bowlby-one": "google",
  "bowlby-one-sc": "google",
  brawler: Mt,
  "bree-serif": "google",
  "brygada-1918": "google",
  "bubblegum-sans": "google",
  "bubbler-one": "google",
  buda: Ft,
  buenard: Rt,
  bungee: qt,
  "bungee-hairline": "google",
  "bungee-inline": "google",
  "bungee-outline": "google",
  "bungee-shade": "google",
  butcherman: It,
  "butterfly-kids": "google",
  cabin: Dt,
  "cabin-condensed": "google",
  "cabin-sketch": "google",
  "caesar-dressing": "google",
  cagliostro: Bt,
  cairo: Nt,
  caladea: Ut,
  calistoga: Gt,
  calligraffitti: Wt,
  cambay: Ht,
  cambo: Jt,
  candal: Kt,
  cantarell: Zt,
  "cantata-one": "google",
  "cantora-one": "google",
  capriola: Yt,
  caramel: Qt,
  carattere: Xt,
  cardo: oa,
  carme: ea,
  "carrois-gothic": "google",
  "carrois-gothic-sc": "google",
  "carter-one": "google",
  castoro: na,
  catamaran: ta,
  caudex: aa,
  caveat: ga,
  "caveat-brush": "google",
  "cedarville-cursive": "google",
  "ceviche-one": "google",
  "chakra-petch": "google",
  changa: la,
  "changa-one": "google",
  chango: ra,
  "charis-sil": "google",
  charm: sa,
  charmonman: ia,
  chathura: ca,
  "chau-philomene-one": "google",
  "chela-one": "google",
  "chelsea-market": "google",
  chenla: ua,
  cherish: da,
  "cherry-cream-soda": "google",
  "cherry-swash": "google",
  chewy: fa,
  chicle: pa,
  chilanka: ha,
  chivo: ma,
  chonburi: ba,
  cinzel: ya,
  "cinzel-decorative": "google",
  "clicker-script": "google",
  coda: va,
  "coda-caption": "google",
  codystar: ka,
  coiny: wa,
  combo: xa,
  comfortaa: Oa,
  comforter: Sa,
  "comforter-brush": "google",
  "comic-neue": "google",
  "coming-soon": "google",
  commissioner: ja,
  "concert-one": "google",
  condiment: _a,
  content: $a,
  "contrail-one": "google",
  convergence: Aa,
  cookie: Ta,
  copse: Ca,
  corben: La,
  corinthia: za,
  cormorant: Pa,
  "cormorant-garamond": "google",
  "cormorant-infant": "google",
  "cormorant-sc": "google",
  "cormorant-unicase": "google",
  "cormorant-upright": "google",
  courgette: Ea,
  "courier-prime": "google",
  cousine: Va,
  coustard: Ma,
  "covered-by-your-grace": "google",
  "crafty-girls": "google",
  creepster: Fa,
  "crete-round": "google",
  "crimson-pro": "google",
  "crimson-text": "google",
  "croissant-one": "google",
  crushed: Ra,
  cuprum: qa,
  "cute-font": "google",
  cutive: Ia,
  "cutive-mono": "google",
  damion: Da,
  "dancing-script": "google",
  dangrek: Ba,
  "darker-grotesque": "google",
  "david-libre": "google",
  "dawning-of-a-new-day": "google",
  "days-one": "google",
  dekko: Na,
  "dela-gothic-one": "google",
  delius: Ua,
  "delius-swash-caps": "google",
  "delius-unicase": "google",
  "della-respira": "google",
  "denk-one": "google",
  devonshire: Ga,
  dhurjati: Wa,
  "didact-gothic": "google",
  diplomata: Ha,
  "diplomata-sc": "google",
  "dm-mono": "google",
  "dm-sans": "google",
  "dm-serif-display": "google",
  "dm-serif-text": "google",
  "do-hyeon": "google",
  dokdo: Ja,
  domine: Ka,
  "donegal-one": "google",
  dongle: Za,
  "doppio-one": "google",
  dorsa: Ya,
  dosis: Qa,
  dotgothic16: Xa,
  "dr-sugiyama": "google",
  "duru-sans": "google",
  dynalight: og,
  dynapuff: eg,
  "eagle-lake": "google",
  "east-sea-dokdo": "google",
  eater: ng,
  "eb-garamond": "google",
  economica: tg,
  eczar: ag,
  "edu-nsw-act-foundation": "google",
  "edu-qld-beginner": "google",
  "edu-sa-beginner": "google",
  "edu-tas-beginner": "google",
  "edu-vic-wa-nt-beginner": "google",
  "el-messiri": "google",
  electrolize: gg,
  elsie: lg,
  "elsie-swash-caps": "google",
  "emblema-one": "google",
  "emilys-candy": "google",
  "encode-sans": "google",
  "encode-sans-condensed": "google",
  "encode-sans-expanded": "google",
  "encode-sans-sc": "google",
  "encode-sans-semi-condensed": "google",
  "encode-sans-semi-expanded": "google",
  engagement: rg,
  englebert: sg,
  enriqueta: ig,
  ephesis: cg,
  epilogue: ug,
  "erica-one": "google",
  esteban: dg,
  estonia: fg,
  "euphoria-script": "google",
  ewert: pg,
  exo: hg,
  "exo-2": "google",
  "expletus-sans": "google",
  explora: mg,
  fahkwang: bg,
  "familjen-grotesk": "google",
  "fanwood-text": "google",
  farro: yg,
  farsan: vg,
  fascinate: kg,
  "fascinate-inline": "google",
  "faster-one": "google",
  fasthand: wg,
  "fauna-one": "google",
  faustina: xg,
  federant: Og,
  federo: Sg,
  felipa: jg,
  fenix: _g,
  festive: $g,
  figtree: Ag,
  "finger-paint": "google",
  finlandica: Tg,
  "fira-code": "google",
  "fira-mono": "google",
  "fira-sans": "google",
  "fira-sans-condensed": "google",
  "fira-sans-extra-condensed": "google",
  "fjalla-one": "google",
  "fjord-one": "google",
  flamenco: Cg,
  flavors: Lg,
  "fleur-de-leah": "google",
  "flow-block": "google",
  "flow-circular": "google",
  "flow-rounded": "google",
  fondamento: zg,
  "fontdiner-swanky": "google",
  forum: Pg,
  "francois-one": "google",
  "frank-ruhl-libre": "google",
  fraunces: Eg,
  "freckle-face": "google",
  "fredericka-the-great": "google",
  fredoka: Vg,
  "fredoka-one": "google",
  freehand: Mg,
  fresca: Fg,
  frijole: Rg,
  fruktur: qg,
  "fugaz-one": "google",
  fuggles: Ig,
  "fuzzy-bubbles": "google",
  gabriela: Dg,
  gaegu: Bg,
  gafata: Ng,
  galada: Ug,
  galdeano: Gg,
  galindo: Wg,
  "gamja-flower": "google",
  gantari: Hg,
  gayathri: Jg,
  gelasio: Kg,
  "gemunu-libre": "google",
  genos: Zg,
  "gentium-book-basic": "google",
  "gentium-book-plus": "google",
  "gentium-plus": "google",
  geo: Yg,
  georama: Qg,
  geostar: Xg,
  "geostar-fill": "google",
  "germania-one": "google",
  "gfs-didot": "google",
  "gfs-neohellenic": "google",
  "gideon-roman": "google",
  gidugu: ol,
  "gilda-display": "google",
  girassol: el,
  "give-you-glory": "google",
  "glass-antiqua": "google",
  glegoo: nl,
  "gloria-hallelujah": "google",
  glory: tl,
  gluten: al,
  "goblin-one": "google",
  "gochi-hand": "google",
  goldman: gl,
  gorditas: ll,
  "gothic-a1": "google",
  gotu: rl,
  "goudy-bookletter-1911": "google",
  "gowun-batang": "google",
  "gowun-dodum": "google",
  graduate: sl,
  "grand-hotel": "google",
  grandstander: il,
  "grape-nuts": "google",
  "gravitas-one": "google",
  "great-vibes": "google",
  "grechen-fuemen": "google",
  grenze: cl,
  "grenze-gotisch": "google",
  "grey-qo": "google",
  griffy: ul,
  gruppo: dl,
  gudea: fl,
  gugi: pl,
  gulzar: hl,
  gupter: ml,
  gurajada: bl,
  gwendolyn: yl,
  habibi: vl,
  "hachi-maru-pop": "google",
  hahmlet: kl,
  halant: wl,
  "hammersmith-one": "google",
  hanalei: xl,
  "hanalei-fill": "google",
  handlee: Ol,
  hanuman: Sl,
  "happy-monkey": "google",
  harmattan: jl,
  "headland-one": "google",
  heebo: _l,
  "henny-penny": "google",
  "hepta-slab": "google",
  "herr-von-muellerhoff": "google",
  "hi-melody": "google",
  "hina-mincho": "google",
  hind: $l,
  "hind-guntur": "google",
  "hind-madurai": "google",
  "hind-siliguri": "google",
  "hind-vadodara": "google",
  "holtwood-one-sc": "google",
  "homemade-apple": "google",
  homenaje: Al,
  hubballi: Tl,
  hurricane: Cl,
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
  iceberg: Ll,
  iceland: zl,
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
  imbue: Pl,
  "imperial-script": "google",
  imprima: El,
  inconsolata: Vl,
  inder: Ml,
  "indie-flower": "google",
  "ingrid-darling": "google",
  inika: Fl,
  "inknut-antiqua": "google",
  "inria-sans": "google",
  "inria-serif": "google",
  inspiration: Rl,
  inter: ql,
  "irish-grover": "google",
  "island-moments": "google",
  "istok-web": "google",
  italiana: Il,
  italianno: Dl,
  itim: Bl,
  "jacques-francois": "google",
  "jacques-francois-shadow": "google",
  jaldi: Nl,
  "jetbrains-mono": "google",
  "jim-nightshade": "google",
  joan: Ul,
  "jockey-one": "google",
  "jolly-lodger": "google",
  jomhuria: Gl,
  jomolhari: Wl,
  "josefin-sans": "google",
  "josefin-slab": "google",
  jost: Hl,
  "joti-one": "google",
  jua: Jl,
  judson: Kl,
  julee: Zl,
  "julius-sans-one": "google",
  junge: Yl,
  jura: Ql,
  "just-another-hand": "google",
  "just-me-again-down-here": "google",
  k2d: Xl,
  kadwa: or,
  "kaisei-decol": "google",
  "kaisei-harunoumi": "google",
  "kaisei-opti": "google",
  "kaisei-tokumin": "google",
  kalam: er,
  kameron: nr,
  kanit: tr,
  kantumruy: ar,
  "kantumruy-pro": "google",
  karantina: gr,
  karla: lr,
  karma: rr,
  katibeh: sr,
  "kaushan-script": "google",
  kavivanar: ir,
  kavoon: cr,
  "kdam-thmor-pro": "google",
  "keania-one": "google",
  "kelly-slab": "google",
  kenia: ur,
  khand: dr,
  khmer: fr,
  khula: pr,
  kings: hr,
  "kirang-haerang": "google",
  "kite-one": "google",
  "kiwi-maru": "google",
  "klee-one": "google",
  knewave: mr,
  kodchasan: br,
  "koh-santepheap": "google",
  koho: yr,
  "kolker-brush": "google",
  kosugi: vr,
  "kosugi-maru": "google",
  "kotta-one": "google",
  koulen: kr,
  kranky: wr,
  kreon: xr,
  kristi: Or,
  "krona-one": "google",
  krub: Sr,
  kufam: jr,
  "kulim-park": "google",
  "kumar-one": "google",
  "kumar-one-outline": "google",
  "kumbh-sans": "google",
  kurale: _r,
  "la-belle-aurore": "google",
  lacquer: $r,
  laila: Ar,
  "lakki-reddy": "google",
  lalezar: Tr,
  lancelot: Cr,
  langar: Lr,
  lateef: zr,
  lato: Pr,
  "lavishly-yours": "google",
  "league-gothic": "google",
  "league-script": "google",
  "league-spartan": "google",
  "leckerli-one": "google",
  ledger: Er,
  lekton: Vr,
  lemon: Mr,
  lemonada: Fr,
  lexend: Rr,
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
  licorice: qr,
  "life-savers": "google",
  "lilita-one": "google",
  "lily-script-one": "google",
  limelight: Ir,
  "linden-hill": "google",
  literata: Dr,
  "liu-jian-mao-cao": "google",
  livvic: Br,
  lobster: Nr,
  "lobster-two": "google",
  "londrina-outline": "google",
  "londrina-shadow": "google",
  "londrina-sketch": "google",
  "londrina-solid": "google",
  "long-cang": "google",
  lora: Ur,
  "love-light": "google",
  "love-ya-like-a-sister": "google",
  "loved-by-the-king": "google",
  "lovers-quarrel": "google",
  "luckiest-guy": "google",
  lusitana: Gr,
  lustria: Wr,
  "luxurious-roman": "google",
  "luxurious-script": "google",
  "m-plus-1": "google",
  "m-plus-1-code": "google",
  "m-plus-1p": "google",
  "m-plus-2": "google",
  "m-plus-code-latin": "google",
  "m-plus-rounded-1c": "google",
  "ma-shan-zheng": "google",
  macondo: Hr,
  "macondo-swash-caps": "google",
  mada: Jr,
  magra: Kr,
  "maiden-orange": "google",
  maitree: Zr,
  "major-mono-display": "google",
  mako: Yr,
  mali: Qr,
  mallanna: Xr,
  mandali: os,
  manjari: es,
  manrope: ns,
  mansalva: ts,
  manuale: as,
  marcellus: gs,
  "marcellus-sc": "google",
  "marck-script": "google",
  margarine: ls,
  "markazi-text": "google",
  "marko-one": "google",
  marmelad: rs,
  martel: ss,
  "martel-sans": "google",
  marvel: is,
  mate: cs,
  "mate-sc": "google",
  "maven-pro": "google",
  mclaren: us,
  "mea-culpa": "google",
  meddon: ds,
  medievalsharp: fs,
  "medula-one": "google",
  "meera-inimai": "google",
  megrim: ps,
  "meie-script": "google",
  "meow-script": "google",
  merienda: hs,
  "merienda-one": "google",
  merriweather: ms,
  "merriweather-sans": "google",
  metal: bs,
  "metal-mania": "google",
  metamorphous: ys,
  metrophobic: vs,
  michroma: ks,
  milonga: ws,
  miltonian: xs,
  "miltonian-tattoo": "google",
  mina: Os,
  mingzat: Ss,
  miniver: js,
  "miriam-libre": "google",
  mirza: _s,
  "miss-fajardose": "google",
  mitr: $s,
  "mochiy-pop-one": "google",
  "mochiy-pop-p-one": "google",
  modak: As,
  "modern-antiqua": "google",
  mogra: Ts,
  mohave: Cs,
  molengo: Ls,
  molle: zs,
  monda: Ps,
  monofett: Es,
  monoton: Vs,
  "monsieur-la-doulaise": "google",
  montaga: Ms,
  "montagu-slab": "google",
  montecarlo: Fs,
  montez: Rs,
  montserrat: qs,
  "montserrat-alternates": "google",
  "montserrat-subrayada": "google",
  "moo-lah-lah": "google",
  "moon-dance": "google",
  moul: Is,
  moulpali: Ds,
  "mountains-of-christmas": "google",
  "mouse-memoirs": "google",
  "mr-bedfort": "google",
  "mr-dafoe": "google",
  "mr-de-haviland": "google",
  "mrs-saint-delafield": "google",
  "mrs-sheppards": "google",
  "ms-madi": "google",
  mukta: Bs,
  "mukta-mahee": "google",
  "mukta-malar": "google",
  "mukta-vaani": "google",
  mulish: Ns,
  murecho: Us,
  museomoderno: Gs,
  "my-soul": "google",
  "mystery-quest": "google",
  "nanum-brush-script": "google",
  "nanum-gothic": "google",
  "nanum-gothic-coding": "google",
  "nanum-myeongjo": "google",
  "nanum-pen-script": "google",
  neonderthaw: Ws,
  "nerko-one": "google",
  neucha: Hs,
  neuton: Js,
  "new-rocker": "google",
  "new-tegomin": "google",
  "news-cycle": "google",
  newsreader: Ks,
  niconne: Zs,
  niramit: Ys,
  "nixie-one": "google",
  nobile: Qs,
  nokora: Xs,
  norican: oi,
  nosifer: ei,
  notable: ni,
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
  ntr: ti,
  numans: ai,
  nunito: gi,
  "nunito-sans": "google",
  "nuosu-sil": "google",
  "odibee-sans": "google",
  "odor-mean-chey": "google",
  offside: li,
  oi: ri,
  "old-standard-tt": "google",
  oldenburg: si,
  ole: ii,
  "oleo-script": "google",
  "oleo-script-swash-caps": "google",
  "oooh-baby": "google",
  "open-sans": "google",
  "open-sans-condensed": "google",
  oranienbaum: ci,
  orbitron: ui,
  oregano: di,
  "orelega-one": "google",
  orienta: fi,
  "original-surfer": "google",
  oswald: pi,
  "otomanopee-one": "google",
  outfit: hi,
  "over-the-rainbow": "google",
  overlock: mi,
  "overlock-sc": "google",
  overpass: bi,
  "overpass-mono": "google",
  ovo: yi,
  oxanium: vi,
  oxygen: ki,
  "oxygen-mono": "google",
  pacifico: wi,
  padauk: xi,
  palanquin: Oi,
  "palanquin-dark": "google",
  "palette-mosaic": "google",
  pangolin: Si,
  paprika: ji,
  parisienne: _i,
  "passero-one": "google",
  "passion-one": "google",
  "passions-conflict": "google",
  "pathway-gothic-one": "google",
  "patrick-hand": "google",
  "patrick-hand-sc": "google",
  pattaya: $i,
  "patua-one": "google",
  pavanam: Ai,
  "paytone-one": "google",
  peddana: Ti,
  peralta: Ci,
  "permanent-marker": "google",
  petemoss: Li,
  "petit-formal-script": "google",
  petrona: zi,
  philosopher: Pi,
  piazzolla: Ei,
  piedra: Vi,
  "pinyon-script": "google",
  "pirata-one": "google",
  plaster: Mi,
  play: Fi,
  playball: Ri,
  "playfair-display": "google",
  "playfair-display-sc": "google",
  "plus-jakarta-sans": "google",
  podkova: qi,
  "poiret-one": "google",
  "poller-one": "google",
  poly: Ii,
  pompiere: Di,
  "pontano-sans": "google",
  "poor-story": "google",
  poppins: Bi,
  "port-lligat-sans": "google",
  "port-lligat-slab": "google",
  "potta-one": "google",
  "pragati-narrow": "google",
  praise: Ni,
  prata: Ui,
  preahvihear: Gi,
  "press-start-2p": "google",
  pridi: Wi,
  "princess-sofia": "google",
  prociono: Hi,
  prompt: Ji,
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
  puritan: Ki,
  "purple-purse": "google",
  pushster: Zi,
  qahiri: Yi,
  quando: Qi,
  quantico: Xi,
  quattrocento: oc,
  "quattrocento-sans": "google",
  questrial: ec,
  quicksand: nc,
  quintessential: tc,
  qwigley: ac,
  "qwitcher-grypen": "google",
  "racing-sans-one": "google",
  "radio-canada": "google",
  radley: gc,
  rajdhani: lc,
  rakkas: rc,
  raleway: sc,
  "raleway-dots": "google",
  ramabhadra: ic,
  ramaraja: cc,
  rambla: uc,
  "rammetto-one": "google",
  "rampart-one": "google",
  ranchers: dc,
  rancho: fc,
  ranga: pc,
  rasa: hc,
  rationale: mc,
  "ravi-prakash": "google",
  "readex-pro": "google",
  recursive: bc,
  "red-hat-display": "google",
  "red-hat-mono": "google",
  "red-hat-text": "google",
  "red-rose": "google",
  redacted: yc,
  "redacted-script": "google",
  redressed: vc,
  "reem-kufi": "google",
  "reenie-beanie": "google",
  "reggae-one": "google",
  revalia: kc,
  "rhodium-libre": "google",
  ribeye: wc,
  "ribeye-marrow": "google",
  righteous: xc,
  risque: Oc,
  "road-rage": "google",
  roboto: Sc,
  "roboto-condensed": "google",
  "roboto-flex": "google",
  "roboto-mono": "google",
  "roboto-serif": "google",
  "roboto-slab": "google",
  rochester: jc,
  "rock-salt": "google",
  "rocknroll-one": "google",
  rokkitt: _c,
  romanesco: $c,
  "ropa-sans": "google",
  rosario: Ac,
  rosarivo: Tc,
  "rouge-script": "google",
  rowdies: Cc,
  "rozha-one": "google",
  rubik: Lc,
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
  ruda: zc,
  rufina: Pc,
  "ruge-boogie": "google",
  ruluko: Ec,
  "rum-raisin": "google",
  "ruslan-display": "google",
  "russo-one": "google",
  ruthie: Vc,
  rye: Mc,
  sacramento: Fc,
  sahitya: Rc,
  sail: qc,
  saira: Ic,
  "saira-condensed": "google",
  "saira-extra-condensed": "google",
  "saira-semi-condensed": "google",
  "saira-stencil-one": "google",
  salsa: Dc,
  sanchez: Bc,
  sancreek: Nc,
  sansita: Uc,
  "sansita-swashed": "google",
  sarabun: Gc,
  sarala: Wc,
  sarina: Hc,
  sarpanch: Jc,
  "sassy-frass": "google",
  satisfy: Kc,
  "sawarabi-gothic": "google",
  "sawarabi-mincho": "google",
  scada: Zc,
  scheherazade: Yc,
  "scheherazade-new": "google",
  schoolbell: Qc,
  "scope-one": "google",
  "seaweed-script": "google",
  "secular-one": "google",
  "sedgwick-ave": "google",
  "sedgwick-ave-display": "google",
  sen: Xc,
  "send-flowers": "google",
  sevillana: ou,
  "seymour-one": "google",
  "shadows-into-light": "google",
  "shadows-into-light-two": "google",
  shalimar: eu,
  shanti: nu,
  share: tu,
  "share-tech": "google",
  "share-tech-mono": "google",
  "shippori-antique": "google",
  "shippori-antique-b1": "google",
  "shippori-mincho": "google",
  "shippori-mincho-b1": "google",
  shojumaru: au,
  "short-stack": "google",
  shrikhand: gu,
  siemreap: lu,
  "sigmar-one": "google",
  signika: ru,
  "signika-negative": "google",
  silkscreen: su,
  simonetta: iu,
  "single-day": "google",
  sintony: cu,
  "sirin-stencil": "google",
  "six-caps": "google",
  skranji: uu,
  "slabo-13px": "google",
  "slabo-27px": "google",
  slackey: du,
  smokum: fu,
  smooch: pu,
  "smooch-sans": "google",
  smythe: hu,
  sniglet: mu,
  snippet: bu,
  "snowburst-one": "google",
  "sofadi-one": "google",
  sofia: yu,
  solway: vu,
  "song-myung": "google",
  "sonsie-one": "google",
  sora: ku,
  "sorts-mill-goudy": "google",
  "source-code-pro": "google",
  "source-sans-3": "google",
  "source-sans-pro": "google",
  "source-serif-4": "google",
  "source-serif-pro": "google",
  "space-grotesk": "google",
  "space-mono": "google",
  spartan: wu,
  "special-elite": "google",
  spectral: xu,
  "spectral-sc": "google",
  "spicy-rice": "google",
  spinnaker: Ou,
  spirax: Su,
  splash: ju,
  "spline-sans": "google",
  "spline-sans-mono": "google",
  "squada-one": "google",
  "square-peg": "google",
  "sree-krushnadevaraya": "google",
  sriracha: _u,
  srisakdi: $u,
  staatliches: Au,
  stalemate: Tu,
  "stalinist-one": "google",
  "stardos-stencil": "google",
  stick: Cu,
  "stick-no-bills": "google",
  "stint-ultra-condensed": "google",
  "stint-ultra-expanded": "google",
  "stix-two-math": "google",
  "stix-two-text": "google",
  stoke: Lu,
  strait: zu,
  "style-script": "google",
  stylish: Pu,
  "sue-ellen-francisco": "google",
  "suez-one": "google",
  "sulphur-point": "google",
  sumana: Eu,
  sunflower: Vu,
  sunshiney: Mu,
  "supermercado-one": "google",
  sura: Fu,
  suranna: Ru,
  suravaram: qu,
  suwannaphum: Iu,
  "swanky-and-moo-moo": "google",
  syncopate: Du,
  syne: Bu,
  "syne-mono": "google",
  "syne-tactile": "google",
  "tai-heritage-pro": "google",
  tajawal: Nu,
  tangerine: Uu,
  tapestry: Gu,
  taprom: Wu,
  tauri: Hu,
  taviraj: Ju,
  teko: Ku,
  telex: Zu,
  "tenali-ramakrishna": "google",
  "tenor-sans": "google",
  "text-me-one": "google",
  texturina: Yu,
  thasadith: Qu,
  "the-girl-next-door": "google",
  "the-nautigal": "google",
  tienne: Xu,
  tillana: od,
  timmana: ed,
  tinos: nd,
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
  tomorrow: td,
  tourney: ad,
  "trade-winds": "google",
  "train-one": "google",
  trirong: gd,
  trispace: ld,
  trocchi: rd,
  trochut: sd,
  truculenta: id,
  trykker: cd,
  "tulpen-one": "google",
  "turret-road": "google",
  "twinkle-star": "google",
  ubuntu: ud,
  "ubuntu-condensed": "google",
  "ubuntu-mono": "google",
  uchen: dd,
  ultra: fd,
  "uncial-antiqua": "google",
  underdog: pd,
  "unica-one": "google",
  unifrakturcook: hd,
  unifrakturmaguntia: md,
  unkempt: bd,
  unlock: yd,
  unna: vd,
  updock: kd,
  urbanist: wd,
  "vampiro-one": "google",
  varela: xd,
  "varela-round": "google",
  varta: Od,
  "vast-shadow": "google",
  vazirmatn: Sd,
  "vesper-libre": "google",
  "viaoda-libre": "google",
  vibes: jd,
  vibur: _d,
  vidaloka: $d,
  viga: Ad,
  voces: Td,
  volkhov: Cd,
  vollkorn: Ld,
  "vollkorn-sc": "google",
  voltaire: zd,
  vt323: Pd,
  "vujahday-script": "google",
  "waiting-for-the-sunrise": "google",
  wallpoet: Ed,
  "walter-turncoat": "google",
  warnes: Vd,
  "water-brush": "google",
  waterfall: Md,
  wellfleet: Fd,
  "wendy-one": "google",
  whisper: Rd,
  windsong: qd,
  "wire-one": "google",
  "work-sans": "google",
  "xanh-mono": "google",
  yaldevi: Id,
  "yanone-kaffeesatz": "google",
  yantramanav: Dd,
  "yatra-one": "google",
  yellowtail: Bd,
  "yeon-sung": "google",
  "yeseva-one": "google",
  yesteryear: Nd,
  yomogi: Ud,
  yrsa: Gd,
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
  zeyada: Wd,
  "zhi-mang-xing": "google",
  "zilla-slab": "google",
  "zilla-slab-highlight": "google",
  "blackout-midnight": "league",
  "blackout-sunrise": "league",
  "blackout-two-am": "league",
  "chunk-five": "league",
  junction: Hd,
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
  aileron: Jd,
  "apfel-grotezk": "other",
  "argentum-sans": "other",
  bagnard: Kd,
  "bagnard-sans": "other",
  "bluu-next": "other",
  bravura: Zd,
  "bravura-text": "other",
  carlito: Yd,
  "clear-sans": "other",
  "comic-mono": "other",
  "cooper-hewitt": "other",
  "dejavu-math": "other",
  "dejavu-mono": "other",
  "dejavu-sans": "other",
  "dejavu-serif": "other",
  "dseg-weather": "other",
  dseg14: Qd,
  dseg7: Xd,
  firago: of,
  "golos-ui": "other",
  "hauora-sans": "other",
  "ia-writer-duo": "other",
  "ia-writer-duospace": "other",
  "ia-writer-mono": "other",
  "ia-writer-quattro": "other",
  iosevka: ef,
  karmilla: nf,
  metropolis: tf,
  mononoki: af,
  norwester: gf,
  "noto-mono": "other",
  opendyslexic: lf,
  "syne-italic": "other",
  unifont: rf,
  vazir: sf,
  "victor-mono": "other",
  yakuhanjp: cf,
  yakuhanjps: uf,
  yakuhanmp: df,
  yakuhanmps: ff,
  yakuhanrp: pf,
  yakuhanrps: hf,
  youngserif: mf
};
var po = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function yf(e) {
  var c = e.default;
  if (typeof c == "function") {
    var u = function() {
      return c.apply(this, arguments);
    };
    u.prototype = c.prototype;
  } else
    u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var r = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(u, a, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), u;
}
function vf(e, c, u, a) {
  var r = -1, o = e == null ? 0 : e.length;
  for (a && o && (u = e[++r]); ++r < o; )
    u = c(u, e[r], r, e);
  return u;
}
var kf = vf;
function wf(e) {
  return function(c) {
    return e == null ? void 0 : e[c];
  };
}
var xf = wf, Of = xf, Sf = {
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
}, jf = Of(Sf), _f = jf, $f = typeof po == "object" && po && po.Object === Object && po, Af = $f, Tf = Af, Cf = typeof self == "object" && self && self.Object === Object && self, Lf = Tf || Cf || Function("return this")(), zf = Lf, Pf = zf, Ef = Pf.Symbol, Fo = Ef;
function Vf(e, c) {
  for (var u = -1, a = e == null ? 0 : e.length, r = Array(a); ++u < a; )
    r[u] = c(e[u], u, e);
  return r;
}
var Mf = Vf, Ff = Array.isArray, Rf = Ff, oe = Fo, me = Object.prototype, qf = me.hasOwnProperty, If = me.toString, fo = oe ? oe.toStringTag : void 0;
function Df(e) {
  var c = qf.call(e, fo), u = e[fo];
  try {
    e[fo] = void 0;
    var a = !0;
  } catch (o) {
  }
  var r = If.call(e);
  return a && (c ? e[fo] = u : delete e[fo]), r;
}
var Bf = Df, Nf = Object.prototype, Uf = Nf.toString;
function Gf(e) {
  return Uf.call(e);
}
var Wf = Gf, ee = Fo, Hf = Bf, Jf = Wf, Kf = "[object Null]", Zf = "[object Undefined]", ne = ee ? ee.toStringTag : void 0;
function Yf(e) {
  return e == null ? e === void 0 ? Zf : Kf : ne && ne in Object(e) ? Hf(e) : Jf(e);
}
var Qf = Yf;
function Xf(e) {
  return e != null && typeof e == "object";
}
var op = Xf, ep = Qf, np = op, tp = "[object Symbol]";
function ap(e) {
  return typeof e == "symbol" || np(e) && ep(e) == tp;
}
var gp = ap, te = Fo, lp = Mf, rp = Rf, sp = gp, ip = 1 / 0, ae = te ? te.prototype : void 0, ge = ae ? ae.toString : void 0;
function be(e) {
  if (typeof e == "string")
    return e;
  if (rp(e))
    return lp(e, be) + "";
  if (sp(e))
    return ge ? ge.call(e) : "";
  var c = e + "";
  return c == "0" && 1 / e == -ip ? "-0" : c;
}
var cp = be, up = cp;
function dp(e) {
  return e == null ? "" : up(e);
}
var Ro = dp, fp = _f, pp = Ro, hp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mp = "\\u0300-\\u036f", bp = "\\ufe20-\\ufe2f", yp = "\\u20d0-\\u20ff", vp = mp + bp + yp, kp = "[" + vp + "]", wp = RegExp(kp, "g");
function xp(e) {
  return e = pp(e), e && e.replace(hp, fp).replace(wp, "");
}
var Op = xp, Sp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function jp(e) {
  return e.match(Sp) || [];
}
var _p = jp, $p = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ap(e) {
  return $p.test(e);
}
var Tp = Ap, ye = "\\ud800-\\udfff", Cp = "\\u0300-\\u036f", Lp = "\\ufe20-\\ufe2f", zp = "\\u20d0-\\u20ff", Pp = Cp + Lp + zp, ve = "\\u2700-\\u27bf", ke = "a-z\\xdf-\\xf6\\xf8-\\xff", Ep = "\\xac\\xb1\\xd7\\xf7", Vp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Mp = "\\u2000-\\u206f", Fp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", we = "A-Z\\xc0-\\xd6\\xd8-\\xde", Rp = "\\ufe0e\\ufe0f", xe = Ep + Vp + Mp + Fp, Oe = "['\u2019]", le = "[" + xe + "]", qp = "[" + Pp + "]", Se = "\\d+", Ip = "[" + ve + "]", je = "[" + ke + "]", _e = "[^" + ye + xe + Se + ve + ke + we + "]", Dp = "\\ud83c[\\udffb-\\udfff]", Bp = "(?:" + qp + "|" + Dp + ")", Np = "[^" + ye + "]", $e = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ae = "[\\ud800-\\udbff][\\udc00-\\udfff]", co = "[" + we + "]", Up = "\\u200d", re = "(?:" + je + "|" + _e + ")", Gp = "(?:" + co + "|" + _e + ")", se = "(?:" + Oe + "(?:d|ll|m|re|s|t|ve))?", ie = "(?:" + Oe + "(?:D|LL|M|RE|S|T|VE))?", Te = Bp + "?", Ce = "[" + Rp + "]?", Wp = "(?:" + Up + "(?:" + [Np, $e, Ae].join("|") + ")" + Ce + Te + ")*", Hp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Jp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Kp = Ce + Te + Wp, Zp = "(?:" + [Ip, $e, Ae].join("|") + ")" + Kp, Yp = RegExp([
  co + "?" + je + "+" + se + "(?=" + [le, co, "$"].join("|") + ")",
  Gp + "+" + ie + "(?=" + [le, co + re, "$"].join("|") + ")",
  co + "?" + re + "+" + se,
  co + "+" + ie,
  Jp,
  Hp,
  Se,
  Zp
].join("|"), "g");
function Qp(e) {
  return e.match(Yp) || [];
}
var Xp = Qp, oh = _p, eh = Tp, nh = Ro, th = Xp;
function ah(e, c, u) {
  return e = nh(e), c = u ? void 0 : c, c === void 0 ? eh(e) ? th(e) : oh(e) : e.match(c) || [];
}
var gh = ah, lh = kf, rh = Op, sh = gh, ih = "['\u2019]", ch = RegExp(ih, "g");
function uh(e) {
  return function(c) {
    return lh(sh(rh(c).replace(ch, "")), e, "");
  };
}
var Le = uh;
function dh(e, c, u) {
  var a = -1, r = e.length;
  c < 0 && (c = -c > r ? 0 : r + c), u = u > r ? r : u, u < 0 && (u += r), r = c > u ? 0 : u - c >>> 0, c >>>= 0;
  for (var o = Array(r); ++a < r; )
    o[a] = e[a + c];
  return o;
}
var fh = dh, ph = fh;
function hh(e, c, u) {
  var a = e.length;
  return u = u === void 0 ? a : u, !c && u >= a ? e : ph(e, c, u);
}
var mh = hh, bh = "\\ud800-\\udfff", yh = "\\u0300-\\u036f", vh = "\\ufe20-\\ufe2f", kh = "\\u20d0-\\u20ff", wh = yh + vh + kh, xh = "\\ufe0e\\ufe0f", Oh = "\\u200d", Sh = RegExp("[" + Oh + bh + wh + xh + "]");
function jh(e) {
  return Sh.test(e);
}
var ze = jh;
function _h(e) {
  return e.split("");
}
var $h = _h, Pe = "\\ud800-\\udfff", Ah = "\\u0300-\\u036f", Th = "\\ufe20-\\ufe2f", Ch = "\\u20d0-\\u20ff", Lh = Ah + Th + Ch, zh = "\\ufe0e\\ufe0f", Ph = "[" + Pe + "]", Vo = "[" + Lh + "]", Mo = "\\ud83c[\\udffb-\\udfff]", Eh = "(?:" + Vo + "|" + Mo + ")", Ee = "[^" + Pe + "]", Ve = "(?:\\ud83c[\\udde6-\\uddff]){2}", Me = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vh = "\\u200d", Fe = Eh + "?", Re = "[" + zh + "]?", Mh = "(?:" + Vh + "(?:" + [Ee, Ve, Me].join("|") + ")" + Re + Fe + ")*", Fh = Re + Fe + Mh, Rh = "(?:" + [Ee + Vo + "?", Vo, Ve, Me, Ph].join("|") + ")", qh = RegExp(Mo + "(?=" + Mo + ")|" + Rh + Fh, "g");
function Ih(e) {
  return e.match(qh) || [];
}
var Dh = Ih, Bh = $h, Nh = ze, Uh = Dh;
function Gh(e) {
  return Nh(e) ? Uh(e) : Bh(e);
}
var Wh = Gh, Hh = mh, Jh = ze, Kh = Wh, Zh = Ro;
function Yh(e) {
  return function(c) {
    c = Zh(c);
    var u = Jh(c) ? Kh(c) : void 0, a = u ? u[0] : c.charAt(0), r = u ? Hh(u, 1).join("") : c.slice(1);
    return a[e]() + r;
  };
}
var Qh = Yh, Xh = Qh, om = Xh("toUpperCase"), em = om, nm = Le, tm = em, am = nm(function(e, c, u) {
  return e + (u ? " " : "") + tm(c);
}), gm = am, lm = Le, rm = lm(function(e, c, u) {
  return e + (u ? "-" : "") + c.toLowerCase();
}), ce = rm, sm = Object.defineProperty, im = Object.defineProperties, cm = Object.getOwnPropertyDescriptors, ue = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, dm = Object.prototype.propertyIsEnumerable, de = (e, c, u) => c in e ? sm(e, c, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[c] = u, io = (e, c) => {
  for (var u in c || (c = {}))
    um.call(c, u) && de(e, u, c[u]);
  if (ue)
    for (var u of ue(c))
      dm.call(c, u) && de(e, u, c[u]);
  return e;
}, fe = (e, c) => im(e, cm(c));
const fm = {
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
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const c = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (c) {
        const u = this.getDropdownViewport(), { top: a, bottom: r, height: o } = c.getBoundingClientRect();
        if (a < u.top)
          return this.$refs.dropdownMenu.scrollTop = c.offsetTop;
        if (r > u.bottom)
          return this.$refs.dropdownMenu.scrollTop = c.offsetTop - (u.height - o);
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
}, pm = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, hm = {
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
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, qo = (e, c) => {
  const u = e.__vccOpts || e;
  for (const [a, r] of c)
    u[a] = r;
  return u;
}, mm = {}, bm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, ym = /* @__PURE__ */ lo("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), vm = [
  ym
];
function km(e, c) {
  return D(), K("svg", bm, vm);
}
const wm = /* @__PURE__ */ qo(mm, [["render", km]]), xm = {}, Om = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Sm = /* @__PURE__ */ lo("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), jm = [
  Sm
];
function _m(e, c) {
  return D(), K("svg", Om, jm);
}
const $m = /* @__PURE__ */ qo(xm, [["render", _m]]), pe = {
  Deselect: wm,
  OpenIndicator: $m
}, Am = {
  mounted(e, { instance: c }) {
    if (c.appendToBody) {
      const {
        height: u,
        top: a,
        left: r,
        width: o
      } = c.$refs.toggle.getBoundingClientRect();
      let t = window.scrollX || window.pageXOffset, n = window.scrollY || window.pageYOffset;
      e.unbindPosition = c.calculatePosition(e, c, {
        width: o + "px",
        left: t + r + "px",
        top: n + a + u + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: c }) {
    c.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function Tm(e) {
  const c = {};
  return Object.keys(e).sort().forEach((u) => {
    c[u] = e[u];
  }), JSON.stringify(c);
}
let Cm = 0;
function Lm() {
  return ++Cm;
}
const zm = {
  components: io({}, pe),
  directives: { appendToBody: Am },
  mixins: [fm, pm, hm],
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
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : Tm(e);
        } catch (c) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, c);
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
      default(e, c, u) {
        return (c || "").toLocaleLowerCase().indexOf(u.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, c) {
        return e.filter((u) => {
          let a = this.getOptionLabel(u);
          return typeof a == "number" && (a = a.toString()), this.filterBy(u, a, c);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: c }) {
        return e && !c;
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
      default: (e, c) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, c, { width: u, top: a, left: r }) {
        e.style.top = a, e.style.left = r, e.style.width = u;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: c, mutableLoading: u }) {
        return e ? !1 : c && !u;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Lm()
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
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: io({
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
            input: (c) => this.search = c.target.value
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
        listHeader: e,
        listFooter: e,
        header: fe(io({}, e), { deselect: this.deselect }),
        footer: fe(io({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return io(io({}, pe), this.components);
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
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const c = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const u = this.createOption(this.search);
        this.optionExists(u) || c.unshift(u);
      }
      return c;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, c) {
      const u = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, c, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && u() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((c) => this.findOptionFromReducedValue(c)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((c) => !this.optionComparator(c, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((c) => this.reduce(c)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const c = e.target !== this.searchEl;
      c && e.preventDefault();
      const u = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || u.filter(Boolean).some((a) => a.contains(e.target) || a === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && c ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((c) => this.optionComparator(c, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, c) {
      return this.getOptionKey(e) === this.getOptionKey(c);
    },
    findOptionFromReducedValue(e) {
      const c = (a) => JSON.stringify(this.reduce(a)) === JSON.stringify(e), u = [...this.options, ...this.pushedTags].filter(c);
      return u.length === 1 ? u[0] : u.find((a) => this.optionComparator(a, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((c) => this.optionComparator(c, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: c } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: c }) && (this.search = ""), this.closeSearchOptions();
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
    onSearchKeyDown(e) {
      const c = (r) => (r.preventDefault(), !this.isComposing && this.typeAheadSelect()), u = {
        8: (r) => this.maybeDeleteValue(),
        9: (r) => this.onTab(),
        27: (r) => this.onEscape(),
        38: (r) => (r.preventDefault(), this.typeAheadUp()),
        40: (r) => (r.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((r) => u[r] = c);
      const a = this.mapKeydown(u, this);
      if (typeof a[e.keyCode] == "function")
        return a[e.keyCode](e);
    }
  }
}, Pm = ["dir"], Em = ["id", "aria-expanded", "aria-owns"], Vm = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Mm = ["disabled", "title", "aria-label", "onClick"], Fm = {
  ref: "actions",
  class: "vs__actions"
}, Rm = ["disabled"], qm = { class: "vs__spinner" }, Im = ["id"], Dm = ["id", "aria-selected", "onMouseover", "onClick"], Bm = {
  key: 0,
  class: "vs__no-options"
}, Nm = /* @__PURE__ */ Eo(" Sorry, no matching options. "), Um = ["id"];
function Gm(e, c, u, a, r, o) {
  const t = We("append-to-body");
  return D(), K("div", {
    dir: u.dir,
    class: Wo(["v-select", o.stateClasses])
  }, [
    Q(e.$slots, "header", X(no(o.scope.header))),
    lo("div", {
      id: `vs${u.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${u.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: c[1] || (c[1] = (n) => o.toggleDropdown(n))
    }, [
      lo("div", Vm, [
        (D(!0), K(Ho, null, Jo(o.selectedValue, (n, g) => Q(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(n),
          deselect: o.deselect,
          multiple: u.multiple,
          disabled: u.disabled
        }, () => [
          (D(), K("span", {
            key: u.getOptionKey(n),
            class: "vs__selected"
          }, [
            Q(e.$slots, "selected-option", X(no(o.normalizeOptionForSlot(n))), () => [
              Eo(ko(u.getOptionLabel(n)), 1)
            ]),
            u.multiple ? (D(), K("button", {
              key: 0,
              ref_for: !0,
              ref: (l) => r.deselectButtons[g] = l,
              disabled: u.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${u.getOptionLabel(n)}`,
              "aria-label": `Deselect ${u.getOptionLabel(n)}`,
              onClick: (l) => o.deselect(n)
            }, [
              (D(), yo(Lo(o.childComponents.Deselect)))
            ], 8, Mm)) : zo("", !0)
          ]))
        ])), 256)),
        Q(e.$slots, "search", X(no(o.scope.search)), () => [
          lo("input", Ko({ class: "vs__search" }, o.scope.search.attributes, He(o.scope.search.events)), null, 16)
        ])
      ], 512),
      lo("div", Fm, [
        Po(lo("button", {
          ref: "clearButton",
          disabled: u.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: c[0] || (c[0] = (...n) => o.clearSelection && o.clearSelection(...n))
        }, [
          (D(), yo(Lo(o.childComponents.Deselect)))
        ], 8, Rm), [
          [Zo, o.showClearButton]
        ]),
        Q(e.$slots, "open-indicator", X(no(o.scope.openIndicator)), () => [
          u.noDrop ? zo("", !0) : (D(), yo(Lo(o.childComponents.OpenIndicator), X(Ko({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        Q(e.$slots, "spinner", X(no(o.scope.spinner)), () => [
          Po(lo("div", qm, "Loading...", 512), [
            [Zo, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Em),
    he(Je, { name: u.transition }, {
      default: vo(() => [
        o.dropdownOpen ? Po((D(), K("ul", {
          id: `vs${u.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${u.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: c[2] || (c[2] = Yo((...n) => o.onMousedown && o.onMousedown(...n), ["prevent"])),
          onMouseup: c[3] || (c[3] = (...n) => o.onMouseUp && o.onMouseUp(...n))
        }, [
          Q(e.$slots, "list-header", X(no(o.scope.listHeader))),
          (D(!0), K(Ho, null, Jo(o.filteredOptions, (n, g) => (D(), K("li", {
            id: `vs${u.uid}__option-${g}`,
            key: u.getOptionKey(n),
            role: "option",
            class: Wo(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(n) && g === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(n),
              "vs__dropdown-option--highlight": g === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !u.selectable(n)
            }]),
            "aria-selected": g === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => u.selectable(n) ? e.typeAheadPointer = g : null,
            onClick: Yo((l) => u.selectable(n) ? o.select(n) : null, ["prevent", "stop"])
          }, [
            Q(e.$slots, "option", X(no(o.normalizeOptionForSlot(n))), () => [
              Eo(ko(u.getOptionLabel(n)), 1)
            ])
          ], 42, Dm))), 128)),
          o.filteredOptions.length === 0 ? (D(), K("li", Bm, [
            Q(e.$slots, "no-options", X(no(o.scope.noOptions)), () => [
              Nm
            ])
          ])) : zo("", !0),
          Q(e.$slots, "list-footer", X(no(o.scope.listFooter)))
        ], 40, Im)), [
          [t]
        ]) : (D(), K("ul", {
          key: 1,
          id: `vs${u.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Um))
      ]),
      _: 3
    }, 8, ["name"]),
    Q(e.$slots, "footer", X(no(o.scope.footer)))
  ], 10, Pm);
}
const Wm = /* @__PURE__ */ qo(zm, [["render", Gm]]);
var qe = { exports: {} };
const Hm = /* @__PURE__ */ yf(Ge);
/*!
 * 
 *         @ts-pro/vue-eternal-loading v1.1.1
 *         (c) 2021 Oleksandr Havrashenko
 *         MIT License
 *       
 */
(function(e, c) {
  (function(u, a) {
    e.exports = a(Hm);
  })(typeof self != "undefined" ? self : po, function(u) {
    return function(a) {
      var r = {};
      function o(t) {
        if (r[t])
          return r[t].exports;
        var n = r[t] = { i: t, l: !1, exports: {} };
        return a[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return o.m = a, o.c = r, o.d = function(t, n, g) {
        o.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: g });
      }, o.r = function(t) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }, o.t = function(t, n) {
        if (1 & n && (t = o(t)), 8 & n || 4 & n && typeof t == "object" && t && t.__esModule)
          return t;
        var g = /* @__PURE__ */ Object.create(null);
        if (o.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: t }), 2 & n && typeof t != "string")
          for (var l in t)
            o.d(g, l, function(s) {
              return t[s];
            }.bind(null, l));
        return g;
      }, o.n = function(t) {
        var n = t && t.__esModule ? function() {
          return t.default;
        } : function() {
          return t;
        };
        return o.d(n, "a", n), n;
      }, o.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }, o.p = "", o(o.s = "fae3");
    }({ "00ee": function(a, r, o) {
      var t = o("b622"), n = t("toStringTag"), g = {};
      g[n] = "z", a.exports = String(g) === "[object z]";
    }, "0366": function(a, r, o) {
      var t = o("1c0b");
      a.exports = function(n, g, l) {
        if (t(n), g === void 0)
          return n;
        switch (l) {
          case 0:
            return function() {
              return n.call(g);
            };
          case 1:
            return function(s) {
              return n.call(g, s);
            };
          case 2:
            return function(s, d) {
              return n.call(g, s, d);
            };
          case 3:
            return function(s, d, i) {
              return n.call(g, s, d, i);
            };
        }
        return function() {
          return n.apply(g, arguments);
        };
      };
    }, "057f": function(a, r, o) {
      var t = o("fc6a"), n = o("241c").f, g = {}.toString, l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch (i) {
          return l.slice();
        }
      };
      a.exports.f = function(d) {
        return l && g.call(d) == "[object Window]" ? s(d) : n(t(d));
      };
    }, "06cf": function(a, r, o) {
      var t = o("83ab"), n = o("d1e7"), g = o("5c6c"), l = o("fc6a"), s = o("c04e"), d = o("5135"), i = o("0cfb"), f = Object.getOwnPropertyDescriptor;
      r.f = t ? f : function(h, p) {
        if (h = l(h), p = s(p, !0), i)
          try {
            return f(h, p);
          } catch (b) {
          }
        if (d(h, p))
          return g(!n.f.call(h, p), h[p]);
      };
    }, "0cfb": function(a, r, o) {
      var t = o("83ab"), n = o("d039"), g = o("cc12");
      a.exports = !t && !n(function() {
        return Object.defineProperty(g("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, "1be4": function(a, r, o) {
      var t = o("d066");
      a.exports = t("document", "documentElement");
    }, "1c0b": function(a, r) {
      a.exports = function(o) {
        if (typeof o != "function")
          throw TypeError(String(o) + " is not a function");
        return o;
      };
    }, "1c7e": function(a, r, o) {
      var t = o("b622"), n = t("iterator"), g = !1;
      try {
        var l = 0, s = { next: function() {
          return { done: !!l++ };
        }, return: function() {
          g = !0;
        } };
        s[n] = function() {
          return this;
        }, Array.from(s, function() {
          throw 2;
        });
      } catch (d) {
      }
      a.exports = function(d, i) {
        if (!i && !g)
          return !1;
        var f = !1;
        try {
          var h = {};
          h[n] = function() {
            return { next: function() {
              return { done: f = !0 };
            } };
          }, d(h);
        } catch (p) {
        }
        return f;
      };
    }, "1d80": function(a, r) {
      a.exports = function(o) {
        if (o == null)
          throw TypeError("Can't call method on " + o);
        return o;
      };
    }, "1dde": function(a, r, o) {
      var t = o("d039"), n = o("b622"), g = o("2d00"), l = n("species");
      a.exports = function(s) {
        return g >= 51 || !t(function() {
          var d = [], i = d.constructor = {};
          return i[l] = function() {
            return { foo: 1 };
          }, d[s](Boolean).foo !== 1;
        });
      };
    }, "23cb": function(a, r, o) {
      var t = o("a691"), n = Math.max, g = Math.min;
      a.exports = function(l, s) {
        var d = t(l);
        return d < 0 ? n(d + s, 0) : g(d, s);
      };
    }, "23e7": function(a, r, o) {
      var t = o("da84"), n = o("06cf").f, g = o("9112"), l = o("6eeb"), s = o("ce4e"), d = o("e893"), i = o("94ca");
      a.exports = function(f, h) {
        var p, b, y, S, j, x, v = f.target, T = f.global, P = f.stat;
        if (b = T ? t : P ? t[v] || s(v, {}) : (t[v] || {}).prototype, b)
          for (y in h) {
            if (j = h[y], f.noTargetGet ? (x = n(b, y), S = x && x.value) : S = b[y], p = i(T ? y : v + (P ? "." : "#") + y, f.forced), !p && S !== void 0) {
              if (typeof j == typeof S)
                continue;
              d(j, S);
            }
            (f.sham || S && S.sham) && g(j, "sham", !0), l(b, y, j, f);
          }
      };
    }, "241c": function(a, r, o) {
      var t = o("ca84"), n = o("7839"), g = n.concat("length", "prototype");
      r.f = Object.getOwnPropertyNames || function(l) {
        return t(l, g);
      };
    }, "2a62": function(a, r, o) {
      var t = o("825a");
      a.exports = function(n) {
        var g = n.return;
        if (g !== void 0)
          return t(g.call(n)).value;
      };
    }, "2d00": function(a, r, o) {
      var t, n, g = o("da84"), l = o("342f"), s = g.process, d = s && s.versions, i = d && d.v8;
      i ? (t = i.split("."), n = t[0] < 4 ? 1 : t[0] + t[1]) : l && (t = l.match(/Edge\/(\d+)/), (!t || t[1] >= 74) && (t = l.match(/Chrome\/(\d+)/), t && (n = t[1]))), a.exports = n && +n;
    }, "342f": function(a, r, o) {
      var t = o("d066");
      a.exports = t("navigator", "userAgent") || "";
    }, "35a1": function(a, r, o) {
      var t = o("f5df"), n = o("3f8c"), g = o("b622"), l = g("iterator");
      a.exports = function(s) {
        if (s != null)
          return s[l] || s["@@iterator"] || n[t(s)];
      };
    }, "37e8": function(a, r, o) {
      var t = o("83ab"), n = o("9bf2"), g = o("825a"), l = o("df75");
      a.exports = t ? Object.defineProperties : function(s, d) {
        g(s);
        for (var i, f = l(d), h = f.length, p = 0; h > p; )
          n.f(s, i = f[p++], d[i]);
        return s;
      };
    }, "3bbe": function(a, r, o) {
      var t = o("861d");
      a.exports = function(n) {
        if (!t(n) && n !== null)
          throw TypeError("Can't set " + String(n) + " as a prototype");
        return n;
      };
    }, "3ca3": function(a, r, o) {
      var t = o("6547").charAt, n = o("69f3"), g = o("7dd0"), l = "String Iterator", s = n.set, d = n.getterFor(l);
      g(String, "String", function(i) {
        s(this, { type: l, string: String(i), index: 0 });
      }, function() {
        var i, f = d(this), h = f.string, p = f.index;
        return p >= h.length ? { value: void 0, done: !0 } : (i = t(h, p), f.index += i.length, { value: i, done: !1 });
      });
    }, "3f8c": function(a, r) {
      a.exports = {};
    }, "428f": function(a, r, o) {
      var t = o("da84");
      a.exports = t;
    }, "44ad": function(a, r, o) {
      var t = o("d039"), n = o("c6b6"), g = "".split;
      a.exports = t(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(l) {
        return n(l) == "String" ? g.call(l, "") : Object(l);
      } : Object;
    }, "44d2": function(a, r, o) {
      var t = o("b622"), n = o("7c73"), g = o("9bf2"), l = t("unscopables"), s = Array.prototype;
      s[l] == null && g.f(s, l, { configurable: !0, value: n(null) }), a.exports = function(d) {
        s[l][d] = !0;
      };
    }, 4930: function(a, r, o) {
      var t = o("2d00"), n = o("d039");
      a.exports = !!Object.getOwnPropertySymbols && !n(function() {
        var g = Symbol();
        return !String(g) || !(Object(g) instanceof Symbol) || !Symbol.sham && t && t < 41;
      });
    }, "4d64": function(a, r, o) {
      var t = o("fc6a"), n = o("50c4"), g = o("23cb"), l = function(s) {
        return function(d, i, f) {
          var h, p = t(d), b = n(p.length), y = g(f, b);
          if (s && i != i) {
            for (; b > y; )
              if (h = p[y++], h != h)
                return !0;
          } else
            for (; b > y; y++)
              if ((s || y in p) && p[y] === i)
                return s || y || 0;
          return !s && -1;
        };
      };
      a.exports = { includes: l(!0), indexOf: l(!1) };
    }, "4df4": function(a, r, o) {
      var t = o("0366"), n = o("7b0b"), g = o("9bdd"), l = o("e95a"), s = o("50c4"), d = o("8418"), i = o("35a1");
      a.exports = function(f) {
        var h, p, b, y, S, j, x = n(f), v = typeof this == "function" ? this : Array, T = arguments.length, P = T > 1 ? arguments[1] : void 0, $ = P !== void 0, _ = i(x), k = 0;
        if ($ && (P = t(P, T > 2 ? arguments[2] : void 0, 2)), _ == null || v == Array && l(_))
          for (h = s(x.length), p = new v(h); h > k; k++)
            j = $ ? P(x[k], k) : x[k], d(p, k, j);
        else
          for (y = _.call(x), S = y.next, p = new v(); !(b = S.call(y)).done; k++)
            j = $ ? g(y, P, [b.value, k], !0) : b.value, d(p, k, j);
        return p.length = k, p;
      };
    }, "50c4": function(a, r, o) {
      var t = o("a691"), n = Math.min;
      a.exports = function(g) {
        return g > 0 ? n(t(g), 9007199254740991) : 0;
      };
    }, 5135: function(a, r, o) {
      var t = o("7b0b"), n = {}.hasOwnProperty;
      a.exports = Object.hasOwn || function(g, l) {
        return n.call(t(g), l);
      };
    }, 5692: function(a, r, o) {
      var t = o("c430"), n = o("c6cd");
      (a.exports = function(g, l) {
        return n[g] || (n[g] = l !== void 0 ? l : {});
      })("versions", []).push({ version: "3.15.2", mode: t ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
    }, "56ef": function(a, r, o) {
      var t = o("d066"), n = o("241c"), g = o("7418"), l = o("825a");
      a.exports = t("Reflect", "ownKeys") || function(s) {
        var d = n.f(l(s)), i = g.f;
        return i ? d.concat(i(s)) : d;
      };
    }, "5c6c": function(a, r) {
      a.exports = function(o, t) {
        return { enumerable: !(1 & o), configurable: !(2 & o), writable: !(4 & o), value: t };
      };
    }, 6547: function(a, r, o) {
      var t = o("a691"), n = o("1d80"), g = function(l) {
        return function(s, d) {
          var i, f, h = String(n(s)), p = t(d), b = h.length;
          return p < 0 || p >= b ? l ? "" : void 0 : (i = h.charCodeAt(p), i < 55296 || i > 56319 || p + 1 === b || (f = h.charCodeAt(p + 1)) < 56320 || f > 57343 ? l ? h.charAt(p) : i : l ? h.slice(p, p + 2) : f - 56320 + (i - 55296 << 10) + 65536);
        };
      };
      a.exports = { codeAt: g(!1), charAt: g(!0) };
    }, "65f0": function(a, r, o) {
      var t = o("861d"), n = o("e8b5"), g = o("b622"), l = g("species");
      a.exports = function(s, d) {
        var i;
        return n(s) && (i = s.constructor, typeof i != "function" || i !== Array && !n(i.prototype) ? t(i) && (i = i[l], i === null && (i = void 0)) : i = void 0), new (i === void 0 ? Array : i)(d === 0 ? 0 : d);
      };
    }, "69f3": function(a, r, o) {
      var t, n, g, l = o("7f9a"), s = o("da84"), d = o("861d"), i = o("9112"), f = o("5135"), h = o("c6cd"), p = o("f772"), b = o("d012"), y = "Object already initialized", S = s.WeakMap, j = function(k) {
        return g(k) ? n(k) : t(k, {});
      }, x = function(k) {
        return function(M) {
          var m;
          if (!d(M) || (m = n(M)).type !== k)
            throw TypeError("Incompatible receiver, " + k + " required");
          return m;
        };
      };
      if (l || h.state) {
        var v = h.state || (h.state = new S()), T = v.get, P = v.has, $ = v.set;
        t = function(k, M) {
          if (P.call(v, k))
            throw new TypeError(y);
          return M.facade = k, $.call(v, k, M), M;
        }, n = function(k) {
          return T.call(v, k) || {};
        }, g = function(k) {
          return P.call(v, k);
        };
      } else {
        var _ = p("state");
        b[_] = !0, t = function(k, M) {
          if (f(k, _))
            throw new TypeError(y);
          return M.facade = k, i(k, _, M), M;
        }, n = function(k) {
          return f(k, _) ? k[_] : {};
        }, g = function(k) {
          return f(k, _);
        };
      }
      a.exports = { set: t, get: n, has: g, enforce: j, getterFor: x };
    }, "6eeb": function(a, r, o) {
      var t = o("da84"), n = o("9112"), g = o("5135"), l = o("ce4e"), s = o("8925"), d = o("69f3"), i = d.get, f = d.enforce, h = String(String).split("String");
      (a.exports = function(p, b, y, S) {
        var j, x = !!S && !!S.unsafe, v = !!S && !!S.enumerable, T = !!S && !!S.noTargetGet;
        typeof y == "function" && (typeof b != "string" || g(y, "name") || n(y, "name", b), j = f(y), j.source || (j.source = h.join(typeof b == "string" ? b : ""))), p !== t ? (x ? !T && p[b] && (v = !0) : delete p[b], v ? p[b] = y : n(p, b, y)) : v ? p[b] = y : l(b, y);
      })(Function.prototype, "toString", function() {
        return typeof this == "function" && i(this).source || s(this);
      });
    }, 7418: function(a, r) {
      r.f = Object.getOwnPropertySymbols;
    }, "746f": function(a, r, o) {
      var t = o("428f"), n = o("5135"), g = o("e538"), l = o("9bf2").f;
      a.exports = function(s) {
        var d = t.Symbol || (t.Symbol = {});
        n(d, s) || l(d, s, { value: g.f(s) });
      };
    }, 7839: function(a, r) {
      a.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, "7b0b": function(a, r, o) {
      var t = o("1d80");
      a.exports = function(n) {
        return Object(t(n));
      };
    }, "7c73": function(a, r, o) {
      var t, n = o("825a"), g = o("37e8"), l = o("7839"), s = o("d012"), d = o("1be4"), i = o("cc12"), f = o("f772"), h = ">", p = "<", b = "prototype", y = "script", S = f("IE_PROTO"), j = function() {
      }, x = function($) {
        return p + y + h + $ + p + "/" + y + h;
      }, v = function($) {
        $.write(x("")), $.close();
        var _ = $.parentWindow.Object;
        return $ = null, _;
      }, T = function() {
        var $, _ = i("iframe"), k = "java" + y + ":";
        return _.style.display = "none", d.appendChild(_), _.src = String(k), $ = _.contentWindow.document, $.open(), $.write(x("document.F=Object")), $.close(), $.F;
      }, P = function() {
        try {
          t = document.domain && new ActiveXObject("htmlfile");
        } catch (_) {
        }
        P = t ? v(t) : T();
        for (var $ = l.length; $--; )
          delete P[b][l[$]];
        return P();
      };
      s[S] = !0, a.exports = Object.create || function($, _) {
        var k;
        return $ !== null ? (j[b] = n($), k = new j(), j[b] = null, k[S] = $) : k = P(), _ === void 0 ? k : g(k, _);
      };
    }, "7dd0": function(a, r, o) {
      var t = o("23e7"), n = o("9ed3"), g = o("e163"), l = o("d2bb"), s = o("d44e"), d = o("9112"), i = o("6eeb"), f = o("b622"), h = o("c430"), p = o("3f8c"), b = o("ae93"), y = b.IteratorPrototype, S = b.BUGGY_SAFARI_ITERATORS, j = f("iterator"), x = "keys", v = "values", T = "entries", P = function() {
        return this;
      };
      a.exports = function($, _, k, M, m, E, C) {
        n(k, _, M);
        var L, F, V, B = function(G) {
          if (G === m && Z)
            return Z;
          if (!S && G in N)
            return N[G];
          switch (G) {
            case x:
              return function() {
                return new k(this, G);
              };
            case v:
              return function() {
                return new k(this, G);
              };
            case T:
              return function() {
                return new k(this, G);
              };
          }
          return function() {
            return new k(this);
          };
        }, J = _ + " Iterator", oo = !1, N = $.prototype, eo = N[j] || N["@@iterator"] || m && N[m], Z = !S && eo || B(m), ro = _ == "Array" && N.entries || eo;
        if (ro && (L = g(ro.call(new $())), y !== Object.prototype && L.next && (h || g(L) === y || (l ? l(L, y) : typeof L[j] != "function" && d(L, j, P)), s(L, J, !0, !0), h && (p[J] = P))), m == v && eo && eo.name !== v && (oo = !0, Z = function() {
          return eo.call(this);
        }), h && !C || N[j] === Z || d(N, j, Z), p[_] = Z, m)
          if (F = { values: B(v), keys: E ? Z : B(x), entries: B(T) }, C)
            for (V in F)
              (S || oo || !(V in N)) && i(N, V, F[V]);
          else
            t({ target: _, proto: !0, forced: S || oo }, F);
        return F;
      };
    }, "7f9a": function(a, r, o) {
      var t = o("da84"), n = o("8925"), g = t.WeakMap;
      a.exports = typeof g == "function" && /native code/.test(n(g));
    }, "825a": function(a, r, o) {
      var t = o("861d");
      a.exports = function(n) {
        if (!t(n))
          throw TypeError(String(n) + " is not an object");
        return n;
      };
    }, "83ab": function(a, r, o) {
      var t = o("d039");
      a.exports = !t(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, 8418: function(a, r, o) {
      var t = o("c04e"), n = o("9bf2"), g = o("5c6c");
      a.exports = function(l, s, d) {
        var i = t(s);
        i in l ? n.f(l, i, g(0, d)) : l[i] = d;
      };
    }, "861d": function(a, r) {
      a.exports = function(o) {
        return typeof o == "object" ? o !== null : typeof o == "function";
      };
    }, 8875: function(a, r, o) {
      var t, n, g;
      (function(l, s) {
        n = [], t = s, g = typeof t == "function" ? t.apply(r, n) : t, g === void 0 || (a.exports = g);
      })(typeof self != "undefined" && self, function() {
        function l() {
          var s = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!s && "currentScript" in document && document.currentScript || s && s.get !== l && document.currentScript)
            return document.currentScript;
          try {
            throw new Error();
          } catch (T) {
            var d, i, f, h = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, p = /@([^@]*):(\d+):(\d+)\s*$/gi, b = h.exec(T.stack) || p.exec(T.stack), y = b && b[1] || !1, S = b && b[2] || !1, j = document.location.href.replace(document.location.hash, ""), x = document.getElementsByTagName("script");
            y === j && (d = document.documentElement.outerHTML, i = new RegExp("(?:[^\\n]+?\\n){0," + (S - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), f = d.replace(i, "$1").trim());
            for (var v = 0; v < x.length; v++)
              if (x[v].readyState === "interactive" || x[v].src === y || y === j && x[v].innerHTML && x[v].innerHTML.trim() === f)
                return x[v];
            return null;
          }
        }
        return l;
      });
    }, 8925: function(a, r, o) {
      var t = o("c6cd"), n = Function.toString;
      typeof t.inspectSource != "function" && (t.inspectSource = function(g) {
        return n.call(g);
      }), a.exports = t.inspectSource;
    }, "8bbf": function(a, r) {
      a.exports = u;
    }, "90e3": function(a, r) {
      var o = 0, t = Math.random();
      a.exports = function(n) {
        return "Symbol(" + String(n === void 0 ? "" : n) + ")_" + (++o + t).toString(36);
      };
    }, 9112: function(a, r, o) {
      var t = o("83ab"), n = o("9bf2"), g = o("5c6c");
      a.exports = t ? function(l, s, d) {
        return n.f(l, s, g(1, d));
      } : function(l, s, d) {
        return l[s] = d, l;
      };
    }, "94ca": function(a, r, o) {
      var t = o("d039"), n = /#|\.prototype\./, g = function(f, h) {
        var p = s[l(f)];
        return p == i || p != d && (typeof h == "function" ? t(h) : !!h);
      }, l = g.normalize = function(f) {
        return String(f).replace(n, ".").toLowerCase();
      }, s = g.data = {}, d = g.NATIVE = "N", i = g.POLYFILL = "P";
      a.exports = g;
    }, "9bdd": function(a, r, o) {
      var t = o("825a"), n = o("2a62");
      a.exports = function(g, l, s, d) {
        try {
          return d ? l(t(s)[0], s[1]) : l(s);
        } catch (i) {
          throw n(g), i;
        }
      };
    }, "9bf2": function(a, r, o) {
      var t = o("83ab"), n = o("0cfb"), g = o("825a"), l = o("c04e"), s = Object.defineProperty;
      r.f = t ? s : function(d, i, f) {
        if (g(d), i = l(i, !0), g(f), n)
          try {
            return s(d, i, f);
          } catch (h) {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported");
        return "value" in f && (d[i] = f.value), d;
      };
    }, "9ed3": function(a, r, o) {
      var t = o("ae93").IteratorPrototype, n = o("7c73"), g = o("5c6c"), l = o("d44e"), s = o("3f8c"), d = function() {
        return this;
      };
      a.exports = function(i, f, h) {
        var p = f + " Iterator";
        return i.prototype = n(t, { next: g(1, h) }), l(i, p, !1, !0), s[p] = d, i;
      };
    }, a4d3: function(a, r, o) {
      var t = o("23e7"), n = o("da84"), g = o("d066"), l = o("c430"), s = o("83ab"), d = o("4930"), i = o("fdbf"), f = o("d039"), h = o("5135"), p = o("e8b5"), b = o("861d"), y = o("825a"), S = o("7b0b"), j = o("fc6a"), x = o("c04e"), v = o("5c6c"), T = o("7c73"), P = o("df75"), $ = o("241c"), _ = o("057f"), k = o("7418"), M = o("06cf"), m = o("9bf2"), E = o("d1e7"), C = o("9112"), L = o("6eeb"), F = o("5692"), V = o("f772"), B = o("d012"), J = o("90e3"), oo = o("b622"), N = o("e538"), eo = o("746f"), Z = o("d44e"), ro = o("69f3"), G = o("b727").forEach, R = V("hidden"), so = "Symbol", W = "prototype", ho = oo("toPrimitive"), I = ro.set, Y = ro.getterFor(so), H = Object[W], q = n.Symbol, to = g("JSON", "stringify"), Io = M.f, go = m.f, Do = _.f, Ie = E.f, ao = F("symbols"), uo = F("op-symbols"), wo = F("string-to-symbol-registry"), xo = F("symbol-to-string-registry"), De = F("wks"), Oo = n.QObject, So = !Oo || !Oo[W] || !Oo[W].findChild, jo = s && f(function() {
        return T(go({}, "a", { get: function() {
          return go(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(w, O, A) {
        var z = Io(H, O);
        z && delete H[O], go(w, O, A), z && w !== H && go(H, O, z);
      } : go, _o = function(w, O) {
        var A = ao[w] = T(q[W]);
        return I(A, { type: so, tag: w, description: O }), s || (A.description = O), A;
      }, $o = i ? function(w) {
        return typeof w == "symbol";
      } : function(w) {
        return Object(w) instanceof q;
      }, mo = function(w, O, A) {
        w === H && mo(uo, O, A), y(w);
        var z = x(O, !0);
        return y(A), h(ao, z) ? (A.enumerable ? (h(w, R) && w[R][z] && (w[R][z] = !1), A = T(A, { enumerable: v(0, !1) })) : (h(w, R) || go(w, R, v(1, {})), w[R][z] = !0), jo(w, z, A)) : go(w, z, A);
      }, Bo = function(w, O) {
        y(w);
        var A = j(O), z = P(A).concat(To(A));
        return G(z, function(U) {
          s && !Ao.call(A, U) || mo(w, U, A[U]);
        }), w;
      }, Be = function(w, O) {
        return O === void 0 ? T(w) : Bo(T(w), O);
      }, Ao = function(w) {
        var O = x(w, !0), A = Ie.call(this, O);
        return !(this === H && h(ao, O) && !h(uo, O)) && (!(A || !h(this, O) || !h(ao, O) || h(this, R) && this[R][O]) || A);
      }, No = function(w, O) {
        var A = j(w), z = x(O, !0);
        if (A !== H || !h(ao, z) || h(uo, z)) {
          var U = Io(A, z);
          return !U || !h(ao, z) || h(A, R) && A[R][z] || (U.enumerable = !0), U;
        }
      }, Uo = function(w) {
        var O = Do(j(w)), A = [];
        return G(O, function(z) {
          h(ao, z) || h(B, z) || A.push(z);
        }), A;
      }, To = function(w) {
        var O = w === H, A = Do(O ? uo : j(w)), z = [];
        return G(A, function(U) {
          !h(ao, U) || O && !h(H, U) || z.push(ao[U]);
        }), z;
      };
      if (d || (q = function() {
        if (this instanceof q)
          throw TypeError("Symbol is not a constructor");
        var w = arguments.length && arguments[0] !== void 0 ? String(arguments[0]) : void 0, O = J(w), A = function(z) {
          this === H && A.call(uo, z), h(this, R) && h(this[R], O) && (this[R][O] = !1), jo(this, O, v(1, z));
        };
        return s && So && jo(H, O, { configurable: !0, set: A }), _o(O, w);
      }, L(q[W], "toString", function() {
        return Y(this).tag;
      }), L(q, "withoutSetter", function(w) {
        return _o(J(w), w);
      }), E.f = Ao, m.f = mo, M.f = No, $.f = _.f = Uo, k.f = To, N.f = function(w) {
        return _o(oo(w), w);
      }, s && (go(q[W], "description", { configurable: !0, get: function() {
        return Y(this).description;
      } }), l || L(H, "propertyIsEnumerable", Ao, { unsafe: !0 }))), t({ global: !0, wrap: !0, forced: !d, sham: !d }, { Symbol: q }), G(P(De), function(w) {
        eo(w);
      }), t({ target: so, stat: !0, forced: !d }, { for: function(w) {
        var O = String(w);
        if (h(wo, O))
          return wo[O];
        var A = q(O);
        return wo[O] = A, xo[A] = O, A;
      }, keyFor: function(w) {
        if (!$o(w))
          throw TypeError(w + " is not a symbol");
        if (h(xo, w))
          return xo[w];
      }, useSetter: function() {
        So = !0;
      }, useSimple: function() {
        So = !1;
      } }), t({ target: "Object", stat: !0, forced: !d, sham: !s }, { create: Be, defineProperty: mo, defineProperties: Bo, getOwnPropertyDescriptor: No }), t({ target: "Object", stat: !0, forced: !d }, { getOwnPropertyNames: Uo, getOwnPropertySymbols: To }), t({ target: "Object", stat: !0, forced: f(function() {
        k.f(1);
      }) }, { getOwnPropertySymbols: function(w) {
        return k.f(S(w));
      } }), to) {
        var Ne = !d || f(function() {
          var w = q();
          return to([w]) != "[null]" || to({ a: w }) != "{}" || to(Object(w)) != "{}";
        });
        t({ target: "JSON", stat: !0, forced: Ne }, { stringify: function(w, O, A) {
          for (var z, U = [w], Go = 1; arguments.length > Go; )
            U.push(arguments[Go++]);
          if (z = O, (b(O) || w !== void 0) && !$o(w))
            return p(O) || (O = function(Ue, bo) {
              if (typeof z == "function" && (bo = z.call(this, Ue, bo)), !$o(bo))
                return bo;
            }), U[1] = O, to.apply(null, U);
        } });
      }
      q[W][ho] || C(q[W], ho, q[W].valueOf), Z(q, so), B[R] = !0;
    }, a630: function(a, r, o) {
      var t = o("23e7"), n = o("4df4"), g = o("1c7e"), l = !g(function(s) {
        Array.from(s);
      });
      t({ target: "Array", stat: !0, forced: l }, { from: n });
    }, a691: function(a, r) {
      var o = Math.ceil, t = Math.floor;
      a.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? t : o)(n);
      };
    }, ae93: function(a, r, o) {
      var t, n, g, l = o("d039"), s = o("e163"), d = o("9112"), i = o("5135"), f = o("b622"), h = o("c430"), p = f("iterator"), b = !1, y = function() {
        return this;
      };
      [].keys && (g = [].keys(), "next" in g ? (n = s(s(g)), n !== Object.prototype && (t = n)) : b = !0);
      var S = t == null || l(function() {
        var j = {};
        return t[p].call(j) !== j;
      });
      S && (t = {}), h && !S || i(t, p) || d(t, p, y), a.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: b };
    }, b041: function(a, r, o) {
      var t = o("00ee"), n = o("f5df");
      a.exports = t ? {}.toString : function() {
        return "[object " + n(this) + "]";
      };
    }, b0c0: function(a, r, o) {
      var t = o("83ab"), n = o("9bf2").f, g = Function.prototype, l = g.toString, s = /^\s*function ([^ (]*)/, d = "name";
      t && !(d in g) && n(g, d, { configurable: !0, get: function() {
        try {
          return l.call(this).match(s)[1];
        } catch (i) {
          return "";
        }
      } });
    }, b622: function(a, r, o) {
      var t = o("da84"), n = o("5692"), g = o("5135"), l = o("90e3"), s = o("4930"), d = o("fdbf"), i = n("wks"), f = t.Symbol, h = d ? f : f && f.withoutSetter || l;
      a.exports = function(p) {
        return g(i, p) && (s || typeof i[p] == "string") || (s && g(f, p) ? i[p] = f[p] : i[p] = h("Symbol." + p)), i[p];
      };
    }, b727: function(a, r, o) {
      var t = o("0366"), n = o("44ad"), g = o("7b0b"), l = o("50c4"), s = o("65f0"), d = [].push, i = function(f) {
        var h = f == 1, p = f == 2, b = f == 3, y = f == 4, S = f == 6, j = f == 7, x = f == 5 || S;
        return function(v, T, P, $) {
          for (var _, k, M = g(v), m = n(M), E = t(T, P, 3), C = l(m.length), L = 0, F = $ || s, V = h ? F(v, C) : p || j ? F(v, 0) : void 0; C > L; L++)
            if ((x || L in m) && (_ = m[L], k = E(_, L, M), f))
              if (h)
                V[L] = k;
              else if (k)
                switch (f) {
                  case 3:
                    return !0;
                  case 5:
                    return _;
                  case 6:
                    return L;
                  case 2:
                    d.call(V, _);
                }
              else
                switch (f) {
                  case 4:
                    return !1;
                  case 7:
                    d.call(V, _);
                }
          return S ? -1 : b || y ? y : V;
        };
      };
      a.exports = { forEach: i(0), map: i(1), filter: i(2), some: i(3), every: i(4), find: i(5), findIndex: i(6), filterOut: i(7) };
    }, c04e: function(a, r, o) {
      var t = o("861d");
      a.exports = function(n, g) {
        if (!t(n))
          return n;
        var l, s;
        if (g && typeof (l = n.toString) == "function" && !t(s = l.call(n)) || typeof (l = n.valueOf) == "function" && !t(s = l.call(n)) || !g && typeof (l = n.toString) == "function" && !t(s = l.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, c430: function(a, r) {
      a.exports = !1;
    }, c6b6: function(a, r) {
      var o = {}.toString;
      a.exports = function(t) {
        return o.call(t).slice(8, -1);
      };
    }, c6cd: function(a, r, o) {
      var t = o("da84"), n = o("ce4e"), g = "__core-js_shared__", l = t[g] || n(g, {});
      a.exports = l;
    }, c8ba: function(a, r) {
      var o;
      o = function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch (t) {
        typeof window == "object" && (o = window);
      }
      a.exports = o;
    }, ca84: function(a, r, o) {
      var t = o("5135"), n = o("fc6a"), g = o("4d64").indexOf, l = o("d012");
      a.exports = function(s, d) {
        var i, f = n(s), h = 0, p = [];
        for (i in f)
          !t(l, i) && t(f, i) && p.push(i);
        for (; d.length > h; )
          t(f, i = d[h++]) && (~g(p, i) || p.push(i));
        return p;
      };
    }, cc12: function(a, r, o) {
      var t = o("da84"), n = o("861d"), g = t.document, l = n(g) && n(g.createElement);
      a.exports = function(s) {
        return l ? g.createElement(s) : {};
      };
    }, ce4e: function(a, r, o) {
      var t = o("da84"), n = o("9112");
      a.exports = function(g, l) {
        try {
          n(t, g, l);
        } catch (s) {
          t[g] = l;
        }
        return l;
      };
    }, d012: function(a, r) {
      a.exports = {};
    }, d039: function(a, r) {
      a.exports = function(o) {
        try {
          return !!o();
        } catch (t) {
          return !0;
        }
      };
    }, d066: function(a, r, o) {
      var t = o("428f"), n = o("da84"), g = function(l) {
        return typeof l == "function" ? l : void 0;
      };
      a.exports = function(l, s) {
        return arguments.length < 2 ? g(t[l]) || g(n[l]) : t[l] && t[l][s] || n[l] && n[l][s];
      };
    }, d1e7: function(a, r, o) {
      var t = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, g = n && !t.call({ 1: 2 }, 1);
      r.f = g ? function(l) {
        var s = n(this, l);
        return !!s && s.enumerable;
      } : t;
    }, d28b: function(a, r, o) {
      var t = o("746f");
      t("iterator");
    }, d2bb: function(a, r, o) {
      var t = o("825a"), n = o("3bbe");
      a.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var g, l = !1, s = {};
        try {
          g = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, g.call(s, []), l = s instanceof Array;
        } catch (d) {
        }
        return function(d, i) {
          return t(d), n(i), l ? g.call(d, i) : d.__proto__ = i, d;
        };
      }() : void 0);
    }, d3b7: function(a, r, o) {
      var t = o("00ee"), n = o("6eeb"), g = o("b041");
      t || n(Object.prototype, "toString", g, { unsafe: !0 });
    }, d44e: function(a, r, o) {
      var t = o("9bf2").f, n = o("5135"), g = o("b622"), l = g("toStringTag");
      a.exports = function(s, d, i) {
        s && !n(s = i ? s : s.prototype, l) && t(s, l, { configurable: !0, value: d });
      };
    }, da84: function(a, r, o) {
      (function(t) {
        var n = function(g) {
          return g && g.Math == Math && g;
        };
        a.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof t == "object" && t) || function() {
          return this;
        }() || Function("return this")();
      }).call(this, o("c8ba"));
    }, ddb0: function(a, r, o) {
      var t = o("da84"), n = o("fdbc"), g = o("e260"), l = o("9112"), s = o("b622"), d = s("iterator"), i = s("toStringTag"), f = g.values;
      for (var h in n) {
        var p = t[h], b = p && p.prototype;
        if (b) {
          if (b[d] !== f)
            try {
              l(b, d, f);
            } catch (S) {
              b[d] = f;
            }
          if (b[i] || l(b, i, h), n[h]) {
            for (var y in g)
              if (b[y] !== g[y])
                try {
                  l(b, y, g[y]);
                } catch (S) {
                  b[y] = g[y];
                }
          }
        }
      }
    }, df75: function(a, r, o) {
      var t = o("ca84"), n = o("7839");
      a.exports = Object.keys || function(g) {
        return t(g, n);
      };
    }, e01a: function(a, r, o) {
      var t = o("23e7"), n = o("83ab"), g = o("da84"), l = o("5135"), s = o("861d"), d = o("9bf2").f, i = o("e893"), f = g.Symbol;
      if (n && typeof f == "function" && (!("description" in f.prototype) || f().description !== void 0)) {
        var h = {}, p = function() {
          var x = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), v = this instanceof p ? new f(x) : x === void 0 ? f() : f(x);
          return x === "" && (h[v] = !0), v;
        };
        i(p, f);
        var b = p.prototype = f.prototype;
        b.constructor = p;
        var y = b.toString, S = String(f("test")) == "Symbol(test)", j = /^Symbol\((.*)\)[^)]+$/;
        d(b, "description", { configurable: !0, get: function() {
          var x = s(this) ? this.valueOf() : this, v = y.call(x);
          if (l(h, x))
            return "";
          var T = S ? v.slice(7, -1) : v.replace(j, "$1");
          return T === "" ? void 0 : T;
        } }), t({ global: !0, forced: !0 }, { Symbol: p });
      }
    }, e163: function(a, r, o) {
      var t = o("5135"), n = o("7b0b"), g = o("f772"), l = o("e177"), s = g("IE_PROTO"), d = Object.prototype;
      a.exports = l ? Object.getPrototypeOf : function(i) {
        return i = n(i), t(i, s) ? i[s] : typeof i.constructor == "function" && i instanceof i.constructor ? i.constructor.prototype : i instanceof Object ? d : null;
      };
    }, e177: function(a, r, o) {
      var t = o("d039");
      a.exports = !t(function() {
        function n() {
        }
        return n.prototype.constructor = null, Object.getPrototypeOf(new n()) !== n.prototype;
      });
    }, e260: function(a, r, o) {
      var t = o("fc6a"), n = o("44d2"), g = o("3f8c"), l = o("69f3"), s = o("7dd0"), d = "Array Iterator", i = l.set, f = l.getterFor(d);
      a.exports = s(Array, "Array", function(h, p) {
        i(this, { type: d, target: t(h), index: 0, kind: p });
      }, function() {
        var h = f(this), p = h.target, b = h.kind, y = h.index++;
        return !p || y >= p.length ? (h.target = void 0, { value: void 0, done: !0 }) : b == "keys" ? { value: y, done: !1 } : b == "values" ? { value: p[y], done: !1 } : { value: [y, p[y]], done: !1 };
      }, "values"), g.Arguments = g.Array, n("keys"), n("values"), n("entries");
    }, e538: function(a, r, o) {
      var t = o("b622");
      r.f = t;
    }, e893: function(a, r, o) {
      var t = o("5135"), n = o("56ef"), g = o("06cf"), l = o("9bf2");
      a.exports = function(s, d) {
        for (var i = n(d), f = l.f, h = g.f, p = 0; p < i.length; p++) {
          var b = i[p];
          t(s, b) || f(s, b, h(d, b));
        }
      };
    }, e8b5: function(a, r, o) {
      var t = o("c6b6");
      a.exports = Array.isArray || function(n) {
        return t(n) == "Array";
      };
    }, e95a: function(a, r, o) {
      var t = o("b622"), n = o("3f8c"), g = t("iterator"), l = Array.prototype;
      a.exports = function(s) {
        return s !== void 0 && (n.Array === s || l[g] === s);
      };
    }, f5df: function(a, r, o) {
      var t = o("00ee"), n = o("c6b6"), g = o("b622"), l = g("toStringTag"), s = n(function() {
        return arguments;
      }()) == "Arguments", d = function(i, f) {
        try {
          return i[f];
        } catch (h) {
        }
      };
      a.exports = t ? n : function(i) {
        var f, h, p;
        return i === void 0 ? "Undefined" : i === null ? "Null" : typeof (h = d(f = Object(i), l)) == "string" ? h : s ? n(f) : (p = n(f)) == "Object" && typeof f.callee == "function" ? "Arguments" : p;
      };
    }, f772: function(a, r, o) {
      var t = o("5692"), n = o("90e3"), g = t("keys");
      a.exports = function(l) {
        return g[l] || (g[l] = n(l));
      };
    }, fae3: function(a, r, o) {
      if (o.r(r), o.d(r, "VueEternalLoading", function() {
        return M;
      }), typeof window != "undefined") {
        var t = window.document.currentScript, n = o("8875");
        t = n(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: n });
        var g = t && t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        g && (o.p = g[1]);
      }
      var l = o("8bbf"), s = { class: "vue-eternal-loading", ref: "rootRef" }, d = Object(l.createVNode)("div", { class: "loading" }, "Loading...", -1), i = Object(l.createVNode)("div", { class: "no-more" }, "No more.", -1), f = Object(l.createVNode)("div", { class: "no-results" }, "No results.", -1), h = Object(l.createVNode)("div", { class: "error" }, "Error.", -1);
      function p(m, E, C, L, F, V) {
        return Object(l.openBlock)(), Object(l.createBlock)("div", s, [m.state === "loading" ? Object(l.renderSlot)(m.$slots, "loading", Object(l.mergeProps)({ key: 0 }, { isFirstLoad: m.isFirstLoad }), function() {
          return [d];
        }) : m.state === "no-more" ? Object(l.renderSlot)(m.$slots, "no-more", Object(l.mergeProps)({ key: 1 }, { retry: m.retry }), function() {
          return [i];
        }) : m.state === "no-results" ? Object(l.renderSlot)(m.$slots, "no-results", Object(l.mergeProps)({ key: 2 }, { retry: m.retry }), function() {
          return [f];
        }) : m.state === "error" ? Object(l.renderSlot)(m.$slots, "error", Object(l.mergeProps)({ key: 3 }, { retry: m.retry }), function() {
          return [h];
        }) : Object(l.createCommentVNode)("", !0)], 512);
      }
      function b(m) {
        if (Array.isArray(m))
          return m;
      }
      o("a4d3"), o("e01a"), o("d3b7"), o("d28b"), o("e260"), o("3ca3"), o("ddb0");
      function y(m, E) {
        var C = m == null ? null : typeof Symbol != "undefined" && m[Symbol.iterator] || m["@@iterator"];
        if (C != null) {
          var L, F, V = [], B = !0, J = !1;
          try {
            for (C = C.call(m); !(B = (L = C.next()).done) && (V.push(L.value), !(E && V.length === E)); B = !0)
              ;
          } catch (oo) {
            J = !0, F = oo;
          } finally {
            try {
              B || C.return == null || C.return();
            } finally {
              if (J)
                throw F;
            }
          }
          return V;
        }
      }
      o("fb6a"), o("b0c0"), o("a630");
      function S(m, E) {
        (E == null || E > m.length) && (E = m.length);
        for (var C = 0, L = new Array(E); C < E; C++)
          L[C] = m[C];
        return L;
      }
      function j(m, E) {
        if (m) {
          if (typeof m == "string")
            return S(m, E);
          var C = Object.prototype.toString.call(m).slice(8, -1);
          return C === "Object" && m.constructor && (C = m.constructor.name), C === "Map" || C === "Set" ? Array.from(m) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? S(m, E) : void 0;
        }
      }
      function x() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function v(m, E) {
        return b(m) || y(m, E) || j(m, E) || x();
      }
      function T(m) {
        return m.scrollHeight;
      }
      function P(m) {
        return m.scrollWidth;
      }
      function $(m, E) {
        m.scrollTop = m.scrollHeight - E + m.scrollTop;
      }
      function _(m, E) {
        m.scrollLeft = m.scrollWidth - E + m.scrollLeft;
      }
      var k = Object(l.defineComponent)({ name: "VueEternalLoading", props: { load: { required: !0, type: Function }, isInitial: { required: !1, type: Boolean, default: !0 }, position: { required: !1, type: String, default: "default" }, container: { required: !1, type: Object, default: null }, margin: { required: !1, type: String, default: void 0 } }, setup: function(m, E) {
        var C, L = Object(l.ref)(), F = Object(l.ref)("loading"), V = Object(l.ref)(m.isInitial), B = 0;
        function J() {
          Object(l.nextTick)(function() {
            var I;
            if (m.position === "top")
              $((I = m.container) !== null && I !== void 0 ? I : document.documentElement, B);
            else if (m.position === "left") {
              var Y;
              _((Y = m.container) !== null && Y !== void 0 ? Y : document.documentElement, B);
            }
          });
        }
        function oo(I, Y) {
          return I === 0 ? V.value ? (eo(), "no-results") : (N(), "no-more") : I !== void 0 && Y !== void 0 && I < Y ? (N(), "no-more") : (V.value = !1, J(), W(), "loading");
        }
        function N() {
          V.value = !1, R("no-more"), J();
        }
        function eo() {
          V.value = !1, R("no-results"), J();
        }
        function Z() {
          V.value = !1, R("error"), J();
        }
        function ro() {
          V.value = !0, R("loading"), W();
        }
        function G() {
          R("loading"), W();
        }
        function R(I) {
          F.value = I;
        }
        function so() {
          L.value && C.unobserve(L.value);
        }
        function W() {
          L.value && C.observe(L.value);
        }
        function ho() {
          return new IntersectionObserver(function(I) {
            var Y = v(I, 1), H = Y[0];
            if (H.isIntersecting) {
              var q;
              if (m.position === "top")
                B = T((q = m.container) !== null && q !== void 0 ? q : document.documentElement);
              else if (m.position === "left") {
                var to;
                B = P((to = m.container) !== null && to !== void 0 ? to : document.documentElement);
              }
              so(), m.load({ loaded: oo, noMore: N, noResults: eo, error: Z }, { isFirstLoad: V.value });
            }
          }, { root: m.container, threshold: 0, rootMargin: m.margin });
        }
        return Object(l.watchEffect)(function() {
          C && so(), C = ho(), W();
        }, { flush: "post" }), Object(l.watch)(function() {
          return m.isInitial;
        }, function(I) {
          I && ro();
        }), Object(l.watch)(V, function(I) {
          I || E.emit("update:isInitial", !1);
        }), { rootRef: L, state: F, isFirstLoad: V, retry: G };
      } });
      k.render = p;
      var M = k;
    }, fb6a: function(a, r, o) {
      var t = o("23e7"), n = o("861d"), g = o("e8b5"), l = o("23cb"), s = o("50c4"), d = o("fc6a"), i = o("8418"), f = o("b622"), h = o("1dde"), p = h("slice"), b = f("species"), y = [].slice, S = Math.max;
      t({ target: "Array", proto: !0, forced: !p }, { slice: function(j, x) {
        var v, T, P, $ = d(this), _ = s($.length), k = l(j, _), M = l(x === void 0 ? _ : x, _);
        if (g($) && (v = $.constructor, typeof v != "function" || v !== Array && !g(v.prototype) ? n(v) && (v = v[b], v === null && (v = void 0)) : v = void 0, v === Array || v === void 0))
          return y.call($, k, M);
        for (T = new (v === void 0 ? Array : v)(S(M - k, 0)), P = 0; k < M; k++, P++)
          k in $ && i(T, P, $[k]);
        return T.length = P, T;
      } });
    }, fc6a: function(a, r, o) {
      var t = o("44ad"), n = o("1d80");
      a.exports = function(g) {
        return t(n(g));
      };
    }, fdbc: function(a, r) {
      a.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, fdbf: function(a, r, o) {
      var t = o("4930");
      a.exports = t && !Symbol.sham && typeof Symbol.iterator == "symbol";
    } });
  });
})(qe);
const Jm = (e, c) => {
  const u = e.__vccOpts || e;
  for (const [a, r] of c)
    u[a] = r;
  return u;
}, Km = {
  name: "UniversalFontPicker",
  components: {
    vSelect: Wm,
    VueEternalLoading: qe.exports.VueEternalLoading
  },
  props: {
    placeholder: {
      type: String,
      default: "Search for a font"
    },
    modelValue: {
      type: String,
      required: !0
    }
  },
  data() {
    return {
      query: "",
      fonts: Object.keys(bf).map((e) => `${e}`),
      fetched: /* @__PURE__ */ new Set(),
      showing: 0
    };
  },
  computed: {
    filteredFonts() {
      return this.fonts.filter(
        (e) => e.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    fetchedFonts() {
      return this.filteredFonts.slice(0, this.showing);
    },
    internalModelValue() {
      return ce(this.modelValue);
    }
  },
  methods: {
    startCase: gm,
    kababCase: ce,
    onSearch(e) {
      this.showing = 0, this.query = e;
    },
    onLoadMore(e) {
      return Co(this, null, function* () {
        if (this.filteredFonts.length === 0) {
          e.noResults();
          return;
        }
        this.fetchedFonts.length >= this.filteredFonts.length && e.noMore();
        const c = this.fetchedFonts.length, u = c + 5, a = this.filteredFonts.slice(c, u).filter((r) => !this.fetched.has(r));
        a.forEach((r) => {
          this.fetched.add(r);
        });
        try {
          yield this.loadFonts(a);
        } finally {
          this.showing = u, e.loaded();
        }
      });
    },
    loadFonts(e) {
      return Co(this, null, function* () {
        return e.map((c) => {
          const u = document.getElementsByTagName("HEAD")[0], a = document.createElement("link");
          a.rel = "stylesheet", a.type = "text/css", a.href = `https://cdn.jsdelivr.net/npm/@fontsource/${c}/index.css`, u.appendChild(a);
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
};
function Zm(e, c, u, a, r, o) {
  const t = Qo("vue-eternal-loading"), n = Qo("v-select");
  return D(), yo(n, {
    class: "universal-font-picker",
    placeholder: u.placeholder,
    options: o.fetchedFonts,
    filterable: !1,
    clearable: !1,
    onSearch: o.onSearch,
    modelValue: o.internalModelValue,
    "onUpdate:modelValue": c[0] || (c[0] = (g) => e.$emit("update:modelValue", o.startCase(g)))
  }, {
    "selected-option": vo((g) => [
      (D(), K("div", {
        class: "universal-font-picker__selected-option",
        style: Xo({ "font-family": o.startCase(g.label) }),
        key: g.label
      }, ko(g.label), 5))
    ]),
    option: vo((g) => [
      (D(), K("div", {
        class: "universal-font-picker__option",
        style: Xo({ "font-family": o.startCase(g.label) }),
        key: g.label
      }, ko(g.label), 5))
    ]),
    "list-footer": vo(() => [
      he(t, { load: o.onLoadMore }, null, 8, ["load"])
    ]),
    _: 1
  }, 8, ["placeholder", "options", "onSearch", "modelValue"]);
}
const Xm = /* @__PURE__ */ Jm(Km, [["render", Zm], ["__scopeId", "data-v-cac9226a"]]);
export {
  Xm as default
};
