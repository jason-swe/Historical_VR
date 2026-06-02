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
        title: 'Bối cảnh lịch sử',
        pitch: 5,
        yaw: 15,
        question: 'Ở địa điểm này, có thể nhận ra mâu thuẫn nào giữa đời sống kinh tế đô thị và trật tự xã hội cũ?',
        content: 'Không gian thương mại - tài chính cho thấy sản xuất và trao đổi hàng hóa đã phát triển, trong khi quan hệ xã hội cũ vẫn duy trì sự phân hóa và kìm hãm quyền lợi của quần chúng lao động.',
        options: [
          'Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất',
          'Mâu thuẫn giữa cảm giác cá nhân và ký ức cá nhân',
          'Mâu thuẫn giữa tự nhiên và khí hậu',
        ],
        answer: 0,
        feedback: 'Đây là mâu thuẫn cơ bản trong cách phân tích duy vật lịch sử: lực lượng sản xuất phát triển nhưng quan hệ sản xuất cũ không còn phù hợp.',
      },
      {
        title: 'Sự kiện chính',
        pitch: -2,
        yaw: 85,
        question: 'Vì sao mâu thuẫn kinh tế không chỉ là xung đột lợi ích riêng lẻ mà có thể trở thành động lực cách mạng?',
        content: 'Theo phép biện chứng duy vật, mâu thuẫn cơ bản của xã hội khi tích tụ và lan rộng sẽ làm biến đổi quan hệ giữa các lực lượng xã hội, thúc đẩy hành động chính trị có tổ chức.',
        options: [
          'Vì mâu thuẫn xã hội có tính khách quan và gắn với lợi ích giai cấp',
          'Vì mọi biến cố đều do một cá nhân quyết định',
          'Vì lịch sử không chịu tác động của điều kiện kinh tế',
        ],
        answer: 0,
        feedback: 'Triết học Mác - Lênin xem mâu thuẫn xã hội là nguồn gốc vận động khi nó gắn với điều kiện vật chất và lợi ích giai cấp.',
      },
      {
        title: 'Liên hệ triết học',
        pitch: 10,
        yaw: 160,
        question: 'Quy luật thống nhất và đấu tranh của các mặt đối lập giải thích sự vận động xã hội ở đây như thế nào?',
        content: 'Các mặt đối lập cùng tồn tại trong một chỉnh thể kinh tế - xã hội, nhưng sự đấu tranh giữa chúng làm lộ giới hạn của trật tự cũ và mở khả năng cho hình thái mới.',
        options: [
          'Các mặt đối lập vừa ràng buộc vừa đấu tranh, tạo động lực phát triển',
          'Các mặt đối lập luôn đứng ngoài nhau và không tác động lẫn nhau',
          'Xã hội chỉ thay đổi nhờ ý muốn chủ quan',
        ],
        answer: 0,
        feedback: 'Điểm cốt lõi là sự thống nhất không loại bỏ đấu tranh; chính đấu tranh của các mặt đối lập tạo ra vận động.',
      },
      {
        title: 'Câu hỏi mở rộng',
        pitch: -8,
        yaw: 275,
        question: 'Nếu chỉ nhìn địa điểm này như một công trình kiến trúc, ta bỏ sót điều gì trong cách tiếp cận Mác - Lênin?',
        content: 'Cách tiếp cận triết học không dừng ở mô tả bề mặt, mà truy tìm quan hệ xã hội, lợi ích giai cấp và mâu thuẫn vật chất ẩn sau hiện tượng.',
        options: [
          'Bỏ sót quan hệ xã hội và mâu thuẫn vật chất phía sau hiện tượng',
          'Bỏ sót màu sắc trang trí của công trình',
          'Bỏ sót cảm nhận du lịch cá nhân',
        ],
        answer: 0,
        feedback: 'Cách tiếp cận triết học Mác - Lênin đi từ hiện tượng bề ngoài để tìm ra các mâu thuẫn bản chất bên dưới.',
      },
    ],
    quiz: {
      question: 'Phạm trù nào giúp lý giải xung đột giữa lực lượng sản xuất phát triển và quan hệ sản xuất lạc hậu?',
      options: [
        'Mâu thuẫn biện chứng',
        'Cái ngẫu nhiên',
        'Không gian tuyệt đối',
        'Ý niệm thuần túy',
      ],
      answer: 0,
      explanation: 'Mâu thuẫn biện chứng chỉ ra các mặt đối lập trong một chỉnh thể vừa thống nhất vừa đấu tranh, tạo động lực phát triển.',
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
        title: 'Bối cảnh lịch sử',
        pitch: 6,
        yaw: 20,
        question: 'Điều kiện lao động của công nhân phản ánh quan hệ giữa lượng và chất như thế nào?',
        content: 'Những thay đổi về lượng như giờ làm, tiền lương, thiếu lương thực và kỷ luật nhà máy không đứng riêng lẻ; chúng tích tụ trong đời sống vật chất của giai cấp công nhân.',
        options: [
          'Các biến đổi nhỏ tích tụ có thể làm đổi chất của phong trào',
          'Biến đổi về lượng không bao giờ tạo ra biến đổi về chất',
          'Chất chỉ do cảm xúc cá nhân quyết định',
        ],
        answer: 0,
        feedback: 'Quy luật lượng - chất nhấn mạnh quá trình tích lũy đến điểm nút, từ đó sinh ra bước nhảy.',
      },
      {
        title: 'Sự kiện chính',
        pitch: -4,
        yaw: 100,
        question: 'Khi nào sự tích lũy bất mãn chuyển thành bước nhảy trong hoạt động thực tiễn?',
        content: 'Khi mâu thuẫn vượt ngưỡng chịu đựng, yêu sách kinh tế có thể chuyển hóa thành đấu tranh chính trị. Đây là điểm chuyển từ biến đổi lượng sang biến đổi chất.',
        options: [
          'Khi các điều kiện tích tụ vượt điểm nút và được tổ chức thành hành động',
          'Khi một hiện tượng xuất hiện hoàn toàn không có nguyên nhân',
          'Khi quần chúng rời khỏi thực tiễn xã hội',
        ],
        answer: 0,
        feedback: 'Bước nhảy cách mạng không tách khỏi điều kiện vật chất; nó xuất hiện khi tích lũy về lượng đạt ngưỡng.',
      },
      {
        title: 'Liên hệ triết học',
        pitch: 8,
        yaw: 180,
        question: 'Vì sao “bước nhảy” cách mạng không phải là hành động tự phát thuần túy?',
        content: 'Bước nhảy có cơ sở trong quá trình tích lũy vật chất - xã hội và cần được định hướng bằng tổ chức, ý thức giai cấp và thực tiễn đấu tranh.',
        options: [
          'Vì nó cần điều kiện khách quan và nhân tố chủ quan có tổ chức',
          'Vì nó chỉ là phản ứng tâm lý tức thời',
          'Vì nó không liên quan đến giai cấp công nhân',
        ],
        answer: 0,
        feedback: 'Triết học Mác - Lênin luôn đặt bước nhảy trong quan hệ giữa điều kiện khách quan và hoạt động thực tiễn của chủ thể.',
      },
      {
        title: 'Câu hỏi mở rộng',
        pitch: -8,
        yaw: 290,
        question: 'Nếu chỉ nói “công nhân đình công vì đói nghèo”, ta đã đủ theo lập trường triết học Mác - Lênin chưa?',
        content: 'Chưa đủ. Cần phân tích kết cấu xã hội tạo ra nghèo đói, quan hệ sản xuất, vị trí giai cấp và khả năng chuyển hóa yêu sách kinh tế thành đấu tranh chính trị.',
        options: [
          'Chưa, vì cần phân tích quan hệ sản xuất và vị trí giai cấp',
          'Đủ, vì triết học chỉ cần mô tả hiện tượng',
          'Đủ, vì mọi hành động chỉ do cảm xúc cá nhân',
        ],
        answer: 0,
        feedback: 'Cách tiếp cận Mác - Lênin đi từ hiện tượng đến bản chất xã hội và điều kiện vật chất của phong trào.',
      },
    ],
    quiz: {
      question: 'Quy luật lượng - chất được thể hiện thế nào qua phong trào công nhân Putilov?',
      options: [
        'Bất mãn tích lũy đến ngưỡng và chuyển thành đấu tranh cách mạng',
        'Mọi biến đổi xã hội đều diễn ra tức thì',
        'Ý thức không liên quan đến điều kiện sống',
        'Lịch sử luôn lặp lại y nguyên',
      ],
      answer: 0,
      explanation: 'Các biến đổi về lượng như đình công, thiếu lương thực và bất bình tích tụ, khi đạt ngưỡng sẽ tạo bước nhảy về chất.',
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
        title: 'Bối cảnh lịch sử',
        pitch: 8,
        yaw: 10,
        question: 'Tri thức có phải là lực lượng tách rời điều kiện vật chất của xã hội không?',
        content: 'Trong triết học Mác - Lênin, tri thức và ý thức xã hội hình thành trên cơ sở đời sống vật chất, nhưng không thụ động; chúng tham gia định hướng hành động thực tiễn.',
        options: [
          'Không, ý thức hình thành trên cơ sở vật chất nhưng có tính độc lập tương đối',
          'Có, ý thức tồn tại hoàn toàn bên ngoài đời sống xã hội',
          'Có, tri thức không liên quan đến thực tiễn',
        ],
        answer: 0,
        feedback: 'Đây là quan hệ biện chứng: vật chất quyết định ý thức, nhưng ý thức tác động trở lại thông qua thực tiễn.',
      },
      {
        title: 'Sự kiện chính',
        pitch: -2,
        yaw: 90,
        question: 'Vì sao lý luận cách mạng chỉ có ý nghĩa khi gắn với thực tiễn của quần chúng?',
        content: 'Lý luận không thay thế thực tiễn, nhưng giúp con người nhận thức đúng mâu thuẫn xã hội, xác định mục tiêu và tổ chức phương thức hành động.',
        options: [
          'Vì lý luận đúng phải được kiểm nghiệm và triển khai trong thực tiễn',
          'Vì lý luận càng xa thực tế càng có giá trị',
          'Vì quần chúng không tham gia vào lịch sử',
        ],
        answer: 0,
        feedback: 'Theo Mác - Lênin, thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn kiểm nghiệm chân lý.',
      },
      {
        title: 'Liên hệ triết học',
        pitch: 12,
        yaw: 170,
        question: 'Quan hệ vật chất - ý thức được thể hiện ra sao trong quá trình hình thành ý thức cách mạng?',
        content: 'Điều kiện sống tạo cơ sở cho nhận thức, còn ý thức đúng đắn có thể tác động trở lại hiện thực thông qua hoạt động thực tiễn có mục đích.',
        options: [
          'Điều kiện vật chất sinh ra nhu cầu nhận thức, ý thức đúng định hướng hành động',
          'Ý thức xuất hiện trước và tạo ra mọi điều kiện vật chất',
          'Vật chất và ý thức không có quan hệ nào',
        ],
        answer: 0,
        feedback: 'Ý thức cách mạng không phải khẩu hiệu trừu tượng; nó là nhận thức được tổ chức thành hoạt động thực tiễn.',
      },
      {
        title: 'Câu hỏi mở rộng',
        pitch: -9,
        yaw: 285,
        question: 'Một thư viện trong website này nên được hiểu như biểu tượng của điều gì về mặt triết học?',
        content: 'Nó là điểm neo để bàn về quá trình chuyển tri thức thành ý thức xã hội, rồi thành năng lực cải tạo hiện thực thông qua thực tiễn.',
        options: [
          'Vai trò của tri thức khi gắn với thực tiễn cải tạo xã hội',
          'Việc tri thức chỉ để lưu trữ và không tác động đến xã hội',
          'Sự tách rời tuyệt đối giữa học tập và hành động',
        ],
        answer: 0,
        feedback: 'Trọng tâm ở đây là thực tiễn: tri thức có giá trị cách mạng khi trở thành năng lực nhận thức và hành động của con người.',
      },
    ],
    quiz: {
      question: 'Theo triết học Mác - Lênin, ý thức cách mạng có vai trò gì trong thực tiễn?',
      options: [
        'Định hướng hoạt động cải tạo hiện thực khi gắn với điều kiện vật chất',
        'Tồn tại tách biệt hoàn toàn khỏi đời sống xã hội',
        'Thay thế mọi điều kiện kinh tế bằng niềm tin cá nhân',
        'Không có tác động nào đến hành động của con người',
      ],
      answer: 0,
      explanation: 'Vật chất quyết định ý thức, nhưng ý thức đúng đắn có thể tác động trở lại hiện thực thông qua thực tiễn.',
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
        title: 'Bối cảnh lịch sử',
        pitch: 8,
        yaw: 15,
        question: 'Cái cũ bị phủ định vì lý do ngẫu nhiên hay vì nó đã bộc lộ giới hạn nội tại?',
        content: 'Trong phép biện chứng, phủ định cách mạng xuất hiện khi hình thức xã hội cũ không còn giải quyết được những mâu thuẫn cơ bản của đời sống hiện thực.',
        options: [
          'Vì hình thức cũ bộc lộ giới hạn trước các mâu thuẫn hiện thực',
          'Vì mọi phủ định đều là ngẫu nhiên thuần túy',
          'Vì lịch sử không có quy luật vận động',
        ],
        answer: 0,
        feedback: 'Phủ định biện chứng có cơ sở khách quan trong mâu thuẫn nội tại của sự vật và xã hội.',
      },
      {
        title: 'Sự kiện chính',
        pitch: -2,
        yaw: 105,
        question: 'Phủ định biện chứng khác gì với việc xóa bỏ đơn giản một chế độ cũ?',
        content: 'Phủ định biện chứng vừa vượt qua cái cũ vừa kế thừa những điều kiện, lực lượng và kinh nghiệm đã hình thành trong chính xã hội cũ.',
        options: [
          'Nó có tính kế thừa và tạo điều kiện cho trình độ phát triển mới',
          'Nó là phá hủy tuyệt đối không để lại gì',
          'Nó chỉ là thay đổi tên gọi của chính quyền',
        ],
        answer: 0,
        feedback: 'Điểm quan trọng của phủ định biện chứng là vượt bỏ có kế thừa, không phải xóa sạch một cách siêu hình.',
      },
      {
        title: 'Liên hệ triết học',
        pitch: 11,
        yaw: 185,
        question: 'Quy luật phủ định của phủ định giúp hiểu sự thay thế hình thái kinh tế - xã hội như thế nào?',
        content: 'Sự phát triển xã hội diễn ra qua những lần phủ định có tính kế thừa, tạo ra hình thái mới ở trình độ cao hơn khi mâu thuẫn của hình thái cũ đã chín muồi.',
        options: [
          'Cái mới ra đời bằng cách vượt qua và kế thừa cái cũ ở trình độ cao hơn',
          'Cái mới xuất hiện không liên quan đến cái cũ',
          'Cái cũ luôn tồn tại vĩnh viễn',
        ],
        answer: 0,
        feedback: 'Phủ định của phủ định mô tả khuynh hướng phát triển đi lên thông qua các lần phủ định có tính kế thừa.',
      },
      {
        title: 'Câu hỏi mở rộng',
        pitch: -8,
        yaw: 300,
        question: 'Vì sao không nên hiểu Cung điện Mùa Đông chỉ như biểu tượng chiến thắng quân sự?',
        content: 'Trong website triết học này, địa điểm được dùng để phân tích sự chuyển hóa hình thái quyền lực và điều kiện xã hội làm cho cái mới thay thế cái cũ.',
        options: [
          'Vì trọng tâm là sự chuyển hóa biện chứng của hình thái xã hội',
          'Vì chỉ cần nhớ một sự kiện quân sự là đủ',
          'Vì triết học không quan tâm đến quan hệ xã hội',
        ],
        answer: 0,
        feedback: 'Cách nhìn Mác - Lênin yêu cầu phân tích bản chất xã hội của sự thay thế quyền lực, không dừng ở biểu tượng sự kiện.',
      },
    ],
    quiz: {
      question: 'Cung điện Mùa Đông phù hợp nhất với quy luật triết học nào trong bài học này?',
      options: [
        'Phủ định của phủ định',
        'Tồn tại bất biến',
        'Tách rời lý luận và thực tiễn',
        'Không có mâu thuẫn trong xã hội',
      ],
      answer: 0,
      explanation: 'Sự kiện tại Cung điện Mùa Đông thể hiện quá trình cái mới phủ định trật tự cũ và tạo ra hình thức quyền lực mới.',
    },
  },
]

export function getLocationById(id) {
  return locations.find((location) => location.id === id)
}
