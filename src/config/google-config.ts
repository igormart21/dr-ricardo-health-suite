// Configuração para integração com Google Meu Negócio
// Para ativar a integração real, configure as credenciais abaixo

export const GOOGLE_CONFIG = {
  // Substitua pelo seu Place ID do Google Meu Negócio
  // Encontre em: https://developers.google.com/maps/documentation/places/web-service/place-id
  PLACE_ID: "YOUR_PLACE_ID_HERE",
  
  // Substitua pela sua API Key do Google Cloud Console
  // Crie em: https://console.cloud.google.com/
  API_KEY: "YOUR_GOOGLE_API_KEY_HERE",
  
  // URL da API do Google Places
  API_URL: "https://maps.googleapis.com/maps/api/place/details/json",
  
  // Campos que serão buscados da API
  FIELDS: "reviews,rating,user_ratings_total"
};

// Instruções para configuração:
// 1. Acesse https://console.cloud.google.com/
// 2. Crie um novo projeto ou selecione um existente
// 3. Ative a "Places API" na biblioteca de APIs
// 4. Crie uma credencial do tipo "API Key"
// 5. Encontre o Place ID do seu negócio em: https://developers.google.com/maps/documentation/places/web-service/place-id
// 6. Substitua os valores acima pelas suas credenciais
// 7. Descomente as linhas no TestimonialsSection.tsx para ativar a integração real
