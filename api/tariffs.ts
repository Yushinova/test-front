export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

/**
 * Получает список тарифов с сервера
 * @returns Promise с массивом тарифов
 */
export async function fetchTariffs(): Promise<Tariff[]> {
  try {
    const response = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Tariff[] = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке тарифов:', error);
    //Можно пробросить ошибку дальше или вернуть пустой массив
    throw error; //Пробрасываем, чтобы обработать в компоненте
  }
}