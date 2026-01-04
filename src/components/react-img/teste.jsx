//  exporta todas as imagens JPG e JPEG do diretório especificado 

const images = import.meta.glob('../react-img/*.{jpg,jpeg}', {
  eager: true,
});

// Converte o objeto em array de URLs
const imageList = Object.values(images).map((img) => img.default);

export default imageList;
