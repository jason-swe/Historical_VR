export const locations = [
  {
    id: 'stock-exchange',
    name: 'Sở giao dịch chứng khoán St. Petersburg',
    shortName: 'Sở giao dịch chứng khoán',
    coordinates: [59.9441, 30.3062],
    // Strelka (tip of Vasilyevsky Island) — excellent outdoor Street View coverage
    streetViewCoords: [59.9439, 30.3054],
    theme: 'Mâu thuẫn kinh tế',
    exhibitCode: 'GALLERY 01',
    accent: 'from-amber-300 to-orange-500',
    philosophy: [
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất',
    ],
    bannerImage: 'https://www.gpsmycity.com/img/gd_sight/5073.jpg',
    panoramaImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Menshikov_Palace_Ceremonial_Hall_360_panorama.jpg',
    description:
      'Khu vực mũi đảo Vasilyevsky và Sở giao dịch chứng khoán là biểu tượng của đời sống thương mại, tài chính và quan hệ kinh tế tại St. Petersburg trước cách mạng. Không gian này gợi mở mâu thuẫn giữa sự phát triển của sản xuất, trao đổi hàng hóa với trật tự xã hội cũ đang kìm hãm đời sống nhân dân.',
    philosophyContent:
      'Theo phép biện chứng duy vật, mâu thuẫn là nguồn gốc của vận động và phát triển. Khi lực lượng sản xuất biến đổi nhưng quan hệ sản xuất cũ không còn phù hợp, xung đột xã hội tích tụ. Cách mạng không xuất hiện như sự kiện ngẫu nhiên, mà là kết quả của những đối lập kinh tế - xã hội đã chín muồi.',
    infographic: {
      principle: 'Đối lập',
      catalyst: 'Khủng hoảng kinh tế',
      shift: 'Tích tụ xung đột',
      takeaway: 'Mâu thuẫn xã hội tạo động lực cho bước chuyển cách mạng.',
    },
    timeline: [
      {
        year: 'Đầu thế kỷ XX',
        event: 'St. Petersburg là trung tâm công nghiệp, thương mại và chính trị quan trọng của Đế quốc Nga.',
      },
      {
        year: '1914-1917',
        event: 'Chiến tranh, khủng hoảng kinh tế và thiếu hụt lương thực làm mâu thuẫn xã hội trở nên gay gắt.',
      },
      {
        year: '1917',
        event: 'Những đối lập giữa quyền lực cũ, tư sản và quần chúng lao động tạo tiền đề cho cao trào cách mạng.',
      },
    ],
    vrLink: 'https://maps.google.com/maps?q=&layer=c&cbll=59.9441,30.3062&cbp=11,105,0,0,80&output=svembed',
    hotspots: [
      {
        title: 'Bản chất ý thức',
        pitch: 5,
        yaw: 15,
        question: 'Theo quan điểm của triết học Mác - Lênin, bản chất của ý thức là gì?',
        content: 'Câu hỏi này nhấn vào định nghĩa duy vật biện chứng về ý thức, xem ý thức là sự phản ánh thế giới khách quan vào bộ óc con người.',
        options: [
          'Sự biểu hiện của một lực lượng siêu tự nhiên, thần bí',
          'Sự phản ánh tích cực, tự giác, sáng tạo thế giới khách quan vào bộ óc người',
          'Một dạng vật chất đặc biệt, tinh vi do bộ óc con người tiết ra',
        ],
        answer: 1,
        feedback: 'Đây là định nghĩa kinh điển về ý thức trong triết học Mác - Lênin.',
      },
      {
        title: 'Nguồn gốc ý thức',
        pitch: -2,
        yaw: 85,
        question: 'Theo chủ nghĩa duy vật biện chứng, nguồn gốc tự nhiên của ý thức gồm những yếu tố nào?',
        content: 'Ý thức không tự sinh ra từ ý niệm thuần túy mà gắn với nền tảng sinh học và quá trình phản ánh thế giới khách quan.',
        options: [
          'Lao động và ngôn ngữ',
          'Bộ óc người và sự phản ánh của thế giới khách quan vào bộ óc người',
          'Sự phát triển của các hình thái kinh tế - xã hội trong lịch sử',
        ],
        answer: 1,
        feedback: 'Nguồn gốc tự nhiên của ý thức gắn với bộ óc người và sự phản ánh hiện thực khách quan.',
      },
      {
        title: 'Vai trò vật chất',
        pitch: 10,
        yaw: 160,
        question: 'Vai trò quyết định của vật chất đối với ý thức thể hiện ở khía cạnh nào sau đây?',
        content: 'Vật chất là cơ sở sinh ra, quy định nội dung và biến đổi của ý thức.',
        options: [
          'Ý thức tự quyết định sự phát triển của mình mà không cần thế giới khách quan',
          'Vật chất quyết định nguồn gốc, nội dung và sự biến đổi của ý thức',
          'Ý thức sinh ra vật chất và làm thay đổi kết cấu vật lý của vật chất',
        ],
        answer: 1,
        feedback: 'Vật chất giữ vai trò quyết định đối với nguồn gốc, nội dung và sự biến đổi của ý thức.',
      },
      {
        title: 'Phương pháp luận',
        pitch: -8,
        yaw: 275,
        question: 'Ý nghĩa phương pháp luận quan trọng nhất rút ra từ mối quan hệ giữa vật chất và ý thức là gì?',
        content: 'Muốn hành động đúng phải xuất phát từ thực tế khách quan, đồng thời phát huy vai trò chủ quan của con người.',
        options: [
          'Phải coi trọng ý thức tư tưởng là trên hết trong mọi điều kiện',
          'Chỉ cần tôn trọng thực tế khách quan mà không cần phát huy tính sáng tạo cá nhân',
          'Phải xuất phát từ thực tế khách quan, tôn trọng quy luật khách quan đồng thời phát huy tính năng động chủ quan',
        ],
        answer: 2,
        feedback: 'Đây là nguyên tắc phương pháp luận cốt lõi khi vận dụng quan hệ vật chất - ý thức.',
      },
    ],
    quiz: {
      question: 'Ý thức được hiểu đúng nhất là gì theo triết học Mác - Lênin?',
      options: [
        'Sự phản ánh tích cực, tự giác, sáng tạo thế giới khách quan vào bộ óc người',
        'Lực lượng siêu nhiên tạo ra thế giới',
        'Một dạng vật chất cơ học',
        'Ý niệm tuyệt đối có trước vật chất',
      ],
      answer: 0,
      explanation: 'Ý thức là sự phản ánh thế giới khách quan vào bộ óc người, có tính tích cực, tự giác và sáng tạo.',
    },
  },
  {
    id: 'putilov-factory',
    name: 'Nhà máy Putilov',
    shortName: 'Nhà máy Putilov',
    coordinates: [59.8798, 30.2619],
    // Main gate of Kirov Plant on Stachek Ave — confirmed Street View coverage
    streetViewCoords: [59.8803, 30.2512],
    theme: 'Phong trào công nhân',
    exhibitCode: 'GALLERY 02',
    accent: 'from-rose-300 to-red-600',
    philosophy: [
      'Quy luật lượng - chất',
      'Sự tích lũy dẫn đến bước nhảy cách mạng',
    ],
    bannerImage: 'https://thumbs.dreamstime.com/b/sign-name-kirov-plant-workshop-building-largest-machine-enterprise-saint-petersburg-russia-216985628.jpg',
    panoramaImage: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Krasniy_Oktyabr_plant_spherical_panorama_2.jpg',
    description:
      'Nhà máy Putilov là một trong những trung tâm công nghiệp lớn nhất Petrograd, nơi tập trung đông đảo công nhân. Các cuộc đình công và bất bình của công nhân tại đây góp phần mở đầu làn sóng đấu tranh rộng lớn trong năm 1917.',
    philosophyContent:
      'Quy luật lượng - chất cho thấy những thay đổi nhỏ, lặp lại và tích lũy có thể dẫn đến bước nhảy làm biến đổi bản chất sự vật. Trong xã hội Nga, tiền lương thấp, điều kiện lao động nặng nề, chiến tranh và thiếu lương thực tích tụ thành sức ép xã hội. Khi vượt ngưỡng, các yêu sách kinh tế chuyển hóa thành hành động chính trị cách mạng.',
    infographic: {
      principle: 'Tích lũy',
      catalyst: 'Đình công',
      shift: 'Bước nhảy',
      takeaway: 'Những biến đổi về lượng có thể chuyển hóa thành biến đổi về chất.',
    },
    timeline: [
      {
        year: 'Trước 1917',
        event: 'Putilov trở thành biểu tượng của giai cấp công nhân công nghiệp tại Petrograd.',
      },
      {
        year: 'Tháng 2/1917',
        event: 'Đình công tại Putilov lan rộng, kết nối với phong trào phản chiến và đòi bánh mì.',
      },
      {
        year: 'Tháng 10/1917',
        event: 'Giai cấp công nhân giữ vai trò quan trọng trong việc ủng hộ và bảo vệ chính quyền Xô viết.',
      },
    ],
    vrLink: 'https://maps.google.com/maps?q=&layer=c&cbll=59.8798,30.2619&cbp=11,25,0,0,80&output=svembed',
    hotspots: [
      {
        title: 'Khái niệm chất',
        pitch: 6,
        yaw: 20,
        question: 'Khái niệm "Chất" trong triết học Mác - Lênin được hiểu như thế nào?',
        content: 'Chất là tính quy định khách quan vốn có của sự vật, tạo nên bản sắc của nó.',
        options: [
          'Là tổng số các thuộc tính cơ học, lý học, hóa học có thể cân đo đong đếm của vật thể',
          'Là tính quy định khách quan vốn có của sự vật, là sự thống nhất hữu cơ của các thuộc tính làm cho sự vật là nó chứ không phải là cái khác',
          'Là ý muốn chủ quan của con người khi gán cho sự vật một giá trị nào đó',
        ],
        answer: 1,
        feedback: 'Chất là đặc trưng bản chất làm sự vật là chính nó.',
      },
      {
        title: 'Khái niệm lượng',
        pitch: -4,
        yaw: 100,
        question: 'Khái niệm "Lượng" trong triết học dùng để chỉ điểm nào của sự vật?',
        content: 'Lượng biểu thị mặt có thể đo đếm và biến đổi dần dần của sự vật.',
        options: [
          'Bản chất bên trong quy định cấu trúc cốt lõi của sự vật',
          'Tính quy định vốn có của sự vật về mặt số lượng, quy mô, trình độ, tốc độ của sự vận động và phát triển',
          'Sự ổn định bất biến của sự vật trong mọi điều kiện môi trường',
        ],
        answer: 1,
        feedback: 'Lượng cho thấy khía cạnh số lượng, quy mô, trình độ, tốc độ của sự vật.',
      },
      {
        title: 'Điểm nút',
        pitch: 8,
        yaw: 180,
        question: 'Khái niệm "Điểm nút" là gì?',
        content: 'Điểm nút là ngưỡng mà tại đó lượng tích lũy đủ để chuyển sang thay đổi chất.',
        options: [
          'Điểm khởi đầu của quá trình tích lũy về lượng',
          'Thời điểm mà tại đó sự thay đổi về lượng đã đủ để làm thay đổi về chất của sự vật',
          'Giai đoạn khủng hoảng làm sự vật suy thoái và biến mất hoàn toàn',
        ],
        answer: 1,
        feedback: 'Điểm nút là ngưỡng chuyển hóa từ lượng sang chất.',
      },
      {
        title: 'Phương pháp luận',
        pitch: -8,
        yaw: 290,
        question: 'Ý nghĩa phương pháp luận nào sau đây được rút ra từ quy luật Lượng - Chất?',
        content: 'Cần kiên trì tích lũy về lượng và quyết đoán khi điều kiện đã chín muồi để thực hiện bước nhảy.',
        options: [
          'Muốn thay đổi chất phải chủ quan đốt cháy giai đoạn, thực hiện bước nhảy liên tục khi chưa tích lũy đủ lượng',
          'Chỉ cần bằng lòng với sự tích lũy về lượng mà không cần thực hiện bước nhảy khi điều kiện đã chín muồi',
          'Muốn thay đổi chất phải kiên trì tích lũy về lượng; khi lượng đã đạt đến điểm nút phải quyết đoán thực hiện bước nhảy',
        ],
        answer: 2,
        feedback: 'Quy luật lượng - chất đòi hỏi tích lũy kiên trì và hành động đúng thời điểm.',
      },
    ],
    quiz: {
      question: 'Quy luật lượng - chất chỉ ra điều gì?',
      options: [
        'Nguồn gốc của sự phát triển',
        'Cách thức, hình thức chung của sự vận động và phát triển',
        'Xu hướng của sự phát triển',
        'Động lực của sự vận động',
      ],
      answer: 1,
      explanation: 'Quy luật lượng - chất nói lên cách thức chung: tích lũy về lượng dẫn tới bước nhảy làm đổi chất.',
    },
  },
  {
    id: 'national-library',
    name: 'Thư viện Quốc gia Nga',
    shortName: 'Thư viện Quốc gia Nga',
    coordinates: [59.9337, 30.3355],
    // Ostrovskogo Square directly in front of the library — great coverage
    streetViewCoords: [59.9333, 30.3361],
    theme: 'Tri thức cách mạng',
    exhibitCode: 'GALLERY 03',
    accent: 'from-sky-300 to-cyan-600',
    philosophy: [
      'Mối quan hệ giữa vật chất và ý thức',
      'Vai trò của tri thức trong hoạt động thực tiễn',
    ],
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Russian_National_Bibliotheque,_Saint_Petersburg.jpg/960px-Russian_National_Bibliotheque,_Saint_Petersburg.jpg',
    panoramaImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/360%C2%B0_panoramas_Estonian_University_of_Life_Sciences%2C_library.jpg',
    description:
      'Thư viện Quốc gia Nga đại diện cho đời sống tri thức của St. Petersburg. Trong tiến trình cách mạng, sách báo, lý luận và tranh luận chính trị góp phần hình thành ý thức xã hội mới, giúp quần chúng nhận ra nguyên nhân sâu xa của khủng hoảng.',
    philosophyContent:
      'Chủ nghĩa duy vật biện chứng khẳng định vật chất quyết định ý thức, nhưng ý thức có tính độc lập tương đối và có thể tác động trở lại hiện thực thông qua hoạt động thực tiễn. Tri thức cách mạng không đứng ngoài đời sống; nó định hướng hành động, tổ chức lực lượng và biến nhận thức thành sức mạnh cải tạo xã hội.',
    infographic: {
      principle: 'Nhận thức',
      catalyst: 'Sách báo',
      shift: 'Hành động',
      takeaway: 'Ý thức đúng đắn trở thành sức mạnh khi gắn với thực tiễn.',
    },
    timeline: [
      {
        year: 'Thế kỷ XIX-XX',
        event: 'St. Petersburg là trung tâm xuất bản, học thuật và tranh luận chính trị của nước Nga.',
      },
      {
        year: '1905-1917',
        event: 'Các tư tưởng cải cách và cách mạng lan rộng qua báo chí, diễn thuyết và tổ chức chính trị.',
      },
      {
        year: '1917',
        event: 'Lý luận Mác - Lênin trở thành công cụ nhận thức và hành động của lực lượng cách mạng.',
      },
    ],
    vrLink: 'https://maps.google.com/maps?q=&layer=c&cbll=59.9337,30.3355&cbp=11,295,0,0,80&output=svembed',
    hotspots: [
      {
        title: 'Mối quan hệ cơ bản',
        pitch: 8,
        yaw: 10,
        question: 'Mối quan hệ giữa vật chất và ý thức được biểu hiện như thế nào trong triết học Mác - Lênin?',
        content: 'Đây là câu hỏi trung tâm của chủ nghĩa duy vật biện chứng về quan hệ giữa tồn tại vật chất và ý thức xã hội.',
        options: [
          'Vật chất và ý thức độc lập tuyệt đối, không có sự tác động qua lại nào',
          'Ý thức quyết định vật chất, còn vật chất chỉ là biểu hiện bên ngoài của ý thức',
          'Vật chất quyết định ý thức; ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn',
        ],
        answer: 2,
        feedback: 'Vật chất quyết định ý thức, còn ý thức có tính độc lập tương đối và tác động trở lại thông qua thực tiễn.',
      },
      {
        title: 'Tính độc lập',
        pitch: -2,
        yaw: 90,
        question: 'Tính độc lập tương đối của ý thức biểu hiện ở điểm nào?',
        content: 'Ý thức không đứng ngoài vật chất, nhưng có thể vận động nhanh chậm khác nhau và tác động ngược lại hiện thực.',
        options: [
          'Ý thức có thể tồn tại hoàn toàn biệt lập, không cần bộ óc người',
          'Ý thức có thể phát triển nhanh hoặc chậm hơn vật chất và có thể tác động trở lại vật chất',
          'Ý thức hoàn toàn không phụ thuộc vào các điều kiện kinh tế - xã hội',
        ],
        answer: 1,
        feedback: 'Ý thức có tính độc lập tương đối, không phải hoàn toàn phụ thuộc hay hoàn toàn tách rời vật chất.',
      },
      {
        title: 'Con đường tác động',
        pitch: 12,
        yaw: 170,
        question: 'Ý thức tác động trở lại vật chất bằng con đường nào?',
        content: 'Ý thức chỉ trở thành sức mạnh vật chất khi được con người thực hiện bằng hoạt động thực tiễn.',
        options: [
          'Tác động trực tiếp bằng sức mạnh tinh thần làm biến đổi kết cấu vật chất',
          'Thông qua hoạt động thực tiễn của con người biến tri thức, tư tưởng thành hiện thực',
          'Tự động làm biến đổi thế giới khách quan không cần con người hành động',
        ],
        answer: 1,
        feedback: 'Ý thức tác động trở lại vật chất thông qua thực tiễn của con người.',
      },
      {
        title: 'Phương pháp luận',
        pitch: -9,
        yaw: 285,
        question: 'Biểu hiện của bệnh chủ quan duy ý chí trong thực tiễn là gì?',
        content: 'Bệnh chủ quan duy ý chí là một sai lầm thường gặp khi đánh giá thấp quy luật khách quan.',
        options: [
          'Tuyệt đối hóa hoàn cảnh khách quan dẫn đến thụ động, trông chờ, ỷ lại',
          'Lấy ý muốn chủ quan, lấy tình cảm làm điểm xuất phát cho chiến lược và chính sách bất chấp quy luật khách quan',
          'Luôn luôn tuân thủ nghiêm ngặt mọi quy luật tự nhiên và xã hội',
        ],
        answer: 1,
        feedback: 'Đây là biểu hiện của chủ quan duy ý chí: lấy ý muốn thay cho thực tế khách quan.',
      },
    ],
    quiz: {
      question: 'Theo triết học Mác - Lênin, mối quan hệ giữa vật chất và ý thức đúng nhất là gì?',
      options: [
        'Vật chất quyết định ý thức, ý thức có tính độc lập tương đối và tác động trở lại vật chất',
        'Ý thức quyết định hoàn toàn vật chất',
        'Hai mặt không liên quan gì đến nhau',
        'Vật chất chỉ tồn tại trong ý thức',
      ],
      answer: 0,
      explanation: 'Đây là cách diễn đạt đầy đủ nhất về quan hệ biện chứng giữa vật chất và ý thức.',
    },
  },
  {
    id: 'winter-palace',
    name: 'Cung điện Mùa Đông',
    shortName: 'Cung điện Mùa Đông',
    coordinates: [59.9398, 30.3146],
    // Palace Square — world-famous location with superb Street View coverage
    streetViewCoords: [59.9394, 30.3160],
    theme: 'Chuyển giao quyền lực',
    exhibitCode: 'GALLERY 04',
    accent: 'from-emerald-300 to-teal-600',
    philosophy: [
      'Quy luật phủ định của phủ định',
      'Sự thay thế hình thái kinh tế xã hội cũ bằng cái mới',
    ],
    bannerImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Winter_Palace_Panorama_4.jpg',
    panoramaImage: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Palace_Square_2016-03_1459029855.jpg',
    description:
      'Cung điện Mùa Đông là biểu tượng quyền lực của chế độ cũ và là nơi gắn với thời khắc chính quyền lâm thời bị lật đổ trong Cách mạng Tháng Mười. Địa điểm này thể hiện rõ sự chuyển giao quyền lực từ trật tự cũ sang hình thức chính trị mới.',
    philosophyContent:
      'Quy luật phủ định của phủ định mô tả sự phát triển thông qua việc cái mới vượt qua cái cũ, kế thừa những yếu tố hợp lý và tạo ra trình độ phát triển cao hơn. Cách mạng Tháng Mười phủ định chế độ cũ và mở ra một mô hình quyền lực mới dựa trên Xô viết, phản ánh xu hướng thay thế hình thái kinh tế - xã hội đã lỗi thời.',
    infographic: {
      principle: 'Phủ định',
      catalyst: 'Khủng hoảng quyền lực',
      shift: 'Trật tự mới',
      takeaway: 'Cái mới vượt qua cái cũ và mở một nấc thang phát triển khác.',
    },
    timeline: [
      {
        year: 'Trước 1917',
        event: 'Cung điện Mùa Đông là biểu tượng của quyền lực Sa hoàng và trật tự chính trị cũ.',
      },
      {
        year: 'Tháng 2/1917',
        event: 'Chế độ Sa hoàng sụp đổ, Chính phủ lâm thời tiếp quản quyền lực nhưng không giải quyết được khủng hoảng.',
      },
      {
        year: '25/10/1917',
        event: 'Theo lịch Julius khi đó, lực lượng cách mạng chiếm Cung điện Mùa Đông và lật đổ Chính phủ lâm thời.',
      },
    ],
    vrLink: 'https://maps.google.com/maps?q=&layer=c&cbll=59.9398,30.3146&cbp=11,90,0,0,80&output=svembed',
    panoramaUrl: 'https://www.360cities.net/id/image/palace-square-view-on-hermitage-museum-winter-palace-st-petersburg#53.70,-1.60,70.0',
    hotspots: [
      {
        title: 'Khái niệm quy luật',
        pitch: 8,
        yaw: 15,
        question: 'Quy luật phủ định của phủ định chỉ ra đặc tính nào của sự phát triển?',
        content: 'Quy luật này mô tả hình thức phát triển không đi theo đường thẳng, mà là sự vận động quanh co, quay lại trên trình độ cao hơn.',
        options: [
          'Nguồn gốc của sự phát triển',
          'Động lực của sự vận động',
          'Cách thức của sự phát triển',
          'Xu hướng, hình thức xoáy ốc của sự phát triển',
        ],
        answer: 3,
        feedback: 'Quy luật phủ định của phủ định nêu lên xu hướng phát triển theo hình xoáy ốc.',
      },
      {
        title: 'Phủ định biện chứng',
        pitch: -2,
        yaw: 105,
        question: 'Thế nào là "phủ định biện chứng"?',
        content: 'Phủ định biện chứng là sự tự phủ định, tự phát triển của sự vật, dẫn đến cái mới tiến bộ hơn.',
        options: [
          'Sự can thiệp từ bên ngoài làm phá hủy, chấm dứt hoàn toàn sự tồn tại và phát triển của sự vật',
          'Sự tự phủ định, tự phát triển của sự vật; là mắt khâu trong quá trình dẫn đến sự ra đời của cái mới tiến bộ hơn',
          'Sự xóa bỏ sạch trơn mọi thành quả, yếu tố của giai đoạn cũ một cách tuyệt đối',
        ],
        answer: 1,
        feedback: 'Phủ định biện chứng là quá trình tự phát triển có tính lịch sử và kế thừa.',
      },
      {
        title: 'Tính kế thừa',
        pitch: 11,
        yaw: 185,
        question: 'Tính kế thừa của phủ định biện chứng được hiểu như thế nào?',
        content: 'Cái mới không xóa sạch mọi thứ cũ mà chọn lọc, giữ lại và cải biến yếu tố hợp lý.',
        options: [
          'Giữ lại toàn bộ tất cả các yếu tố của cái cũ bao gồm cả những yếu tố lạc hậu, tiêu cực',
          'Cái mới ra đời lọc bỏ các yếu tố lỗi thời, chỉ giữ lại và cải biến những yếu tố tích cực, phù hợp của cái cũ',
          'Từ bỏ hoàn toàn quá khứ để xây dựng một cái mới từ con số không',
        ],
        answer: 1,
        feedback: 'Kế thừa có chọn lọc là bản chất của phủ định biện chứng.',
      },
      {
        title: 'Thái độ thực tiễn',
        pitch: -8,
        yaw: 300,
        question: 'Hiểu đúng về con đường phát triển theo "hình xoáy ốc" giúp chúng ta có thái độ như thế nào trong thực tiễn?',
        content: 'Con đường phát triển có quanh co, nhưng xu hướng chung vẫn là đi lên.',
        options: [
          'Tuyệt vọng, buông xuôi khi tiến trình cách mạng gặp khó khăn, thất bại tạm thời',
          'Chủ quan, nghĩ rằng sự phát triển luôn là một đường thẳng thuận lợi, dễ dàng',
          'Kiên định, lạc quan vào xu thế tất thắng của cái mới, đồng thời sẵn sàng đón nhận các bước quanh co của lịch sử',
        ],
        answer: 2,
        feedback: 'Đây là thái độ phù hợp với nhận thức biện chứng về sự phát triển lịch sử.',
      },
    ],
    quiz: {
      question: 'Sai lầm của thái độ "phủ định sạch trơn" là gì?',
      options: [
        'Trân trọng và phát huy các giá trị truyền thống tốt đẹp một cách sáng tạo',
        'Xóa bỏ hoàn toàn quá khứ, không công nhận tính kế thừa lịch sử, coi cái cũ hoàn toàn là sai lầm',
        'Kế thừa có chọn lọc các yếu tố hợp lý của giai đoạn trước',
        'Tuyệt đối hóa tính quanh co của con đường phát triển',
      ],
      answer: 1,
      explanation: 'Phủ định sạch trơn là phủ nhận hoàn toàn giá trị của cái cũ, trái với tinh thần kế thừa của phủ định biện chứng.',
    },
  },
]

export function getLocationById(id) {
  return locations.find((location) => location.id === id)
}
