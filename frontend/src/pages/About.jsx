import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-[2rem] mt-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img alt="Comfort and Care" className="w-full h-full object-cover" data-alt="Gentle hands of a caregiver holding an elderly hand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPB8-hubqAtn1wY4jvt170C01KOLP77_0DQUOYgwUuDPklmzquKDQew8ijfcdisrLwCG79NQ66TR89JsA7FvRcAQudE6QcJUYGkY_CIjmdD9tUmHIzu3ypJDq61kq2ud0lEekShRY8hp3eguUNzotfk7mcGZrYD-jQbkFq75Xf_JOTw-415FHp3rrilU51St-PiruIUnxuB5FmBMfLRgC92enNRLF3WgH_GAfgUSxJsMDd3eTYvsjeiksSVqbBJmsGR_Jf01lhuA" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Dignity in Every Detail
          </h1>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
            At Fabby, we believe that high-quality essentials are more than just products—they are a commitment to comfort, respect, and the human spirit.
          </p>
          <div className="flex gap-4 justify-center">
            <span className="material-symbols-outlined text-white text-4xl animate-bounce">keyboard_double_arrow_down</span>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest">
            Our Mission
          </div>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Restoring comfort where it matters most.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fabby was born from a simple observation: the items we use every day in care environments often lack the warmth and quality that foster true well-being.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to bridge that gap. We design and source essentials that provide unparalleled comfort through thoughtful design and compassionate care, ensuring that every individual feels valued and protected.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="p-3 rounded-full bg-[var(--color-accent-green)] text-green-800">
              <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Care-First Philosophy</h4>
              <p className="text-sm text-slate-500">Every thread is chosen with the end-user in mind.</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[var(--color-primary)]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
          <img alt="Quality Fabrics" className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover" data-alt="Soft high-quality textile textures in sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAydZMq2uJWqb1VAMP14fusqvJd-PZqkGx0YhTLjglQCSj7icywOd80ah9BWrbSk4urkD6r3cQNMIbGFibsJjxL37eXIHesHxLRKpoHX8nFC6IcLCWwIfG6Xam7AbrYqouUGeHoNRSK3DVvullF8Zh-yfubr1VEDl9rTGajniszH1lCZTD02OX5Zx8DWInF1UZ7ej5CMBXuTw3WiRmFSJ64kJBpu3Tfj43JNNXqjmnkWHL9umkLqJa2Sbhwyw8oNDRJ4_yq8ngxEw" />
        </div>
      </section>

      {/* Our Quality Standards */}
      <section className="py-24 bg-[var(--color-accent-blue)]/50 rounded-[3rem] px-6 my-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Quality Standards</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl mb-6">workspace_premium</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Premium Materials</h3>
              <p className="text-slate-600">We source only the finest, hypoallergenic fabrics that are gentle on sensitive skin and durable for long-term use.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--color-primary)]">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl mb-6">biotech</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Thoughtful Design</h3>
              <p className="text-slate-600">Our ergonomic designs are tested in real-world care settings to ensure maximum functionality without compromising on style.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl mb-6">verified_user</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Ethical Sourcing</h3>
              <p className="text-slate-600">We maintain transparency throughout our supply chain, ensuring that dignity is maintained for workers as well as users.</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[var(--color-primary)] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Bring Comfort Home Today</h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto relative z-10">
            Explore our curated collection of essentials designed to nurture, protect, and empower.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link to="/collection" className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
              View Our Products
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
