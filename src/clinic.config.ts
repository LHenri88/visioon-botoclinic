export const CLINIC = {
  "slug": "botoclinic",
  "name": "Botoclinic",
  "tagline": "A maior rede de harmonização facial do Brasil",
  "slogan": "Cuidar de você é o primeiro passo",
  "hero_headline_real": "Cuidar de você é o primeiro passo",
  "domain": "botoclinic.com",
  "email": "contato@botoclinic.com",
  "city": "Rede nacional · BR",
  "category": "Harmonização Facial · Rede Nacional",
  "primary_procedure": "botox",
  "brand": {
    "primary": "#E94560",
    "secondary": "#16213E",
    "accent": "#F9DC5C",
    "ink": "#0F1027",
    "paper": "#FFFFFF",
    "font_display": "'Sora', sans-serif",
    "font_body": "'Inter', sans-serif",
    "logo_glyph": "B"
  },
  "tone_of_voice": "Acessível-massivo. Fala de jornada da beleza, comunidade, avaliação gratuita. Marketing escalável.",
  "icp": "25-45 ambos os sexos, classe B/C+, decisão por preço + agenda + confiança de marca.",
  "sections": [
    "Hero",
    "BestSellers",
    "Procedures",
    "Simulator",
    "Testimonials",
    "Pricing",
    "Schedule",
    "Footer",
    "ChatWidget"
  ],
  "hero": {
    "kicker": "A maior rede de harmonização facial do Brasil",
    "headline": "Cuidar de você é o primeiro passo. Veja antes de aplicar.",
    "sub": "Avaliação gratuita, parcelamento facilitado e pré-visualização IA — agora a jornada da beleza começa antes mesmo da consulta."
  },
  "cta_primary": "Simular agora",
  "chat_persona": "Sou a Mel, da Botoclinic. Te mostro preços, parcelamento e unidade mais próxima em 2 minutos.",
  "procedures": [
    "botox",
    "preenchimento-labial",
    "harmonizacao-facial",
    "bioestimulador"
  ],
  "procedure_details": [
    {
      "id": "botox",
      "name": "Toxina Botulínica",
      "desc": "O fim das rugas e linhas de expressão.",
      "img": "/img/servico-3-41abe4.png"
    },
    {
      "id": "preenchimento-labial",
      "name": "Preenchimento",
      "desc": "Lábios, olheiras, mandíbula e mais.",
      "img": "/img/servico-1-07b094.png"
    },
    {
      "id": "harmonizacao-facial",
      "name": "Ultraformer III",
      "desc": "Efeito lifting e combate à flacidez da sua pele.",
      "img": "/img/servico-2-c27f56.jpg"
    },
    {
      "id": "bioestimulador",
      "name": "Bioestimulador",
      "desc": "Estimule o colágeno natural da sua pele.",
      "img": "/img/servico-4-756659.png"
    }
  ],
  "best_sellers": [
    "Toxina Botulínica",
    "Preenchimento Labial",
    "Bioestimulador",
    "Ultraformer III"
  ],
  "pricing": {
    "title": "Avaliação gratuita · parcelamento sem juros",
    "sub": "Acreditamos na transformação positiva que a jornada da beleza pode proporcionar.",
    "highlights": [
      "Avaliação clínica 100% gratuita",
      "Parcelamento próprio em até 12x sem juros",
      "B Club: benefícios exclusivos para membros",
      "Unidades em todas as capitais"
    ]
  },
  "testimonials_real": [
    {
      "text": "Atendimento maravilhoso, os profissionais são excelentes.",
      "author": "Jairo de Cassio Pereira · Jundiaí · SP"
    },
    {
      "text": "Fui muito bem recepcionada, muito profissionalismo e ambiente acolhedor.",
      "author": "Bárbara Freitas Guimarães · Recife · PE"
    },
    {
      "text": "Sempre muito bem atendida, profissionais super capacitadas.",
      "author": "Soraya Lapa · São Paulo · SP"
    }
  ],
  "images": {
    "hero": "/img/sobre-cdc284.png",
    "promo_banners": [
      "/img/Banner-wellness-spa-3-19c56b.png",
      "/img/banner-app-desktop-374aa8.png"
    ],
    "procedures": {
      "botox": "/img/servico-3-41abe4.png",
      "harmonizacao-facial": "/img/servico-2-c27f56.jpg",
      "preenchimento-labial": "/img/servico-1-07b094.png",
      "bioestimulador": "/img/servico-4-756659.png"
    }
  }
} as const;
export type ClinicConfig = typeof CLINIC;
