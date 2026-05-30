import React from 'react'

export default function PaperTailLandingPage() {
  const products = [
    { name: 'Custom Notepad', desc: '50 tear-off sheets with your pet', price: '$14.99', bg: '#CFE3D1', pet: '🐕', type: 'notepad' },
    { name: 'Personalized Notebook', desc: '80 lined pages with your pet cover', price: '$24.99', bg: '#FFD0CC', pet: '🐶', type: 'spiral' },
    { name: 'Gift Cards Set', desc: 'Set of 8 cards with envelopes', price: '$15.99', bg: '#F7D8B8', pet: '🐕', type: 'cards' },
    { name: 'Memo Cards', desc: 'Set of 50 mini memo cards', price: '$14.99', bg: '#FFC8C6', pet: '🐱', type: 'memo' },
    { name: 'Greeting Cards', desc: 'Custom pet greeting cards', price: '$14.99', bg: '#FFE2C1', pet: '🐶', type: 'greeting' },
    { name: 'Sticker Sheets', desc: 'High-quality vinyl sticker sheet', price: '$12.99', bg: '#FFDCCF', pet: '🐾', type: 'stickers' }
  ]

  const testimonials = [
    ['Jessica M.', 'Dog Mom', 'The notebook is absolutely adorable! It looks exactly like my dog. I use it every day!'],
    ['Daniel K.', 'Cat Dad', 'Best gift I ever gave my sister! The custom art is so cute and the quality is amazing.'],
    ['Megan R.', 'Poodle Mom', 'The little details are perfect. It made me cry. Thank you Paper Tail!']
  ]

  return (
    <main className="paper-tail-page min-h-screen bg-[#FFF8F0] text-[#2D2D2D] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Serif+Display&display=swap');
        .paper-tail-page { font-family: 'Poppins', sans-serif; }
        .brand-serif { font-family: 'DM Serif Display', serif; }
        html { scroll-behavior: smooth; }
        @keyframes float-paw { 0%, 100% { transform: translateY(0) rotate(0deg); opacity: .18; } 50% { transform: translateY(-10px) rotate(6deg); opacity: .32; } }
        @keyframes float-star { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.12); } }
        .paw-bg { position:absolute; color:#FFB39F; font-size:38px; animation: float-paw 4s ease-in-out infinite; pointer-events:none; }
        .star-bg { position:absolute; color:#F4C430; font-size:26px; animation: float-star 3s ease-in-out infinite; pointer-events:none; }
        .soft-shadow { box-shadow: 0 14px 35px rgba(50, 32, 20, .08); }
        .card-shadow { box-shadow: 0 10px 22px rgba(50, 32, 20, .08); }
        .product-img { height: 168px; border-radius: 10px 10px 0 0; position: relative; overflow: hidden; display: grid; place-items: center; }
        .product-img:before { content:''; position:absolute; inset:18px; border-radius:12px; background:rgba(255,255,255,.35); }
        .paper-lines:after { content:''; position:absolute; left:28px; right:28px; top:48px; bottom:18px; background:repeating-linear-gradient(to bottom, transparent 0 16px, rgba(70,70,70,.14) 17px); }
        .hero-product { filter: drop-shadow(0 24px 28px rgba(50,32,20,.18)); }
        .spiral:before { content:''; position:absolute; left:-7px; top:18px; bottom:18px; width:18px; border-radius:20px; background:repeating-linear-gradient(to bottom, #2c241d 0 5px, transparent 5px 15px); z-index:20; }
        @media (max-width: 900px) { .hero-visual { transform: scale(.82); transform-origin:center top; height:360px!important; } }
      `}</style>

      {/* Header */}
      <header className="h-[82px] bg-[#FFF8F0]/95 backdrop-blur border-b border-[#ECDCCE] sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto h-full px-5 flex items-center justify-between gap-5">
          <div className="relative w-[210px] h-[58px] shrink-0">
            <div className="brand-serif text-[42px] leading-none text-[#FF6B6B] tracking-[-1.4px] absolute left-0 top-0">Paper Tail</div>
            <div className="absolute left-[143px] top-[-3px] text-[#F4C430] text-[18px]">🐾</div>
            <div className="absolute left-[66px] bottom-[4px] w-[100px] h-[3px] bg-[#5DA783] rounded-full rotate-[3deg]"></div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-[#201F1E]">
            <a href="#products">Shop⌄</a>
            <a href="#how">How It Works</a>
            <a href="#styles">Art Styles</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#about">About Us</a>
          </nav>

          <div className="hidden md:flex items-center gap-5 text-[25px] text-[#201F1E]">
            <span className="leading-none">⌕</span>
            <span className="leading-none">♙</span>
            <span className="relative text-[22px] leading-none">▢<small className="absolute -right-2 -top-2 bg-[#FF6B6B] text-white rounded-full text-[8px] w-4 h-4 grid place-items-center font-bold">0</small></span>
          </div>

          <button className="bg-[#FF6B6B] text-white px-7 py-3 rounded-lg font-bold text-[14px] shadow-lg hover:scale-105 transition-transform">
            Order Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#FFF8F0] min-h-[455px] border-b border-[#EFE3D6]">
        <span className="star-bg left-[3%] top-[70px]">✦</span>
        <span className="star-bg left-[4%] top-[240px]">✦</span>
        <span className="paw-bg left-[8%] top-[125px]">🐾</span>
        <span className="paw-bg left-[3%] top-[190px]">🐾</span>
        <span className="paw-bg left-[3%] bottom-[28px]">🐾</span>
        <span className="paw-bg left-[44%] top-[70px]">🐾</span>
        <span className="paw-bg right-[3%] top-[55px]">🐾</span>
        <span className="paw-bg right-[2%] bottom-[45px]">🐾</span>
        <span className="star-bg right-[8%] top-[80px]">✦</span>
        <span className="star-bg right-[5%] top-[150px]">✦</span>

        <div className="max-w-[1180px] mx-auto px-5 grid lg:grid-cols-[42%_58%] min-h-[455px] items-center gap-4">
          <div className="pt-8 pb-8">
            <h1 className="brand-serif text-[#FF6B6B] text-[56px] md:text-[72px] leading-[.93] tracking-[-1.8px] mb-5">
              Your Pet,<br />On Every Page.
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A4A4A] max-w-[480px] mb-7">
              Custom stationery featuring your fur baby in adorable chibi, caricature & cartoon art.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-[#FF6B6B] text-white px-8 py-4 rounded-lg font-bold text-[15px] shadow-lg hover:scale-105 transition">🐾 Upload Your Pet</button>
              <button className="bg-white/70 border-2 border-[#FF6B6B] text-[#FF6B6B] px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-[#FF6B6B] hover:text-white transition">▷ See How It Works</button>
            </div>
            <div className="flex flex-wrap gap-4">
              {['🐾 100% Personalized','🎁 Perfect Gift','✨ Chibi • Caricature • Cartoon'].map((badge) => (
                <div key={badge} className="bg-white rounded-full px-5 py-3 text-[13px] font-medium border border-[#EFE0D2] soft-shadow">{badge}</div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative h-[420px] hidden md:block">
            <div className="absolute left-[135px] top-[24px] w-[420px] h-[300px] bg-[#FF9A8C]/62 rounded-[45%]"></div>
            <div className="absolute left-[205px] bottom-[42px] w-[205px] h-[120px] bg-[#F7C552]/45 rounded-full"></div>
            <div className="absolute right-[0px] bottom-[90px] w-[175px] h-[175px] bg-[#70B78E]/65 rounded-full"></div>

            <div className="hero-product spiral absolute left-[120px] top-[52px] w-[210px] h-[300px] bg-gradient-to-br from-[#C9DAC4] to-[#F5D4A6] rounded-[13px] rotate-[-6deg] border border-white/70 p-5 overflow-hidden">
              <div className="brand-serif text-[28px] text-[#6C9B63] text-center mt-2">Notes</div>
              <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-[#B6D49D]/70 to-transparent"></div>
              <div className="absolute left-[49px] bottom-[45px] w-[112px] h-[112px] rounded-full bg-[#F0C46C] grid place-items-center text-[78px]">🐶</div>
            </div>

            <div className="hero-product paper-lines absolute left-[320px] top-[45px] w-[210px] h-[292px] bg-[#F5E8DE] rounded-[10px] rotate-[5deg] border border-white/70 overflow-hidden">
              <div className="relative z-10 mx-auto mt-[75px] w-[105px] h-[105px] rounded-full bg-[#F7D6C9] grid place-items-center text-[74px]">🐱</div>
            </div>

            <div className="hero-product paper-lines absolute right-[20px] top-[125px] w-[175px] h-[255px] bg-[#F4B1AE] rounded-[10px] rotate-[7deg] border border-white/70 overflow-hidden p-4">
              <div className="brand-serif relative z-10 text-white text-[25px] text-center mt-2">Quick Notes</div>
              <div className="absolute right-[28px] bottom-[55px] z-10 w-[82px] h-[82px] rounded-full bg-[#F2CB93] grid place-items-center text-[58px]">🐕</div>
            </div>

            <div className="hero-product absolute left-[360px] top-[235px] w-[218px] h-[125px] bg-[#FFD9A8] rounded-[9px] rotate-[1deg] border border-white/80 p-4">
              <div className="brand-serif text-[#F16D55] text-[29px] leading-[.88]">Thank<br/>You</div>
              <div className="text-[#F16D55] text-[12px]">so much!</div>
              <div className="absolute right-4 bottom-2 text-[72px]">🐶</div>
            </div>

            <div className="hero-product absolute right-[130px] bottom-[18px] w-[118px] h-[112px] bg-white rounded-[28px] rotate-[-8deg] border-[6px] border-[#FFE0DD] grid place-items-center text-[70px]">🐩</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-[#FFF8F0] border-b border-[#EFE3D6] py-4">
        <div className="max-w-[1040px] mx-auto px-5">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="text-[#6BA987] text-[30px]">❧</span>
            <h2 className="brand-serif text-[35px] text-[#2D2D2D] leading-none">How It Works</h2>
            <span className="text-[#6BA987] text-[30px]">❧</span>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-[56px] left-[29%] right-[29%] border-t-2 border-dashed border-[#FF6B6B]"></div>
            {[
              ['1', '📸', 'Upload your pet photo', 'Send us your favorite photo of your fur baby.'],
              ['2', '🎨', 'Choose your art style and product', 'Pick from chibi, caricature, or cartoon and select your favorite stationery.'],
              ['3', '📦', 'We create and ship your custom order!', 'Made with love and delivered right to your door.']
            ].map(([num, icon, title, desc]) => (
              <div key={num} className="relative bg-white rounded-xl h-[130px] p-5 flex items-center gap-4 border border-[#ECDCCE] card-shadow z-10">
                <div className="absolute -top-3 -left-3 bg-[#FF6B6B] text-white w-9 h-9 rounded-full grid place-items-center font-black text-lg">{num}</div>
                <div className="w-[70px] h-[70px] bg-[#FFE7D5] rounded-full grid place-items-center text-[34px] shrink-0">{icon}</div>
                <div>
                  <h3 className="text-[16px] font-black leading-tight mb-1">{title}</h3>
                  <p className="text-[12px] text-[#555] leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#FFF8F0] py-4 pb-10">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="text-center mb-5">
            <h2 className="brand-serif text-[32px] leading-none text-[#2D2D2D]"><span className="text-[#FF6B6B]">✦</span> Our Bestsellers <span className="text-[#FF6B6B]">✦</span></h2>
            <p className="text-[12px] text-[#555] mt-2">High-quality custom stationery made just for you and your pet.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl overflow-hidden border border-[#ECDCCE] card-shadow hover:-translate-y-1 transition-transform">
                <div className="product-img" style={{ background: product.bg }}>
                  <ProductArt product={product} />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-[12px] font-black mb-1">{product.name}</h3>
                  <p className="text-[11px] leading-tight text-[#555] min-h-[34px]">{product.desc}</p>
                  <p className="text-[13px] mt-2">From <span className="text-[#FF4A3F] font-black text-[16px]">{product.price}</span></p>
                  <button className="mt-2 w-full bg-[#FF6B6B] text-white rounded-md py-2 text-[12px] font-black hover:bg-[#ff554f] transition">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-[#FFF8F0] py-6 pb-12">
        <div className="max-w-[1040px] mx-auto px-5">
          <h2 className="brand-serif text-[34px] text-center mb-7"><span className="text-[#FF6B6B]">✦</span> Loved By Pet Parents <span className="text-[#FF6B6B]">✦</span></h2>
          <div className="relative">
            <button className="hidden md:grid absolute -left-14 top-1/2 -translate-y-1/2 bg-[#FF6B6B] text-white w-10 h-10 rounded-full place-items-center text-2xl">‹</button>
            <button className="hidden md:grid absolute -right-14 top-1/2 -translate-y-1/2 bg-[#FF6B6B] text-white w-10 h-10 rounded-full place-items-center text-2xl">›</button>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map(([name, role, quote]) => (
                <div key={name} className="bg-white rounded-xl p-7 border border-[#ECDCCE] card-shadow text-center">
                  <div className="text-[#F4C430] tracking-widest mb-3">★★★★★</div>
                  <p className="text-[13px] leading-relaxed text-[#4A4A4A] mb-5">{quote}</p>
                  <div className="flex items-center justify-center gap-3 text-left">
                    <div className="w-12 h-12 rounded-full bg-[#FFD4CA] grid place-items-center text-2xl">👩</div>
                    <div>
                      <h4 className="font-black text-[13px]">{name}</h4>
                      <p className="text-[11px] text-[#777]">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#E5D8CA] rounded-full"></span><span className="w-2 h-2 bg-[#FF6B6B] rounded-full"></span><span className="w-2 h-2 bg-[#E5D8CA] rounded-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Lower panel */}
      <section className="bg-[#FFF8F0] pb-8">
        <div className="max-w-[1160px] mx-auto px-5 grid lg:grid-cols-[1fr_1.6fr_1fr] gap-6 items-stretch">
          <div className="bg-white rounded-xl border border-[#ECDCCE] card-shadow p-6">
            <div className="text-5xl mb-2">🎁</div>
            <h3 className="brand-serif text-[24px] leading-tight mb-2">Get 15% Off<br/>Your First Order!</h3>
            <p className="text-[12px] text-[#555] mb-5">Join our pack and be the first to know about new designs, offers and more.</p>
            <div className="flex gap-2">
              <input className="flex-1 border border-[#E5D8CA] rounded-md px-3 py-2 text-[12px]" placeholder="Enter your email" />
              <button className="bg-[#FF6B6B] text-white rounded-md px-5 text-[12px] font-bold">Join Now</button>
            </div>
            <p className="text-[10px] text-[#999] text-center mt-3">We respect your privacy.</p>
          </div>

          <div className="bg-white rounded-xl border border-[#ECDCCE] card-shadow p-6 text-center">
            <h3 className="text-[14px] font-bold mb-5">Follow Us @papertail.co</h3>
            <div className="grid grid-cols-4 gap-4 mb-5">
              {['🐶','🐱','🐾','📒'].map((x, i) => (
                <div key={i} className="h-[86px] rounded-lg bg-[#FFE0D6] grid place-items-center text-4xl">{x}</div>
              ))}
            </div>
            <div className="flex justify-center gap-7 text-[#FF6B6B] text-xl">♪ ◎ ▶ ⓟ</div>
          </div>

          <div className="bg-white rounded-xl border border-[#ECDCCE] card-shadow p-6 relative">
            <button className="absolute right-4 top-3 text-[#aaa]">×</button>
            <h3 className="font-bold text-[16px]">Hi there! 👋</h3>
            <p className="text-[13px] text-[#555] mb-5">How can we help you today?</p>
            {['Order Status', 'Customization', 'Shipping Info'].map((item) => (
              <button key={item} className="block w-full rounded-full border border-[#E5D8CA] py-2 text-[12px] font-medium mb-2">○ {item}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#FFF8F0] border-t border-[#EFE3D6] py-8 pb-12">
        <div className="max-w-[1160px] mx-auto px-5 grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] gap-8">
          <div>
            <div className="relative w-[150px] h-[48px] mb-3">
              <div className="brand-serif text-[34px] text-[#FF6B6B] leading-none">Paper Tail</div>
              <span className="absolute left-[115px] top-[-4px] text-[#F4C430] text-sm">🐾</span>
              <div className="absolute left-[48px] bottom-[4px] h-[2px] w-[75px] bg-[#5DA783] rounded-full"></div>
            </div>
            <p className="text-[12px] text-[#555] max-w-[130px]">Stationery as unique as your pet.</p>
          </div>
          <FooterCol title="Shop" items={['All Products','Notebooks','Notepads','Cards','Stickers']} />
          <FooterCol title="Information" items={['How It Works','Shipping','Returns and Exchanges','Care Instructions','FAQ']} />
          <FooterCol title="Company" items={['About Us','Reviews','Contact Us','Privacy Policy','Terms of Service']} />
          <div>
            <h4 className="font-bold text-[13px] mb-2">Stay Connected</h4>
            <p className="text-[12px] text-[#555] mb-3">Get updates, exclusive offers and more!</p>
            <div className="flex gap-2 mb-4">
              <input className="flex-1 border border-[#E5D8CA] rounded-md px-3 py-2 text-[12px]" placeholder="Enter your email" />
              <button className="bg-[#FF6B6B] text-white rounded-md w-10">➤</button>
            </div>
            <div className="flex gap-4 text-[#6B4E3D]">◎ ♪ f ⓟ ✉</div>
          </div>
        </div>
        <p className="text-center text-[11px] text-[#777] mt-8">© 2026 Paper Tail Co. All rights reserved.</p>
      </footer>

      <button className="fixed right-7 bottom-5 bg-[#FF6B6B] text-white w-[62px] h-[62px] rounded-full shadow-2xl text-3xl z-50 hover:scale-105 transition">🐾</button>
    </main>
  )
}

function ProductArt({ product }) {
  if (product.type === 'stickers') {
    return <div className="relative z-10 grid grid-cols-3 gap-1 text-[26px] bg-white/60 rounded-xl p-3">{['🐶','🐱','🐕','🐩','🐾','🐈','🐶','🐱','🐕'].map((x, i) => <span key={i}>{x}</span>)}</div>
  }
  if (product.type === 'spiral') {
    return <div className="relative z-10 w-[98px] h-[125px] bg-[#F9C6B9] rounded-lg rotate-[-4deg] shadow-md grid place-items-center text-[54px] before:absolute before:left-[-7px] before:top-2 before:bottom-2 before:w-3 before:bg-[#2D2D2D] before:rounded-full">{product.pet}</div>
  }
  if (product.type === 'cards') {
    return <div className="relative z-10 flex gap-[-10px]"><div className="w-[74px] h-[105px] bg-[#6BA987] rounded-md rotate-[-8deg] grid place-items-center text-[40px] shadow-md">🐶</div><div className="w-[74px] h-[105px] bg-[#FFD7A6] rounded-md rotate-[8deg] grid place-items-center text-[40px] shadow-md -ml-6">🐱</div></div>
  }
  return <div className="relative z-10 w-[105px] h-[125px] bg-white/65 rounded-lg shadow-md paper-lines grid place-items-center text-[56px]">{product.pet}</div>
}

function FooterCol({ title, items }) {
  return <div><h4 className="font-bold text-[13px] mb-2">{title}</h4><ul className="space-y-1 text-[11px] text-[#555]">{items.map(item => <li key={item}>{item}</li>)}</ul></div>
}
