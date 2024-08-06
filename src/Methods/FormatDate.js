function formatDate(dateString) {
      // Boşlukları kaldır
      dateString = dateString.trim();
      // Tarih stringini parçalara ayır
      const year = dateString.slice(0, 2);
      const month = dateString.slice(2, 4);
      const day = dateString.slice(4, 6);
    
      // Sabit bir yıl aralığı varsayalım (örneğin, 1900-2099)
      const fullYear = '20' + year; // 21. yüzyıl için
    
      // Sıfır ekleme
      const formattedMonth = month.padStart(2, '0');
      const formattedDay = day.padStart(2, '0');
    
      // Formatlanmış tarihi döndür
      return `${formattedDay}/${formattedMonth}/${fullYear}`;
    }


export { formatDate };
