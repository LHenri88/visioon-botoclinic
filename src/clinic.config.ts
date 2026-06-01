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
      "img": "https://botoclinic.com/wp-content/uploads/2025/11/servico-3.png"
    },
    {
      "id": "preenchimento-labial",
      "name": "Preenchimento",
      "desc": "Lábios, olheiras, mandíbula e mais.",
      "img": "https://botoclinic.com/wp-content/uploads/2025/11/servico-1.png"
    },
    {
      "id": "harmonizacao-facial",
      "name": "Ultraformer III",
      "desc": "Efeito lifting e combate à flacidez da sua pele.",
      "img": "https://botoclinic.com/wp-content/uploads/2025/11/servico-2.jpg"
    },
    {
      "id": "bioestimulador",
      "name": "Bioestimulador",
      "desc": "Estimule o colágeno natural da sua pele.",
      "img": "https://botoclinic.com/wp-content/uploads/2025/11/servico-4.png"
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
    "hero": "https://botoclinic.com/wp-content/uploads/2025/11/sobre.png",
    "promo_banners": [
      "https://botoclinic.com/wp-content/uploads/2026/01/Banner-wellness-spa_3.png",
      "https://botoclinic.com/wp-content/uploads/2025/12/banner-app_desktop.png"
    ],
    "procedures": {
      "botox": "https://botoclinic.com/wp-content/uploads/2025/11/servico-3.png",
      "harmonizacao-facial": "https://botoclinic.com/wp-content/uploads/2025/11/servico-2.jpg",
      "preenchimento-labial": "https://botoclinic.com/wp-content/uploads/2025/11/servico-1.png",
      "bioestimulador": "https://botoclinic.com/wp-content/uploads/2025/11/servico-4.png"
    }
  }
} as const;
export type ClinicConfig = typeof CLINIC;
