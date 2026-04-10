export interface Property {
  id: string;
  title: string;
  status: 'Lancamento' | 'Pronto' | 'Construcao' | 'Vendido';
  address: string;
  city: string;
  beds: number;
  price: number;
  image: string;
  slug: string;
}

export const propertiesMock: Property[] = [
  {
    id: "1",
    title: "Loteamento Arvoredo Fase 2",
    status: "Construcao",
    address: "Av. Brasil",
    city: "Pinheiral",
    beds: 3,
    price: 350000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20241121172543_673f97470fbbe.jpg",
    slug: "loteamento-arvoredo-fase-2"
  },
  {
    id: "2",
    title: "Loteamento Mirante do Bosque",
    status: "Pronto",
    address: "Mirante do Bosque",
    city: "Volta Redonda",
    beds: 2,
    price: 450000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20250528170710_68376ceee05d0.png",
    slug: "loteamento-mirante-do-bosque"
  },
  {
    id: "3",
    title: "Casas Pinheiral - Fase 02",
    status: "Lancamento",
    address: "Rua Lilia Gomes Ribeiro, Bela Vista",
    city: "Pinheiral",
    beds: 2,
    price: 250000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20240415162453_661d7f05c928c.jpg",
    slug: "casas-pinheiral-fase-02"
  },
  {
    id: "4",
    title: "Casas Mirante",
    status: "Lancamento",
    address: "Rua F, Loteamento Mirante do Bosque",
    city: "Volta Redonda",
    beds: 3,
    price: 520000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20231228223916_658e2344be366.png",
    slug: "casas-mirante"
  },
  {
    id: "5",
    title: "Casas Pinheiral - Loteamento Arvoredo",
    status: "Vendido",
    address: "Rua Lilia Gomes Ribeiro, Bela Vista",
    city: "Pinheiral",
    beds: 2,
    price: 220000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20221222173600_63a4bfb0c071e.png",
    slug: "casas-pinheiral-loteamento-arvoredo"
  },
  {
    id: "6",
    title: "Village Retiro",
    status: "Pronto",
    address: "Av. Maranhão, nº 170, Retiro",
    city: "Volta Redonda",
    beds: 1,
    price: 180000,
    image: "/sgw.aceplanvr.com.br/storage/empreendimento/20241030165430_67228ef6d2b9d.jpg",
    slug: "village-retiro"
  }
];

export const getStatusLabel = (status: Property['status']) => {
  switch (status) {
    case 'Lancamento': return 'Lançamento';
    case 'Pronto': return 'Pronto para Morar';
    case 'Construcao': return 'Em construção';
    case 'Vendido': return '100% Vendido';
  }
};

export const getStatusColor = (status: Property['status']) => {
  switch (status) {
    case 'Lancamento': return 'bg-cyan-500';
    case 'Pronto': return 'bg-green-500';
    case 'Construcao': return 'bg-brand-orange';
    case 'Vendido': return 'bg-gray-500';
  }
};
