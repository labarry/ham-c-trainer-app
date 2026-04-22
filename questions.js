// 题库数据
const questionBank = [
  {
    "id": "Q1",
    "originalId": "LY0001",
    "text": "我国专门针对无线电管理的行政法规及其制定机构是：",
    "options": [
      {
        "letter": "A",
        "text": "《中华人民共和国无线电管理条例》"
      },
      {
        "letter": "B",
        "text": "《中华人民共和国无线电管理办法》"
      },
      {
        "letter": "C",
        "text": "国务院和中央军委"
      },
      {
        "letter": "D",
        "text": "工业和信息化部"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "C"
    ],
    "chapter": "1.1.1",
    "type": "MC2-0001",
    "image": ""
  },
  {
    "id": "Q2",
    "originalId": "LY0002",
    "text": "我国专门针对业余无线电台的管理文件及其制定机构分别是：",
    "options": [
      {
        "letter": "A",
        "text": "《业余无线电台管理办法》"
      },
      {
        "letter": "B",
        "text": "《业余无线电台管理暂行规定》"
      },
      {
        "letter": "C",
        "text": "工业和信息化部"
      },
      {
        "letter": "D",
        "text": "国务院"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "C"
    ],
    "chapter": "1.1.1",
    "type": "MC2-0002",
    "image": ""
  },
  {
    "id": "Q3",
    "originalId": "LY0004",
    "text": "我国依法负责对业余无线电台实施监督管理的机构是：",
    "options": [
      {
        "letter": "A",
        "text": "国家无线电管理机构和省、自治区、直辖市无线电管理机构"
      },
      {
        "letter": "B",
        "text": "在国家或地方民政部门注册的业余无线电协会"
      },
      {
        "letter": "C",
        "text": "国家体育管理机构和地方体育管理机构"
      },
      {
        "letter": "D",
        "text": "国家和地方公安部门"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.1",
    "type": "MC1-0003",
    "image": ""
  },
  {
    "id": "Q4",
    "originalId": "LK0007",
    "text": "我国对无线电管理术语“业余业务”、“卫星业余业务”和“业余电台”做出具体定义的法规文件是：",
    "options": [
      {
        "letter": "A",
        "text": "《中华人民共和国无线电频率划分规定》"
      },
      {
        "letter": "B",
        "text": "《中华人民共和国无线电管理条例》"
      },
      {
        "letter": "C",
        "text": "《中华人民共和国电信条例》"
      },
      {
        "letter": "D",
        "text": "《无线电台执照管理规定》"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.1",
    "type": "MC1-0004",
    "image": ""
  },
  {
    "id": "Q5",
    "originalId": "LX",
    "text": "最新发布的《业余无线电台管理办法》自何时开始施行：",
    "options": [
      {
        "letter": "A",
        "text": "自 2024 年 3 月 1 日起施行"
      },
      {
        "letter": "B",
        "text": "自 2024 年 12 月 1 日起施行"
      },
      {
        "letter": "C",
        "text": "自 2025 年 3 月 1 日起施行"
      },
      {
        "letter": "D",
        "text": "自 2025 年 12 月 1 日起施行"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.1",
    "type": "MC1-0005",
    "image": ""
  },
  {
    "id": "Q6",
    "originalId": "LY0113",
    "text": "将某个特定的频段列入频率划分表，规定该频段可在指定的条件下供一种或多种地面或空间无线电通信业务或射电天文业务使用，这个过程称为：",
    "options": [
      {
        "letter": "A",
        "text": "划分"
      },
      {
        "letter": "B",
        "text": "分配"
      },
      {
        "letter": "C",
        "text": "指配"
      },
      {
        "letter": "D",
        "text": "授权"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0006",
    "image": ""
  },
  {
    "id": "Q7",
    "originalId": "LY0114",
    "text": "将无线电频率或频道规定由一个或多个部门，在指定的区域内供地面或空间无线电通信业务在指定条件下使用，这个过程称为：",
    "options": [
      {
        "letter": "A",
        "text": "分配"
      },
      {
        "letter": "B",
        "text": "划分"
      },
      {
        "letter": "C",
        "text": "指配"
      },
      {
        "letter": "D",
        "text": "授权"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0007",
    "image": ""
  },
  {
    "id": "Q8",
    "originalId": "LY0115",
    "text": "将无线电频率或频道批准给无线电台在规定条件下使用，这个过程称为：",
    "options": [
      {
        "letter": "A",
        "text": "指配"
      },
      {
        "letter": "B",
        "text": "划分"
      },
      {
        "letter": "C",
        "text": "分配"
      },
      {
        "letter": "D",
        "text": "授权"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0008",
    "image": ""
  },
  {
    "id": "Q9",
    "originalId": "LK0140",
    "text": "在频率划分表中，一个频段被标明划分给多种业务时，这些业务被分为下述类别：",
    "options": [
      {
        "letter": "A",
        "text": "主要业务和次要业务"
      },
      {
        "letter": "B",
        "text": "业余业务和非业余业务"
      },
      {
        "letter": "C",
        "text": "民用业务和军用业务"
      },
      {
        "letter": "D",
        "text": "安全业务和一般业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0009",
    "image": ""
  },
  {
    "id": "Q10",
    "originalId": "LK0125",
    "text": "辐射（radiation）是指任何源的能量流以无线电波的形式向外发出。正确的说法是：",
    "options": [
      {
        "letter": "A",
        "text": "闪电产生的电磁波干扰是一种辐射"
      },
      {
        "letter": "B",
        "text": "沿电源线窜入接收机的差模干扰是一种辐射"
      },
      {
        "letter": "C",
        "text": "射频电路中变压器内磁芯里的磁场是一种辐射"
      },
      {
        "letter": "D",
        "text": "射频电路中电容器内极板间的电场是一种辐射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0010",
    "image": ""
  },
  {
    "id": "Q11",
    "originalId": "LK0126",
    "text": "发射（emission）是指：由无线电发信电台产生的辐射或辐射产物。正确的说法是：",
    "options": [
      {
        "letter": "A",
        "text": "业余电台向周围发送的杂散产物是一种发射"
      },
      {
        "letter": "B",
        "text": "无线电接收机本地振荡器辐射的能量是一种发射"
      },
      {
        "letter": "C",
        "text": "医用高频电疗机向周围发送的无线电波能量是一种发射"
      },
      {
        "letter": "D",
        "text": "闪电产生的电磁波干扰是一种发射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0011",
    "image": ""
  },
  {
    "id": "Q12",
    "originalId": "LX",
    "text": "下列关于无线电的一般术语，说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "无线电测定是指利用无线电波的传播特性测定目标的位置、速度和/或其他特性，或获得与这些参数有关的信息"
      },
      {
        "letter": "B",
        "text": "无线电导航是指用于导航（包括障碍物告警）的无线电测定"
      },
      {
        "letter": "C",
        "text": "无线电定位是指用于除无线电导航以外的无线电测定"
      },
      {
        "letter": "D",
        "text": "无线电测向是指利用接收无线电波来确定一个电台或目标的方向的无线电测定"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.1.2",
    "type": "MC4-0012",
    "image": ""
  },
  {
    "id": "Q13",
    "originalId": "LX",
    "text": "关于业余无线电台，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电台是指为开展业余业务（含卫星业余业务）使用的一个或者多个发信机、收信机，或者发信机与收信机的组合（包括附属设备）"
      },
      {
        "letter": "B",
        "text": "一个业余无线电台只能包含一个发信机"
      },
      {
        "letter": "C",
        "text": "一个业余无线电台只能包含一个收信机"
      },
      {
        "letter": "D",
        "text": "一个业余无线电台只能包含一个发信机和一个收信机"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0013",
    "image": ""
  },
  {
    "id": "Q14",
    "originalId": "LX",
    "text": "关于业余业务、卫星业余业务，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "业余业务是指供业余无线电爱好者进行自我训练、相互通信和技术研究的无线电通信业务"
      },
      {
        "letter": "B",
        "text": "卫星业余业务是指利用地球卫星上的空间电台开展与业余业务相同目的的无线电通信业务"
      },
      {
        "letter": "C",
        "text": "业余无线电爱好者可以在业余业务、卫星业余业务以及其他的无线电业务相互通信"
      },
      {
        "letter": "D",
        "text": "业余无线电台可以在业余业务、卫星业余业务以及其他的无线电业务进行通信"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0014",
    "image": ""
  },
  {
    "id": "Q15",
    "originalId": "LX",
    "text": "关于业余无线电爱好者的定义，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电爱好者系指经正式批准的、对无线电技术有兴趣的人"
      },
      {
        "letter": "B",
        "text": "其兴趣纯系个人爱好而不涉及谋取利润"
      },
      {
        "letter": "C",
        "text": "其兴趣纯系个人爱好可涉及谋取利润"
      },
      {
        "letter": "D",
        "text": "只有成年人能成为业余无线电爱好者"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.1.2",
    "type": "MC2-0015",
    "image": ""
  },
  {
    "id": "Q16",
    "originalId": "LX",
    "text": "关于发射类别，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "是指用标准符号标示的某发射的一组特性"
      },
      {
        "letter": "B",
        "text": "标示的特性包含主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性"
      },
      {
        "letter": "C",
        "text": "一个业余无线电台只能包含一个收信机"
      },
      {
        "letter": "D",
        "text": "一个业余无线电台只能包含一个发信机和一个收信机"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0016",
    "image": ""
  },
  {
    "id": "Q17",
    "originalId": "LX",
    "text": "关于单边带发射，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "单边带发射是只传送一个边带的调幅发射"
      },
      {
        "letter": "B",
        "text": "单边带发射是只传送一个边带的调频发射"
      },
      {
        "letter": "C",
        "text": "单边带发射是不传送载波的调幅发射"
      },
      {
        "letter": "D",
        "text": "单边带发射是不传送载波的调频发射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0017",
    "image": ""
  },
  {
    "id": "Q18",
    "originalId": "LX",
    "text": "关于干扰的定义，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "由于一种或多种发射、辐射、感应或其组合所产生的无用能量对无线电通信系统的接收产生的影响"
      },
      {
        "letter": "B",
        "text": "表现为性能下降、误解或信息丢失"
      },
      {
        "letter": "C",
        "text": "若不存在这种无用能量，则此后果可以避免"
      },
      {
        "letter": "D",
        "text": "不会对无线电通信系统的接收产生的影响"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.1.2",
    "type": "MC3-0018",
    "image": ""
  },
  {
    "id": "Q19",
    "originalId": "LX",
    "text": "关于有害干扰的定义，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "危害无线电导航或其他安全业务的正常运行的干扰"
      },
      {
        "letter": "B",
        "text": "严重地损害、阻碍、或一再阻断按规定正常开展的无线电通信业务的干扰"
      },
      {
        "letter": "C",
        "text": "产生有害干扰不会受到处罚"
      },
      {
        "letter": "D",
        "text": "使用业余无线电台时，只要不对其他业余无线电台产生干扰即可"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.1.2",
    "type": "MC2-0019",
    "image": ""
  },
  {
    "id": "Q20",
    "originalId": "LX",
    "text": "关于次要业务台站，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "不得对已经指配或将来可能指配频率的主要业务电台产生有害干扰"
      },
      {
        "letter": "B",
        "text": "不得对来自已经指配或将来可能指配频率的主要业务电台的有害干扰提出保护要求"
      },
      {
        "letter": "C",
        "text": "可要求保护不受来自将来可能指配频率的同一业务或其他次要业务电台的有害干扰"
      },
      {
        "letter": "D",
        "text": "使用业余无线电台时，只要不对其他业余无线电台产生干扰即可"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.1.2",
    "type": "MC3-0020",
    "image": ""
  },
  {
    "id": "Q21",
    "originalId": "LK0177",
    "text": "协调国际无线电管理的国际组织是：",
    "options": [
      {
        "letter": "A",
        "text": "国际电信联盟"
      },
      {
        "letter": "B",
        "text": "国际业余无线电联盟"
      },
      {
        "letter": "C",
        "text": "联合国大会"
      },
      {
        "letter": "D",
        "text": "联合国科教文组织"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0021",
    "image": ""
  },
  {
    "id": "Q22",
    "originalId": "LK0178",
    "text": "国际业余无线电联盟支持会员协会在发展业余无线电时把它看成一种：",
    "options": [
      {
        "letter": "A",
        "text": "国家资源"
      },
      {
        "letter": "B",
        "text": "拉动经济的措施"
      },
      {
        "letter": "C",
        "text": "休闲娱乐手段"
      },
      {
        "letter": "D",
        "text": "国防后备队伍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0022",
    "image": ""
  },
  {
    "id": "Q23",
    "originalId": "LK0182",
    "text": "下述通信不属于电信（telecommunication）范畴：",
    "options": [
      {
        "letter": "A",
        "text": "邮政通信"
      },
      {
        "letter": "B",
        "text": "有线通信"
      },
      {
        "letter": "C",
        "text": "无线电通信"
      },
      {
        "letter": "D",
        "text": "光通信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0023",
    "image": ""
  },
  {
    "id": "Q24",
    "originalId": "LK0183",
    "text": "关于无线电通信的正确说法：",
    "options": [
      {
        "letter": "A",
        "text": "无线电通信是指利用无线电波进行的符号、信号、文字、图像、声音或其他信息的传输、发射或接收"
      },
      {
        "letter": "B",
        "text": "无线电通信包括利用光在内的所有电磁波所进行的各种通信"
      },
      {
        "letter": "C",
        "text": "利用无线电波进行的符号、信号、文字、图像、声音以外的信息传输不属于无线电通信"
      },
      {
        "letter": "D",
        "text": "产生无线电波并用其加热属于无线电通信的一种应用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0024",
    "image": ""
  },
  {
    "id": "Q25",
    "originalId": "LK0184",
    "text": "关于地面无线电通信（terrestrial radio communication）的正确说法是：",
    "options": [
      {
        "letter": "A",
        "text": "航空通信属于地面无线电通信"
      },
      {
        "letter": "B",
        "text": "水上通信不属于地面无线电通信"
      },
      {
        "letter": "C",
        "text": "业余电台之间所进行的任何无线电通信都属于地面无线电通信"
      },
      {
        "letter": "D",
        "text": "依靠电离层反射的天波所进行的通信不属于地面无线电通信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0025",
    "image": ""
  },
  {
    "id": "Q26",
    "originalId": "LK0187",
    "text": "无线电波是指：",
    "options": [
      {
        "letter": "A",
        "text": "频率为 3,000GHz 以下的在空间传播的电磁波"
      },
      {
        "letter": "B",
        "text": "频率为 3,000GHz 以下的所有电磁波"
      },
      {
        "letter": "C",
        "text": "频率为 30Hz 至 30GHz 的在空间传播的电磁波"
      },
      {
        "letter": "D",
        "text": "频率为 3,000Hz 至 3,000MHz 的电磁波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.1.2",
    "type": "MC1-0026",
    "image": ""
  },
  {
    "id": "Q27",
    "originalId": "LY0044",
    "text": "业余无线电台执照有效期届满后需要继续使用的，应当在下列期限内向作出许可决定的无线电管理机构申请更换业余无线电台执照：",
    "options": [
      {
        "letter": "A",
        "text": "期限届满 30 个工作日前"
      },
      {
        "letter": "B",
        "text": "有效期届满半年之内"
      },
      {
        "letter": "C",
        "text": "有效期届满两个月之内"
      },
      {
        "letter": "D",
        "text": "有效期届满三个月之内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.2.2",
    "type": "MC1-0041",
    "image": ""
  },
  {
    "id": "Q28",
    "originalId": "LY0045",
    "text": "变更业余无线电台执照载明事项的，应当办理下列手续：",
    "options": [
      {
        "letter": "A",
        "text": "及时向作出许可决定的无线电管理机构申请办理变更手续"
      },
      {
        "letter": "B",
        "text": "等执照有效期届满时向核发执照的无线电管理机构申请办理变更手续，换发业余无线电台执照"
      },
      {
        "letter": "C",
        "text": "只要设备型号和产品序列号没有改变，不必申请办理变更手续"
      },
      {
        "letter": "D",
        "text": "只需向核发执照的无线电管理机构进行备案"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.2.2",
    "type": "MC1-0042",
    "image": ""
  },
  {
    "id": "Q29",
    "originalId": "LY0046",
    "text": "终止使用业余无线电台的，应向下列哪个机构办理业余无线电台执照注销手续：",
    "options": [
      {
        "letter": "A",
        "text": "作出许可决定的无线电管理机构"
      },
      {
        "letter": "B",
        "text": "国家无线电管理机构"
      },
      {
        "letter": "C",
        "text": "中国无线电协会"
      },
      {
        "letter": "D",
        "text": "地方无线电管理机构所委托的其他单位"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.2.2",
    "type": "MC1-0043",
    "image": ""
  },
  {
    "id": "Q30",
    "originalId": "LY0046",
    "text": "关于终止使用业余无线电台的，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "应当及时向作出许可决定的无线电管理机构办理业余无线电台执照注销手续"
      },
      {
        "letter": "B",
        "text": "交回执照并自执照注销之日起 60 个工作日内拆除业余无线电台及天线等附属设备并妥善处理"
      },
      {
        "letter": "C",
        "text": "交回执照并自执照注销之日起 6 个月内拆除业余无线电台及天线等附属设备并妥善处理"
      },
      {
        "letter": "D",
        "text": "只需交回执照"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.2.2",
    "type": "MC2-0044",
    "image": ""
  },
  {
    "id": "Q31",
    "originalId": "LX",
    "text": "下列哪些业余无线电台由国家无线电管理机构许可：",
    "options": [
      {
        "letter": "A",
        "text": "设置、使用 15 瓦以上的 HF 业余无线电台"
      },
      {
        "letter": "B",
        "text": "涉及国家主权、安全的其他重要无线电台"
      },
      {
        "letter": "C",
        "text": "设置、使用 15 瓦以上的 MF 业余无线电台"
      },
      {
        "letter": "D",
        "text": "设置、使用 15 瓦以上的 LF 业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.2.3",
    "type": "MC2-0045",
    "image": ""
  },
  {
    "id": "Q32",
    "originalId": "LX",
    "text": "下列哪些申请设置、使用业余无线电台应向国家无线电管理机构提交：",
    "options": [
      {
        "letter": "A",
        "text": "15 瓦以上短波业余无线电台"
      },
      {
        "letter": "B",
        "text": "涉及国家主权、安全的其他重要业余无线电台"
      },
      {
        "letter": "C",
        "text": "业余中继台"
      },
      {
        "letter": "D",
        "text": "业余信标台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.2.3",
    "type": "MC2-0046",
    "image": ""
  },
  {
    "id": "Q33",
    "originalId": "LX",
    "text": "关于业余中继台的说法下列错误的是：",
    "options": [
      {
        "letter": "A",
        "text": "通过对业余无线电信号接收和放大转发，扩大通联范围的业余无线电台"
      },
      {
        "letter": "B",
        "text": "通过发射信标信号，辅助验证电波传播条件的单发业余无线电台"
      },
      {
        "letter": "C",
        "text": "通过对业余无线电信号接收和衰减转发，缩小通联范围的业余无线电台"
      },
      {
        "letter": "D",
        "text": "通过接收信标信号，辅助验证电波传播条件的单发业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "chapter": "1.2.4",
    "type": "MC3-0047",
    "image": ""
  },
  {
    "id": "Q34",
    "originalId": "LX",
    "text": "关于业余信标台的说法下列错误的是：",
    "options": [
      {
        "letter": "A",
        "text": "通过发射信标信号，辅助验证电波传播条件的单发业余无线电台"
      },
      {
        "letter": "B",
        "text": "通过接收信标信号，辅助验证电波传播条件的单发业余无线电台"
      },
      {
        "letter": "C",
        "text": "通过对业余无线电信号接收和放大转发，扩大通联范围的业余无线电台"
      },
      {
        "letter": "D",
        "text": "通过对业余无线电信号接收和衰减转发，缩小通联范围的业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "chapter": "1.2.4",
    "type": "MC3-0048",
    "image": ""
  },
  {
    "id": "Q35",
    "originalId": "LX",
    "text": "关于业余中继台哪下列哪些选项正确：",
    "options": [
      {
        "letter": "A",
        "text": "向其覆盖区域内的业余无线电台提供平等的服务"
      },
      {
        "letter": "B",
        "text": "台址布局应当符合资源共享、集约的要求"
      },
      {
        "letter": "C",
        "text": "仅设置申请人的团队成员优先使用，空闲时方供其他业余电台使用"
      },
      {
        "letter": "D",
        "text": "因中继台购买和维护需要成本，要求业余电台必须付费使用中继台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.2.4",
    "type": "MC2-0049",
    "image": ""
  },
  {
    "id": "Q36",
    "originalId": "LX",
    "text": "关于设置业余中继台下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "台址布局应当符合资源共享、集约的要求"
      },
      {
        "letter": "B",
        "text": "应当向其覆盖区域内的业余无线电台提供平等的服务"
      },
      {
        "letter": "C",
        "text": "明确设台地点、使用频率、技术参数等设置、使用和运行维护要求并向社会公布"
      },
      {
        "letter": "D",
        "text": "业余中继台服务区域超出本行政区域的，应当与地方无线电管理机构做好协调"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.2.4",
    "type": "MC4-0050",
    "image": ""
  },
  {
    "id": "Q37",
    "originalId": "LK0034",
    "text": "业余中继台的设置和技术参数等应满足下列关键条件：",
    "options": [
      {
        "letter": "A",
        "text": "符合国家以及设台地的地方无线电管理机构的规定"
      },
      {
        "letter": "B",
        "text": "符合设台地的地方业余无线电民间组织的规划"
      },
      {
        "letter": "C",
        "text": "仅需符合设台地的地方无线电管理机构的规划及相关规定"
      },
      {
        "letter": "D",
        "text": "符合申请人关于设置中继台的客观需求和技术考虑"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.2.4",
    "type": "MC1-0051",
    "image": ""
  },
  {
    "id": "Q38",
    "originalId": "LX",
    "text": "国家无线电管理机构及其委托的机构可以组织实施如下类别的业余无线电台操作技术能力验证：",
    "options": [
      {
        "letter": "A",
        "text": "A 类业余无线电台操作技术能力验证"
      },
      {
        "letter": "B",
        "text": "B 类业余无线电台操作技术能力验证"
      },
      {
        "letter": "C",
        "text": "C 类业余无线电台操作技术能力验证"
      },
      {
        "letter": "D",
        "text": "一级个人业余电台操作证书"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.3.2",
    "type": "MC3-0056",
    "image": ""
  },
  {
    "id": "Q39",
    "originalId": "LX",
    "text": "业余无线电台操作技术能力分为哪几类：",
    "options": [
      {
        "letter": "A",
        "text": "A 类"
      },
      {
        "letter": "B",
        "text": "B 类"
      },
      {
        "letter": "C",
        "text": "C 类"
      },
      {
        "letter": "D",
        "text": "D 类"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.3.2",
    "type": "MC3-0057",
    "image": ""
  },
  {
    "id": "Q40",
    "originalId": "LY0013",
    "text": "不同类别业余无线电台的主要区别在于：",
    "options": [
      {
        "letter": "A",
        "text": "允许工作的频率范围"
      },
      {
        "letter": "B",
        "text": "允许发射的最大发射功率"
      },
      {
        "letter": "C",
        "text": "所用业余无线电台设备的功能"
      },
      {
        "letter": "D",
        "text": "所用业余无线电台的天线高度和长度"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0058",
    "image": ""
  },
  {
    "id": "Q41",
    "originalId": "LY0014、[J]LY0017",
    "text": "A 类业余无线电台允许工作的频率范围和最大发射功率为：",
    "options": [
      {
        "letter": "A",
        "text": "30-3000MHz 频段，不大于 25 瓦"
      },
      {
        "letter": "B",
        "text": "各 VHF 和 UHF 频段，不大于 50 瓦"
      },
      {
        "letter": "C",
        "text": "各业余业务和卫星业余业务频段，不大于 15 瓦"
      },
      {
        "letter": "D",
        "text": "各 VHF 和 UHF 频段，不大于 15 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.3.2",
    "type": "MC1-0059",
    "image": ""
  },
  {
    "id": "Q42",
    "originalId": "LY0015、[J]LY0018",
    "text": "取得 B 类业余无线电台操作技术能力验证证书的，可以申请设置、使用业余无线电台的工作频段和最大发射功率为：",
    "options": [
      {
        "letter": "A",
        "text": "30MHz 以下频段小于 15 瓦，或 30MHz 以上频段不大于 25 瓦"
      },
      {
        "letter": "B",
        "text": "30MHz 以下频段不大于 100 瓦，或 30MHz 以上频段不大于 25 瓦"
      },
      {
        "letter": "C",
        "text": "30MHz 以下频段不大于 25 瓦，或 30MHz 以上频段小于 15 瓦"
      },
      {
        "letter": "D",
        "text": "30MHz 以下频段不大于 25 瓦，或 30MHz 以上频段不大于 100 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.3.2",
    "type": "MC1-0060",
    "image": ""
  },
  {
    "id": "Q43",
    "originalId": "LY0016、[J]LY0019",
    "text": "取得 C 类业余无线电台操作技术能力验证证书的，可以申请设置、使用业余无线电台的工作频段和最大发射功率为：",
    "options": [
      {
        "letter": "A",
        "text": "30MHz 以下频段不大于 1000 瓦，或 30MHz 以上频段不大于 25 瓦"
      },
      {
        "letter": "B",
        "text": "30MHz 以下频段不大于 100 瓦，或 30MHz 以上频段不大于 25 瓦"
      },
      {
        "letter": "C",
        "text": "30MHz 以下频段不大于 25 瓦，或 30MHz 以上频段不大于 15 瓦"
      },
      {
        "letter": "D",
        "text": "30MHz 以下频段不大于 25 瓦，或 30MHz 以上频段不大于 1000 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.3.2",
    "type": "MC1-0061",
    "image": ""
  },
  {
    "id": "Q44",
    "originalId": "LX",
    "text": "参加 A 类业余无线电台操作技术能力验证应当符合下列哪些要求：",
    "options": [
      {
        "letter": "A",
        "text": "应当熟悉无线电管理规定"
      },
      {
        "letter": "B",
        "text": "具有一定的业余无线电台操作技术能力"
      },
      {
        "letter": "C",
        "text": "应当年满 18 周岁"
      },
      {
        "letter": "D",
        "text": "应当年满 16 周岁"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0062",
    "image": ""
  },
  {
    "id": "Q45",
    "originalId": "LX",
    "text": "参加 B 类业余无线电台操作技术能力验证应当符合下列哪些要求：",
    "options": [
      {
        "letter": "A",
        "text": "应当依法取得业余无线电台执照 6 个月以上"
      },
      {
        "letter": "B",
        "text": "具有相应的实际操作经验"
      },
      {
        "letter": "C",
        "text": "应当年满 18 周岁"
      },
      {
        "letter": "D",
        "text": "应当年满 16 周岁"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0063",
    "image": ""
  },
  {
    "id": "Q46",
    "originalId": "LX",
    "text": "参加 C 类业余无线电台操作技术能力验证应当符合下列哪些要求：",
    "options": [
      {
        "letter": "A",
        "text": "应当依法取得载明 30MHz 以下频段的业余无线电台执照 18 个月以上"
      },
      {
        "letter": "B",
        "text": "具有相应的实际操作经验"
      },
      {
        "letter": "C",
        "text": "应当依法取得载明 30MHz 以下频段的业余无线电台执照 6 个月以上"
      },
      {
        "letter": "D",
        "text": "应当依法取得载明 30MHz 以下频段的业余无线电台执照 12 个月以上"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0064",
    "image": ""
  },
  {
    "id": "Q47",
    "originalId": "LX",
    "text": "取得 A 类业余无线电台操作技术能力验证证书的，可以申请设置、使用如下业余无线电台:",
    "options": [
      {
        "letter": "A",
        "text": "设置、使用最大发射功率不大于 25 瓦 VHF 频段业余无线电台"
      },
      {
        "letter": "B",
        "text": "设置、使用最大发射功率不大于 25 瓦 UHF 频段业余无线电台"
      },
      {
        "letter": "C",
        "text": "设置、使用最大发射功率不大于 25 瓦 HF 频段业余无线电台"
      },
      {
        "letter": "D",
        "text": "设置、使用最大发射功率不大于 15 瓦 HF 频段业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0065",
    "image": ""
  },
  {
    "id": "Q48",
    "originalId": "LX",
    "text": "取得 B 类业余无线电台操作技术能力验证证书的，可以申请设置、使用如下业余无线电台:",
    "options": [
      {
        "letter": "A",
        "text": "设置、使用最大发射功率不大于 25 瓦 VHF 频段业余无线电台"
      },
      {
        "letter": "B",
        "text": "设置、使用最大发射功率不大于 25 瓦 UHF 频段业余无线电台"
      },
      {
        "letter": "C",
        "text": "设置、使用最大发射功率小于 15 瓦 HF 频段业余无线电台"
      },
      {
        "letter": "D",
        "text": "设置、使用最大发射功率小于 1 瓦（e.i.r.p.）LF 频段业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.3.2",
    "type": "MC4-0066",
    "image": ""
  },
  {
    "id": "Q49",
    "originalId": "LX",
    "text": "取得 C 类业余无线电台操作技术能力验证证书的，可以申请设置、使用如下业余无线电台:",
    "options": [
      {
        "letter": "A",
        "text": "设置、使用最大发射功率不大于 25 瓦 VHF 频段业余无线电台"
      },
      {
        "letter": "B",
        "text": "设置、使用最大发射功率不大于 25 瓦 UHF 频段业余无线电台"
      },
      {
        "letter": "C",
        "text": "设置、使用最大发射功率不大于 1000 瓦 HF 频段业余无线电台"
      },
      {
        "letter": "D",
        "text": "因开展特殊技术试验、通联等活动确需设置、使用大于 25 瓦 VHF 频段业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.3.2",
    "type": "MC4-0067",
    "image": ""
  },
  {
    "id": "Q50",
    "originalId": "LX",
    "text": "关于开展特殊技术试验、通联等活动，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "开展特殊技术试验、通联等活动，确需超出业余无线电台执照载明的功率限值使用业余无线电台的，需经颁发业余无线电台执照的无线电管理机构批准"
      },
      {
        "letter": "B",
        "text": "取得 C 类业余无线电台操作技术能力验证证书且取得业余无线电台执照的人员，经批准可临时在限定条件下开展电台操作"
      },
      {
        "letter": "C",
        "text": "取得 B 类业余无线电台操作技术能力验证证书且取得业余无线电台执照的人员，经批准可临时在限定条件下开展电台操作"
      },
      {
        "letter": "D",
        "text": "取得 A 类业余无线电台操作技术能力验证证书且取得业余无线电台执照的人员，经批准可临时在限定条件下开展电台操作"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0068",
    "image": ""
  },
  {
    "id": "Q51",
    "originalId": "LX",
    "text": "关于未成年人设置、使用业余无线电台，下列哪些选项为正确：",
    "options": [
      {
        "letter": "A",
        "text": "持有 A 类验证证书的可以设置最大发射功率不大于 25 瓦 VHF 频段业余无线电台"
      },
      {
        "letter": "B",
        "text": "持有 B 类验证证书的可以设置最大发射功率不大于 25 瓦 VHF 频段业余无线电台"
      },
      {
        "letter": "C",
        "text": "持有 A 类验证证书的可以设置最大发射功率不大于 15 瓦 HF 频段业余无线电台"
      },
      {
        "letter": "D",
        "text": "持有 B 类验证证书的可以设置最大发射功率不大于 15 瓦 HF 频段业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0069",
    "image": ""
  },
  {
    "id": "Q52",
    "originalId": "LX",
    "text": "关于业余无线电台操作技术能力验证，下列哪些选项为正确：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电台操作技术能力验证题库以及验证标准由国家无线电管理机构制定"
      },
      {
        "letter": "B",
        "text": "无线电管理机构或者其委托的机构组织将提前向社会公布验证时间、验证要求等有关事项"
      },
      {
        "letter": "C",
        "text": "参加业余无线电台操作技术能力验证成绩合格的，由无线电管理机构颁发业余无线电台操作技术能力验证证书"
      },
      {
        "letter": "D",
        "text": "不得向参加验证的人员收取费用"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.3.2",
    "type": "MC4-0070",
    "image": ""
  },
  {
    "id": "Q53",
    "originalId": "LX",
    "text": "关于新版《办法》施行前，依法取得 B 类业余无线电台操作技术能力验证证书的，下列哪些选项为正确：",
    "options": [
      {
        "letter": "A",
        "text": "可以按照规定的许可权限申请设置、使用工作在 30MHz 以下频段且最大发射功率不大于100 瓦"
      },
      {
        "letter": "B",
        "text": "可以按照规定的许可权限申请设置、使用工作在 30MHz 以上频段且最大发射功率不大于25 瓦的业余无线电台"
      },
      {
        "letter": "C",
        "text": "应按照新版《办法》中 B 类业余无线电台操作技术能力验证规定的范围设置、使用电台"
      },
      {
        "letter": "D",
        "text": "新版《办法》施行前取得的 B 类业余无线电台操作技术能力验证证书不再有效"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.3.2",
    "type": "MC2-0071",
    "image": ""
  },
  {
    "id": "Q54",
    "originalId": "LK1073",
    "text": "以下呼号前缀中，所属 CQ 分区与埃及相同的是：",
    "options": [
      {
        "letter": "A",
        "text": "5A"
      },
      {
        "letter": "B",
        "text": "5W"
      },
      {
        "letter": "C",
        "text": "5T"
      },
      {
        "letter": "D",
        "text": "5X"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.4.3",
    "type": "MC1-0101",
    "image": ""
  },
  {
    "id": "Q55",
    "originalId": "LK1089",
    "text": "3V、4X、5A 和 6Y 字头分别代表国家：",
    "options": [
      {
        "letter": "A",
        "text": "Tunis、Israel、Libya、Jamaica"
      },
      {
        "letter": "B",
        "text": "Guinea、Israel、Fiji Islands、Senegal"
      },
      {
        "letter": "C",
        "text": "Libya、Israel、Jamaica、Guinea"
      },
      {
        "letter": "D",
        "text": "Jamaica、Israel、Libya、Senegal"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.4.3",
    "type": "MC1-0102",
    "image": ""
  },
  {
    "id": "Q56",
    "originalId": "LK1094",
    "text": "我国的 NCDXF/IARU 信标台呼号是：",
    "options": [
      {
        "letter": "A",
        "text": "VR2B"
      },
      {
        "letter": "B",
        "text": "BS7H"
      },
      {
        "letter": "C",
        "text": "B0CRA"
      },
      {
        "letter": "D",
        "text": "4U1UN"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.4.3",
    "type": "MC1-0103",
    "image": ""
  },
  {
    "id": "Q57",
    "originalId": "LX",
    "text": "下列哪些呼号前缀不属于空间业余无线电台：",
    "options": [
      {
        "letter": "A",
        "text": "BY1"
      },
      {
        "letter": "B",
        "text": "BR1"
      },
      {
        "letter": "C",
        "text": "BS1"
      },
      {
        "letter": "D",
        "text": "BJ1"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.4.3",
    "type": "MC3-0104",
    "image": ""
  },
  {
    "id": "Q58",
    "originalId": "LY0006",
    "text": "合法设置、使用业余电台的必要步骤是：",
    "options": [
      {
        "letter": "A",
        "text": "按照《业余无线电台管理办法》的规定向无线电管理机构提出申请，取得业余无线电台执照"
      },
      {
        "letter": "B",
        "text": "加入指定的业余无线电民间组织，并按其章程规定的办法办理申请手续"
      },
      {
        "letter": "C",
        "text": "经过业余无线电协会或无线电运动协会同意"
      },
      {
        "letter": "D",
        "text": "经过所在单位或居委会批准"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0105",
    "image": ""
  },
  {
    "id": "Q59",
    "originalId": "LY0008",
    "text": "业余无线电台的法定用途为：",
    "options": [
      {
        "letter": "A",
        "text": "用于相互通信、技术研究和自我训练"
      },
      {
        "letter": "B",
        "text": "供公民在业余时间进行与个人生活事务有关的通信"
      },
      {
        "letter": "C",
        "text": "供公民在业余时间进行休闲娱乐"
      },
      {
        "letter": "D",
        "text": "供私家车主或者相应组织作为行车安全保障和途中消遣工具"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0106",
    "image": ""
  },
  {
    "id": "Q60",
    "originalId": "LY0010",
    "text": "申请设置使用配备有多台业余无线电发射设备的业余无线电台，应该：",
    "options": [
      {
        "letter": "A",
        "text": "视为一个业余电台，指配一个电台呼号，但所有设备均应经过核定并将参数载入电台执照"
      },
      {
        "letter": "B",
        "text": "视为一个业余电台，指配一个电台呼号，其中只需有一台设备加以核定并将参数载入电台执照"
      },
      {
        "letter": "C",
        "text": "每台设备视为一个业余电台，各指配一个电台呼号，并都应经过核定并将参数载入电台执照"
      },
      {
        "letter": "D",
        "text": "视为一个业余电台，指配一个电台呼号，每个频段选择一台设备加以核定并将参数载入电台执照"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0107",
    "image": ""
  },
  {
    "id": "Q61",
    "originalId": "LK0035",
    "text": "业余中继台必备的技术措施为：",
    "options": [
      {
        "letter": "A",
        "text": "设专人负责监控和管理工作，配备有效的遥控手段，保证造成有害干扰时及时停止发射"
      },
      {
        "letter": "B",
        "text": "技术加密措施，防止未经设台人允许的业余无线电台启用中继"
      },
      {
        "letter": "C",
        "text": "尽量提高发射功率，以便压制覆盖区内的其他强信号干扰"
      },
      {
        "letter": "D",
        "text": "设热备份系统，保证不间断工作"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0108",
    "image": ""
  },
  {
    "id": "Q62",
    "originalId": "LK0036",
    "text": "某团体依法设置了一部业余中继台。其正确做法是：",
    "options": [
      {
        "letter": "A",
        "text": "向其覆盖区域内的所有业余无线电台提供平等的服务，并将使用业余中继台所需的各项技术参数公开"
      },
      {
        "letter": "B",
        "text": "中继台是设台者出资建设和维护的，因此仅供经设置者允许的业余电台使用"
      },
      {
        "letter": "C",
        "text": "中继台是设台者出资建设和维护的，因此仅供本团体成员优先使用，空闲时方供其他业余电台使用"
      },
      {
        "letter": "D",
        "text": "为保证中继台正常运行，要求覆盖区内所有业余电台缴纳维护成本，否则不准使用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0109",
    "image": ""
  },
  {
    "id": "Q63",
    "originalId": "LK0037",
    "text": "选择 144MHz 或 430MHz 业余模拟调频中继台同频段收发频差的原则是：",
    "options": [
      {
        "letter": "A",
        "text": "采用业余无线电标准频差，即 144MHz 频段 600kHz，430MHz 频段 5MHz"
      },
      {
        "letter": "B",
        "text": "尽量采用非标准频差以阻止一般业余无线电台占用"
      },
      {
        "letter": "C",
        "text": "采用经常变换频差的办法减少占用度"
      },
      {
        "letter": "D",
        "text": "可以在国家《无线电频率划分规定》所规定业余频率范围内任意选择"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0110",
    "image": ""
  },
  {
    "id": "Q64",
    "originalId": "LY0038",
    "text": "业余无线电台使用的无线电发射设备必须符合下列条件：",
    "options": [
      {
        "letter": "A",
        "text": "商品设备应依法取得型号核准，型号核准证载明的频率范围包含业余业务频段"
      },
      {
        "letter": "B",
        "text": "自制、改装、拼装设备应符合国家标准和国家无线电管理规定，且无线电发射频率范围仅限于业余业务频段"
      },
      {
        "letter": "C",
        "text": "自制、改装、拼装设备不受限制"
      },
      {
        "letter": "D",
        "text": "国外商品设备符合国际流行技术标准即可"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.5.1",
    "type": "MC2-0111",
    "image": ""
  },
  {
    "id": "Q65",
    "originalId": "LK0051",
    "text": "“我不是业余无线电爱好者，申请设置业余电台只是为了行车方便，不需要遵守业余无线电的规范”。这种说法：",
    "options": [
      {
        "letter": "A",
        "text": "是错误的，也是不具备“熟悉无线电管理规定”设台条件的表现"
      },
      {
        "letter": "B",
        "text": "有一定道理，既然行车通信有需求，法规管理应该迎合个人需求"
      },
      {
        "letter": "C",
        "text": "有一定道理，只要是遵守规定，业余电台也可以为非业余无线电爱好者所用"
      },
      {
        "letter": "D",
        "text": "很难说对错，业余电台的定义可以因人而异"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.1",
    "type": "MC1-0112",
    "image": ""
  },
  {
    "id": "Q66",
    "originalId": "LY0056",
    "text": "某业余电台操作者听到业余专用频率上出现某种显然出自非业余电台的人为干扰发射，于是按下话筒向该发射者宣传无线电管理法规知识。对这种做法的评论应该是：",
    "options": [
      {
        "letter": "A",
        "text": "错误；违反“业余无线电台只能用于相互通信、技术研究和自我训练”规定"
      },
      {
        "letter": "B",
        "text": "正确；但有干扰，不予提倡"
      },
      {
        "letter": "C",
        "text": "正确；抓机遇宣传法规，应该提倡"
      },
      {
        "letter": "D",
        "text": "正确；但需注意态度耐心、用语文明"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0113",
    "image": ""
  },
  {
    "id": "Q67",
    "originalId": "LY0057",
    "text": "在业余无线电台中转发广播电台、互联网聊天、电话通话、其他电台的联络信号，这类行为的性质是：",
    "options": [
      {
        "letter": "A",
        "text": "错误行为；违反“业余无线电台只能用于相互通信、技术研究和自我训练”规定，因为通信中产生信息的一方不是业余无线电台"
      },
      {
        "letter": "B",
        "text": "正确行为；既然可以联络，不必要限制向话筒送什么内容"
      },
      {
        "letter": "C",
        "text": "如果转发的目的是进行技术调试、用转发信号作为测试信号的话，就是正常行为"
      },
      {
        "letter": "D",
        "text": "不算错误但也不值得提倡"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0114",
    "image": ""
  },
  {
    "id": "Q68",
    "originalId": "LY0058",
    "text": "业余电台在通信中为其他人或者单位、组织转达信息。对这种做法的评论应该是：",
    "options": [
      {
        "letter": "A",
        "text": "违法行为；违反“业余无线电台只能用于相互通信、技术研究和自我训练”的规定"
      },
      {
        "letter": "B",
        "text": "只要所转达的信息在内容上不违反《业余电台管理法规》的禁止规定就是合法行为"
      },
      {
        "letter": "C",
        "text": "只要转达信息是无偿的，就是合法行为"
      },
      {
        "letter": "D",
        "text": "只要所转达的信息是有利于社会的公益信息，就是合法行为"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0115",
    "image": ""
  },
  {
    "id": "Q69",
    "originalId": "LY0059",
    "text": "某业余无线电协会在发射操作中向其会员播发公益性通知和技术训练讲座，但未得到相应无线电管理机构的批准。对这种做法的评论应该是：",
    "options": [
      {
        "letter": "A",
        "text": "违法行为；违反“未经批准，业余无线电台不得以任何方式进行广播或者发射通播性质的信号”的规定"
      },
      {
        "letter": "B",
        "text": "只要所播发的通知或讲座有利于当地业余无线电爱好者技术水平的提高，不能算违法行为"
      },
      {
        "letter": "C",
        "text": "只要所播发的通知或讲座有利于当地业余无线电应急通信训练，不能算违法行为"
      },
      {
        "letter": "D",
        "text": "只要所播发的通知或讲座是涉及宣传业余电台管理知识的，不能算违法行为"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0116",
    "image": ""
  },
  {
    "id": "Q70",
    "originalId": "LK0060",
    "text": "关于业余无线电台在通信过程中使用的语言，正确的做法为：",
    "options": [
      {
        "letter": "A",
        "text": "任何时候都应当使用明语或者业余无线电领域公认的缩略语、简语"
      },
      {
        "letter": "B",
        "text": "可以使用虽然不是所有火腿通用、但在某些火腿圈子内部有一定可懂度的新编缩略语或暗语"
      },
      {
        "letter": "C",
        "text": "语言要创新，可以使用自创的特殊缩略语，虽开始时象是暗语，用多了就会变明语"
      },
      {
        "letter": "D",
        "text": "可提倡使用稀有语言或方言，尽量使特定通信对象以外的业余无线电台听不懂，以减少他台呼叫和插入的机会"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0117",
    "image": ""
  },
  {
    "id": "Q71",
    "originalId": "LK0063",
    "text": "具备国家无线电管理机构规定的操作技术能力并具有法律规定有效证明文件、但还没有获准设置自己的业余电台的人是否可以到业余电台进行发射操作？答案是：",
    "options": [
      {
        "letter": "A",
        "text": "可以。使用所操作业余电台的呼号，由该业余电台的设台人对操作不妥而造成的有害干扰负责"
      },
      {
        "letter": "B",
        "text": "可以。因为自己没有呼号，只能在通信中使用临时自编的呼号，或用姓名代替呼号"
      },
      {
        "letter": "C",
        "text": "不可以"
      },
      {
        "letter": "D",
        "text": "青少年可以，成人不可以"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0118",
    "image": ""
  },
  {
    "id": "Q72",
    "originalId": "LY0064",
    "text": "未取得相应业余无线电台执照或者相应操作技术能力的人员，为提高业余无线电台操作技术能力的需要，可以在他人依法设置的业余无线电台上进行发射操作实习。应遵守的条件是什么？",
    "options": [
      {
        "letter": "A",
        "text": "发射操作实习应当由业余无线电台设置、使用人或者其技术负责人现场监督指导"
      },
      {
        "letter": "B",
        "text": "使用的频率范围和发射功率应当在 B 类业余无线电台操作技术能力验证证书确定的范围内"
      },
      {
        "letter": "C",
        "text": "使用的频率范围和发射功率不得超过现场监督指导人员依法取得的业余无线电台操作技术能力验证证书确定的范围"
      },
      {
        "letter": "D",
        "text": "尚未取得关于具备操作技术能力有效证明文件的人任何情况下都不可以进行发射操作"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.5.2",
    "type": "MC3-0119",
    "image": ""
  },
  {
    "id": "Q73",
    "originalId": "LK0065",
    "text": "业余无线电台设置人应对其无线电发射设备担负的法定责任为：",
    "options": [
      {
        "letter": "A",
        "text": "应当确保其无线电发射设备处于正常工作状态，避免对其他无线电业务造成有害干扰"
      },
      {
        "letter": "B",
        "text": "应当确保其无线电发射设备随最先进型号更新，为其他业余电台树立求新的榜样"
      },
      {
        "letter": "C",
        "text": "应当确保其无线电发射设备达到最大发射功率，以克服其他无线电业务的干扰"
      },
      {
        "letter": "D",
        "text": "应当确保其无线电发射设备经常处于工作状态，以提高业余频率的实际占用度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0120",
    "image": ""
  },
  {
    "id": "Q74",
    "originalId": "LK0066",
    "text": "业余无线电爱好者使用业余无线电收信设备应遵守的规定为：",
    "options": [
      {
        "letter": "A",
        "text": "不得接收与业余业务和卫星业余业务无关的信号"
      },
      {
        "letter": "B",
        "text": "只要不造成对其他业务的无线电干扰，接收无线电信号没有限制"
      },
      {
        "letter": "C",
        "text": "只要不被查出来，可以接收任何无线电信号"
      },
      {
        "letter": "D",
        "text": "只要出于个人对信息的兴趣而不涉及赢利，可以接收任何无线电信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0121",
    "image": ""
  },
  {
    "id": "Q75",
    "originalId": "LK0067",
    "text": "业余无线电爱好者无意接收到非业余业务和卫星业余业务的信息时，应遵守的规则为：",
    "options": [
      {
        "letter": "A",
        "text": "不得传播、公布"
      },
      {
        "letter": "B",
        "text": "只可以在业余无线电台间共享，不得在其他场合公开"
      },
      {
        "letter": "C",
        "text": "只可以用非无线电方式在业余无线电爱好者之间交流，不得以无线电方式转发"
      },
      {
        "letter": "D",
        "text": "既然自己可以收到，别人也一定可以收到，当然可以传播、公布或者利用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0122",
    "image": ""
  },
  {
    "id": "Q76",
    "originalId": "LK0068",
    "text": "业余无线电台是否可以发射从广播电台收到的信号、音像节目的录音，或者故意转送电台周围的声音？",
    "options": [
      {
        "letter": "A",
        "text": "不可以，不得发送与业余业务和卫星业余业务无关的信号"
      },
      {
        "letter": "B",
        "text": "可以，因为该类信息没有保密性"
      },
      {
        "letter": "C",
        "text": "可以，用于显示自己发射设备的信号质量"
      },
      {
        "letter": "D",
        "text": "可以，用于提起其他有业余无线电台操作员精神，防止乏困"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0123",
    "image": ""
  },
  {
    "id": "Q77",
    "originalId": "LK0069",
    "text": "国家对于利用业余无线电台从事发布、传播违反法律或者公共道德的信息的行为的态度是：",
    "options": [
      {
        "letter": "A",
        "text": "禁止"
      },
      {
        "letter": "B",
        "text": "不提倡"
      },
      {
        "letter": "C",
        "text": "容忍"
      },
      {
        "letter": "D",
        "text": "不可以发布传播违法信息。但违反公共道德的信息属于道德问题，不鼓励就是了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0124",
    "image": ""
  },
  {
    "id": "Q78",
    "originalId": "LK0070",
    "text": "出租车安装业余电台并用来传递有关载客的信息，这种行为的性质是：",
    "options": [
      {
        "letter": "A",
        "text": "违法行为，违反了严禁利用业余无线电台谋取商业利益的规定"
      },
      {
        "letter": "B",
        "text": "不太好，因为占用了其他业余电台通信的频率"
      },
      {
        "letter": "C",
        "text": "只要不影响其他业余电台的正常通信就可以"
      },
      {
        "letter": "D",
        "text": "只要管理部门不来查处就可以"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0125",
    "image": ""
  },
  {
    "id": "Q79",
    "originalId": "LK0071",
    "text": "利用业余无线电台通信来促销业余无线电产品或者推动与业余无线电活动有关的其他商业性活动，对这类行为的态度应该是：",
    "options": [
      {
        "letter": "A",
        "text": "禁止"
      },
      {
        "letter": "B",
        "text": "不提倡但也不禁止，毕竟有利于业余无线电活动发展"
      },
      {
        "letter": "C",
        "text": "只要是业余无线电民间组织是获利方，即使从事商业或其他营利活动，应支持"
      },
      {
        "letter": "D",
        "text": "如果设台人或者设台单位本身是以这类经营为生的，应适当理解和容忍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0126",
    "image": ""
  },
  {
    "id": "Q80",
    "originalId": "LK0072",
    "text": "利用自己的业余电台强信号故意压制其他业余电台的正常通信，或者在业余无线电频率上转播音乐或广播节目，这些行为的性质属于：",
    "options": [
      {
        "letter": "A",
        "text": "违法行为，违反了严禁阻碍其他无线电台通信的规定"
      },
      {
        "letter": "B",
        "text": "不妥行为，没有考虑到他人的乐趣"
      },
      {
        "letter": "C",
        "text": "正常现象，社会上一些人素质就是如此，应该谅解"
      },
      {
        "letter": "D",
        "text": "不文明行为，对其他业余电台不够礼貌"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0127",
    "image": ""
  },
  {
    "id": "Q81",
    "originalId": "LY0073",
    "text": "业余无线电活动是否有序开展，会影响整个社会的无线电通信的安全和有效，使用不当甚至会导致生命财产损失。业余无线电爱好者在这方的责任是：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电台设置、使用人应当加强自律"
      },
      {
        "letter": "B",
        "text": "个人没有责任，只能依靠管理部门的监督检查和违法查处"
      },
      {
        "letter": "C",
        "text": "个人没有责任，只能依靠业余无线电民间组织充当“协管”"
      },
      {
        "letter": "D",
        "text": "有了电台执照，日常一切言行当然可以带到电台通信中，无责任可言"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0128",
    "image": ""
  },
  {
    "id": "Q82",
    "originalId": "LY0111",
    "text": "业余无线电台可用于下列用途：",
    "options": [
      {
        "letter": "A",
        "text": "相互通信、技术研究和自我训练"
      },
      {
        "letter": "B",
        "text": "救灾抢险、车队联络和广播通信"
      },
      {
        "letter": "C",
        "text": "娱乐休闲、报告路况和公益服务"
      },
      {
        "letter": "D",
        "text": "技术教学、民兵训练和公益服务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0129",
    "image": ""
  },
  {
    "id": "Q83",
    "originalId": "LK0112",
    "text": "符合业余无线电爱好者基本条件的人群是：",
    "options": [
      {
        "letter": "A",
        "text": "对无线电技术有兴趣并经无线电管理机构批准设置使用业余无线电台的人"
      },
      {
        "letter": "B",
        "text": "任何对无线电技术有兴趣的公民"
      },
      {
        "letter": "C",
        "text": "对无线电技术有兴趣并加入业余无线电协会的人"
      },
      {
        "letter": "D",
        "text": "拥有较高无线电技术水平并加入业余无线电协会的人"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.2",
    "type": "MC1-0130",
    "image": ""
  },
  {
    "id": "Q84",
    "originalId": "LX",
    "text": "业余无线电台禁止从事下列活动：",
    "options": [
      {
        "letter": "A",
        "text": "在我国境内进行电波参数测试或者电波监测"
      },
      {
        "letter": "B",
        "text": "向境外组织或者个人提供涉及国家安全的境内电波参数资料"
      },
      {
        "letter": "C",
        "text": "故意收发无线电台执照许可事项之外的无线电信号"
      },
      {
        "letter": "D",
        "text": "传播、公布或者利用无意接收的信息"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.2",
    "type": "MC4-0131",
    "image": ""
  },
  {
    "id": "Q85",
    "originalId": "LX",
    "text": "业余无线电台应当遵守下列哪些规定：",
    "options": [
      {
        "letter": "A",
        "text": "在业余业务或者卫星业余业务频段内收发信号"
      },
      {
        "letter": "B",
        "text": "不得擅自使用无线电频率"
      },
      {
        "letter": "C",
        "text": "不得对依法开展的无线电业务造成有害干扰"
      },
      {
        "letter": "D",
        "text": "不得利用无线电台(站)进行违法犯罪活动"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.2",
    "type": "MC4-0132",
    "image": ""
  },
  {
    "id": "Q86",
    "originalId": "LX",
    "text": "以下哪些使用业余无线电台的行为超越了在业余业务频率范围内收发信号的规定：",
    "options": [
      {
        "letter": "A",
        "text": "利用业余无线电台收听民用航空器电台通联"
      },
      {
        "letter": "B",
        "text": "利用业余无线电台收听铁路机车电台通联"
      },
      {
        "letter": "C",
        "text": "利用业余无线电台收听渔船海事电台通联"
      },
      {
        "letter": "D",
        "text": "利用业余无线电台收听国际空间站业余无线电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.5.2",
    "type": "MC3-0133",
    "image": ""
  },
  {
    "id": "Q87",
    "originalId": "LX",
    "text": "下列哪些未取得型号核准的无线电发射设备不可以作为自制、改装、拼装的业余无线电台设置、使用：",
    "options": [
      {
        "letter": "A",
        "text": "相关企业批量生产的未取得型号核准证的无线电发射设备"
      },
      {
        "letter": "B",
        "text": "已取得型号核准证，但型号核准证载明的频率范围不含业余业务的无线电发射设备"
      },
      {
        "letter": "C",
        "text": "已取得型号核准证，但自行更换设备操作软件将频率范围扩展到业余业务频段的无线电发射设备"
      },
      {
        "letter": "D",
        "text": "依法改装的取得型号核准证载明的频率范围包含业余业务频段的无线电发射设备"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.5.2",
    "type": "MC3-0134",
    "image": ""
  },
  {
    "id": "Q88",
    "originalId": "LX",
    "text": "使用业余无线电台不得从事下列活动:",
    "options": [
      {
        "letter": "A",
        "text": "发布、传播法律、行政法规禁止发布、传播的信息"
      },
      {
        "letter": "B",
        "text": "用于谋取商业利益等超出业余无线电台使用属性之外的目的"
      },
      {
        "letter": "C",
        "text": "故意干扰、阻碍其他无线电台（站）通信"
      },
      {
        "letter": "D",
        "text": "故意收发业余无线电台执照载明事项之外的无线电信号"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.2",
    "type": "MC4-0135",
    "image": ""
  },
  {
    "id": "Q89",
    "originalId": "LX",
    "text": "使用业余无线电台不得从事下列活动:",
    "options": [
      {
        "letter": "A",
        "text": "传播、公布或者利用无意接收的信息"
      },
      {
        "letter": "B",
        "text": "擅自编制、使用业余无线电台呼号"
      },
      {
        "letter": "C",
        "text": "涂改、倒卖、出租或者出借业余无线电台执照"
      },
      {
        "letter": "D",
        "text": "向境外组织或者个人提供涉及国家安全的境内电波参数资料"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.2",
    "type": "MC4-0136",
    "image": ""
  },
  {
    "id": "Q90",
    "originalId": "LX",
    "text": "使用业余无线电台应当符合如下规定：",
    "options": [
      {
        "letter": "A",
        "text": "定期维护业余无线电台"
      },
      {
        "letter": "B",
        "text": "保证其性能指标符合国家标准"
      },
      {
        "letter": "C",
        "text": "保证其性能指标符合国家无线电管理的有关规定"
      },
      {
        "letter": "D",
        "text": "避免对其他依法设置、使用的无线电台（站）产生有害干扰"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.2",
    "type": "MC4-0137",
    "image": ""
  },
  {
    "id": "Q91",
    "originalId": "LX",
    "text": "关于业余无线电台在通信过程中使用的语言，正确的做法为:",
    "options": [
      {
        "letter": "A",
        "text": "在通信过程中使用明语"
      },
      {
        "letter": "B",
        "text": "在通信过程中使用业余无线电领域公认的缩略语、简语"
      },
      {
        "letter": "C",
        "text": "在通信过程中使用公开的技术体制和通信协议"
      },
      {
        "letter": "D",
        "text": "在通信过程中使用自创的特殊缩略语"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.5.2",
    "type": "MC3-0138",
    "image": ""
  },
  {
    "id": "Q92",
    "originalId": "LK0053",
    "text": "关于业余无线电台的应急通信，正确的叙述是：",
    "options": [
      {
        "letter": "A",
        "text": "在突发重大自然灾害等紧急情况下，业余无线电台才可以和非业余无线电台进行规定内容的通信"
      },
      {
        "letter": "B",
        "text": "在日常应急通信训练中，业余无线电台可以和各种非业余无线电台进行通信"
      },
      {
        "letter": "C",
        "text": "在日常应急通信训练中，业余无线电台可以和地方公益性救援团体的非业余无线电台进行通信"
      },
      {
        "letter": "D",
        "text": "在日常应急通信训练中，业余无线电台可以和地方公益性救援团体的非业余无线电台进行通信，但须经当地业余无线电协会同意"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.3",
    "type": "MC1-0139",
    "image": ""
  },
  {
    "id": "Q93",
    "originalId": "LK0054",
    "text": "业余无线电台允许与非业余无线电台通信的条件是：",
    "options": [
      {
        "letter": "A",
        "text": "在突发重大自然灾害等紧急情况下，内容限于与抢险救灾直接相关的紧急事务或者应急救援相关部门交办的任务"
      },
      {
        "letter": "B",
        "text": "在当地政府或非盈利机构组织的公益活动中，内容限于与公益事务或者相关的活动组织机构交办的任务"
      },
      {
        "letter": "C",
        "text": "在青少年科技教育活动中，仅可与青少年非业余无线电台通信，内容限于与青少年科技教育直接有关的事务"
      },
      {
        "letter": "D",
        "text": "在无线电技术研究中，仅可与具备其他业务电台执照的对象通信，内容限于技术实验所需的信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.3",
    "type": "MC1-0140",
    "image": ""
  },
  {
    "id": "Q94",
    "originalId": "LK0055",
    "text": "关于业余无线电台的应急通信，正确的叙述是：",
    "options": [
      {
        "letter": "A",
        "text": "在突发重大自然灾害等紧急情况下，业余无线电台的通信内容可以涉及应急救援相关部门交办的任务"
      },
      {
        "letter": "B",
        "text": "在平时的任何时侯，业余无线电台的通信内容可以涉及任何政府组织和非盈利机构交办的任务"
      },
      {
        "letter": "C",
        "text": "平时在专门的应急通信训练活动中，业余无线电台的通信内容可以涉及应急救援相关部门和组织机构交办的任务"
      },
      {
        "letter": "D",
        "text": "在日常公益性社会活动中，业余无线电台的通信内容可以涉及各种公益机构交办的任务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.5.3",
    "type": "MC1-0141",
    "image": ""
  },
  {
    "id": "Q95",
    "originalId": "LX",
    "text": "业余无线电爱好者在应对突发事件应急处置应当遵守下列规定：",
    "options": [
      {
        "letter": "A",
        "text": "为突发事件应急处置的需要，业余无线电台可以与非业余无线电台通信"
      },
      {
        "letter": "B",
        "text": "通信内容应当限于与突发事件应急处置直接相关的紧急事务"
      },
      {
        "letter": "C",
        "text": "遇有危及国家安全、公共安全、生命财产安全等紧急情况，可以不经批准临时设置、使用业余无线电台，但应当在 48 小时内向电台所在地的无线电管理机构报告"
      },
      {
        "letter": "D",
        "text": "遇有危及国家安全、公共安全、生命财产安全等紧急情况，未经批准临时设置、使用业余无线电台应在紧急情况消除后及时关闭"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.5.3",
    "type": "MC4-0142",
    "image": ""
  },
  {
    "id": "Q96",
    "originalId": "LK0074",
    "text": "业余无线电台设置、使用人应当接受下列机构对业余无线电台及其使用情况的监督检查：",
    "options": [
      {
        "letter": "A",
        "text": "无线电管理机构的监督检查"
      },
      {
        "letter": "B",
        "text": "业余无线电民间组织的独立监督检查"
      },
      {
        "letter": "C",
        "text": "单位或所在居委会、村民委员会、物主委员会的监督检查"
      },
      {
        "letter": "D",
        "text": "国家计量监督部门的监督检查"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0143",
    "image": ""
  },
  {
    "id": "Q97",
    "originalId": "LX",
    "text": "关于无线电频谱资源，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "无线电频谱资源属于国家所有"
      },
      {
        "letter": "B",
        "text": "国家对无线电频谱资源实行统一规划、合理开发、有偿使用的原则"
      },
      {
        "letter": "C",
        "text": "国家鼓励、支持对无线电频谱资源的科学技术研究和先进技术的推广应用，提高无线电频谱资源的利用效率"
      },
      {
        "letter": "D",
        "text": "根据维护国家安全、保障国家重大任务、处置重大突发事件等需要，国家可以实施无线电管制"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.6.1",
    "type": "MC4-0144",
    "image": ""
  },
  {
    "id": "Q98",
    "originalId": "LX",
    "text": "关于无线电频率、业务、台（站），下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "任何单位或者个人不得擅自使用无线电频率"
      },
      {
        "letter": "B",
        "text": "任何单位或者个人不得对依法开展的无线电业务造成有害干扰"
      },
      {
        "letter": "C",
        "text": "任何单位或者个人不得利用无线电台（站）进行违法犯罪活动"
      },
      {
        "letter": "D",
        "text": "设置、使用业余无线电台需要遵守《中华人民共和国无线电管理条例》"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.6.1",
    "type": "MC4-0145",
    "image": ""
  },
  {
    "id": "Q99",
    "originalId": "LK0103",
    "text": "违反国家规定，擅自设置、使用无线电台（站），或者擅自使用无线电频率，干扰无线电通讯秩序，情节严重的，处三年以下有期徒刑、拘役或者管制，并处或者单处罚金；情节特别严重的，处三年以上七年以下有期徒刑，并处罚金。单位犯前款罪的，对单位判处罚金，并对其直接负责的主管人员和其他直接责任人员，依照前款的规定处罚。这个规定出自于下列法规律：",
    "options": [
      {
        "letter": "A",
        "text": "中华人民共和国刑法"
      },
      {
        "letter": "B",
        "text": "中华人民共和国民法通则"
      },
      {
        "letter": "C",
        "text": "中华人民共和国无线电管理条例"
      },
      {
        "letter": "D",
        "text": "中华人民共和国电信法"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0146",
    "image": ""
  },
  {
    "id": "Q100",
    "originalId": "LK0104",
    "text": "无线电频率的使用必须得到无线电管理机构的批准，基本依据是“无线电频谱资源属于国家所有”，出自于下列法律的第二百五十二条：",
    "options": [
      {
        "letter": "A",
        "text": "中华人民共和国民法典"
      },
      {
        "letter": "B",
        "text": "中华人民共和国宪法"
      },
      {
        "letter": "C",
        "text": "中华人民共和国刑法"
      },
      {
        "letter": "D",
        "text": "中华人民共和国电信法"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0147",
    "image": ""
  },
  {
    "id": "Q101",
    "originalId": "LK0105",
    "text": "无线电管制是指在下列范围内依法采取的对无线电波的发射、辐射和传播实施的强制性管理：",
    "options": [
      {
        "letter": "A",
        "text": "在特定时间和特定区域内"
      },
      {
        "letter": "B",
        "text": "在全国范围、所有时间内"
      },
      {
        "letter": "C",
        "text": "在特定范围、所有时间内"
      },
      {
        "letter": "D",
        "text": "在例行范围和例行时间内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0148",
    "image": ""
  },
  {
    "id": "Q102",
    "originalId": "LK0106",
    "text": "无线电管制是指在特定时间和特定区域内，依法采取的下列性质的管理：",
    "options": [
      {
        "letter": "A",
        "text": "对无线电波的发射、辐射和传播实施的强制性管理"
      },
      {
        "letter": "B",
        "text": "对无线电波的发射、辐射实施的指导和行业自律性管理"
      },
      {
        "letter": "C",
        "text": "对无线电发射设备的生产、销售实施的强制性管理"
      },
      {
        "letter": "D",
        "text": "对无线电发射设备的生产、销售实施的指导和行业自律性管理"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0149",
    "image": ""
  },
  {
    "id": "Q103",
    "originalId": "LK0107",
    "text": "在特定时间和特定区域内实施无线电管制时，与业余无线电有关的管理措施包括：",
    "options": [
      {
        "letter": "A",
        "text": "限制或者禁止业余无线电台（站）的使用，以及对特定的无线电频率实施技术阻断等"
      },
      {
        "letter": "B",
        "text": "限制或者禁止业余无线电台设备的生产和销售"
      },
      {
        "letter": "C",
        "text": "限制、但不会禁止业余无线电台（站）的使用"
      },
      {
        "letter": "D",
        "text": "依法设置的业余电台不在管制范围之内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.1",
    "type": "MC1-0150",
    "image": ""
  },
  {
    "id": "Q104",
    "originalId": "LY0108",
    "text": "决定实施无线电管制的机构为：",
    "options": [
      {
        "letter": "A",
        "text": "在全国范围内或者跨省、自治区、直辖市实施，由国务院和中央军事委员会决定"
      },
      {
        "letter": "B",
        "text": "在省、自治区、直辖市范围内实施，由省、自治区、直辖市人民政府和相关军区决定"
      },
      {
        "letter": "C",
        "text": "在全国范围内或者跨省、自治区、直辖市实施，由国家无线电管理机构决定"
      },
      {
        "letter": "D",
        "text": "在省、自治区、直辖市范围内实施，由相关地方无线电管理机构决定"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.1",
    "type": "MC2-0151",
    "image": ""
  },
  {
    "id": "Q105",
    "originalId": "LY0109",
    "text": "违反无线电管制命令和无线电管制指令的，由下列机构依法进行处罚：",
    "options": [
      {
        "letter": "A",
        "text": "国家无线电管理机构或者省、自治区、直辖市无线电管理机构"
      },
      {
        "letter": "B",
        "text": "违反治安管理规定者由公安机关处罚"
      },
      {
        "letter": "C",
        "text": "当地业余无线电协会"
      },
      {
        "letter": "D",
        "text": "所在军区派出的专门机构"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.1",
    "type": "MC2-0152",
    "image": ""
  },
  {
    "id": "Q106",
    "originalId": "LY0110",
    "text": "业余电台违反无线电管制命令和无线电管制指令的，可以依法规受到下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "责令改正；拒不改正的，关闭、查封、暂扣或者拆除相关设备"
      },
      {
        "letter": "B",
        "text": "情节严重的，吊销电台执照"
      },
      {
        "letter": "C",
        "text": "违反治安管理规定的，由公安机关处罚"
      },
      {
        "letter": "D",
        "text": "处警告或者三万元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "1.6.2",
    "type": "MC3-0153",
    "image": ""
  },
  {
    "id": "Q107",
    "originalId": "LX",
    "text": "对未经许可擅自使用无线电频率的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，没收从事违法活动的设备和违法所得，可以并处 5 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "拒不改正的，并处 5 万元以上 20 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "劝告拆除非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0154",
    "image": ""
  },
  {
    "id": "Q108",
    "originalId": "LY0094",
    "text": "对擅自设置、使用业余无线电台的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，没收从事违法活动的设备和违法所得，可以并处 5 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "拒不改正的，并处 5 万元以上 20 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "劝告拆除非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0155",
    "image": ""
  },
  {
    "id": "Q109",
    "originalId": "LY0094",
    "text": "擅自设置、使用无线电台（站）从事诈骗等违法活动，可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "尚不构成犯罪的，并处 20 万元以上 50 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "拒不改正的，处 5 万元以上 20 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "劝告拆除非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.2",
    "type": "MC1-0156",
    "image": ""
  },
  {
    "id": "Q110",
    "originalId": "LY0096",
    "text": "不按照业余无线电台执照规定的许可事项和要求设置、使用业余无线电台的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，没收违法所得，可以并处 3 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，吊销无线电台执照，并处 3 万元以上 10 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0157",
    "image": ""
  },
  {
    "id": "Q111",
    "originalId": "LX",
    "text": "故意收发业余无线电台执照许可事项之外的无线电信号，传播、公布或者利用无意接收的信息，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，没收违法所得，可以并处 3 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，吊销无线电台执照，并处 3 万元以上 10 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0158",
    "image": ""
  },
  {
    "id": "Q112",
    "originalId": "LX",
    "text": "擅自编制、使用业余无线电台呼号，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，没收违法所得，可以并处 3 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，吊销无线电台执照，并处 3 万元以上 10 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0159",
    "image": ""
  },
  {
    "id": "Q113",
    "originalId": "LY0095",
    "text": "业余电台干扰无线电业务正常进行的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，拒不改正的，没收产生有害干扰的设备，并处 5 万元以上20 万元以下的罚款，吊销无线电台执照"
      },
      {
        "letter": "B",
        "text": "劝告拆除非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.2",
    "type": "MC1-0160",
    "image": ""
  },
  {
    "id": "Q114",
    "originalId": "LX",
    "text": "业余电台对船舶、航天器、航空器、铁路机车专用无线电导航、遇险救助和安全通信等涉及人身安全的无线电频率产生有害干扰的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "处 20 万元以上 50 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "劝告拆除非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.2",
    "type": "MC1-0161",
    "image": ""
  },
  {
    "id": "Q115",
    "originalId": "LX",
    "text": "研制、生产、销售和维修大功率无线电发射设备，未采取有效措施抑制电波发射的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正；拒不改正的，没收从事违法活动的设备，并处 3 万元以上10 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，并处 10 万元以上 30 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0162",
    "image": ""
  },
  {
    "id": "Q116",
    "originalId": "LX",
    "text": "境外组织或者个人在我国境内进行电波参数测试或者电波监测的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正；拒不改正的，没收从事违法活动的设备，并处 3 万元以上10 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，并处 10 万元以上 30 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0163",
    "image": ""
  },
  {
    "id": "Q117",
    "originalId": "LX",
    "text": "向境外组织或者个人提供涉及国家安全的境内电波参数资料的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正；拒不改正的，没收从事违法活动的设备，并处 3 万元以上10 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "造成严重后果的，并处 10 万元以上 30 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0164",
    "image": ""
  },
  {
    "id": "Q118",
    "originalId": "LX",
    "text": "生产或者进口在国内销售、使用的无线电发射设备未取得型号核准的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正，处 5 万元以上 20 万元以下的罚款"
      },
      {
        "letter": "B",
        "text": "拒不改正的，没收未取得型号核准的无线电发射设备，并处 20 万元以上 100 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0165",
    "image": ""
  },
  {
    "id": "Q119",
    "originalId": "LX",
    "text": "销售依照本条例第四十四条的规定应当取得型号核准的无线电发射设备未向无线电管理机构办理销售备案的，无线电管理机构可以根据其具体情况给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "由无线电管理机构责令改正"
      },
      {
        "letter": "B",
        "text": "拒不改正的，处 1 万元以上 3 万元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令停止使用非法设置的电台；情节严重的，可以并处警告、查封或者没收设备"
      },
      {
        "letter": "D",
        "text": "责令停止使用非法设置的电台并作出书面检查；情节严重的，可以并处一千元以下的罚款"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0166",
    "image": ""
  },
  {
    "id": "Q120",
    "originalId": "LX",
    "text": "关于违反《中华人民共和国无线电管理条例》规定，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "构成违反治安管理行为的，依法给予治安管理处罚"
      },
      {
        "letter": "B",
        "text": "构成犯罪的，依法追究刑事责任"
      },
      {
        "letter": "C",
        "text": "进口无线电发射设备，携带、寄递或者以其他方式运输无线电发射设备入境，违反海关监管法律法规的，由海关依法处罚"
      },
      {
        "letter": "D",
        "text": "违反《条例》规定，只需被无线电管理机构处罚"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0167",
    "image": ""
  },
  {
    "id": "Q121",
    "originalId": "LY0101",
    "text": "隐瞒有关情况、提供虚假材料或者虚假承诺申请业余无线电台设置、使用许可，无线电管理机构可以给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "无线电管理机构不予许可，并给予警告"
      },
      {
        "letter": "B",
        "text": "责令限期改正，可以处警告或者一千元以上，五千元以下的罚款"
      },
      {
        "letter": "C",
        "text": "责令限期改正，可以处警告或者一千元以下的罚款"
      },
      {
        "letter": "D",
        "text": "责令限期改正，情节严重的，可以并处警告、查封或者没收设备"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.2",
    "type": "MC1-0168",
    "image": ""
  },
  {
    "id": "Q122",
    "originalId": "LX",
    "text": "以欺骗、贿赂等不正当手段取得业余无线电台执照的，可以给予下列处罚：",
    "options": [
      {
        "letter": "A",
        "text": "无线电管理机构依法给予行政处罚"
      },
      {
        "letter": "B",
        "text": "构成犯罪的，依法追究刑事责任"
      },
      {
        "letter": "C",
        "text": "责令限期改正，可以处警告或者一千元以下的罚款"
      },
      {
        "letter": "D",
        "text": "责令限期改正，情节严重的，可以并处警告、查封或者没收设备"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.6.2",
    "type": "MC2-0169",
    "image": ""
  },
  {
    "id": "Q123",
    "originalId": "LX",
    "text": "在《中华人民共和国治安管理处罚法》中，无线电有关说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "违反国家规定，故意干扰无线电业务正常进行的，或者对正常运行的无线电台（站）产生有害干扰，经有关主管部门指出后，拒不采取有效措施消除的，处五日以上十日以下拘留；情节严重的，处十日以上十五日以下拘留"
      },
      {
        "letter": "B",
        "text": "违反国家规定，故意干扰无线电业务正常进行，或者对正常运行的无线电台（站）产生有害干扰，经有关主管部门指出后，拒不采取有效措施消除的，不会采取拘留手段进行处理"
      },
      {
        "letter": "C",
        "text": "产生有害干扰不会受到处罚"
      },
      {
        "letter": "D",
        "text": "使用业余无线电台时，只要不对其他业余无线电台产生干扰即可"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.6.2",
    "type": "MC1-0170",
    "image": ""
  },
  {
    "id": "Q124",
    "originalId": "LK0048",
    "text": "业余无线电台在业余业务、卫星业余业务作为次要业务使用的频率或者与其他主要业务共同使用的频率上发射操作时，应当注意：",
    "options": [
      {
        "letter": "A",
        "text": "遵守无线电管理机构对该频率的使用规定"
      },
      {
        "letter": "B",
        "text": "首先守听频率是否已由其他业务电台占用，如听不到，即可按照先来先用的原则放心使用"
      },
      {
        "letter": "C",
        "text": "只要遵守了《中华人民共和国无线电频率划分规定》的有关规定即可放心使用"
      },
      {
        "letter": "D",
        "text": "可以任意使用，但在遇到其他业务电台使用时要主动避让"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0174",
    "image": ""
  },
  {
    "id": "Q125",
    "originalId": "LK0049",
    "text": "关于业余频率的使用，正确的叙述是：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电台在无线电管理机构核准其使用的频段内，享有平等的频率使用权"
      },
      {
        "letter": "B",
        "text": "任何业余无线电台在任何频段都享有平等的频率使用权"
      },
      {
        "letter": "C",
        "text": "业余无线电台在无线电管理机构核准其使用的频段内，不同类别的业余电台享有不同优先程度的频率使用权"
      },
      {
        "letter": "D",
        "text": "依法成立的地方业余无线电民间组织的业余电台，在其常用的台网频率上享有比其他个人设置的业余电台优先的使用权"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0175",
    "image": ""
  },
  {
    "id": "Q126",
    "originalId": "LK0141",
    "text": "在频率划分表中，当一个频段划分给业余业务或卫星业余业务和多个其他业务，并且业余业务和卫星业余业务作为次要业务时，业余无线电台应该遵循的规则是：",
    "options": [
      {
        "letter": "A",
        "text": "不得对主要业务电台产生有害干扰"
      },
      {
        "letter": "B",
        "text": "可要求保护不受来自主要业务电台的有害干扰"
      },
      {
        "letter": "C",
        "text": "不得对来自同一业务或其他次要业务电台的有害干扰提出保护要求"
      },
      {
        "letter": "D",
        "text": "容许因设备技术问题对主要业务电台产生短时间有害干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0176",
    "image": ""
  },
  {
    "id": "Q127",
    "originalId": "LK0142",
    "text": "在频率划分表中，当一个频段划分给业余业务或卫星业余业务和多个其他业务，并且业余业务和卫星业余业务作为次要业务时，业余无线电台遵循的规则是：",
    "options": [
      {
        "letter": "A",
        "text": "不得对来自主要业务电台的有害干扰提出保护要求"
      },
      {
        "letter": "B",
        "text": "可要求保护不受来自主要业务电台的有害干扰"
      },
      {
        "letter": "C",
        "text": "不得对来自同一业务或其他次要业务电台的有害干扰提出保护要求"
      },
      {
        "letter": "D",
        "text": "容许因设备技术问题对主要业务电台产生短时间有害干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0177",
    "image": ""
  },
  {
    "id": "Q128",
    "originalId": "LK0143",
    "text": "在频率划分表中，当一个频段划分给业余业务或卫星业余业务和多个其他业务，并且业余业务和卫星业余业务作为次要业务时，业余无线电台遵循的规则是：",
    "options": [
      {
        "letter": "A",
        "text": "可要求保护不受来自同一业务或其他次要业务电台的有害干扰"
      },
      {
        "letter": "B",
        "text": "可要求保护不受来自主要业务电台的有害干扰"
      },
      {
        "letter": "C",
        "text": "不得对来自同一业务或其他次要业务电台的有害干扰提出保护要求"
      },
      {
        "letter": "D",
        "text": "容许因设备技术问题对主要业务电台产生短时间有害干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0178",
    "image": ""
  },
  {
    "id": "Q129",
    "originalId": "LK0144",
    "text": "我国分配给业余业务和卫星业余业务专用的频段有：",
    "options": [
      {
        "letter": "A",
        "text": "7MHz、14MHz、21MHz、28MHz、47GHz 频段 32"
      },
      {
        "letter": "B",
        "text": "7MHz、14MHz、21MHz、28MHz、144MHz 频段"
      },
      {
        "letter": "C",
        "text": "3.5MHz、14MHz、21MHz、28MHz、10GHz 频段"
      },
      {
        "letter": "D",
        "text": "7MHz、14MHz、28MHz、144MHz、430MHz 频段"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0179",
    "image": ""
  },
  {
    "id": "Q130",
    "originalId": "LK0145",
    "text": "我国分配给业余业务和卫星业余业务与其他业务共用、并且业余业务和卫星业余业务作为主要业务之一的 30MHz 以下频段有：",
    "options": [
      {
        "letter": "A",
        "text": "1.8MHz、3.5MHz、14.25MHz、18.068MHz、24.89MHz 频段"
      },
      {
        "letter": "B",
        "text": "3.5MHz、7MHz、14.25MHz、21MHz、24.89MHz 频段"
      },
      {
        "letter": "C",
        "text": "3.5MHz、10.1MHz、14.25MHz、18.068MHz、29.7MHz 频段"
      },
      {
        "letter": "D",
        "text": "1.8MHz、10.1MHz、14.25MHz、18.068MHz、21.45MHz 频段"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0180",
    "image": ""
  },
  {
    "id": "Q131",
    "originalId": "LK0146",
    "text": "我国在 VHF 和 UHF 范围内分配给业余业务和卫星业余业务与其他业务共用并设业务类别为主要业务与次要业务，以下那些频率分配给业余业务和卫星业余业务与其他业务共用并且业余业务和卫星业余业务作为主要业务：",
    "options": [
      {
        "letter": "A",
        "text": "50MHz、144MHz"
      },
      {
        "letter": "B",
        "text": "144MHz、430MHz"
      },
      {
        "letter": "C",
        "text": "50MHz、430MHz"
      },
      {
        "letter": "D",
        "text": "220MHz、430MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0181",
    "image": ""
  },
  {
    "id": "Q132",
    "originalId": "LK0147",
    "text": "我国分配给业余业务和卫星业余业务与其他业务共用、并且业余业务和卫星业余业务作为唯一主要业务的频段的个数以及在 3GHz 以下的该类频段分别为：",
    "options": [
      {
        "letter": "A",
        "text": "3 个，144-146MHz"
      },
      {
        "letter": "B",
        "text": "4 个，7.0-7.2MHz"
      },
      {
        "letter": "C",
        "text": "5 个，50-54MHz"
      },
      {
        "letter": "D",
        "text": "5 个，28-29.7MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0182",
    "image": ""
  },
  {
    "id": "Q133",
    "originalId": "LK0148",
    "text": "我国分配给业余业务和卫星业余业务与其他业务共用、并且业余业务和卫星业余业务作为次要业务的 1200MHz 以下频段有：",
    "options": [
      {
        "letter": "A",
        "text": "135.7kHz、5351.5KHz、10.1MHz、430MHz"
      },
      {
        "letter": "B",
        "text": "3.5MHz、7MHz、50MHz"
      },
      {
        "letter": "C",
        "text": "3.5MHz、18.068MHz、144MHz"
      },
      {
        "letter": "D",
        "text": "10.1MHz、24.89MHz、430MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0183",
    "image": ""
  },
  {
    "id": "Q134",
    "originalId": "LK0149",
    "text": "我国分配给业余业务和卫星业余业务的频率最高的频段及其共用类别是：",
    "options": [
      {
        "letter": "A",
        "text": "248-250GHz，唯一主要业务"
      },
      {
        "letter": "B",
        "text": "134-136GHz，唯一主要业务"
      },
      {
        "letter": "C",
        "text": "47-47.2GHz，专用业务"
      },
      {
        "letter": "D",
        "text": "77.5-78GHz，主要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0184",
    "image": ""
  },
  {
    "id": "Q135",
    "originalId": "LK0150",
    "text": "国际业余无线电界把 WARC-76 增加分配给业余业务和卫星业余业务的三个 HF 频段俗称为 WARC 频段，它们的频率范围是：",
    "options": [
      {
        "letter": "A",
        "text": "10.1-10.15MHz、18.068-18.168MHz、24.89-24.99MHz"
      },
      {
        "letter": "B",
        "text": "10.068-10.168MHz、18.1-18.15MHz、24.89-24.99MHz"
      },
      {
        "letter": "C",
        "text": "10.1-10.15MHz、18.89-18.99MHz、24.068-24.168MHz"
      },
      {
        "letter": "D",
        "text": "10.89-10.88MHz、18.1-18.15MHz、24.068-24.168MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0185",
    "image": ""
  },
  {
    "id": "Q136",
    "originalId": "LK0151",
    "text": "俗称的 40 米业余波段，其在 ITU1、2、3 区的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "7.0-7.2MHz、7.0-7.3MHz、7.0-7.2MHz，专用"
      },
      {
        "letter": "B",
        "text": "7.0-7.3MHz、7.0-7.3MHz、7.0-7.3MHz，专用"
      },
      {
        "letter": "C",
        "text": "7.0-7.3MHz、7.0-7.3MHz、7.0-7.2MHz，专用"
      },
      {
        "letter": "D",
        "text": "7.0-7.1MHz、7.0-7.2MHz、7.0-7.3MHz，专用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0186",
    "image": ""
  },
  {
    "id": "Q137",
    "originalId": "LK0152",
    "text": "俗称的 160 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "1800-2000kHz，主要业务"
      },
      {
        "letter": "B",
        "text": "1800-1900kHz，次要业务"
      },
      {
        "letter": "C",
        "text": "1900-2000kHz，主要业务"
      },
      {
        "letter": "D",
        "text": "1700-1900kHz，专用业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0187",
    "image": ""
  },
  {
    "id": "Q138",
    "originalId": "LK0153",
    "text": "俗称的 80 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "3.5-3.9MHz，主要业务"
      },
      {
        "letter": "B",
        "text": "3.5-3.9MHz，次要业务"
      },
      {
        "letter": "C",
        "text": "3.5-4.0MHz，主要业务"
      },
      {
        "letter": "D",
        "text": "3.5-3.6MHz，专用业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0188",
    "image": ""
  },
  {
    "id": "Q139",
    "originalId": "LK0154",
    "text": "俗称的 20 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "14-14.25MHz 为专用，14.25-14.35 为主要业务"
      },
      {
        "letter": "B",
        "text": "14-14.15MHz 为专用，14.15-14.25 为主要业务"
      },
      {
        "letter": "C",
        "text": "14-14.35MHz 为专用，14.35-14.45 为主要业务"
      },
      {
        "letter": "D",
        "text": "14-14.35MHz，专用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0189",
    "image": ""
  },
  {
    "id": "Q140",
    "originalId": "LK0155",
    "text": "俗称的 15 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "21-21.45MHz，专用"
      },
      {
        "letter": "B",
        "text": "21-21.45MHz，主要业务"
      },
      {
        "letter": "C",
        "text": "21-21.35MHz，专用"
      },
      {
        "letter": "D",
        "text": "21-21.45MHz，次要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0190",
    "image": ""
  },
  {
    "id": "Q141",
    "originalId": "LK0156",
    "text": "俗称的 10 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "28-29.7MHz，专用"
      },
      {
        "letter": "B",
        "text": "28-29.7MHz，主要业务"
      },
      {
        "letter": "C",
        "text": "28-29.6MHz，专用"
      },
      {
        "letter": "D",
        "text": "28-30MHz，次要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0191",
    "image": ""
  },
  {
    "id": "Q142",
    "originalId": "LK0157",
    "text": "俗称的 6 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "50-54MHz，主要业务"
      },
      {
        "letter": "B",
        "text": "50-52MHz，次要业务"
      },
      {
        "letter": "C",
        "text": "51-54MHz，专用"
      },
      {
        "letter": "D",
        "text": "52-56MHz，次要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0192",
    "image": ""
  },
  {
    "id": "Q143",
    "originalId": "LK0158",
    "text": "俗称的 2 米业余波段的频率范围以及我国业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "144-148MHz；其中 144-146MHz 为唯一主要业务，146-148MHz 为与其他业务共同作为主要业务"
      },
      {
        "letter": "B",
        "text": "144-146MHz；专用"
      },
      {
        "letter": "C",
        "text": "144-148MHz；其中 144-146MHz 为专用，146-148MHz 为次要业务"
      },
      {
        "letter": "D",
        "text": "144-148MHz；次要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0193",
    "image": ""
  },
  {
    "id": "Q144",
    "originalId": "LK0159",
    "text": "俗称的 0.7 米业余波段的频率范围以及业余业务和卫星业余业务的使用状态分别为：",
    "options": [
      {
        "letter": "A",
        "text": "430-440MHz，次要业务"
      },
      {
        "letter": "B",
        "text": "430-440MHz，主要业务"
      },
      {
        "letter": "C",
        "text": "430-440MHz，专用"
      },
      {
        "letter": "D",
        "text": "420-470MHz，次要业务"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0194",
    "image": ""
  },
  {
    "id": "Q145",
    "originalId": "LK0160",
    "text": "在我国和多数其他国家的频率分配中，业余业务在 430-440MHz 频段中作为次要业务与其他业务共用。这个频段中我国分配的主要业务是：",
    "options": [
      {
        "letter": "A",
        "text": "无线电定位和航空无线电导航"
      },
      {
        "letter": "B",
        "text": "固定业务"
      },
      {
        "letter": "C",
        "text": "移动业务"
      },
      {
        "letter": "D",
        "text": "水上移动和航空移动"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0195",
    "image": ""
  },
  {
    "id": "Q146",
    "originalId": "LK0161",
    "text": "我国分配给业余业务和卫星业余业务的属于低频（LF）范围的频段为：",
    "options": [
      {
        "letter": "A",
        "text": "135.7-137.8kHz"
      },
      {
        "letter": "B",
        "text": "137.8-138.6kHz"
      },
      {
        "letter": "C",
        "text": "134.7-135.8kHz"
      },
      {
        "letter": "D",
        "text": "472-479kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0196",
    "image": ""
  },
  {
    "id": "Q147",
    "originalId": "LK0162",
    "text": "短波业余电台应避免在 IARU 信标工作频率±500Hz 的范围内发射电波。这些频率是：",
    "options": [
      {
        "letter": "A",
        "text": "14.100MHz、18.110MHz、21.150MHz、24.930MHz、28.200MHz"
      },
      {
        "letter": "B",
        "text": "7.100MHz、10.070MHz、14.100MHz、21.100MHz、28.200MHz"
      },
      {
        "letter": "C",
        "text": "7.150MHz、14.110MHz、18.150MHz、21.150MHz、28.150MHz"
      },
      {
        "letter": "D",
        "text": "14.150MHz、18.100MHz、21.200MHz、24.930MHz、28.200MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0197",
    "image": ""
  },
  {
    "id": "Q148",
    "originalId": "LK0164",
    "text": "我国短波业余电台在 7MHz 频段进行 LSB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "7.030-7.200MHz"
      },
      {
        "letter": "B",
        "text": "7.000-7.100MHz"
      },
      {
        "letter": "C",
        "text": "7.023-7.200MHz"
      },
      {
        "letter": "D",
        "text": "7.000-7.200MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0198",
    "image": ""
  },
  {
    "id": "Q149",
    "originalId": "LK0165",
    "text": "短波业余电台在 14MHz 频段进行 USB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "14.100-14.350MHz"
      },
      {
        "letter": "B",
        "text": "14.030-14.350MHz"
      },
      {
        "letter": "C",
        "text": "14.000-14.250MHz"
      },
      {
        "letter": "D",
        "text": "14.070-14.250MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0199",
    "image": ""
  },
  {
    "id": "Q150",
    "originalId": "LK0166",
    "text": "短波业余电台在 18MHz 频段进行 USB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "18.1105-18.168MHz"
      },
      {
        "letter": "B",
        "text": "18.110-18.170MHz"
      },
      {
        "letter": "C",
        "text": "18.068-18.186MHz"
      },
      {
        "letter": "D",
        "text": "18.1005-18.180MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0200",
    "image": ""
  },
  {
    "id": "Q151",
    "originalId": "LK0167",
    "text": "短波业余电台在 21MHz 频段进行 USB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "21.125-21.45MHz，除去 21.1495-21.1505"
      },
      {
        "letter": "B",
        "text": "21.125-21.45MHz"
      },
      {
        "letter": "C",
        "text": "21-21.45MHz"
      },
      {
        "letter": "D",
        "text": "21-21.35MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0201",
    "image": ""
  },
  {
    "id": "Q152",
    "originalId": "LK0168",
    "text": "短波业余电台在 24MHz 频段进行 USB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "24.9305-24.99MHz"
      },
      {
        "letter": "B",
        "text": "24.928-24.988MHz"
      },
      {
        "letter": "C",
        "text": "24.890-24.98MHz"
      },
      {
        "letter": "D",
        "text": "24.9205-24.99MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0202",
    "image": ""
  },
  {
    "id": "Q153",
    "originalId": "LK0169",
    "text": "短波业余电台在 29MHz 频段进行 USB 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "28.3-29.3MHz"
      },
      {
        "letter": "B",
        "text": "28-29.7MHz"
      },
      {
        "letter": "C",
        "text": "28.250-29.7MHz"
      },
      {
        "letter": "D",
        "text": "28.2-29.6MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0203",
    "image": ""
  },
  {
    "id": "Q154",
    "originalId": "LK0170",
    "text": "短波业余电台在 29MHz 频段进行 FM 通话时可以实际占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "29.51-29.7MHz"
      },
      {
        "letter": "B",
        "text": "29.3-29.7MHz"
      },
      {
        "letter": "C",
        "text": "28.3-29.510MHz z"
      },
      {
        "letter": "D",
        "text": "28-29.7MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0204",
    "image": ""
  },
  {
    "id": "Q155",
    "originalId": "LK0171",
    "text": "VHF 业余无线电台在 144MHz 频段进行本地联络时应避免占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "144-144.035MHz 和 145.8-146MHz"
      },
      {
        "letter": "B",
        "text": "144.035-145.8MHz"
      },
      {
        "letter": "C",
        "text": "144.050-144.053MHz 和 145.100-145.750MHz"
      },
      {
        "letter": "D",
        "text": "144.035-144.053MHz 和 145.550-145.750MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0205",
    "image": ""
  },
  {
    "id": "Q156",
    "originalId": "LK0172",
    "text": "UHF 业余无线电台在 430MHz 频段进行本地联络时应避免占用的频率为：",
    "options": [
      {
        "letter": "A",
        "text": "431.9-432.240MHz 和 435-438MHz"
      },
      {
        "letter": "B",
        "text": "430-431.9MHz 和 432.240-435MHz"
      },
      {
        "letter": "C",
        "text": "431-432MHz 和 438-440MHz"
      },
      {
        "letter": "D",
        "text": "430-431.2MHz 和 435-436MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.1",
    "type": "MC1-0206",
    "image": ""
  },
  {
    "id": "Q157",
    "originalId": "LK0173",
    "text": "分配给业余业务的某频段的频率下限为 F1，业余电台实际可以工作的发信频率应为：",
    "options": [
      {
        "letter": "A",
        "text": "F1+信号下边带的频率宽度"
      },
      {
        "letter": "B",
        "text": "F1"
      },
      {
        "letter": "C",
        "text": "F1-信号下边带的频率宽度"
      },
      {
        "letter": "D",
        "text": "F1-2×信号下边带的频率宽度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0207",
    "image": ""
  },
  {
    "id": "Q158",
    "originalId": "LK0174",
    "text": "分配给业余业务的某频段的频率上限为 F2，业余电台实际可以工作的发信频率应为：",
    "options": [
      {
        "letter": "A",
        "text": "F2-信号上边带的频率宽度"
      },
      {
        "letter": "B",
        "text": "F2"
      },
      {
        "letter": "C",
        "text": "F2+信号上边带的频率宽度"
      },
      {
        "letter": "D",
        "text": "F2-2×信号上边带的频率宽度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0208",
    "image": ""
  },
  {
    "id": "Q159",
    "originalId": "LY0180",
    "text": "ITU 对于 5 至 30MHz 短波频段的态度是：",
    "options": [
      {
        "letter": "A",
        "text": "鼓励各主管部门在可行时，使用任何其他可能的通信手段，从而防止对远距离无线电通信的有害干扰"
      },
      {
        "letter": "B",
        "text": "在保证优先满足本地通信的前提下，允许远距离通信适当使用这一段频率"
      },
      {
        "letter": "C",
        "text": "同样鼓励本地和远距离通信尽量使用该段频率，提高这一段频谱的使用率"
      },
      {
        "letter": "D",
        "text": "鼓励在这些频段建立大功率中继站，以提高本地通信的覆盖效果"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0209",
    "image": ""
  },
  {
    "id": "Q160",
    "originalId": "LK0181",
    "text": "国际电联规定的确定发射电台辐射功率的原则为：",
    "options": [
      {
        "letter": "A",
        "text": "发射电台只应辐射为保证满意服务所必要的功率"
      },
      {
        "letter": "B",
        "text": "发射电台应辐射尽量大的功率以提供尽量好的信号质量"
      },
      {
        "letter": "C",
        "text": "HF 频段发射电台应辐射尽量大的功率，VHF 频段发射电台应辐射尽量小的功率"
      },
      {
        "letter": "D",
        "text": "VHF/UHF 频段发射电台应辐射尽量大的功率，HF 频段发射电台应辐射尽量小的功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0210",
    "image": ""
  },
  {
    "id": "Q161",
    "originalId": "LK0050",
    "text": "某俱乐部约定了一个成员业余电台之间交流技术的网络频率，当遇有其他业余电台按通信惯例要求参加通信时，处理原则应为：",
    "options": [
      {
        "letter": "A",
        "text": "无条件欢迎加入，因为任何业余电台都对业余无线电频率享有平等使用权"
      },
      {
        "letter": "B",
        "text": "要求其他业余电台在任何时间都不得使用俱乐部自行约定的专用通信频率"
      },
      {
        "letter": "C",
        "text": "要求其他业余电台在俱乐部成员结束网络通信后再使用该频率"
      },
      {
        "letter": "D",
        "text": "由俱乐部网络控制台自行决定其他业余电台是否可以加入通联"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0211",
    "image": ""
  },
  {
    "id": "Q162",
    "originalId": "LK0185",
    "text": "ITU《无线电规则》禁止所有电台发射下列种类的电波：",
    "options": [
      {
        "letter": "A",
        "text": "阻尼波"
      },
      {
        "letter": "B",
        "text": "调幅波"
      },
      {
        "letter": "C",
        "text": "调频波"
      },
      {
        "letter": "D",
        "text": "调相波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0212",
    "image": ""
  },
  {
    "id": "Q163",
    "originalId": "LX",
    "text": "下列哪些违法行为将由无线电管理机构依照《中华人民共和国无线电管理条例》的规定处理：",
    "options": [
      {
        "letter": "A",
        "text": "违法使用业余无线电台干扰无线电业务正常进行的"
      },
      {
        "letter": "B",
        "text": "向境外组织或者个人提供涉及国家安全的境内电波参数资料"
      },
      {
        "letter": "C",
        "text": "擅自编制、使用业余无线电台呼号的"
      },
      {
        "letter": "D",
        "text": "故意收发业余无线电台执照载明事项之外的无线电信号，传播、公布或者利用无意接收的信息的"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "1.7.2",
    "type": "MC4-0213",
    "image": ""
  },
  {
    "id": "Q164",
    "originalId": "LX",
    "text": "业余无线电台使用业余业务频率使用原则：",
    "options": [
      {
        "letter": "A",
        "text": "无需取得无线电频率使用许可"
      },
      {
        "letter": "B",
        "text": "免收无线电频率占用费"
      },
      {
        "letter": "C",
        "text": "需取得无线电频率使用许可"
      },
      {
        "letter": "D",
        "text": "需收取无线电频率占用费"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "1.7.2",
    "type": "MC2-0214",
    "image": ""
  },
  {
    "id": "Q165",
    "originalId": "LY0212",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最低频段为 135.7-137.8kHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "低频（长波）"
      },
      {
        "letter": "B",
        "text": "甚低频（甚长波）"
      },
      {
        "letter": "C",
        "text": "特低频（特长波）"
      },
      {
        "letter": "D",
        "text": "超低频（超长波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0215",
    "image": ""
  },
  {
    "id": "Q166",
    "originalId": "LY0213",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最低频段为 135.7-137.8kHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "LF"
      },
      {
        "letter": "B",
        "text": "VLF"
      },
      {
        "letter": "C",
        "text": "ULF"
      },
      {
        "letter": "D",
        "text": "SLF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0216",
    "image": ""
  },
  {
    "id": "Q167",
    "originalId": "LY0214",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 1,800kHz-2,000kHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "中频（中波）"
      },
      {
        "letter": "B",
        "text": "甚高频（米波）"
      },
      {
        "letter": "C",
        "text": "低频（长波）"
      },
      {
        "letter": "D",
        "text": "高频（短波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0217",
    "image": ""
  },
  {
    "id": "Q168",
    "originalId": "LY0215",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 1,800kHz-2,000kHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "MF"
      },
      {
        "letter": "B",
        "text": "HF"
      },
      {
        "letter": "C",
        "text": "VHF"
      },
      {
        "letter": "D",
        "text": "LF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0218",
    "image": ""
  },
  {
    "id": "Q169",
    "originalId": "LY0216",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 28MHz-29.7MHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "高频（短波）"
      },
      {
        "letter": "B",
        "text": "中频（中波）"
      },
      {
        "letter": "C",
        "text": "甚高频（米波）"
      },
      {
        "letter": "D",
        "text": "低频（长波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0219",
    "image": ""
  },
  {
    "id": "Q170",
    "originalId": "LY0217",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 28MHz-29.7MHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "HF"
      },
      {
        "letter": "B",
        "text": "MF"
      },
      {
        "letter": "C",
        "text": "VHF"
      },
      {
        "letter": "D",
        "text": "LF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0220",
    "image": ""
  },
  {
    "id": "Q171",
    "originalId": "LY0218",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 50MHz-54MHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "甚高频（米波）"
      },
      {
        "letter": "B",
        "text": "高频（短波）"
      },
      {
        "letter": "C",
        "text": "超高频（厘米波）"
      },
      {
        "letter": "D",
        "text": "特高频（分米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0221",
    "image": ""
  },
  {
    "id": "Q172",
    "originalId": "LY0219",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的 50MHz-54MHz 属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "VHF"
      },
      {
        "letter": "B",
        "text": "HF"
      },
      {
        "letter": "C",
        "text": "SHF"
      },
      {
        "letter": "D",
        "text": "UHF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0222",
    "image": ""
  },
  {
    "id": "Q173",
    "originalId": "LY0220",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近无线宽带 WiFi 频率的频段为2,300-2,450MHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "特高频（分米波）"
      },
      {
        "letter": "B",
        "text": "甚高频（米波）"
      },
      {
        "letter": "C",
        "text": "高频（短波）"
      },
      {
        "letter": "D",
        "text": "超高频（厘米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0223",
    "image": ""
  },
  {
    "id": "Q174",
    "originalId": "LK1010",
    "text": "430-440MHz 业余频段与公众对讲机的工作频率最为接近。如果业余无线电爱好者希望通过改变业余电台的配置，将之“扩频”并与公众对讲机持有者通信，则需注意：",
    "options": [
      {
        "letter": "A",
        "text": "业余电台不能与公众对讲机通信"
      },
      {
        "letter": "B",
        "text": "将业余电台设置到公众对讲机的频率，以不大于业余电台执照核定的发射功率与之通信"
      },
      {
        "letter": "C",
        "text": "将业余电台设置到公众对讲机的频率，以不大于 0.5W 的发射功率与之通信"
      },
      {
        "letter": "D",
        "text": "将业余电台设置到公众对讲机的频率，但只能进行由业余电台到公众对讲机的单向发信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0224",
    "image": ""
  },
  {
    "id": "Q175",
    "originalId": "LY0221",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近 Wi-Fi 局域网频率的频段为2,300-2,450MHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "UHF"
      },
      {
        "letter": "B",
        "text": "VHF"
      },
      {
        "letter": "C",
        "text": "HF"
      },
      {
        "letter": "D",
        "text": "SHF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0225",
    "image": ""
  },
  {
    "id": "Q176",
    "originalId": "LY0222",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近 C 波段卫星电视广播频率的频段是 5.650-5.850GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "超高频（厘米波）"
      },
      {
        "letter": "B",
        "text": "特高频（分米波）"
      },
      {
        "letter": "C",
        "text": "极高频（毫米波）"
      },
      {
        "letter": "D",
        "text": "甚高频（米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0226",
    "image": ""
  },
  {
    "id": "Q177",
    "originalId": "LY0223",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近 C 波段卫星电视广播频率的频段是 5.650-5.850GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "SHF"
      },
      {
        "letter": "B",
        "text": "UHF"
      },
      {
        "letter": "C",
        "text": "EHF"
      },
      {
        "letter": "D",
        "text": "VHF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0227",
    "image": ""
  },
  {
    "id": "Q178",
    "originalId": "LY0224",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近 Ku 波段卫星电视广播频率的频段 10-10.5GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "超高频（厘米波）"
      },
      {
        "letter": "B",
        "text": "特高频（分米波）"
      },
      {
        "letter": "C",
        "text": "极高频（毫米波）"
      },
      {
        "letter": "D",
        "text": "甚高频（米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0228",
    "image": ""
  },
  {
    "id": "Q179",
    "originalId": "LY0225",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最接近 Ku 波段卫星电视广播频率的频段 10-10.5GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "SHF"
      },
      {
        "letter": "B",
        "text": "UHF"
      },
      {
        "letter": "C",
        "text": "EHF"
      },
      {
        "letter": "D",
        "text": "VHF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0229",
    "image": ""
  },
  {
    "id": "Q180",
    "originalId": "LY0226",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最高频段为 241GHz-250GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "极高频（毫米波）"
      },
      {
        "letter": "B",
        "text": "超高频（厘米波）"
      },
      {
        "letter": "C",
        "text": "至高频（丝米波或亚毫米波）"
      },
      {
        "letter": "D",
        "text": "特高频（分米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0230",
    "image": ""
  },
  {
    "id": "Q181",
    "originalId": "LY0227",
    "text": "我国《无线电频率划分规定》划分给业余业务使用的最高频段为 241GHz-250GHz，属于无线电频谱的下列频段（波段）：",
    "options": [
      {
        "letter": "A",
        "text": "EHF"
      },
      {
        "letter": "B",
        "text": "SHF"
      },
      {
        "letter": "C",
        "text": "THF"
      },
      {
        "letter": "D",
        "text": "UHF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "1.7.2",
    "type": "MC1-0231",
    "image": ""
  },
  {
    "id": "Q182",
    "originalId": "LY0198",
    "text": "为在世界范围内划分无线电频率，国际电信联盟《无线电规则》规定了如下区域划分：",
    "options": [
      {
        "letter": "A",
        "text": "将世界划分为 3 个区域，中国位于第 3 区"
      },
      {
        "letter": "B",
        "text": "将世界划分为 40 个区域，中国位于第 24、25 区"
      },
      {
        "letter": "C",
        "text": "将世界划分为 89 个区域，中国位于第 33、42、43、44、45、50 区"
      },
      {
        "letter": "D",
        "text": "将世界划分为 17 个区域，中国位于第 8 区"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.1",
    "type": "MC1-0232",
    "image": ""
  },
  {
    "id": "Q183",
    "originalId": "LY0199",
    "text": "在业余无线电管理实践中，我们常会用到把全球分为 3 个无线电管理区域的划分办法。制定该方法的国际机构及其公布的文件为：",
    "options": [
      {
        "letter": "A",
        "text": "国际电信联盟（ITU），《无线电规则》"
      },
      {
        "letter": "B",
        "text": "美国业余无线电转信联盟（ARRL），《业余无线电手册》"
      },
      {
        "letter": "C",
        "text": "国际业余无线电联盟（IARU），《IARU 新闻》"
      },
      {
        "letter": "D",
        "text": "美国《CQ》杂志，《WAZ 奖状规则》"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.1",
    "type": "MC1-0233",
    "image": ""
  },
  {
    "id": "Q184",
    "originalId": "LY0200",
    "text": "ITU 的区域划分有一套详尽规则。若概要描述则大致为：",
    "options": [
      {
        "letter": "A",
        "text": "欧洲、俄罗斯亚洲部分、蒙古及部分西北亚国家为一区，南北美洲为二区，亚洲（除俄罗斯、蒙古和部分西北亚洲国家）和大洋洲为三区"
      },
      {
        "letter": "B",
        "text": "欧洲、俄罗斯亚洲部分、蒙古及部分西北亚国家为一区，亚洲（除俄罗斯、蒙古和部分西北亚洲国家）和大洋洲为二区，南北美洲为三区，"
      },
      {
        "letter": "C",
        "text": "南北美洲为一区，欧洲、俄罗斯亚洲部分、蒙古及部分西北亚国家为二区，亚洲（除俄罗斯、蒙古和部分西北亚洲国家）和大洋洲为三区"
      },
      {
        "letter": "D",
        "text": "南北美洲为一区，亚洲（除俄罗斯、蒙古和部分西北亚洲国家）和大洋洲为二区，欧洲、俄罗斯亚洲部分、蒙古及部分西北亚国家为三区"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.1",
    "type": "MC1-0234",
    "image": ""
  },
  {
    "id": "Q185",
    "originalId": "LX",
    "text": "业余无线电频率划分在 ITU 的 3 个无线电管理分区中略有不同。ITU 三区的 40 米业余波段为：",
    "options": [
      {
        "letter": "A",
        "text": "7.000-7.200MHz"
      },
      {
        "letter": "B",
        "text": "7.000-7.300MHz"
      },
      {
        "letter": "C",
        "text": "7.000-7.200MHz 专用，7.200-7.300MHz 共用"
      },
      {
        "letter": "D",
        "text": "7.000-7.100MHz 专用，7.100-7.300MHz 共用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0235",
    "image": ""
  },
  {
    "id": "Q186",
    "originalId": "LX",
    "text": "2 米波段的话音联络通常位于 144.035-145.800MHz。这也是 IARU 第 3 区波段规划中的一个多模式共用细分频段。假设一部业余电台正以 FM 方式在该频段参与通联，发射带宽小于 20kHz 并且频率容限优于±2kHz，则该台的主载波设置范围可以是：",
    "options": [
      {
        "letter": "A",
        "text": "从 144.047MHz 至 145.788MHz"
      },
      {
        "letter": "B",
        "text": "从 144.023MHz 至 145.788MHz"
      },
      {
        "letter": "C",
        "text": "从 144.047MHz 至 145.812MHz"
      },
      {
        "letter": "D",
        "text": "从 144.023MHz 至 145.812MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0236",
    "image": ""
  },
  {
    "id": "Q187",
    "originalId": "LX",
    "text": "2 米波段的话音联络通常位于 144.035-145.800MHz。这也是 IARU 第 3 区波段规划中的一个多模式共用细分频段。假设一部业余电台正以 USB 方式在该频段参与通联，发射带宽小于 3kHz 并且频率容限优于±2kHz，则该电台的主载波设置范围可以是：",
    "options": [
      {
        "letter": "A",
        "text": "从 144.037MHz 至 145.795MHz"
      },
      {
        "letter": "B",
        "text": "从 144.030MHz 至 145.795MHz"
      },
      {
        "letter": "C",
        "text": "从 144.037MHz 至 145.805MHz"
      },
      {
        "letter": "D",
        "text": "从 144.030MHz 至 145.805MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0237",
    "image": ""
  },
  {
    "id": "Q188",
    "originalId": "LX",
    "text": "在 70 厘米波段中，爱好者经常在 438-440MHz 展开话音通信。这也是 IARU 第 3 区波段规划中的一个多模式共用细分频段。假设一部业余电台正以 FM 方式在该频段参与通联，发射带宽小于 20kHz 并且频率容限优于±2kHz，则该电台的主载波设置范围可以是：",
    "options": [
      {
        "letter": "A",
        "text": "从 438.012MHz 至 439.988MHz"
      },
      {
        "letter": "B",
        "text": "从 437.988MHz 至 439.988MHz"
      },
      {
        "letter": "C",
        "text": "从 438.012MHz 至 440.012MHz"
      },
      {
        "letter": "D",
        "text": "从 437.988MHz 至 440.012MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0238",
    "image": ""
  },
  {
    "id": "Q189",
    "originalId": "LX",
    "text": "在 70 厘米波段中，爱好者经常在 438-440MHz 展开话音通信。这也是 IARU 第 3 区波段规划中的一个多模式共用细分频段。假设一部业余电台正以 USB 方式在该频段参与通联，发射带宽小于 3kHz 并且频率容限优于±2kHz，则该电台的主载波设置范围可以是：",
    "options": [
      {
        "letter": "A",
        "text": "从 438.002MHz 至 439.995MHz"
      },
      {
        "letter": "B",
        "text": "从 437.995MHz 至 439.995MHz"
      },
      {
        "letter": "C",
        "text": "从 438.002MHz 至 440.005MHz"
      },
      {
        "letter": "D",
        "text": "从 437.995MHz 至 440.005MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0239",
    "image": ""
  },
  {
    "id": "Q190",
    "originalId": "LK1033",
    "text": "10 米业余波段中留给卫星业余业务，话音及其他通信方式不应占用的频段为：",
    "options": [
      {
        "letter": "A",
        "text": "29.3MMz 至 29.51MHz"
      },
      {
        "letter": "B",
        "text": "28.3MHz 至 28.61MHz"
      },
      {
        "letter": "C",
        "text": "28.7MHz 至 28.95MHz"
      },
      {
        "letter": "D",
        "text": "29.15MHz 至 29.35MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0240",
    "image": ""
  },
  {
    "id": "Q191",
    "originalId": "LK1032",
    "text": "144MHz 业余频段中留给卫星业余业务，话音及其他通信方式不应占用的频段为：",
    "options": [
      {
        "letter": "A",
        "text": "145.8MHz 至 146MHz"
      },
      {
        "letter": "B",
        "text": "144.8MHz 至 145MHz"
      },
      {
        "letter": "C",
        "text": "144.2MHz 至 144.5MHz"
      },
      {
        "letter": "D",
        "text": "145.4MHz 至 144.6MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0241",
    "image": ""
  },
  {
    "id": "Q192",
    "originalId": "LK1031",
    "text": "430MHz 业余频段中留给卫星业余业务，话音及其他通信方式不应占用的频段为：",
    "options": [
      {
        "letter": "A",
        "text": "435MHz 至 438MHz"
      },
      {
        "letter": "B",
        "text": "432MHz 至 434MHz"
      },
      {
        "letter": "C",
        "text": "438MHz 至 439MHz"
      },
      {
        "letter": "D",
        "text": "433MHz 至 435MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.2",
    "type": "MC1-0242",
    "image": ""
  },
  {
    "id": "Q193",
    "originalId": "LY0201",
    "text": "业余无线电爱好者在计算 DX 通信成绩或在申请奖状时经常用到“CQ 分区”的概念。制定该分区的民间机构及其公布的文件为：",
    "options": [
      {
        "letter": "A",
        "text": "美国《CQ》杂志，《WAZ 奖状规则》"
      },
      {
        "letter": "B",
        "text": "美国业余无线电转信联盟 ARRL，《业余无线电手册》"
      },
      {
        "letter": "C",
        "text": "国际业余无线电联盟 IARU，《IARU 新闻》"
      },
      {
        "letter": "D",
        "text": "英国业余无线电协会 RSGB，《无线电通信》杂志"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.3",
    "type": "MC1-0243",
    "image": ""
  },
  {
    "id": "Q194",
    "originalId": "LY0202",
    "text": "以下哪些“CQ 分区”位于我国境内：",
    "options": [
      {
        "letter": "A",
        "text": "23、24、27"
      },
      {
        "letter": "B",
        "text": "42、43、44"
      },
      {
        "letter": "C",
        "text": "23、24"
      },
      {
        "letter": "D",
        "text": "42、43、44、50"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.3",
    "type": "MC1-0244",
    "image": ""
  },
  {
    "id": "Q195",
    "originalId": "LY0204",
    "text": "“ITU 分区”是业余无线电爱好者参加 IARU 相关活动并计算通信成绩的基础。以下哪些 “ITU分区”位于我国境内：",
    "options": [
      {
        "letter": "A",
        "text": "33、42、43、44、50"
      },
      {
        "letter": "B",
        "text": "33、42、43、44"
      },
      {
        "letter": "C",
        "text": "23、24"
      },
      {
        "letter": "D",
        "text": "23、24、27"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.4",
    "type": "MC1-0245",
    "image": ""
  },
  {
    "id": "Q196",
    "originalId": "LX",
    "text": "通话时，有什么方法可以让你清晰表述呼号或重要消息中的英语字母？",
    "options": [
      {
        "letter": "A",
        "text": "用标准的字母解释法"
      },
      {
        "letter": "B",
        "text": "用打比方的方法"
      },
      {
        "letter": "C",
        "text": "拍发莫尔斯电码"
      },
      {
        "letter": "D",
        "text": "用 AI 软件朗读"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0246",
    "image": ""
  },
  {
    "id": "Q197",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 BH1XYZ 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Bravo Hotel One Xray Yankee Zulu"
      },
      {
        "letter": "B",
        "text": "Bravo Seven Charlie Romeo Alfa"
      },
      {
        "letter": "C",
        "text": "Four Uniform One Uniform November"
      },
      {
        "letter": "D",
        "text": "Victor Romeo Two Zulu Quebec Whiskey"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0247",
    "image": ""
  },
  {
    "id": "Q198",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 B7CRA 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Bravo Seven Charlie Romeo Alfa"
      },
      {
        "letter": "B",
        "text": "Bravo Hotel One Xray Yankee Zulu"
      },
      {
        "letter": "C",
        "text": "Four Uniform One Uniform November"
      },
      {
        "letter": "D",
        "text": "Victor Romeo Two Zulu Quebec Whiskey"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0248",
    "image": ""
  },
  {
    "id": "Q199",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 4U1UN 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Four Uniform One Uniform November"
      },
      {
        "letter": "B",
        "text": "Bravo Hotel One Xray Yankee Zulu"
      },
      {
        "letter": "C",
        "text": "Bravo Seven Charlie Romeo Alfa"
      },
      {
        "letter": "D",
        "text": "Victor Romeo Two Zulu Quebec Whiskey"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0249",
    "image": ""
  },
  {
    "id": "Q200",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 VR2ZQW 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Victor Romeo Two Zulu Quebec Whiskey"
      },
      {
        "letter": "B",
        "text": "Bravo Hotel One Xray Yankee Zulu"
      },
      {
        "letter": "C",
        "text": "Bravo Seven Charlie Romeo Alfa"
      },
      {
        "letter": "D",
        "text": "Four Uniform One Uniform November"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0250",
    "image": ""
  },
  {
    "id": "Q201",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 BS7H 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Bravo Sierra Seven Hotel"
      },
      {
        "letter": "B",
        "text": "Three Delta Alfa Zero Foxtrot Zulu Portable Delta Lima Five Charlie Mike Papa"
      },
      {
        "letter": "C",
        "text": "Kilo Three Tango Romeo Xray Portable Victor Echo Six"
      },
      {
        "letter": "D",
        "text": "Juliett Alfa Two India Golf Yankee"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0251",
    "image": ""
  },
  {
    "id": "Q202",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 JA2IGY 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Juliett Alfa Two India Golf Yankee"
      },
      {
        "letter": "B",
        "text": "Three Delta Alfa Zero Foxtrot Zulu Portable Delta Lima Five Charlie Mike Papa"
      },
      {
        "letter": "C",
        "text": "Kilo Three Tango Romeo Xray Portable Victor Echo Six"
      },
      {
        "letter": "D",
        "text": "Bravo Sierra Seven Hotel"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0252",
    "image": ""
  },
  {
    "id": "Q203",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 K3TRX/VE6 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Kilo Three Tango Romeo Xray Portable Victor Echo Six"
      },
      {
        "letter": "B",
        "text": "Three Delta Alfa Zero Foxtrot Zulu Portable Delta Lima Five Charlie Mike Papa"
      },
      {
        "letter": "C",
        "text": "Juliett Alfa Two India Golf Yankee"
      },
      {
        "letter": "D",
        "text": "Bravo Sierra Seven Hotel"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0253",
    "image": ""
  },
  {
    "id": "Q204",
    "originalId": "LX",
    "text": "需要拼出呼号、术语和必要的文字时，业余无线电爱好者普遍使用 ITU 语音字母表中规定的字母拼读法。呼号 3DA0FZ/DL5CMP 可以拼读为：",
    "options": [
      {
        "letter": "A",
        "text": "Three Delta Alfa Zero Foxtrot Zulu Portable Delta Lima Five Charlie Mike Papa"
      },
      {
        "letter": "B",
        "text": "Kilo Three Tango Romeo Xray Portable Victor Echo Six"
      },
      {
        "letter": "C",
        "text": "Juliett Alfa Two India Golf Yankee"
      },
      {
        "letter": "D",
        "text": "Bravo Sierra Seven Hotel"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.5",
    "type": "MC1-0254",
    "image": ""
  },
  {
    "id": "Q205",
    "originalId": "LX",
    "text": "业余无线电爱好者有时会在通联中使用广为流传的另类字母解释法来拼读呼号、名字和文字。这些常见于 DX 通联。Japan America Two Italy Germany Yokohama 为：",
    "options": [
      {
        "letter": "A",
        "text": "JA2IGY"
      },
      {
        "letter": "B",
        "text": "F5EQU"
      },
      {
        "letter": "C",
        "text": "WH8ZDP"
      },
      {
        "letter": "D",
        "text": "S53MNO"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.6",
    "type": "MC1-0255",
    "image": ""
  },
  {
    "id": "Q206",
    "originalId": "LX",
    "text": "业余无线电爱好者有时会在通联中使用广为流传的另类字母解释法来拼读呼号、名字和文字。这些常见于 DX 通联。Florida Five England Queen United 为：",
    "options": [
      {
        "letter": "A",
        "text": "F5EQU"
      },
      {
        "letter": "B",
        "text": "WH8ZDP"
      },
      {
        "letter": "C",
        "text": "S53MNO"
      },
      {
        "letter": "D",
        "text": "JA2IGY"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.6",
    "type": "MC1-0256",
    "image": ""
  },
  {
    "id": "Q207",
    "originalId": "LX",
    "text": "业余无线电爱好者有时会在通联中使用广为流传的另类字母解释法来拼读呼号、名字和文字。这些常见于 DX 通联。Washington Honolulu Eight Zanzibar Denmark Portugal 为：",
    "options": [
      {
        "letter": "A",
        "text": "WH8ZDP"
      },
      {
        "letter": "B",
        "text": "F5EQU"
      },
      {
        "letter": "C",
        "text": "S53MNO"
      },
      {
        "letter": "D",
        "text": "JA2IGY"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.6",
    "type": "MC1-0257",
    "image": ""
  },
  {
    "id": "Q208",
    "originalId": "LX",
    "text": "业余无线电爱好者有时会在通联中使用广为流传的另类字母解释法来拼读呼号、名字和文字。这些常见于 DX 通联。Sugar Five Three Mexico Norway Ontario 为：",
    "options": [
      {
        "letter": "A",
        "text": "S53MNO"
      },
      {
        "letter": "B",
        "text": "F5EQU"
      },
      {
        "letter": "C",
        "text": "WH8ZDP"
      },
      {
        "letter": "D",
        "text": "JA2IGY"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.1.6",
    "type": "MC1-0258",
    "image": ""
  },
  {
    "id": "Q209",
    "originalId": "LY0235",
    "text": "业余电台在发起呼叫前应先守听。但是，我们有时会因听不到通信中的某一方而误认为频率空闲。此时呼叫“CQ”有可能干扰他人联络。为尽量避免这种情况，我们可以：",
    "options": [
      {
        "letter": "A",
        "text": "询问“有人使用频率吗？”，确认没有应答再发起呼叫"
      },
      {
        "letter": "B",
        "text": "询问“有吗？有吗？请过来。”，确认没有应答再发起呼叫"
      },
      {
        "letter": "C",
        "text": "先启动呼叫再进行通信，等听到确实有电台在工作再让出频率不迟"
      },
      {
        "letter": "D",
        "text": "先启动呼叫再进行通信，只要没有其他电台要求 QSY 就持续使用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0267",
    "image": ""
  },
  {
    "id": "Q210",
    "originalId": "LY0244",
    "text": "BH1ZZZ 希望加入两个电台相互之间的联络。正确的方法是：",
    "options": [
      {
        "letter": "A",
        "text": "在一方刚刚停止讲话时迅速发出“插入”或“break”。如得到回应，再说明“BH1ZZZ 请求插入”。待对方正式邀请后，开始正式对话"
      },
      {
        "letter": "B",
        "text": "在一方正在讲话时短暂插入一次“break”，向正在收听的一方发出插入请求"
      },
      {
        "letter": "C",
        "text": "短暂发射一次“插入”或“break”。如对方无反应，可以加大功率反复尝试"
      },
      {
        "letter": "D",
        "text": "如果双方都是自己熟悉的业余电台操作员，直接讲进去便是，不必拘泥礼节"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0268",
    "image": ""
  },
  {
    "id": "Q211",
    "originalId": "LX",
    "text": "如果在联络中听到有个遇险的电台要求插入，你该怎么做？",
    "options": [
      {
        "letter": "A",
        "text": "立即与该台确认险情并了解其需要什么帮助"
      },
      {
        "letter": "B",
        "text": "立即联系或找人协助联系当地熟悉紧急情况下通信联络的爱好者或爱好者团队"
      },
      {
        "letter": "C",
        "text": "立即变更工作频率"
      },
      {
        "letter": "D",
        "text": "立即停止发射活动"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0269",
    "image": ""
  },
  {
    "id": "Q212",
    "originalId": "LY0245",
    "text": "在请求插入两个电台间的对话之时，一个值得借鉴的经验是：",
    "options": [
      {
        "letter": "A",
        "text": "思考自己的加入是否会影响原通信双方的交谈乐趣"
      },
      {
        "letter": "B",
        "text": "确认自己的信号质量可以得到原通信双方的共同赞赏"
      },
      {
        "letter": "C",
        "text": "确定自己的操作等级与原通信双方的大体相当"
      },
      {
        "letter": "D",
        "text": "确信自己有比原通信双方更具吸引力的谈话内容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0270",
    "image": ""
  },
  {
    "id": "Q213",
    "originalId": "LK0246",
    "text": "若发现有业余电台的发射操作技巧不够规范，但还不至于造成严重的干扰和影响，正确的做法是：",
    "options": [
      {
        "letter": "A",
        "text": "通过电话、邮件等方式提出善意的改进建议"
      },
      {
        "letter": "B",
        "text": "立即在频率上当面加以指出和纠正"
      },
      {
        "letter": "C",
        "text": "立即报告无线电管理机构进行干涉"
      },
      {
        "letter": "D",
        "text": "立即报告当地业余无线电协会，由其总部电台到频率上进行纠察"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0271",
    "image": ""
  },
  {
    "id": "Q214",
    "originalId": "LK0247",
    "text": "业余电台通信受到违法电台或者不明电台的严重干扰。正确的做法是：",
    "options": [
      {
        "letter": "A",
        "text": "不予理睬，收集有关信息并向无线电管理机构举报"
      },
      {
        "letter": "B",
        "text": "在频率上向其宣传无线电管理法，要求其停止干扰"
      },
      {
        "letter": "C",
        "text": "立即报告无线电管理机构进行干涉"
      },
      {
        "letter": "D",
        "text": "用大功率信号对其进行压制"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0272",
    "image": ""
  },
  {
    "id": "Q215",
    "originalId": "LK0274",
    "text": "如果与几十千米以外的某业余电台有很多重要的技术问题和个人情况要交流，应该选用下列通信方式：",
    "options": [
      {
        "letter": "A",
        "text": "电话或者互联网"
      },
      {
        "letter": "B",
        "text": "利用当地的业余中继台"
      },
      {
        "letter": "C",
        "text": "利用 HF 频段业余电台"
      },
      {
        "letter": "D",
        "text": "利用天线足够高的 VHF/UHF 频段业余电台"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.2",
    "type": "MC1-0273",
    "image": ""
  },
  {
    "id": "Q216",
    "originalId": "LK0075",
    "text": "法规和国际业余无线电惯例要求业余电台日志应记载的必要内容是：",
    "options": [
      {
        "letter": "A",
        "text": "通信时间、通信频率、通信模式、对方呼号、双方信号报告"
      },
      {
        "letter": "B",
        "text": "通信对方姓名、对方所在国家或城市、通信模式、双方信号报告"
      },
      {
        "letter": "C",
        "text": "通信时间、通信频率、双方收发信设备和天线、对方台址"
      },
      {
        "letter": "D",
        "text": "通信时间、通信模式、对方信号报告、对方台址、对方天气"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0274",
    "image": ""
  },
  {
    "id": "Q217",
    "originalId": "LK0076",
    "text": "法规和国际业余无线电惯例要求业余电台日志应记载的必要内容是：",
    "options": [
      {
        "letter": "A",
        "text": "DATE、TIME、FREQ、MODE、CALL（对方）、RST（双方）"
      },
      {
        "letter": "B",
        "text": "DATE、FREQ、QTH（对方）、RIG（对方）、RST（双方）、WX（对方）"
      },
      {
        "letter": "C",
        "text": "DATE、TIME、MODE、CALL（对方）、QTH（对方）、RST（双方）"
      },
      {
        "letter": "D",
        "text": "CALL（通信对方）、TIME、FREQ、RIG（对方）、RST（双方）、PWR（双方）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0275",
    "image": ""
  },
  {
    "id": "Q218",
    "originalId": "LX",
    "text": "业余无线电台交换 QSL 卡具有多重意义，包括：",
    "options": [
      {
        "letter": "A",
        "text": "确认本地、国内，甚至世界范围内的无线电联络"
      },
      {
        "letter": "B",
        "text": "掌握包括自制发射机在内的本台设备的运作表现"
      },
      {
        "letter": "C",
        "text": "申请奖状，证明自己在通信、技术等领域的努力"
      },
      {
        "letter": "D",
        "text": "纯粹收集，欣赏，展示来自世界各地的 QSL 卡片"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.2.3",
    "type": "MC4-0276",
    "image": ""
  },
  {
    "id": "Q219",
    "originalId": "LX",
    "text": "QSL 卡片应至少涵盖哪些内容：",
    "options": [
      {
        "letter": "A",
        "text": "联络双方的电台呼号"
      },
      {
        "letter": "B",
        "text": "双方信号报告和联络时间"
      },
      {
        "letter": "C",
        "text": "操作方式及联络频率"
      },
      {
        "letter": "D",
        "text": "操作员签章、本台通信地址"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.2.3",
    "type": "MC4-0277",
    "image": ""
  },
  {
    "id": "Q220",
    "originalId": "LK1042",
    "text": "关于 QSL 卡片的用法，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "如果所交换的 QSL 卡片并非用作通联或收听证明，则应在通信方式一栏填写“现场交流”或“Eyeball QSO”等字样。不应赠送空白卡片"
      },
      {
        "letter": "B",
        "text": "业余无线电爱好者的空白 QSL 卡片可以用作照片或名片，适合赠送，交换或散发"
      },
      {
        "letter": "C",
        "text": "火腿都是互相的。虽然对方没有联络自己，但是也可以发去确认联络的 QSL 卡片"
      },
      {
        "letter": "D",
        "text": "如果在联络中没有听清对方呼号，或在日志中漏填或打错了对方呼号，则在寄发 QSL 卡片时可在对方呼号一栏填写对方操作员的名字"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0278",
    "image": ""
  },
  {
    "id": "Q221",
    "originalId": "LK1041",
    "text": "收到国外寄来的 QSL 卡片时，如果信封中夹带有一张或多张 IRC，则应：",
    "options": [
      {
        "letter": "A",
        "text": "尽快检查电台日志，确认联络的真实性，向对方地址直接寄出自己的 QSL 卡片"
      },
      {
        "letter": "B",
        "text": "不必确认联络的真实性，只要尽快向对方地址直接寄出自己的卡片即可"
      },
      {
        "letter": "C",
        "text": "尽快检查电台日志，确认联络的真实性，向国内 QSL 卡片管理局寄出自己的卡片"
      },
      {
        "letter": "D",
        "text": "不必理会。操作类别越低越不必理会。低级别业余电台的 QSL 卡片通常不具价值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0279",
    "image": ""
  },
  {
    "id": "Q222",
    "originalId": "LK1011",
    "text": "填写和邮寄 QSL 卡片的正确做法是：",
    "options": [
      {
        "letter": "A",
        "text": "迫切需要对方回寄卡片时，应直接向对方地址邮寄卡片并附加 SASE"
      },
      {
        "letter": "B",
        "text": "填写错误时应划去或使用涂改液覆盖错误内容并加以改正"
      },
      {
        "letter": "C",
        "text": "自己的邮寄地址与电台的发射地点不同时，应在 QTH 栏目内填明详细邮寄地址"
      },
      {
        "letter": "D",
        "text": "通过卡片管理局寄出卡片并希望对方回卡时，应在卡片上注明 PSE QSL DIRECT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0280",
    "image": ""
  },
  {
    "id": "Q223",
    "originalId": "LY0386",
    "text": "交换 QSL 卡片时，我们时有遇见一类特殊的无线电爱好者，他们仅向我们寄发收听卡片。而我们在确认卡片所载内容之后会立即回卡以示敬意。这类爱好者是：",
    "options": [
      {
        "letter": "A",
        "text": "短波收听者（SWL）"
      },
      {
        "letter": "B",
        "text": "广播爱好者"
      },
      {
        "letter": "C",
        "text": "DIY 爱好者"
      },
      {
        "letter": "D",
        "text": "业余无线电监测员"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.3",
    "type": "MC1-0281",
    "image": ""
  },
  {
    "id": "Q224",
    "originalId": "LY0272",
    "text": "通过中继台进行通联时，我们应事先设好电台的接收和发射频差，以便顺利应对上行或下行频率上的各种操作，避免边联络边设置，忙中出错。144 和 430MHz 频段业余中继台的上下行频差分别为：",
    "options": [
      {
        "letter": "A",
        "text": "0.6MHz，5MHz"
      },
      {
        "letter": "B",
        "text": "12.5kHz，25kHz"
      },
      {
        "letter": "C",
        "text": "4MHz，10MHz"
      },
      {
        "letter": "D",
        "text": "2MHz，5MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.4",
    "type": "MC1-0282",
    "image": ""
  },
  {
    "id": "Q225",
    "originalId": "LY1096",
    "text": "如果通过中继台呼叫一部业余电台，你应当：",
    "options": [
      {
        "letter": "A",
        "text": "呼叫对方的呼号并报出自己的呼号"
      },
      {
        "letter": "B",
        "text": "呼叫“break, break”，然后说出对方呼号二至三次"
      },
      {
        "letter": "C",
        "text": "呼叫“CQ”三次，然后说出自己的呼号三次"
      },
      {
        "letter": "D",
        "text": "等待，直到你要呼叫的电台通过中继台呼叫 CQ"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.4",
    "type": "MC1-0283",
    "image": ""
  },
  {
    "id": "Q226",
    "originalId": "LY0275",
    "text": "业余中继台的使用原则是：",
    "options": [
      {
        "letter": "A",
        "text": "除必要的简短联络外，业余中继台的上行和下行频率应保持空闲，以备随时响应突发灾害等紧急情况下的呼叫"
      },
      {
        "letter": "B",
        "text": "应使中继台尽量处于接近饱和的忙碌状态，提高使用效率"
      },
      {
        "letter": "C",
        "text": "鼓励业余无线电民间组织（协会）通过中继台向当地会员发布通知"
      },
      {
        "letter": "D",
        "text": "鼓励青少年学生通过中继台交流解题方法和学习心得"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.4",
    "type": "MC1-0284",
    "image": ""
  },
  {
    "id": "Q227",
    "originalId": "LY0197",
    "text": "深空（deep space）是指离地球的距离约等于或大于下列值的空间：",
    "options": [
      {
        "letter": "A",
        "text": "200 万千米"
      },
      {
        "letter": "B",
        "text": "20 万千米"
      },
      {
        "letter": "C",
        "text": "10 万米"
      },
      {
        "letter": "D",
        "text": "15000 米"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0285",
    "image": ""
  },
  {
    "id": "Q228",
    "originalId": "LK0882",
    "text": "业余地球卫星的轨道倾角（inclination）是指包含：",
    "options": [
      {
        "letter": "A",
        "text": "轨道平面与地球赤道平面的夹角，由地球赤道平面在轨道升交点按逆时针方向计决定"
      },
      {
        "letter": "B",
        "text": "轨道平面与地球赤道平面的夹角，由地球赤道平面在轨道升交点按顺时针方向计决定"
      },
      {
        "letter": "C",
        "text": "轨道平面与地球赤道平面的夹角，由地球赤道平面在轨道降交点按逆时针方向计决定"
      },
      {
        "letter": "D",
        "text": "轨道平面与地球赤道平面的夹角，由地球赤道平面在轨道降交点按顺时针方向计决定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0286",
    "image": ""
  },
  {
    "id": "Q229",
    "originalId": "LK0883",
    "text": "业余卫星的周期（period）是指：",
    "options": [
      {
        "letter": "A",
        "text": "连续两次经过其轨道上的某特定点的间隔时间"
      },
      {
        "letter": "B",
        "text": "连续两次经过地球上某观测点的间隔时间"
      },
      {
        "letter": "C",
        "text": "连续两次经过地球赤道的间隔时间"
      },
      {
        "letter": "D",
        "text": "连续两次经过地球北极的间隔时间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0287",
    "image": ""
  },
  {
    "id": "Q230",
    "originalId": "LK0884",
    "text": "地球同步（geosynchronous）卫星是指：",
    "options": [
      {
        "letter": "A",
        "text": "运行周期等于地球自转周期的地球卫星"
      },
      {
        "letter": "B",
        "text": "所经过地点的地方时基本相同的卫星"
      },
      {
        "letter": "C",
        "text": "其轨道平面通过地球北极和南极地区的卫星"
      },
      {
        "letter": "D",
        "text": "瞬时轨道平面与太阳始终保持固定取向的卫星"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0288",
    "image": ""
  },
  {
    "id": "Q231",
    "originalId": "LK0885",
    "text": "太阳同步（轨道）（Sun-synchronous orbit）卫星是指：",
    "options": [
      {
        "letter": "A",
        "text": "瞬时轨道平面与太阳始终保持固定取向的卫星"
      },
      {
        "letter": "B",
        "text": "对地球保持大致相对静止的卫星"
      },
      {
        "letter": "C",
        "text": "圆形及顺行轨道位于地球赤道平面上，并对地球保持相对静止的卫星"
      },
      {
        "letter": "D",
        "text": "运行周期等于地球自转周期的地球卫星"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0289",
    "image": ""
  },
  {
    "id": "Q232",
    "originalId": "LK0886",
    "text": "地球(geostationary)静止卫星是指：",
    "options": [
      {
        "letter": "A",
        "text": "对地球保持大致相对静止的卫星"
      },
      {
        "letter": "B",
        "text": "所经过地点的地方时基本相同的卫星"
      },
      {
        "letter": "C",
        "text": "其轨道平面通过地球北极和南极地区的卫星"
      },
      {
        "letter": "D",
        "text": "所有的地球同步卫星"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0290",
    "image": ""
  },
  {
    "id": "Q233",
    "originalId": "LK0887",
    "text": "卫星升轨道（ascending pass）的方向是指轨道的下列区段：",
    "options": [
      {
        "letter": "A",
        "text": "由南向北"
      },
      {
        "letter": "B",
        "text": "由北向南"
      },
      {
        "letter": "C",
        "text": "由东北向西南"
      },
      {
        "letter": "D",
        "text": "由东南向西北"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0291",
    "image": ""
  },
  {
    "id": "Q234",
    "originalId": "LK0888",
    "text": "卫星降轨道（descending pass）的方向是指轨道的下列区段：",
    "options": [
      {
        "letter": "A",
        "text": "由北向南"
      },
      {
        "letter": "B",
        "text": "由南向北"
      },
      {
        "letter": "C",
        "text": "由东北向西南"
      },
      {
        "letter": "D",
        "text": "由东南向西北"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0292",
    "image": ""
  },
  {
    "id": "Q235",
    "originalId": "LK0889",
    "text": "卫星的周期是指：",
    "options": [
      {
        "letter": "A",
        "text": "卫星沿轨道绕地球一周所需的时间"
      },
      {
        "letter": "B",
        "text": "卫星绕质心自旋一周所需的时间"
      },
      {
        "letter": "C",
        "text": "卫星两次正好从地面某一点的正上方通过的间隔时间"
      },
      {
        "letter": "D",
        "text": "卫星随地球绕太阳一周所需的时间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0293",
    "image": ""
  },
  {
    "id": "Q236",
    "originalId": "LK0890",
    "text": "卫星的线性转发器是指：",
    "options": [
      {
        "letter": "A",
        "text": "卫星上将接收到的一定带宽内的所有上行信号在频谱上平移（或平移加反转）后加以转发的中继设备"
      },
      {
        "letter": "B",
        "text": "接收到的上行信号经线性放大后解调处理，再重新调制并转发的卫星中继设备"
      },
      {
        "letter": "C",
        "text": "接收到的上行信号解调处理后经线性放大，再重新调制并转发的卫星中继设备"
      },
      {
        "letter": "D",
        "text": "接收到的上行信号解调处理和重新调制后，经线性放大再转发的卫星中继设备"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0294",
    "image": ""
  },
  {
    "id": "Q237",
    "originalId": "LK0891",
    "text": "卫星线性转发器的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "转发工作频带内的所有信号而不改变信号原有的调制特征，可为各种常用业余无线电通信方式进行中继"
      },
      {
        "letter": "B",
        "text": "转发器采用线性放大电路，转发的信号失真小"
      },
      {
        "letter": "C",
        "text": "先对接收信号解调，经整形、线性放大后重新调制转发，提高下行信号高信噪比"
      },
      {
        "letter": "D",
        "text": "转发信号的幅度与上行信号幅度成线性正比，只能为 CW、SSB 和 AM 等带有振幅调制特征的通信方式进行中继"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0295",
    "image": ""
  },
  {
    "id": "Q238",
    "originalId": "LK0892",
    "text": "有时接收到的卫星下行信号强度会出现周期性的快衰落，这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "卫星翻滚造成收发信天线极化的失配"
      },
      {
        "letter": "B",
        "text": "电波受电离层的影响"
      },
      {
        "letter": "C",
        "text": "电波受高空气流的影响"
      },
      {
        "letter": "D",
        "text": "卫星电源不够稳定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0296",
    "image": ""
  },
  {
    "id": "Q239",
    "originalId": "LK0893",
    "text": "在安装卫星轨道预测软件后，在预测卫星位置之前必须进行的准备工作是：",
    "options": [
      {
        "letter": "A",
        "text": "下载待预测卫星的开普勒轨道根数（轨道要素）"
      },
      {
        "letter": "B",
        "text": "输入当地的磁偏角和磁倾角"
      },
      {
        "letter": "C",
        "text": "下载最近的太阳黑子平均数"
      },
      {
        "letter": "D",
        "text": "下载最近的 F107 射电辐射通量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0297",
    "image": ""
  },
  {
    "id": "Q240",
    "originalId": "LK0894",
    "text": "业余低轨卫星的转发器覆盖范围有限。利用这类卫星进行全球性业余无线电通信的解决方法是：",
    "options": [
      {
        "letter": "A",
        "text": "由卫星对上行数据进行存贮和转发"
      },
      {
        "letter": "B",
        "text": "由地面站进行地面中继"
      },
      {
        "letter": "C",
        "text": "地面业余电台换用更大功率的发射机"
      },
      {
        "letter": "D",
        "text": "增加地面业余电台的天线高度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0298",
    "image": ""
  },
  {
    "id": "Q241",
    "originalId": "LK0898",
    "text": "业余电台在进行业余卫星通信时使用超过常规要求的发射功率，造成的结果以及对这种做法的态度是：",
    "options": [
      {
        "letter": "A",
        "text": "过强的上行信号会使卫星转发器压低对其他信道的转发功率，严重影响别人通信；必须反对"
      },
      {
        "letter": "B",
        "text": "上行功率越大，转发的效果越好，通信范围越大；可提倡"
      },
      {
        "letter": "C",
        "text": "上行功率超过一定值对通信效果改善不大，但并无明显坏处；无所谓"
      },
      {
        "letter": "D",
        "text": "上行功率太大造成浪费和电磁污染；不提倡"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0299",
    "image": ""
  },
  {
    "id": "Q242",
    "originalId": "LX",
    "text": "业余电台在进行业余卫星通信时如何确定当前发射功率是恰当的？",
    "options": [
      {
        "letter": "A",
        "text": "确定下行链路的信号强度与信标大体一致"
      },
      {
        "letter": "B",
        "text": "利用遥测电文观察本台信号强度"
      },
      {
        "letter": "C",
        "text": "试听下行链路的声音是否过载失真"
      },
      {
        "letter": "D",
        "text": "询问其他电台，是否需要本台 QRP"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0300",
    "image": ""
  },
  {
    "id": "Q243",
    "originalId": "LK0899",
    "text": "业余电台和业余卫星之间通信，VHF/UHF 频段影响信号强度的主要因素是：",
    "options": [
      {
        "letter": "A",
        "text": "无线电波在自由空间的衰减"
      },
      {
        "letter": "B",
        "text": "电离层对无线电波的吸收"
      },
      {
        "letter": "C",
        "text": "电离层对无线电波的反射"
      },
      {
        "letter": "D",
        "text": "大地对无线电波的吸收"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0301",
    "image": ""
  },
  {
    "id": "Q244",
    "originalId": "LK0900",
    "text": "业余卫星通信中所说的 A、B、K、JA、JD、S、T 等工作方式，表示的是：",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电转发器的上下行通信所用的业余频段以及所支持的调制方式"
      },
      {
        "letter": "B",
        "text": "发射业余卫星的国家的呼号前缀"
      },
      {
        "letter": "C",
        "text": "业余无线电转发器的发射功率等级"
      },
      {
        "letter": "D",
        "text": "业余卫星的某些轨道参数"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0302",
    "image": ""
  },
  {
    "id": "Q245",
    "originalId": "LK0901",
    "text": "业余卫星通信和业余无线电测向都会出现“多普勒效应”的概念。多普勒效应是指：",
    "options": [
      {
        "letter": "A",
        "text": "收发信机之间相对距离的变化使接收信号频率产生偏移的现象"
      },
      {
        "letter": "B",
        "text": "传播条件随时间的扰动使接收信号幅度产生波动的现象"
      },
      {
        "letter": "C",
        "text": "传播条件随空间位置的扰动使接收信号幅度产生波动的现象"
      },
      {
        "letter": "D",
        "text": "电波的极化在传播途中变化使接收信号幅度产生波动的现象"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0303",
    "image": ""
  },
  {
    "id": "Q246",
    "originalId": "LK0902",
    "text": "地面业余电台进行业余卫星通信时，接收到的卫星信号频率的多普勒频移规律是：",
    "options": [
      {
        "letter": "A",
        "text": "卫星飞来时频率偏高，飞离时频率偏低，越远频偏越大，过顶时频偏最小"
      },
      {
        "letter": "B",
        "text": "卫星飞来时频率偏低，飞离时频率偏高，越远频偏越大，过顶时频偏最小"
      },
      {
        "letter": "C",
        "text": "卫星飞来时频率偏高，飞离时频率偏低，越远频偏越小，过顶时频偏最大"
      },
      {
        "letter": "D",
        "text": "卫星飞来时频率偏低，飞离时频率偏高，越远频偏越小，过顶时频偏最大"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0304",
    "image": ""
  },
  {
    "id": "Q247",
    "originalId": "LK1037",
    "text": "业余无线电卫星一般都选择运行在低轨道或者椭圆轨道上。主要原因是：",
    "options": [
      {
        "letter": "A",
        "text": "发射成本低"
      },
      {
        "letter": "B",
        "text": "卫星转发器的功率因此增加"
      },
      {
        "letter": "C",
        "text": "增强地球引力以利运行稳定"
      },
      {
        "letter": "D",
        "text": "增加卫星转发器的覆盖范围"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.2.5",
    "type": "MC1-0305",
    "image": ""
  },
  {
    "id": "Q248",
    "originalId": "LY0236",
    "text": "业余电台在发起呼叫前应先守听一段时间，然后再询问“有人使用频率吗？”，确认没有应答方可发起呼叫。下列英语短句中不能正确表达这一询问的是：",
    "options": [
      {
        "letter": "A",
        "text": "Calling you, Roger？"
      },
      {
        "letter": "B",
        "text": "Is this frequency in use？"
      },
      {
        "letter": "C",
        "text": "Is anyone at this frequency？"
      },
      {
        "letter": "D",
        "text": "Anybody here？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0306",
    "image": ""
  },
  {
    "id": "Q249",
    "originalId": "LY0238",
    "text": "业余电台 BH1ZZZ 用 FM 或 SSB 话音发起 CQ 呼叫的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "CQ CQ CQ，这里是 BH1ZZZ，Bravo Hotel One Zulu Zulu Zulu，BH1ZZZ 呼叫 CQ，听到请回答"
      },
      {
        "letter": "B",
        "text": "CQ CQ CQ，请您继续"
      },
      {
        "letter": "C",
        "text": "CQ CQ CQ，我是 1ZZZ，请过来"
      },
      {
        "letter": "D",
        "text": "CQ CQ CQ；CQ CQ CQ；CQ CQ CQ，我是 BH1ZZZ，您请讲"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0307",
    "image": ""
  },
  {
    "id": "Q250",
    "originalId": "LY0239",
    "text": "业余电台 BH1ZZZ 用话音发起 CQ 呼叫的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "CQ CQ CQ, this is BH1ZZZ, Bravo Hotel One Zulu Zulu Zulu, BH1ZZZ calling CQ and standingby"
      },
      {
        "letter": "B",
        "text": "CQ CQ, calling CQ. Go ahead"
      },
      {
        "letter": "C",
        "text": "CQ CQ, calling CQ, this is One Zulu Zulu Zulu. Come on"
      },
      {
        "letter": "D",
        "text": "CQ CQ CQ, CQ CQ CQ, CQ CQ CQ, this is BH1ZZZ. Back to you"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0308",
    "image": ""
  },
  {
    "id": "Q251",
    "originalId": "LY0241",
    "text": "业余电台 BH1ZZZ 用话音呼叫 BH8YYY 的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "BH8YYY，BH8YYY，BH8YYY，这里是 BH1ZZZ，Bravo Hotel One Zulu Zulu Zulu，BH1ZZZ呼叫，听到请回答"
      },
      {
        "letter": "B",
        "text": "BH8YYY，我是 BH1ZZZ，我是 BH1ZZZ，我是 BH1ZZZ，您继续"
      },
      {
        "letter": "C",
        "text": "BH8YYY，我是 1ZZZ，请过来"
      },
      {
        "letter": "D",
        "text": "8YYY，BH1ZZZ，听到讲"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0309",
    "image": ""
  },
  {
    "id": "Q252",
    "originalId": "LY0242",
    "text": "业余电台 BH1ZZZ 用话音呼叫 BH8YYY 的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "BH8YYY, BH8YYY, BH8YYY, this is BH1ZZZ, Bravo Hotel One Zulu Zulu Zulu, BH1ZZZ callingyou and standing by"
      },
      {
        "letter": "B",
        "text": "BH8YYY, Bravo Hotel Eight Yankee Yankee Yankee, BH8YYY, go ahead"
      },
      {
        "letter": "C",
        "text": "BH8YYY, this is One Zulu Zulu Zulu, come on"
      },
      {
        "letter": "D",
        "text": "8YYY, this is BH1ZZZ, over over"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0310",
    "image": ""
  },
  {
    "id": "Q253",
    "originalId": "LY0378",
    "text": "建立话音通信后，操作员小明打算给对方电台 BH1ZZZ “57”的信号报告。他可以这样讲：",
    "options": [
      {
        "letter": "A",
        "text": "BH1ZZZ，你的信号 57。是否抄收？"
      },
      {
        "letter": "B",
        "text": "BH1ZZZ，我给你 57 的信号可以吗？"
      },
      {
        "letter": "C",
        "text": "57，57，拷贝了吗？"
      },
      {
        "letter": "D",
        "text": "57，57，这里是 BH1ZZZ，听到请回答"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0311",
    "image": ""
  },
  {
    "id": "Q254",
    "originalId": "LY0378",
    "text": "建立话音通信后，操作员小明打算给对方电台 BH1ZZZ “57”的信号报告。他可以这样讲：",
    "options": [
      {
        "letter": "A",
        "text": "BH1ZZZ, you are 57, QSL?"
      },
      {
        "letter": "B",
        "text": "BH1ZZZ, may I rate you 57?"
      },
      {
        "letter": "C",
        "text": "Hey, 57, QSL?"
      },
      {
        "letter": "D",
        "text": "Hey 57，this is BH1ZZZ. Roger?"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0312",
    "image": ""
  },
  {
    "id": "Q255",
    "originalId": "LY0321",
    "text": "建立话音通信后，小明打算介绍自己是在成都操作的。他可以这样讲：",
    "options": [
      {
        "letter": "A",
        "text": "我的 QTH 是成都"
      },
      {
        "letter": "B",
        "text": "我 QRT 在成都"
      },
      {
        "letter": "C",
        "text": "我在成都 QRO"
      },
      {
        "letter": "D",
        "text": "我在成都 QRV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0313",
    "image": ""
  },
  {
    "id": "Q256",
    "originalId": "LY0321",
    "text": "建立话音通信后，小明打算介绍自己是在成都操作的。他可以这样讲：",
    "options": [
      {
        "letter": "A",
        "text": "My QTH is Chengdu"
      },
      {
        "letter": "B",
        "text": "I QRT in Chengdu"
      },
      {
        "letter": "C",
        "text": "I run QRO in Chengdu"
      },
      {
        "letter": "D",
        "text": "I am QRV at Chengdu"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0314",
    "image": ""
  },
  {
    "id": "Q257",
    "originalId": "LY0343",
    "text": "收听业余无线电爱好者的 SSB 通联时，我们有时会听到 “Cheerio.”、“Ciao ciao.”或“Dosvidaniya.”一类的短句。其含义是：",
    "options": [
      {
        "letter": "A",
        "text": "不同国家或地区的爱好者互致美好祝愿并表达再见之意"
      },
      {
        "letter": "B",
        "text": "一些英语词汇"
      },
      {
        "letter": "C",
        "text": "一些非英语词汇"
      },
      {
        "letter": "D",
        "text": "从一种语言至另一种语言的转写"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.1",
    "type": "MC1-0315",
    "image": ""
  },
  {
    "id": "Q258",
    "originalId": "LX",
    "text": "如果以 CW 方式回应一个 CQ 呼叫，你如何确定自己的发送速度？",
    "options": [
      {
        "letter": "A",
        "text": "确保自己能够完美抄写，但是不高于对方的速度"
      },
      {
        "letter": "B",
        "text": "确保自己能够完美抄写，但是不低于对方的速度"
      },
      {
        "letter": "C",
        "text": "日常联络不要高于 12WPM"
      },
      {
        "letter": "D",
        "text": "竞赛或 DX 通联时不要低于 30WPM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0316",
    "image": ""
  },
  {
    "id": "Q259",
    "originalId": "LY0308",
    "text": "业余电台在发起呼叫前应先守听一段时间，然后再通过简短询问来确定当前频率是空闲的。使用 CW 或其他文字方式进行通联时，适合这一场景的短句是：",
    "options": [
      {
        "letter": "A",
        "text": "QRL？"
      },
      {
        "letter": "B",
        "text": "QRT？"
      },
      {
        "letter": "C",
        "text": "QRU？"
      },
      {
        "letter": "D",
        "text": "QRV？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0317",
    "image": ""
  },
  {
    "id": "Q260",
    "originalId": "LY0240",
    "text": "业余电台 BH1ZZZ 用 CW 或其他文字方式发起 CQ 呼叫的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "CQ CQ CQ DE BH1ZZZ BH1ZZZ BH1ZZZ PSE K"
      },
      {
        "letter": "B",
        "text": "CQ CQ CQ DE BH1ZZZ QRZ？"
      },
      {
        "letter": "C",
        "text": "CQ CQ DE BH1ZZZ KN"
      },
      {
        "letter": "D",
        "text": "CQ CQ CQ CQ CQ CQ CQ CQ CQ DE BH1ZZZ GA"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0318",
    "image": ""
  },
  {
    "id": "Q261",
    "originalId": "LY0243",
    "text": "业余电台 BH1ZZZ 使用 CW 或其他文字方式呼叫 BH8YYY 的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "BH8YYY BH8YYY BH8YYY DE BH1ZZZ BH1ZZZ BH1ZZZ PSE K"
      },
      {
        "letter": "B",
        "text": "BH8YYY BH8YYY BH8YYY DE 1ZZZ K"
      },
      {
        "letter": "C",
        "text": "BH8YYY BH8YYY BH8YYY DE 1ZZZ KN"
      },
      {
        "letter": "D",
        "text": "8YYY 8YYY 8YYY DE BH1ZZZ PSE K"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0319",
    "image": ""
  },
  {
    "id": "Q262",
    "originalId": "LK0378",
    "text": "建立 CW 联络后，小明给对方“579”的信号报告。他可以发：",
    "options": [
      {
        "letter": "A",
        "text": "“UR RST 579”或“UR 579”"
      },
      {
        "letter": "B",
        "text": "TKS FER RPT 579"
      },
      {
        "letter": "C",
        "text": "RMKS IS 579"
      },
      {
        "letter": "D",
        "text": "IS 579 OK FER U？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0320",
    "image": ""
  },
  {
    "id": "Q263",
    "originalId": "LX",
    "text": "在 CW 联络中收到对方给出的信号报告后，我们通常会回应收妥并致谢，可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "“R TKS FER RPT”或者“R TKS FER RPRT”"
      },
      {
        "letter": "B",
        "text": "TKS FER UR RIG RPT"
      },
      {
        "letter": "C",
        "text": "TNX FER UR RMKS OF 579"
      },
      {
        "letter": "D",
        "text": "579 IS AN RST MSG"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0321",
    "image": ""
  },
  {
    "id": "Q264",
    "originalId": "LY0371",
    "text": "在 CW 日常通联中，我们会感谢对方积极参与了联络，可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "TNX FER NICE QSO ES HPE CU AGN 73 TU"
      },
      {
        "letter": "B",
        "text": "TNX FER NICE RPRT ES HPE CU AGN 73 TU"
      },
      {
        "letter": "C",
        "text": "TNX FER QSL INFO ES HPE CU AGN 73 TU"
      },
      {
        "letter": "D",
        "text": "TNX FER WX INFO ES HPE CU AGN 73 TU"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0322",
    "image": ""
  },
  {
    "id": "Q265",
    "originalId": "LX",
    "text": "在 CW 竞赛或 DX 通联中，我们会感谢对方积极参与了联络。我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "TU"
      },
      {
        "letter": "B",
        "text": "FB"
      },
      {
        "letter": "C",
        "text": "NICE"
      },
      {
        "letter": "D",
        "text": "FINE"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0323",
    "image": ""
  },
  {
    "id": "Q266",
    "originalId": "LY0370",
    "text": "CW 通联时，小明拟介绍自己的名字。他可以发：",
    "options": [
      {
        "letter": "A",
        "text": "NAME XIAOMING"
      },
      {
        "letter": "B",
        "text": "MODE XIAOMING"
      },
      {
        "letter": "C",
        "text": "RIG XIAOMING"
      },
      {
        "letter": "D",
        "text": "ANT XIAOMING"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0324",
    "image": ""
  },
  {
    "id": "Q267",
    "originalId": "LY0370",
    "text": "在 CW 通联中，缩语“OP”表示操作员的名字。小明向对方介绍自己的名字时可以发：",
    "options": [
      {
        "letter": "A",
        "text": "OP XIAOMING"
      },
      {
        "letter": "B",
        "text": "B4 XIAOMING"
      },
      {
        "letter": "C",
        "text": "NICE XIAOMING"
      },
      {
        "letter": "D",
        "text": "DR XIAOMING"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0325",
    "image": ""
  },
  {
    "id": "Q268",
    "originalId": "LY0346",
    "text": "在 CW 通联中，如果已知对方操作员的名字，或是对方已做自我介绍，则我们在称呼其名时可以冠以“尊敬的”。假设对方电台由 Zork 操作，我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "DR ZORK"
      },
      {
        "letter": "B",
        "text": "HR ZORK"
      },
      {
        "letter": "C",
        "text": "NR ZORK"
      },
      {
        "letter": "D",
        "text": "UR ZORK"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0326",
    "image": ""
  },
  {
    "id": "Q269",
    "originalId": "LX",
    "text": "在通联中，业余无线电爱好者经常使用诸如“接收机”、“发射机”、“收发信机”和“设备”等词汇来描述己方电台的装置情况。这些词汇的缩语可以是：",
    "options": [
      {
        "letter": "A",
        "text": "RCVR、RX、XMTR、TX、XCVR、TXRX、RIG"
      },
      {
        "letter": "B",
        "text": "RPT、SASE、RPRT、WKD"
      },
      {
        "letter": "C",
        "text": "CUZ、CS、HW"
      },
      {
        "letter": "D",
        "text": "RST、SIGS"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0327",
    "image": ""
  },
  {
    "id": "Q270",
    "originalId": "LY0376",
    "text": "在 CW 通联中，小明拟向对方介绍说自己的设备是 X6200。他可以发：",
    "options": [
      {
        "letter": "A",
        "text": "RIG X6200"
      },
      {
        "letter": "B",
        "text": "REG WID X6200"
      },
      {
        "letter": "C",
        "text": "EQP OF X6200"
      },
      {
        "letter": "D",
        "text": "OP X6200"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0328",
    "image": ""
  },
  {
    "id": "Q271",
    "originalId": "LY0327",
    "text": "业余无线电通信缩语“PWR”表示“功率”。询问对方电台的发射功率有多大可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "PWR？"
      },
      {
        "letter": "B",
        "text": "PSE SEND ME UR PWR"
      },
      {
        "letter": "C",
        "text": "PSE ACCEPT MY PWR"
      },
      {
        "letter": "D",
        "text": "PWR OFF？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0329",
    "image": ""
  },
  {
    "id": "Q272",
    "originalId": "LY0324",
    "text": "业余无线电通信缩语“ABT”具有“关于、大约”之意。如在通联中需要向对方介绍“我台的发射功率约为 10 瓦”，我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "PWR ABT 10 W"
      },
      {
        "letter": "B",
        "text": "I AM ABT 10 WATTS"
      },
      {
        "letter": "C",
        "text": "RIG ABT 10 W"
      },
      {
        "letter": "D",
        "text": "ANT ABT 10 WATTS"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0330",
    "image": ""
  },
  {
    "id": "Q273",
    "originalId": "LY0331",
    "text": "业余无线电通信缩语“ANT”表示“天线”。如需向对方介绍自己使用了垂直接地天线，架高50 米，我们可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "ANT GP 50 MH"
      },
      {
        "letter": "B",
        "text": "50 MH ANT IS GP?"
      },
      {
        "letter": "C",
        "text": "ANT 50 MH? GP?"
      },
      {
        "letter": "D",
        "text": "50 MH ANT IS MINE = U HAVE A GP"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0331",
    "image": ""
  },
  {
    "id": "Q274",
    "originalId": "LY0396",
    "text": "进行 CW 或其他文字方式的通联时，我们有时会使用缩语“WX”来交换天气信息。如需分享晴天，大约 25 摄氏度的气温，我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "WX FINE ES TEMP ABT 25 C"
      },
      {
        "letter": "B",
        "text": "WX ABT 25 C ES TEMP FINE"
      },
      {
        "letter": "C",
        "text": "WX TEMP ES FINE ABT 25 C"
      },
      {
        "letter": "D",
        "text": "TEMP WX ES 25 C ABT FINE"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0332",
    "image": ""
  },
  {
    "id": "Q275",
    "originalId": "LY0366",
    "text": "进行 CW 联络，如需了解对方的抄收情况，除了“QSL ?”之外，我们还可以问：",
    "options": [
      {
        "letter": "A",
        "text": "HW？"
      },
      {
        "letter": "B",
        "text": "CW？"
      },
      {
        "letter": "C",
        "text": "NR？"
      },
      {
        "letter": "D",
        "text": "HPI？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0333",
    "image": ""
  },
  {
    "id": "Q276",
    "originalId": "LY0362",
    "text": "进行 CW 通联，如果对方完美抄收了我们发出的消息，他们会在回复时用缩语“R”或 Q 简语“QSL”告知。但是，对方有时会用“CPI”替代“R”或“QSL”。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "这里的“CPI”对应英语“copied”，也是“抄收”之意。这可以用来减少用词重复"
      },
      {
        "letter": "B",
        "text": "这里的“CPI 对应英语“code perfectly interpreted”，表示消息完美抄收了"
      },
      {
        "letter": "C",
        "text": "这里的“CPI”对应英语“code printed immediately”，表示消息打印出来了"
      },
      {
        "letter": "D",
        "text": "那是谦辞：Cool，pretty interesting。那表示我们双方沟通顺畅"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0334",
    "image": ""
  },
  {
    "id": "Q277",
    "originalId": "LY0293",
    "text": "通联时，如需了解自己的信号是否遇到了他台干扰，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QRM？"
      },
      {
        "letter": "B",
        "text": "QSM？"
      },
      {
        "letter": "C",
        "text": "QSN？"
      },
      {
        "letter": "D",
        "text": "QSD？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0335",
    "image": ""
  },
  {
    "id": "Q278",
    "originalId": "LY0292",
    "text": "在通联中，如需告诉对方其信号遇到了他台干扰，我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "QRM"
      },
      {
        "letter": "B",
        "text": "QRN"
      },
      {
        "letter": "C",
        "text": "QRS"
      },
      {
        "letter": "D",
        "text": "QRP"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0336",
    "image": ""
  },
  {
    "id": "Q279",
    "originalId": "LY0294",
    "text": "通联时，如需了解自己的信号是否遭遇了天电干扰，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QRN？"
      },
      {
        "letter": "B",
        "text": "QRM？"
      },
      {
        "letter": "C",
        "text": "QRP？"
      },
      {
        "letter": "D",
        "text": "QRQ？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0337",
    "image": ""
  },
  {
    "id": "Q280",
    "originalId": "LY0295",
    "text": "在通联中，如需告诉对方其信号遇到了天电干扰，我们可以发：",
    "options": [
      {
        "letter": "A",
        "text": "QRN"
      },
      {
        "letter": "B",
        "text": "QRM"
      },
      {
        "letter": "C",
        "text": "QRP"
      },
      {
        "letter": "D",
        "text": "QRQ"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0338",
    "image": ""
  },
  {
    "id": "Q281",
    "originalId": "LY0335",
    "text": "CW 联络时，对方有时会发来符号“滴答滴滴滴”。这像是将“AS”连发在了一起，而我们抄写时会在“AS”上面加个横线。该符号的含义是：",
    "options": [
      {
        "letter": "A",
        "text": "请稍等"
      },
      {
        "letter": "B",
        "text": "亚洲"
      },
      {
        "letter": "C",
        "text": "英语“因为”的意思，因为紧随其后就是对方针对提问的回复了"
      },
      {
        "letter": "D",
        "text": "先进信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0339",
    "image": ""
  },
  {
    "id": "Q282",
    "originalId": "LX",
    "text": "通联时，如收到对方发送的短句“PSE QSL VIA BURO”，则其中的“QSL”意指：",
    "options": [
      {
        "letter": "A",
        "text": "QSL 卡片"
      },
      {
        "letter": "B",
        "text": "对消息“VIA BURO”是否收妥进行确认"
      },
      {
        "letter": "C",
        "text": "通过预定的局间交换机制给收据，进行异步 ACK 作业"
      },
      {
        "letter": "D",
        "text": "随意给个确认，口头的、QSL 卡片或 email 都可以的"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0340",
    "image": ""
  },
  {
    "id": "Q283",
    "originalId": "LX",
    "text": "业余无线电爱好者在结束当前联络并互致再见时经常使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "CU、CU AGN 或 GB"
      },
      {
        "letter": "B",
        "text": "GM、GA、GE、GN 或 GX"
      },
      {
        "letter": "C",
        "text": "TU、TKS、TNX 或 MNI TKS"
      },
      {
        "letter": "D",
        "text": "Thank you, and good luck"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0341",
    "image": ""
  },
  {
    "id": "Q284",
    "originalId": "LY0382",
    "text": "在结束 CW 会话之时，我们时常听到对方发来符号“滴滴滴答滴答”。这像是将“SK”连发在了一起，而我们抄写时会在“SK”上面加个横线。该符号的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "结束当前联络"
      },
      {
        "letter": "B",
        "text": "心情愉快"
      },
      {
        "letter": "C",
        "text": "感谢"
      },
      {
        "letter": "D",
        "text": "下次再见"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.3.2",
    "type": "MC1-0342",
    "image": ""
  },
  {
    "id": "Q285",
    "originalId": "LY0288",
    "text": "QRP 操作时如果对方反映信号不好，我们可能会追问是否需要增加功率。此时可发送：",
    "options": [
      {
        "letter": "A",
        "text": "QRO？"
      },
      {
        "letter": "B",
        "text": "QSO？"
      },
      {
        "letter": "C",
        "text": "QRP？"
      },
      {
        "letter": "D",
        "text": "QRS？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0343",
    "image": ""
  },
  {
    "id": "Q286",
    "originalId": "LY0289",
    "text": "通联时，如认为 QRP 操作足以保证可靠联络，则可与对方协商降低功率。短句为：",
    "options": [
      {
        "letter": "A",
        "text": "QRP？"
      },
      {
        "letter": "B",
        "text": "May I try QRO for you？"
      },
      {
        "letter": "C",
        "text": "QRU？"
      },
      {
        "letter": "D",
        "text": "May I try QRT for you？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0344",
    "image": ""
  },
  {
    "id": "Q287",
    "originalId": "LX",
    "text": "业余电台以低于 5 瓦的功率开展通信研究或追逐奖状时，常在呼号之后附加操作属性“QRP”。例如：BI9XYZ/QRP。Q 简语“QRP”表示：",
    "options": [
      {
        "letter": "A",
        "text": "我已降低发射功率"
      },
      {
        "letter": "B",
        "text": "我已降低发射功率至 5W"
      },
      {
        "letter": "C",
        "text": "我是新手，请发慢一些，照顾一下"
      },
      {
        "letter": "D",
        "text": "我在挑战小功率通信极限，请高速发过来"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0345",
    "image": ""
  },
  {
    "id": "Q288",
    "originalId": "LY0297",
    "text": "通联时，如果希望对方加快发报速度，我们可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "PSE QRQ"
      },
      {
        "letter": "B",
        "text": "PSE QRS"
      },
      {
        "letter": "C",
        "text": "PSE QRT"
      },
      {
        "letter": "D",
        "text": "PSE QTR"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0346",
    "image": ""
  },
  {
    "id": "Q289",
    "originalId": "LY0296",
    "text": "通联时，如果对方要求加快发报速度，我们可以通过反问来确认。此时可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "QRQ？"
      },
      {
        "letter": "B",
        "text": "QRS？"
      },
      {
        "letter": "C",
        "text": "QRT？"
      },
      {
        "letter": "D",
        "text": "QTR？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0347",
    "image": ""
  },
  {
    "id": "Q290",
    "originalId": "LY0299",
    "text": "通联时，如果希望对方放慢发报速度，我们可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "PSE QRS"
      },
      {
        "letter": "B",
        "text": "PSE QRQ"
      },
      {
        "letter": "C",
        "text": "PSE QSY"
      },
      {
        "letter": "D",
        "text": "PSE QSL"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0348",
    "image": ""
  },
  {
    "id": "Q291",
    "originalId": "LY0298",
    "text": "通联时，如果对方要求放慢发报速度，我们可以通过反问来确认。此时可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "QRS？"
      },
      {
        "letter": "B",
        "text": "QRQ？"
      },
      {
        "letter": "C",
        "text": "QSY？"
      },
      {
        "letter": "D",
        "text": "QSL？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0349",
    "image": ""
  },
  {
    "id": "Q292",
    "originalId": "LY0302",
    "text": "结束当天的通联活动时，业余电台常会发送 Q 简语“QRT”。其含义为：",
    "options": [
      {
        "letter": "A",
        "text": "我要关闭收发信机了，再见"
      },
      {
        "letter": "B",
        "text": "我要变更发射频率至 nnnn 千赫（或兆赫）"
      },
      {
        "letter": "C",
        "text": "我不再呼叫了，尚未联络的请用 email 约起来"
      },
      {
        "letter": "D",
        "text": "我要变更操作方式了，有要联络的请尽快叫过来"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0350",
    "image": ""
  },
  {
    "id": "Q293",
    "originalId": "LY0285",
    "text": "在结束联络之前，我们可以询问对方是否还有消息要传达。此时可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "QRU？"
      },
      {
        "letter": "B",
        "text": "QRL？"
      },
      {
        "letter": "C",
        "text": "QRB？"
      },
      {
        "letter": "D",
        "text": "QRQ？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0351",
    "image": ""
  },
  {
    "id": "Q294",
    "originalId": "LY0286",
    "text": "结束联络时，我们可以告诉对方这里已无事。此时可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "QRU"
      },
      {
        "letter": "B",
        "text": "QRL"
      },
      {
        "letter": "C",
        "text": "QRM"
      },
      {
        "letter": "D",
        "text": "QRN"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0352",
    "image": ""
  },
  {
    "id": "Q295",
    "originalId": "LY0301",
    "text": "通联时，如希望相约对方参加某个业余无线电活动（如，“木兰围场-通联中国之省”），可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QRV IN WAPC?"
      },
      {
        "letter": "B",
        "text": "QSY TO WAPC?"
      },
      {
        "letter": "C",
        "text": "QSO WID WAPC?"
      },
      {
        "letter": "D",
        "text": "QRT OVER WAPC?"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0353",
    "image": ""
  },
  {
    "id": "Q296",
    "originalId": "LX",
    "text": "Q 简语“QRV”的含义是：",
    "options": [
      {
        "letter": "A",
        "text": "我准备好收信了"
      },
      {
        "letter": "B",
        "text": "我正忙于（与某台）联络"
      },
      {
        "letter": "C",
        "text": "我有消息要发给你"
      },
      {
        "letter": "D",
        "text": "我要减小发射功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0354",
    "image": ""
  },
  {
    "id": "Q297",
    "originalId": "LY0287",
    "text": "进行呼叫时，如果没有听清对方呼号，可使用如下短句请求对方重发：",
    "options": [
      {
        "letter": "A",
        "text": "QRZ？"
      },
      {
        "letter": "B",
        "text": "QRU？"
      },
      {
        "letter": "C",
        "text": "QSY？"
      },
      {
        "letter": "D",
        "text": "QSA？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0355",
    "image": ""
  },
  {
    "id": "Q298",
    "originalId": "LY0287",
    "text": "Q 简语“QRZ”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "呼叫你的电台是...；做疑问句时则为：谁在呼叫我？"
      },
      {
        "letter": "B",
        "text": "我准备好了"
      },
      {
        "letter": "C",
        "text": "我正忙于（与某台）联络"
      },
      {
        "letter": "D",
        "text": "我要减小发射功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0356",
    "image": ""
  },
  {
    "id": "Q299",
    "originalId": "LY0322",
    "text": "阅读我国早期业余无线电文献，我们可能发现一种用 Q 简语和 5 个强度等级来表示的信号报告。该 Q 简语是：",
    "options": [
      {
        "letter": "A",
        "text": "QSA"
      },
      {
        "letter": "B",
        "text": "QSB"
      },
      {
        "letter": "C",
        "text": "QSD"
      },
      {
        "letter": "D",
        "text": "QSK"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0357",
    "image": ""
  },
  {
    "id": "Q300",
    "originalId": "LY0304",
    "text": "通联时，如需了解自己的信号是否衰落，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QSB？"
      },
      {
        "letter": "B",
        "text": "QSD？"
      },
      {
        "letter": "C",
        "text": "QRB？"
      },
      {
        "letter": "D",
        "text": "QSP？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0358",
    "image": ""
  },
  {
    "id": "Q301",
    "originalId": "LY0305",
    "text": "Q 简语“QSB”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "你的信号正在衰落"
      },
      {
        "letter": "B",
        "text": "你的电台存在键控缺陷（交流声、键击声、接触不良或发报手法不佳等）"
      },
      {
        "letter": "C",
        "text": "请重复上一条消息"
      },
      {
        "letter": "D",
        "text": "发报时，我能够在电码的间隙中听到电台的插入"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0359",
    "image": ""
  },
  {
    "id": "Q302",
    "originalId": "LY0306",
    "text": "小强和小明练习 CW。若小强问“我发报的手法有毛病吗？”，他可以发：",
    "options": [
      {
        "letter": "A",
        "text": "QSD？"
      },
      {
        "letter": "B",
        "text": "QSB？"
      },
      {
        "letter": "C",
        "text": "QSV？"
      },
      {
        "letter": "D",
        "text": "QRM？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0360",
    "image": ""
  },
  {
    "id": "Q303",
    "originalId": "LY0307",
    "text": "小强与小明练习 CW。小明认为小强刚才发字母“Y”时手法不好。他可以拍发：",
    "options": [
      {
        "letter": "A",
        "text": "QSD AT Y"
      },
      {
        "letter": "B",
        "text": "QRH AT Y"
      },
      {
        "letter": "C",
        "text": "QSU AT Y"
      },
      {
        "letter": "D",
        "text": "QSS AT Y"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0361",
    "image": ""
  },
  {
    "id": "Q304",
    "originalId": "LX",
    "text": "小强与小明练习 CW。小明认为小强发报时有砰然的键击声。他可以拍发：",
    "options": [
      {
        "letter": "A",
        "text": "QSD PSE CK"
      },
      {
        "letter": "B",
        "text": "QRI PSE CK"
      },
      {
        "letter": "C",
        "text": "QRH PSE CK"
      },
      {
        "letter": "D",
        "text": "TVI PSE CK"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0362",
    "image": ""
  },
  {
    "id": "Q305",
    "originalId": "LX",
    "text": "Q 简语“QSK”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "发报时，我能够在电码的间隙中听到电台的插入"
      },
      {
        "letter": "B",
        "text": "你的信号正在衰落"
      },
      {
        "letter": "C",
        "text": "你的电台存在键控缺陷（交流声、键击声、接触不良或发报手法不佳等）"
      },
      {
        "letter": "D",
        "text": "请重复上一条消息"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0363",
    "image": ""
  },
  {
    "id": "Q306",
    "originalId": "LX",
    "text": "通联时，如需对方电台确认收妥自己发出的消息，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QSL？"
      },
      {
        "letter": "B",
        "text": "QRZ？"
      },
      {
        "letter": "C",
        "text": "QSP？"
      },
      {
        "letter": "D",
        "text": "QRO？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0364",
    "image": ""
  },
  {
    "id": "Q307",
    "originalId": "LX",
    "text": "Q 简语“QSL”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "我确认抄收了你所发送的消息"
      },
      {
        "letter": "B",
        "text": "我要寄一张 QSL 卡片给你"
      },
      {
        "letter": "C",
        "text": "我刚刚错过了你的消息，请再发一遍"
      },
      {
        "letter": "D",
        "text": "你应当寄一张 QSL 卡片给我"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0365",
    "image": ""
  },
  {
    "id": "Q308",
    "originalId": "LY0290",
    "text": "Q 简语“QSO”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "我能够直接或通过他台转信通联（某个电台）；常指业余电台间的当前联络"
      },
      {
        "letter": "B",
        "text": "我可以直接或通过卡片管理局寄发 QSL；常指业余电台交换 QSL 卡片的操作"
      },
      {
        "letter": "C",
        "text": "我可以将你的消息转信至某个电台；常指业余电台帮助他台中转消息的操作"
      },
      {
        "letter": "D",
        "text": "我没有需要发送的消息了；常见于业余电台即将结束联络并互致再见之时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0366",
    "image": ""
  },
  {
    "id": "Q309",
    "originalId": "LY0314",
    "text": "通联时，如需了解对方电台可否帮助转信至“xxx 电台”，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QSP ×××？"
      },
      {
        "letter": "B",
        "text": "QRD ×××？"
      },
      {
        "letter": "C",
        "text": "QSX ×××？"
      },
      {
        "letter": "D",
        "text": "QRV ×××？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0367",
    "image": ""
  },
  {
    "id": "Q310",
    "originalId": "LY0315",
    "text": "Q 简语“QSP”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "我可以将你的消息转信至某个电台；常指业余电台帮助他台中转消息的操作"
      },
      {
        "letter": "B",
        "text": "我可以直接或通过卡片管理局寄发 QSL；常指业余电台交换 QSL 卡片的操作"
      },
      {
        "letter": "C",
        "text": "我能够直接或通过他台转信通联（某个电台）；常指业余电台间的当前联络"
      },
      {
        "letter": "D",
        "text": "我没有需要发送的消息了；常见于业余电台即将结束联络并互致再见之时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0368",
    "image": ""
  },
  {
    "id": "Q311",
    "originalId": "LY0316",
    "text": "通联时，小明希望小强帮忙守听 7074 千赫的 FT8 操作，他可以发：",
    "options": [
      {
        "letter": "A",
        "text": "QSX MY FT8 ON 7074 KHZ？"
      },
      {
        "letter": "B",
        "text": "QSY MY FT8 ON 7074 KHZ？"
      },
      {
        "letter": "C",
        "text": "QSL MY FT8 ON 7074 KHZ？"
      },
      {
        "letter": "D",
        "text": "QRU MY FT8 ON 7074 KHZ？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0369",
    "image": ""
  },
  {
    "id": "Q312",
    "originalId": "LY0317",
    "text": "通联时，小强告诉小明，他正在 7074 千赫守听 FT8 联络，他可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "QSX FT8 ON 7074 KHZ"
      },
      {
        "letter": "B",
        "text": "QSY FT8 ON 7074 KHZ"
      },
      {
        "letter": "C",
        "text": "QSL FT8 ON 7074 KHZ"
      },
      {
        "letter": "D",
        "text": "QRU FT8 ON 7074 KHZ"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0370",
    "image": ""
  },
  {
    "id": "Q313",
    "originalId": "LY0318",
    "text": "通联时，如需协商对方改频至 nnnn 千赫（或兆赫），可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QSY nnnn KHZ（或 MHZ）？"
      },
      {
        "letter": "B",
        "text": "QRY nnnn KHZ（或 MHZ）？"
      },
      {
        "letter": "C",
        "text": "QSV nnnn KHZ（或 MHZ）？"
      },
      {
        "letter": "D",
        "text": "QRV nnnn KHZ（或 MHZ）？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0371",
    "image": ""
  },
  {
    "id": "Q314",
    "originalId": "LY0319",
    "text": "Q 简语“QSY”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "我要改变发射频率至...千赫（或兆赫）"
      },
      {
        "letter": "B",
        "text": "我要关闭收发信机了，再见"
      },
      {
        "letter": "C",
        "text": "我不再呼叫了，尚未联络的请用 email 约起来"
      },
      {
        "letter": "D",
        "text": "我要变更操作方式了，有要联络的请尽快叫过来"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0372",
    "image": ""
  },
  {
    "id": "Q315",
    "originalId": "LY0320",
    "text": "通联时，如需了解对方电台的位置，可使用短句：",
    "options": [
      {
        "letter": "A",
        "text": "QTH？"
      },
      {
        "letter": "B",
        "text": "QRA？"
      },
      {
        "letter": "C",
        "text": "QSP？"
      },
      {
        "letter": "D",
        "text": "QSA？"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.1",
    "type": "MC1-0373",
    "image": ""
  },
  {
    "id": "Q316",
    "originalId": "LY0402",
    "text": "业余无线电爱好者在结束当前联络并互致美好祝愿时经常使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "73"
      },
      {
        "letter": "B",
        "text": "59"
      },
      {
        "letter": "C",
        "text": "599"
      },
      {
        "letter": "D",
        "text": "99"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0374",
    "image": ""
  },
  {
    "id": "Q317",
    "originalId": "LY0325",
    "text": "如在 CW 或其他方式的文字通联中须询问对方的 QSL 卡片邮寄地址，我们可以发送：",
    "options": [
      {
        "letter": "A",
        "text": "“UR ADR？”或“UR ADDR？”"
      },
      {
        "letter": "B",
        "text": "MY ADDR？"
      },
      {
        "letter": "C",
        "text": "PSE ADR MY QSL INFO"
      },
      {
        "letter": "D",
        "text": "PSE QSL TO UR ADDR"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0375",
    "image": ""
  },
  {
    "id": "Q318",
    "originalId": "LY0328",
    "text": "如需对方重复上次的操作，比如重报呼号或信号报告，我们可使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "AGN"
      },
      {
        "letter": "B",
        "text": "AGC"
      },
      {
        "letter": "C",
        "text": "ABT"
      },
      {
        "letter": "D",
        "text": "ABV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0376",
    "image": ""
  },
  {
    "id": "Q319",
    "originalId": "LK0330",
    "text": "业余无线电通信缩语“AHR”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "另一个"
      },
      {
        "letter": "B",
        "text": "天线"
      },
      {
        "letter": "C",
        "text": "这里"
      },
      {
        "letter": "D",
        "text": "地址"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0377",
    "image": ""
  },
  {
    "id": "Q320",
    "originalId": "LY0332",
    "text": "“业余无线电测向”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "ARDF"
      },
      {
        "letter": "B",
        "text": "ATU"
      },
      {
        "letter": "C",
        "text": "ADDR"
      },
      {
        "letter": "D",
        "text": "ANT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0378",
    "image": ""
  },
  {
    "id": "Q321",
    "originalId": "LK0375",
    "text": "在 CW 联络中交换 QSL 信息时，我们可能用到“邮政信箱”这个术语。其缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "“BOX”或“P O BOX”"
      },
      {
        "letter": "B",
        "text": "BOX OF MAIL"
      },
      {
        "letter": "C",
        "text": "BURO"
      },
      {
        "letter": "D",
        "text": "QTH"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0379",
    "image": ""
  },
  {
    "id": "Q322",
    "originalId": "LY0340",
    "text": "“QSL 卡片管理局”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "BURO"
      },
      {
        "letter": "B",
        "text": "BOX"
      },
      {
        "letter": "C",
        "text": "ROUTER"
      },
      {
        "letter": "D",
        "text": "SWITCH"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0380",
    "image": ""
  },
  {
    "id": "Q323",
    "originalId": "LX",
    "text": "在 CW 通联中，我们有时会抄到缩语“CK”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "检查"
      },
      {
        "letter": "B",
        "text": "钟表"
      },
      {
        "letter": "C",
        "text": "报到"
      },
      {
        "letter": "D",
        "text": "祝贺"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0381",
    "image": ""
  },
  {
    "id": "Q324",
    "originalId": "LX",
    "text": "业余电台发起呼叫时会使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "CQ"
      },
      {
        "letter": "B",
        "text": "CU AGN"
      },
      {
        "letter": "C",
        "text": "TU"
      },
      {
        "letter": "D",
        "text": "Seek QSOs with you, Roger?"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0382",
    "image": ""
  },
  {
    "id": "Q325",
    "originalId": "LX",
    "text": "形容某个信号来自远地时，爱好者们经常使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "DX"
      },
      {
        "letter": "B",
        "text": "DE"
      },
      {
        "letter": "C",
        "text": "DR"
      },
      {
        "letter": "D",
        "text": "DSW"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0383",
    "image": ""
  },
  {
    "id": "Q326",
    "originalId": "LK0348",
    "text": "在 CW 通联中，我们有时会抄到缩语“ES”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "和"
      },
      {
        "letter": "B",
        "text": "是"
      },
      {
        "letter": "C",
        "text": "从"
      },
      {
        "letter": "D",
        "text": "请等待"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0384",
    "image": ""
  },
  {
    "id": "Q327",
    "originalId": "LY0349",
    "text": "在 CW 通联中，我们有时会抄到缩语“FB”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "太棒了，业务精湛"
      },
      {
        "letter": "B",
        "text": "我的反馈如下"
      },
      {
        "letter": "C",
        "text": "保险丝熔断了"
      },
      {
        "letter": "D",
        "text": "从正反两方面说"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0385",
    "image": ""
  },
  {
    "id": "Q328",
    "originalId": "LY0351",
    "text": "在 CW 通联中，我们有时会抄到缩语“FER”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "为了，对于"
      },
      {
        "letter": "B",
        "text": "好的，精细的"
      },
      {
        "letter": "C",
        "text": "二月"
      },
      {
        "letter": "D",
        "text": "猎狐"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0386",
    "image": ""
  },
  {
    "id": "Q329",
    "originalId": "LK0352",
    "text": "术语“频率”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "FREQ"
      },
      {
        "letter": "B",
        "text": "FER"
      },
      {
        "letter": "C",
        "text": "TUNE"
      },
      {
        "letter": "D",
        "text": "FIND"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0387",
    "image": ""
  },
  {
    "id": "Q330",
    "originalId": "LY0353",
    "text": "建立 CW 联络后，我们经常值交换信号报告之机向对方表示问候。“下午好”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "GA"
      },
      {
        "letter": "B",
        "text": "GE"
      },
      {
        "letter": "C",
        "text": "GN"
      },
      {
        "letter": "D",
        "text": "GM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0388",
    "image": ""
  },
  {
    "id": "Q331",
    "originalId": "LY0355",
    "text": "建立 CW 联络后，我们经常值交换信号报告之机向对方表示问候。“晚上好”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "GE"
      },
      {
        "letter": "B",
        "text": "GM"
      },
      {
        "letter": "C",
        "text": "GN"
      },
      {
        "letter": "D",
        "text": "GA"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0389",
    "image": ""
  },
  {
    "id": "Q332",
    "originalId": "LX",
    "text": "业余无线电爱好者在结束当前联络并祝愿对方好运好成绩时经常使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "GL"
      },
      {
        "letter": "B",
        "text": "GB"
      },
      {
        "letter": "C",
        "text": "TU"
      },
      {
        "letter": "D",
        "text": "73"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0390",
    "image": ""
  },
  {
    "id": "Q333",
    "originalId": "LK0359",
    "text": "业余无线电通信缩语“GLD”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "高兴"
      },
      {
        "letter": "B",
        "text": "好运气"
      },
      {
        "letter": "C",
        "text": "再见"
      },
      {
        "letter": "D",
        "text": "地线，地面"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0391",
    "image": ""
  },
  {
    "id": "Q334",
    "originalId": "LY0354",
    "text": "建立 CW 联络后，我们经常值交换信号报告之机向对方表示问候。“早晨好”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "GM"
      },
      {
        "letter": "B",
        "text": "GA"
      },
      {
        "letter": "C",
        "text": "GL"
      },
      {
        "letter": "D",
        "text": "GB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0392",
    "image": ""
  },
  {
    "id": "Q335",
    "originalId": "LY0360",
    "text": "有时，我们通联的 DX 电台仍使用“GMT”来表示时间。该时间的含义是：",
    "options": [
      {
        "letter": "A",
        "text": "格林尼治时间"
      },
      {
        "letter": "B",
        "text": "GPS 管理区段时间"
      },
      {
        "letter": "C",
        "text": "国际原子时"
      },
      {
        "letter": "D",
        "text": "罗兰 C 时间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0393",
    "image": ""
  },
  {
    "id": "Q336",
    "originalId": "LK0356",
    "text": "业余无线电通信缩语“GN”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "晚安"
      },
      {
        "letter": "B",
        "text": "早晨好"
      },
      {
        "letter": "C",
        "text": "好运气"
      },
      {
        "letter": "D",
        "text": "高兴"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0394",
    "image": ""
  },
  {
    "id": "Q337",
    "originalId": "LK0361",
    "text": "业余无线电通信缩语“GND”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "地面、接地"
      },
      {
        "letter": "B",
        "text": "格林尼治时间"
      },
      {
        "letter": "C",
        "text": "好运气"
      },
      {
        "letter": "D",
        "text": "高兴"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0395",
    "image": ""
  },
  {
    "id": "Q338",
    "originalId": "LY0397",
    "text": "每年的 12 月下旬，我们常会在 CW 联络中听到缩语“HNY”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "新年快乐"
      },
      {
        "letter": "B",
        "text": "幸福"
      },
      {
        "letter": "C",
        "text": "希望"
      },
      {
        "letter": "D",
        "text": "圣诞快乐"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0396",
    "image": ""
  },
  {
    "id": "Q339",
    "originalId": "LY0363",
    "text": "在 CW 通联中，我们有时会抄到缩语“HPE”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "希望去做某件事"
      },
      {
        "letter": "B",
        "text": "醉心于某件事"
      },
      {
        "letter": "C",
        "text": "是“抄收”的意思"
      },
      {
        "letter": "D",
        "text": "是“这里”的意思"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0397",
    "image": ""
  },
  {
    "id": "Q340",
    "originalId": "LY0364",
    "text": "在 CW 通联中，我们有时会抄到缩语“HPY”或“HPI”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "幸福"
      },
      {
        "letter": "B",
        "text": "希望"
      },
      {
        "letter": "C",
        "text": "抄收"
      },
      {
        "letter": "D",
        "text": "这里"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0398",
    "image": ""
  },
  {
    "id": "Q341",
    "originalId": "LY0334",
    "text": "“快速收发报”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "HST"
      },
      {
        "letter": "B",
        "text": "RTTY"
      },
      {
        "letter": "C",
        "text": "CW"
      },
      {
        "letter": "D",
        "text": "RST"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0399",
    "image": ""
  },
  {
    "id": "Q342",
    "originalId": "LX",
    "text": "业余电台完成当前发送并守听任意电台时应使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "K"
      },
      {
        "letter": "B",
        "text": "GA"
      },
      {
        "letter": "C",
        "text": "PSE"
      },
      {
        "letter": "D",
        "text": "Come on"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0400",
    "image": ""
  },
  {
    "id": "Q343",
    "originalId": "LX",
    "text": "业余电台完成当前发送并守听通联中的对方电台时可使用缩语：",
    "options": [
      {
        "letter": "A",
        "text": "KN"
      },
      {
        "letter": "B",
        "text": "PSE"
      },
      {
        "letter": "C",
        "text": "Please call one by one"
      },
      {
        "letter": "D",
        "text": "CU"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0401",
    "image": ""
  },
  {
    "id": "Q344",
    "originalId": "LY0367",
    "text": "在 CW 通联中表达“非常感谢”之意时我们发送：",
    "options": [
      {
        "letter": "A",
        "text": "“MNY TNX”或“MNI TNX”"
      },
      {
        "letter": "B",
        "text": "TNX TOO MUCH"
      },
      {
        "letter": "C",
        "text": "VY TNX"
      },
      {
        "letter": "D",
        "text": "I AM GRATEFUL FER UR TNX"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0402",
    "image": ""
  },
  {
    "id": "Q345",
    "originalId": "LY0365",
    "text": "业余无线电通信缩语“NW”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "现在"
      },
      {
        "letter": "B",
        "text": "不工作"
      },
      {
        "letter": "C",
        "text": "新的"
      },
      {
        "letter": "D",
        "text": "你和我"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0403",
    "image": ""
  },
  {
    "id": "Q346",
    "originalId": "LY0373",
    "text": "通联时，我们有时称对方电台的操作员为“old man”。这是将对方比作亲密无间的队友，因此为“老朋友”、“老伙计”之意且无关年龄。这个称呼的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "OM"
      },
      {
        "letter": "B",
        "text": "OB"
      },
      {
        "letter": "C",
        "text": "OC"
      },
      {
        "letter": "D",
        "text": "OT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0404",
    "image": ""
  },
  {
    "id": "Q347",
    "originalId": "LY0374",
    "text": "“操作员”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "OP"
      },
      {
        "letter": "B",
        "text": "OOP"
      },
      {
        "letter": "C",
        "text": "OM"
      },
      {
        "letter": "D",
        "text": "OHM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0405",
    "image": ""
  },
  {
    "id": "Q348",
    "originalId": "LX",
    "text": "在 CW 日常通联中，适当使用带“请”字的祈使句可以活跃通联气氛。“请”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "PSE、PLS"
      },
      {
        "letter": "B",
        "text": "PSK、ASK"
      },
      {
        "letter": "C",
        "text": "PX、PWM"
      },
      {
        "letter": "D",
        "text": "PWR、PTT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0406",
    "image": ""
  },
  {
    "id": "Q349",
    "originalId": "LY0404",
    "text": "与“QSL”类似，如果完全抄收了对方所发的消息，我们常以起始语“Roger”开启新的会话。这可向对方主动传达确认之意。“Roger”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "R"
      },
      {
        "letter": "B",
        "text": "RX"
      },
      {
        "letter": "C",
        "text": "RIG"
      },
      {
        "letter": "D",
        "text": "RFI"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0407",
    "image": ""
  },
  {
    "id": "Q350",
    "originalId": "LX",
    "text": "业余无线电业务中，“SAE”的含义为：",
    "options": [
      {
        "letter": "A",
        "text": "写好收信人地址的信封"
      },
      {
        "letter": "B",
        "text": "信封"
      },
      {
        "letter": "C",
        "text": "请尽快寄出 QSL 卡片"
      },
      {
        "letter": "D",
        "text": "请勿通过卡片管理局交换 QSL 卡片"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0408",
    "image": ""
  },
  {
    "id": "Q351",
    "originalId": "LY0229",
    "text": "业余无线电爱好者寄送 QSL 卡片时常会提及缩语“SASE”，其含义为：",
    "options": [
      {
        "letter": "A",
        "text": "写好收信人地址并贴好邮票（或附有邮资）的信封"
      },
      {
        "letter": "B",
        "text": "国际邮资券"
      },
      {
        "letter": "C",
        "text": "请尽快寄出 QSL 卡片"
      },
      {
        "letter": "D",
        "text": "请勿通过卡片管理局交换 QSL 卡片"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0409",
    "image": ""
  },
  {
    "id": "Q352",
    "originalId": "LX",
    "text": "在通联中，如需更正刚才发错的内容，我们通常以“抱歉”开启会话，缩语为：",
    "options": [
      {
        "letter": "A",
        "text": "SRI"
      },
      {
        "letter": "B",
        "text": "SNR"
      },
      {
        "letter": "C",
        "text": "STN"
      },
      {
        "letter": "D",
        "text": "SMS"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0410",
    "image": ""
  },
  {
    "id": "Q353",
    "originalId": "LY0387",
    "text": "“温度”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "TEMP"
      },
      {
        "letter": "B",
        "text": "TMPO"
      },
      {
        "letter": "C",
        "text": "TUNE"
      },
      {
        "letter": "D",
        "text": "WX"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0411",
    "image": ""
  },
  {
    "id": "Q354",
    "originalId": "LX",
    "text": "“谢谢”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "TNX、TKS"
      },
      {
        "letter": "B",
        "text": "SRI、SAE"
      },
      {
        "letter": "C",
        "text": "CU、GB"
      },
      {
        "letter": "D",
        "text": "TVI、RFI"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0412",
    "image": ""
  },
  {
    "id": "Q355",
    "originalId": "LY0389",
    "text": "“谢谢你”的缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "TU"
      },
      {
        "letter": "B",
        "text": "ATU"
      },
      {
        "letter": "C",
        "text": "TX"
      },
      {
        "letter": "D",
        "text": "ATT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0413",
    "image": ""
  },
  {
    "id": "Q356",
    "originalId": "LK0401",
    "text": "“你的”或者“你是”可用缩语表示为：",
    "options": [
      {
        "letter": "A",
        "text": "UR"
      },
      {
        "letter": "B",
        "text": "TU"
      },
      {
        "letter": "C",
        "text": "FB"
      },
      {
        "letter": "D",
        "text": "US"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0414",
    "image": ""
  },
  {
    "id": "Q357",
    "originalId": "LX",
    "text": "在 CW 通联中，我们有时会抄到缩语“WL”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "将要"
      },
      {
        "letter": "B",
        "text": "超级棒"
      },
      {
        "letter": "C",
        "text": "物理"
      },
      {
        "letter": "D",
        "text": "滑铁卢"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0415",
    "image": ""
  },
  {
    "id": "Q358",
    "originalId": "LY0398",
    "text": "收听 CW 或 SSB 联络，我们有时会听到缩语 “XYL”。其含义是：",
    "options": [
      {
        "letter": "A",
        "text": "妻子"
      },
      {
        "letter": "B",
        "text": "晶体"
      },
      {
        "letter": "C",
        "text": "女士"
      },
      {
        "letter": "D",
        "text": "发信机"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0416",
    "image": ""
  },
  {
    "id": "Q359",
    "originalId": "LY0399",
    "text": "有一类业余无线电操作员享有称呼“YL”。而有些业余无线电竞赛也为这些人士制定了专享的规则。缩语“YL”的含义是：",
    "options": [
      {
        "letter": "A",
        "text": "女士"
      },
      {
        "letter": "B",
        "text": "好运"
      },
      {
        "letter": "C",
        "text": "你的"
      },
      {
        "letter": "D",
        "text": "领导"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0417",
    "image": ""
  },
  {
    "id": "Q360",
    "originalId": "LK0347",
    "text": "术语“单元”通常指天线振子。其缩语是：",
    "options": [
      {
        "letter": "A",
        "text": "EL、ELE 或 ELS"
      },
      {
        "letter": "B",
        "text": "YAGI"
      },
      {
        "letter": "C",
        "text": "ANT"
      },
      {
        "letter": "D",
        "text": "UNIT"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0418",
    "image": ""
  },
  {
    "id": "Q361",
    "originalId": "LK0405",
    "text": "在业余无线电通联中探讨天线时，缩写 DP 代表：",
    "options": [
      {
        "letter": "A",
        "text": "偶极天线"
      },
      {
        "letter": "B",
        "text": "长线天线"
      },
      {
        "letter": "C",
        "text": "定向天线"
      },
      {
        "letter": "D",
        "text": "垂直天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0419",
    "image": ""
  },
  {
    "id": "Q362",
    "originalId": "LK0407",
    "text": "在业余无线电通联中探讨天线时，缩写 GP 代表：",
    "options": [
      {
        "letter": "A",
        "text": "垂直接地天线"
      },
      {
        "letter": "B",
        "text": "对数周期天线"
      },
      {
        "letter": "C",
        "text": "偶极天线"
      },
      {
        "letter": "D",
        "text": "定向天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0420",
    "image": ""
  },
  {
    "id": "Q363",
    "originalId": "LK0410",
    "text": "在业余无线电通联中探讨天线时，缩写 VER 代表：",
    "options": [
      {
        "letter": "A",
        "text": "垂直天线"
      },
      {
        "letter": "B",
        "text": "垂直接地天线"
      },
      {
        "letter": "C",
        "text": "定向天线"
      },
      {
        "letter": "D",
        "text": "偶极天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0421",
    "image": ""
  },
  {
    "id": "Q364",
    "originalId": "LK0406",
    "text": "在业余无线电通联中探讨天线时，缩写 LW 代表：",
    "options": [
      {
        "letter": "A",
        "text": "长线天线"
      },
      {
        "letter": "B",
        "text": "偶极天线"
      },
      {
        "letter": "C",
        "text": "定向天线"
      },
      {
        "letter": "D",
        "text": "垂直天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0422",
    "image": ""
  },
  {
    "id": "Q365",
    "originalId": "LK0409",
    "text": "在业余无线电通联中探讨天线时，缩写 YAGI 代表：",
    "options": [
      {
        "letter": "A",
        "text": "八木天线"
      },
      {
        "letter": "B",
        "text": "定向天线"
      },
      {
        "letter": "C",
        "text": "偶极天线"
      },
      {
        "letter": "D",
        "text": "垂直天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0423",
    "image": ""
  },
  {
    "id": "Q366",
    "originalId": "LK0408",
    "text": "在业余无线电通联中探讨天线时，缩写 BEAM 代表：",
    "options": [
      {
        "letter": "A",
        "text": "定向天线"
      },
      {
        "letter": "B",
        "text": "八木天线"
      },
      {
        "letter": "C",
        "text": "偶极天线"
      },
      {
        "letter": "D",
        "text": "垂直天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.4.2",
    "type": "MC1-0424",
    "image": ""
  },
  {
    "id": "Q367",
    "originalId": "LK0127",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示 CW 报的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "A1A"
      },
      {
        "letter": "B",
        "text": "J3E"
      },
      {
        "letter": "C",
        "text": "F2B"
      },
      {
        "letter": "D",
        "text": "G2B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0425",
    "image": ""
  },
  {
    "id": "Q368",
    "originalId": "LK0128",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示单边带话的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "J3E"
      },
      {
        "letter": "B",
        "text": "A1A"
      },
      {
        "letter": "C",
        "text": "F2B"
      },
      {
        "letter": "D",
        "text": "G2B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0426",
    "image": ""
  },
  {
    "id": "Q369",
    "originalId": "LK0131",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示用单边带话传输的SSTV 信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F3F"
      },
      {
        "letter": "B",
        "text": "J3E"
      },
      {
        "letter": "C",
        "text": "F2B"
      },
      {
        "letter": "D",
        "text": "F3E"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0427",
    "image": ""
  },
  {
    "id": "Q370",
    "originalId": "LK0132",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示调频话的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F3E"
      },
      {
        "letter": "B",
        "text": "F3F"
      },
      {
        "letter": "C",
        "text": "J3E"
      },
      {
        "letter": "D",
        "text": "F2B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0428",
    "image": ""
  },
  {
    "id": "Q371",
    "originalId": "LK0134",
    "text": "发射类别是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示用调频话传输的 SSTV 信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F3F"
      },
      {
        "letter": "B",
        "text": "F2B"
      },
      {
        "letter": "C",
        "text": "J3E"
      },
      {
        "letter": "D",
        "text": "F3E"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0429",
    "image": ""
  },
  {
    "id": "Q372",
    "originalId": "LK0135",
    "text": "发射类别是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示调频 ATV 信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F3F"
      },
      {
        "letter": "B",
        "text": "F2B"
      },
      {
        "letter": "C",
        "text": "F3E"
      },
      {
        "letter": "D",
        "text": "J3E"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0430",
    "image": ""
  },
  {
    "id": "Q373",
    "originalId": "LY0136",
    "text": "带外发射是指：",
    "options": [
      {
        "letter": "A",
        "text": "由于调制过程而产生的、刚超出必要带宽的一个或多个频率的发射，但杂散发射除外"
      },
      {
        "letter": "B",
        "text": "由于调制过程而产生的、刚超出占用带宽的一个或多个频率的发射，但杂散发射除外"
      },
      {
        "letter": "C",
        "text": "由于调制过程而产生的、刚超出参考带宽的一个或多个频率的发射，但杂散发射除外"
      },
      {
        "letter": "D",
        "text": "由于调制过程而产生的、刚超出固定带宽的一个或多个频率的发射，但杂散发射除外"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0431",
    "image": ""
  },
  {
    "id": "Q374",
    "originalId": "LK0784",
    "text": "业余无线电通信中三种最基本调制的缩写是 AM、FM 和 PM。它们的中文名称是：",
    "options": [
      {
        "letter": "A",
        "text": "幅度调制（调幅）、频率调制（调频）、相位调制（调相）"
      },
      {
        "letter": "B",
        "text": "幅度调制（调幅）、频率调制（调频）、脉宽调制（调脉宽）"
      },
      {
        "letter": "C",
        "text": "频率调制（调频）、脉码调制（调脉码）、幅度调制（调幅）"
      },
      {
        "letter": "D",
        "text": "幅度调制（调幅）、频率调制（调频）、电码调制（莫尔斯）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0432",
    "image": ""
  },
  {
    "id": "Q375",
    "originalId": "LK1203",
    "text": "以下哪种调制方式被广泛应用于 VHF 或 UHF 本地通联？",
    "options": [
      {
        "letter": "A",
        "text": "FM"
      },
      {
        "letter": "B",
        "text": "SSB"
      },
      {
        "letter": "C",
        "text": "PSK"
      },
      {
        "letter": "D",
        "text": "AM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0433",
    "image": ""
  },
  {
    "id": "Q376",
    "originalId": "LK1202",
    "text": "以下哪种调制方式被广泛应用于长距离和弱信号情况下的 VHF 或 UHF 话音通联？",
    "options": [
      {
        "letter": "A",
        "text": "SSB"
      },
      {
        "letter": "B",
        "text": "AM"
      },
      {
        "letter": "C",
        "text": "FM"
      },
      {
        "letter": "D",
        "text": "PM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0434",
    "image": ""
  },
  {
    "id": "Q377",
    "originalId": "LX",
    "text": "以下哪种调制方式被广泛应用于 HF 话音通联？",
    "options": [
      {
        "letter": "A",
        "text": "SSB"
      },
      {
        "letter": "B",
        "text": "AM"
      },
      {
        "letter": "C",
        "text": "FM"
      },
      {
        "letter": "D",
        "text": "PM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0435",
    "image": ""
  },
  {
    "id": "Q378",
    "originalId": "LX",
    "text": "与 FM 相比，SSB 方式的优点是什么？",
    "options": [
      {
        "letter": "A",
        "text": "发射带宽较 FM 方式窄"
      },
      {
        "letter": "B",
        "text": "同频电台彼此互不干扰"
      },
      {
        "letter": "C",
        "text": "对天电干扰免疫"
      },
      {
        "letter": "D",
        "text": "对主载波的频率误差不敏感"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0436",
    "image": ""
  },
  {
    "id": "Q379",
    "originalId": "LX",
    "text": "相比 SSB 方式，FM 的主要缺点是什么？",
    "options": [
      {
        "letter": "A",
        "text": "无法同时守听多个信号"
      },
      {
        "letter": "B",
        "text": "抵抗脉冲干扰的能力差"
      },
      {
        "letter": "C",
        "text": "对主载波的频率误差很敏感"
      },
      {
        "letter": "D",
        "text": "含有恒定不变的载波分量，发射功率利用不充分"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0437",
    "image": ""
  },
  {
    "id": "Q380",
    "originalId": "LK1205",
    "text": "在 VHF 和 UHF 频段进行 SSB 通联通常选用哪个边带？",
    "options": [
      {
        "letter": "A",
        "text": "上边带"
      },
      {
        "letter": "B",
        "text": "下边带"
      },
      {
        "letter": "C",
        "text": "抑制边带"
      },
      {
        "letter": "D",
        "text": "残留边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0438",
    "image": ""
  },
  {
    "id": "Q381",
    "originalId": "LX",
    "text": "在 14MHz 及以上 HF 频段进行语音通信通常选用哪个边带？",
    "options": [
      {
        "letter": "A",
        "text": "上边带"
      },
      {
        "letter": "B",
        "text": "下边带"
      },
      {
        "letter": "C",
        "text": "抑制边带"
      },
      {
        "letter": "D",
        "text": "残留边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0439",
    "image": ""
  },
  {
    "id": "Q382",
    "originalId": "LX",
    "text": "在 7MHz 及以下频段进行语音通信通常选用哪个边带？",
    "options": [
      {
        "letter": "A",
        "text": "下边带"
      },
      {
        "letter": "B",
        "text": "上边带"
      },
      {
        "letter": "C",
        "text": "抑制边带"
      },
      {
        "letter": "D",
        "text": "残留边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0440",
    "image": ""
  },
  {
    "id": "Q383",
    "originalId": "LX",
    "text": "为什么业余电台在 10.1MHz 以下频段使用下边带进行话音通联，而在 10.1MHz 以上频段却使用上边带？",
    "options": [
      {
        "letter": "A",
        "text": "这是各国业余无线电爱好者普遍接受并沿用至今的一种通联习惯"
      },
      {
        "letter": "B",
        "text": "10.1MHz 以下频段更利于下边带的传播"
      },
      {
        "letter": "C",
        "text": "10.1MHz 以上频段更利于上边带的传播"
      },
      {
        "letter": "D",
        "text": "因为在接收机中设置一个 10.1MHz 的 BFO 可以同时收听上边带和下边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0441",
    "image": ""
  },
  {
    "id": "Q384",
    "originalId": "LX",
    "text": "发起 SSB 呼叫时，你与周边电台的频率间隔应至少为：",
    "options": [
      {
        "letter": "A",
        "text": "2-3kHz"
      },
      {
        "letter": "B",
        "text": "150-500Hz"
      },
      {
        "letter": "C",
        "text": "15-50Hz"
      },
      {
        "letter": "D",
        "text": "大约 6kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0442",
    "image": ""
  },
  {
    "id": "Q385",
    "originalId": "LK1200",
    "text": "下列哪种调制方式可以纳入调幅（AM）的范畴？",
    "options": [
      {
        "letter": "A",
        "text": "单边带调制（SSB）"
      },
      {
        "letter": "B",
        "text": "线性调频（Chirp）"
      },
      {
        "letter": "C",
        "text": "直序扩频（DSSS）"
      },
      {
        "letter": "D",
        "text": "相移键控（PSK）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0443",
    "image": ""
  },
  {
    "id": "Q386",
    "originalId": "LK0785",
    "text": "在业余无线电业务中，有种通信方式的缩写是 CW。其含义为：",
    "options": [
      {
        "letter": "A",
        "text": "等幅电报"
      },
      {
        "letter": "B",
        "text": "莫尔斯编码"
      },
      {
        "letter": "C",
        "text": "幅度键控"
      },
      {
        "letter": "D",
        "text": "频移键控"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0444",
    "image": ""
  },
  {
    "id": "Q387",
    "originalId": "LK1204",
    "text": "以下哪种调制方式拥有最窄的发射带宽？",
    "options": [
      {
        "letter": "A",
        "text": "CW"
      },
      {
        "letter": "B",
        "text": "单边带话"
      },
      {
        "letter": "C",
        "text": "调频话"
      },
      {
        "letter": "D",
        "text": "ATV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0445",
    "image": ""
  },
  {
    "id": "Q388",
    "originalId": "LK0230",
    "text": "业余电台一般不用调频话方式进行莫尔斯电码通联。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "调频话信道带宽超过传输莫尔斯电码的必要带宽，不符合我国《无线电频率划分规定》“电台的技术特性”一章关于 “把带宽保持在技术状态和该项业务的性质所允许的最低值上”的要求"
      },
      {
        "letter": "B",
        "text": "调频话方式不能传输莫尔斯电码"
      },
      {
        "letter": "C",
        "text": "调频话方式传输莫尔斯电码可靠性差"
      },
      {
        "letter": "D",
        "text": "调频话方式传输莫尔斯电码时速度受限制"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0446",
    "image": ""
  },
  {
    "id": "Q389",
    "originalId": "LK0782",
    "text": "无论是 FM 还是 SSB 调制，向发射机的话筒输入端施加 10 倍于规定输入电压的音频信号，最可能的结果是：",
    "options": [
      {
        "letter": "A",
        "text": "信号失真。大量的谐波和互调产物还可能促使发射带宽增加，通信质量下降"
      },
      {
        "letter": "B",
        "text": "通信距离有效延长了，信号听起来也更加饱满"
      },
      {
        "letter": "C",
        "text": "通信距离有效延长了，只是信号听上去失真了"
      },
      {
        "letter": "D",
        "text": "发射功率超过额定值，发射机的末级射频功率器件会因此烧毁"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.1",
    "type": "MC1-0447",
    "image": ""
  },
  {
    "id": "Q390",
    "originalId": "LX",
    "text": "调幅（AM）是一种简单调制，因为仅有射频载波的幅度跟随施加的调制信号而变。AM的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "AM 不改变载波的频率"
      },
      {
        "letter": "B",
        "text": "AM 信号的瞬时振幅与调制信号的瞬时值成正比"
      },
      {
        "letter": "C",
        "text": "AM 信号的瞬时相移与调制信号的瞬时值成正比"
      },
      {
        "letter": "D",
        "text": "AM 信号的必要带宽与调制信号的最高频率无关"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0448",
    "image": ""
  },
  {
    "id": "Q391",
    "originalId": "LX",
    "text": "调幅信号不仅具有与调制信号相对应的下边带或上边带，而且还可能含有载波。这些都可以根据通信要求细分定制。如将调幅信号按种类细分，则以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "AM：普通调幅，包含下边带和上边带，载波不受抑制。CW 是一种键控形式的 AM"
      },
      {
        "letter": "B",
        "text": "DSB-SC：抑制载波双边带调幅，仅包含下边带和上边带，常简称为 DSB"
      },
      {
        "letter": "C",
        "text": "SSB-SC：抑制载波单边带调幅，仅为下边带或上边带，常简称为 SSB、LSB 或 USB"
      },
      {
        "letter": "D",
        "text": "VSB：残留边带调幅，下边带或上边带仅受部分抑制。模拟 ATV 有时使用这种方式"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.5.2",
    "type": "MC4-0449",
    "image": ""
  },
  {
    "id": "Q392",
    "originalId": "LK0708",
    "text": "一个语音信号经 USB 发射机调制成为射频信号。从频域观点看，这种调制是：",
    "options": [
      {
        "letter": "A",
        "text": "将语音信号的频谱平移到了载波位置上"
      },
      {
        "letter": "B",
        "text": "使频谱各分量的相对幅度发生了有规律的变化"
      },
      {
        "letter": "C",
        "text": "将语音信号的频谱倒置并移动到了载波位置上"
      },
      {
        "letter": "D",
        "text": "一种非线性变换，因而产生了无限多的边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0450",
    "image": ""
  },
  {
    "id": "Q393",
    "originalId": "LX",
    "text": "一个语音信号经 LSB 发射机调制成为射频信号。从频域观点看，这种调制是：",
    "options": [
      {
        "letter": "A",
        "text": "将语音信号的频谱倒置并移动到了载波位置上"
      },
      {
        "letter": "B",
        "text": "使频谱各分量的相对幅度发生了有规律的变化"
      },
      {
        "letter": "C",
        "text": "将语音信号的频谱平移到了载波位置上"
      },
      {
        "letter": "D",
        "text": "一种非线性变换，因而产生了无限多的边带"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0451",
    "image": ""
  },
  {
    "id": "Q394",
    "originalId": "LX",
    "text": "调频（FM）是一种简单调制，因为仅有射频载波的频率跟随施加的调制信号而变。FM 的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "FM 不改变载波的振幅"
      },
      {
        "letter": "B",
        "text": "FM 信号的瞬时频偏与调制信号的瞬时值成正比"
      },
      {
        "letter": "C",
        "text": "FM 信号的瞬时相移与调制信号的瞬时值成正比"
      },
      {
        "letter": "D",
        "text": "FM 信号的必要带宽与调制信号的最高频率无关"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0452",
    "image": ""
  },
  {
    "id": "Q395",
    "originalId": "LK1100",
    "text": "下列哪一项决定了 FM 信号的频偏？",
    "options": [
      {
        "letter": "A",
        "text": "调制信号的幅度"
      },
      {
        "letter": "B",
        "text": "调制信号的频率和幅度"
      },
      {
        "letter": "C",
        "text": "调制信号的频率"
      },
      {
        "letter": "D",
        "text": "调制信号与主载波之间的相位关系"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0453",
    "image": ""
  },
  {
    "id": "Q396",
    "originalId": "LX",
    "text": "调相（PM）是一种简单调制，因为仅有射频载波的相移跟随施加的调制信号而变。PM 的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "PM 不改变载波的振幅"
      },
      {
        "letter": "B",
        "text": "PM 信号的瞬时相移与调制信号的瞬时值成正比"
      },
      {
        "letter": "C",
        "text": "PM 信号的瞬时频偏与调制信号的瞬时值成正比"
      },
      {
        "letter": "D",
        "text": "PM 信号的必要带宽与调制信号的最高频率无关"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0454",
    "image": ""
  },
  {
    "id": "Q397",
    "originalId": "LK0786",
    "text": "对于给定的 FM 业余电台，决定其实际发射带宽的因素是：",
    "options": [
      {
        "letter": "A",
        "text": "所需传输的调制信号的最高频率越高，幅度越大，已调信号的带宽越宽"
      },
      {
        "letter": "B",
        "text": "所需传输的调制信号的最高频率越高，已调信号的带宽越宽，与调制信号的幅度无关"
      },
      {
        "letter": "C",
        "text": "所需传输的调制信号的幅度越大，已调信号的带宽越宽，与调制信号的最高频率无关"
      },
      {
        "letter": "D",
        "text": "已调信号的带宽是与调制方式相关的某个标称值，对业余业务就是 25kHz 或 12.5kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0455",
    "image": ""
  },
  {
    "id": "Q398",
    "originalId": "LK0787",
    "text": "对于给定的 SSB 业余电台，决定其实际发射带宽的因素是：",
    "options": [
      {
        "letter": "A",
        "text": "所需传输的调制信号的带宽越宽，已调信号的带宽越宽"
      },
      {
        "letter": "B",
        "text": "所需传输的调制信号的最高频率越高，已调信号的带宽越宽，与调制信号的幅度和带宽无关"
      },
      {
        "letter": "C",
        "text": "所需传输的调制信号的幅度越大，已调信号的带宽越宽，与调制信号的频率和带宽无关"
      },
      {
        "letter": "D",
        "text": "已调信号的带宽是与调制方式相关的某个标称值，对业余业务就是 2.7kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0456",
    "image": ""
  },
  {
    "id": "Q399",
    "originalId": "LK0282",
    "text": "在业余无线电业务中，莫尔斯电码的信号速度经常用 WPM 作为单位，其计量方法为：",
    "options": [
      {
        "letter": "A",
        "text": "每分钟包含的无间隙“点”的个数除以 50 即为 WPM 数"
      },
      {
        "letter": "B",
        "text": "每分钟实际拍发的英文字符数即为 WPM 数"
      },
      {
        "letter": "C",
        "text": "每分钟实际拍发的中文字符数即为 WPM 数"
      },
      {
        "letter": "D",
        "text": "每分钟包含的无间隙“点”的个数除以 60 即为 WPM 数"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0457",
    "image": ""
  },
  {
    "id": "Q400",
    "originalId": "LK0283",
    "text": "在业余无线电业务中，莫尔斯电码的信号速度经常用 WPM 作为单位，其计量方法为：",
    "options": [
      {
        "letter": "A",
        "text": "每分钟拍发连续英文单词“PARIS”的个数即为 WPM 数"
      },
      {
        "letter": "B",
        "text": "每分钟实际拍发的英文字符数即为 WPM 数"
      },
      {
        "letter": "C",
        "text": "每分钟实际拍发的中文字符数即为 WPM 数"
      },
      {
        "letter": "D",
        "text": "每分钟拍发连续“点”的个数除以 60 即为 WPM 数"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0458",
    "image": ""
  },
  {
    "id": "Q401",
    "originalId": "LK0284",
    "text": "在业余无线电业务中，计算莫尔斯电码的 WPM 速度时采用的信号时值标准（以一个“点”信号的时间为比较基准）为，点信号、划信号、字符内点划信号的间隔、字符之间的间隔、单词（组）之间的间隔分别为：",
    "options": [
      {
        "letter": "A",
        "text": "1、3、1、3、7"
      },
      {
        "letter": "B",
        "text": "1、3、1、3、5"
      },
      {
        "letter": "C",
        "text": "1、5、1、5、7"
      },
      {
        "letter": "D",
        "text": "1、5、2、3、3"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0459",
    "image": ""
  },
  {
    "id": "Q402",
    "originalId": "LX",
    "text": "计算 CW 信号的必要发射带宽可以使用公式 Bn=B×K。其中，B 为波特率。如果已知拍发电码的 WPM 值，则 B 可以计算为：",
    "options": [
      {
        "letter": "A",
        "text": "WPM/1.2"
      },
      {
        "letter": "B",
        "text": "WPM+1.2"
      },
      {
        "letter": "C",
        "text": "WPM-1.2"
      },
      {
        "letter": "D",
        "text": "WPM×1.2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0460",
    "image": ""
  },
  {
    "id": "Q403",
    "originalId": "LX",
    "text": "计算 CW 信号的必要发射带宽可以使用公式 Bn=B×K。其中，常数 K 描述电码符号翻转时 CW 射频信号的边带滚降特性。K 的取值原则是：",
    "options": [
      {
        "letter": "A",
        "text": "对于 HF 等衰落信道，K 取 5；对于非衰落信道，K 取 3 即可"
      },
      {
        "letter": "B",
        "text": "对于非衰落信道，K 取 5；对于 HF 等衰落信道，K 取 3 即可"
      },
      {
        "letter": "C",
        "text": "对于 HF 等衰落信道，K 取 50 波特；对于非衰落信道，K 取 300 波特"
      },
      {
        "letter": "D",
        "text": "对于非衰落信道，K 取 50 波特；对于 HF 等衰落信道，K 取 300 波特"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0461",
    "image": ""
  },
  {
    "id": "Q404",
    "originalId": "LX",
    "text": "调频话的必要带宽 Bn 取决于 FM 信号的峰值频偏 D 与最高调制频率 M。估算方法为：",
    "options": [
      {
        "letter": "A",
        "text": "Bn=2(M+D)"
      },
      {
        "letter": "B",
        "text": "Bn=2M+D"
      },
      {
        "letter": "C",
        "text": "Bn=M+2D"
      },
      {
        "letter": "D",
        "text": "Bn=2(D+M×K)"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0462",
    "image": ""
  },
  {
    "id": "Q405",
    "originalId": "LX",
    "text": "业余频段中的慢扫描电视（SSTV）和无线电传真（FAX）的调制方式都是：",
    "options": [
      {
        "letter": "A",
        "text": "FM"
      },
      {
        "letter": "B",
        "text": "AM"
      },
      {
        "letter": "C",
        "text": "PM"
      },
      {
        "letter": "D",
        "text": "CW"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0463",
    "image": ""
  },
  {
    "id": "Q406",
    "originalId": "LK0799",
    "text": "业余无线电慢扫描电视所传送的是：",
    "options": [
      {
        "letter": "A",
        "text": "逐行扫描的静止图像"
      },
      {
        "letter": "B",
        "text": "交叉扫描的静止图像"
      },
      {
        "letter": "C",
        "text": "逐行扫描的活动图像"
      },
      {
        "letter": "D",
        "text": "交叉扫描的活动图像"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0464",
    "image": ""
  },
  {
    "id": "Q407",
    "originalId": "LK0802",
    "text": "某业余电台拟通过短波话音信道传输几张分辨率为 1024x768 像素或更高一些的电路图。适当的通信联络方式可以是：",
    "options": [
      {
        "letter": "A",
        "text": "数字慢扫描电视（DSSTV）"
      },
      {
        "letter": "B",
        "text": "无线电传真（FAX）"
      },
      {
        "letter": "C",
        "text": "业余电视（ATV）"
      },
      {
        "letter": "D",
        "text": "模拟慢扫描电视（SSTV）"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0465",
    "image": ""
  },
  {
    "id": "Q408",
    "originalId": "LK0803",
    "text": "接收 Robot、Scottie、Martin、SC2 或 PD 等方式的 SSTV 信号时，我们会听到一种周期性的，非常短促的“咯、咯”声，它们是：",
    "options": [
      {
        "letter": "A",
        "text": "行同步信号"
      },
      {
        "letter": "B",
        "text": "一种超低频寄生振荡"
      },
      {
        "letter": "C",
        "text": "标准频率和标准亮度信号"
      },
      {
        "letter": "D",
        "text": "FM 和 SSB 两种方式在相互差拍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0466",
    "image": ""
  },
  {
    "id": "Q409",
    "originalId": "LK0805",
    "text": "SSTV 通信提供了 Robot、Scottie、AVT、Martin 等不同传输方式。具体区别是：",
    "options": [
      {
        "letter": "A",
        "text": "像素分辨率、像素调制方法、行频、帧频等参数不同，适用于不同画质和环境条件"
      },
      {
        "letter": "B",
        "text": "占用频带宽度不同"
      },
      {
        "letter": "C",
        "text": "要求的接收机灵敏度不同"
      },
      {
        "letter": "D",
        "text": "操作难度不同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0467",
    "image": ""
  },
  {
    "id": "Q410",
    "originalId": "LK0793",
    "text": "利用个人电脑（PC）和用于话音的普通收发信机进行 SSTV 通联的操作方法为：",
    "options": [
      {
        "letter": "A",
        "text": "在短波波段：FM（图像信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "B",
        "text": "在超短波波段：FM（图像信息的音频基带调制）和 FM（复合调制）"
      },
      {
        "letter": "C",
        "text": "在短波波段：FSK（图像信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "D",
        "text": "在超短波波段：FSK（图像信息的音频基带调制）和 FM（复合调制）"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0468",
    "image": ""
  },
  {
    "id": "Q411",
    "originalId": "LK0801",
    "text": "慢扫描电视（SSTV）的基带信号通常是在音频范围内生成并通过单边带或调频话方式进行传输的。关于 SSTV 基带，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "调频方式：白电平为高频率 2300Hz，黑电平为低频率 1500Hz，同步电平为最低频率 1200Hz"
      },
      {
        "letter": "B",
        "text": "调幅方式：白电平为高电平 87.5%，黑电平为低电平 30%，同步电平为最低电平 25%"
      },
      {
        "letter": "C",
        "text": "调幅方式：白电平为低电平 75%，黑电平为高电平 75%，同步电平为最高电平 100%"
      },
      {
        "letter": "D",
        "text": "调幅方式：白电平为低频率 1200Hz，黑电平为高频率 2000Hz，同步电平为最高频率 2300Hz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0469",
    "image": ""
  },
  {
    "id": "Q412",
    "originalId": "LK0798",
    "text": "如果收到的 SSTV 或 ATV 图像出现水平粗黑条纹、上下半帧错位的现象，则是因为：",
    "options": [
      {
        "letter": "A",
        "text": "双方的行频、帧频一致，但是帧扫描的初始时刻不同步"
      },
      {
        "letter": "B",
        "text": "双方的扫描行频不一致"
      },
      {
        "letter": "C",
        "text": "双方设备没有准确调谐在同一频率上"
      },
      {
        "letter": "D",
        "text": "双方设备没有正确设置调制极性"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0470",
    "image": ""
  },
  {
    "id": "Q413",
    "originalId": "LK0797",
    "text": "如果收到的 SSTV 或 ATV 图像左右倾斜，呈平行四边形或斜粗条纹图样，则是因为：",
    "options": [
      {
        "letter": "A",
        "text": "双方的扫描行频不一致"
      },
      {
        "letter": "B",
        "text": "双方的行频、帧频一致，但是帧扫描的初始时刻不同步"
      },
      {
        "letter": "C",
        "text": "双方设备没有准确调谐在同一频率上"
      },
      {
        "letter": "D",
        "text": "双方设备没有正确设置调制极性"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0471",
    "image": ""
  },
  {
    "id": "Q414",
    "originalId": "LK0263",
    "text": "为什么不能在低于 1.2GHz 的业余频段进行常规的 ATV 通信？",
    "options": [
      {
        "letter": "A",
        "text": "ATV 通信需占 5MHz 以上带宽，较低业余频段不足以容纳"
      },
      {
        "letter": "B",
        "text": "多数话音通信集中在较低频段，易对 ATV 通信产生严重干扰"
      },
      {
        "letter": "C",
        "text": "多数话音通信集中在较低频段，而 ATV 画面发射时间通常较长，所以要主动避让"
      },
      {
        "letter": "D",
        "text": "频率越高，ATV 传输画面的质量越稳定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0472",
    "image": ""
  },
  {
    "id": "Q415",
    "originalId": "LK0804",
    "text": "有时，业余无线电爱好者使用 FM 而非电视广播常用的经典 VSB 方式来传输模拟 ATV 信号。这样做的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "ATV 信号的发射功率较小，FM 解调可以更好地去除与信号相叠加的外部调幅噪声"
      },
      {
        "letter": "B",
        "text": "如果降低瞬时频偏，FM 方式必要发射带宽会比 VSB 方式的更窄"
      },
      {
        "letter": "C",
        "text": "调频收信设备的灵敏度要比调幅的要高一个数量级（至少 10dB）"
      },
      {
        "letter": "D",
        "text": "便于与工作于调频话方式的设备兼容（例如，手持电台）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.5.2",
    "type": "MC1-0473",
    "image": ""
  },
  {
    "id": "Q416",
    "originalId": "LK0800",
    "text": "有时，业余电台使用 VSB 来传输模拟 ATV 信号。这种方式虽然属于 AM，却只发送一个完整边带以及另一边带靠近载波的一小部分。在传输模拟视频时，VSB 的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "较 AM 方式的发射带宽更窄"
      },
      {
        "letter": "B",
        "text": "确保视频信号中的低频分量的保真度"
      },
      {
        "letter": "C",
        "text": "确保黑电平与白电平的负极性发送"
      },
      {
        "letter": "D",
        "text": "较单边带方式更省发射功率"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.5.2",
    "type": "MC2-0474",
    "image": ""
  },
  {
    "id": "Q417",
    "originalId": "LK0129",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示用单边带话传输的RTTY 信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F2B"
      },
      {
        "letter": "B",
        "text": "A1A"
      },
      {
        "letter": "C",
        "text": "J3E"
      },
      {
        "letter": "D",
        "text": "G2B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.1",
    "type": "MC1-0475",
    "image": ""
  },
  {
    "id": "Q418",
    "originalId": "LK0130",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示用单边带话传输的PSK31 信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "G2B"
      },
      {
        "letter": "B",
        "text": "A1A"
      },
      {
        "letter": "C",
        "text": "J3E"
      },
      {
        "letter": "D",
        "text": "F2B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.1",
    "type": "MC1-0476",
    "image": ""
  },
  {
    "id": "Q419",
    "originalId": "LK0133",
    "text": "发射类别（class of emission）是指用标准符号标示的某发射的一组特性，例如主载波调制方式，调制信号，被发送信息的类型以及其他适用的信号特性。表示用调频话传输的 RTTY信号的发射类别是：",
    "options": [
      {
        "letter": "A",
        "text": "F2B"
      },
      {
        "letter": "B",
        "text": "F3E"
      },
      {
        "letter": "C",
        "text": "J3E"
      },
      {
        "letter": "D",
        "text": "F3F"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.1",
    "type": "MC1-0477",
    "image": ""
  },
  {
    "id": "Q420",
    "originalId": "LK0419",
    "text": "业余无线电通信选用不同调制方式的主要考虑因素是：",
    "options": [
      {
        "letter": "A",
        "text": "信息在传递过程中的保真度"
      },
      {
        "letter": "B",
        "text": "信号的抗干扰能力"
      },
      {
        "letter": "C",
        "text": "尽量节省无线电频谱资源"
      },
      {
        "letter": "D",
        "text": "信号的频率稳定度"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.1",
    "type": "MC3-0478",
    "image": ""
  },
  {
    "id": "Q421",
    "originalId": "LK0277",
    "text": "为了满足我国《无线电频率划分规定》“电台的技术特性”关于无线电通信“把带宽保持在技术状态和该项业务的性质所允许的最低值上”的要求，业余电台操作者应了解各种通信方式的必要带宽。决定必要带宽的因素是：",
    "options": [
      {
        "letter": "A",
        "text": "传输的信息速率越高、系统的噪声干扰越大，必要带宽越宽"
      },
      {
        "letter": "B",
        "text": "发射设备功率越大，必要带宽越宽"
      },
      {
        "letter": "C",
        "text": "接收设备灵敏度越高，必要带宽越宽"
      },
      {
        "letter": "D",
        "text": "通信距离越近，必要带宽越宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.1",
    "type": "MC1-0479",
    "image": ""
  },
  {
    "id": "Q422",
    "originalId": "LX",
    "text": "以下哪些业务使用数据方式进行通信？",
    "options": [
      {
        "letter": "A",
        "text": "RTTY"
      },
      {
        "letter": "B",
        "text": "无线局域网"
      },
      {
        "letter": "C",
        "text": "FT8"
      },
      {
        "letter": "D",
        "text": "5G 移动通信"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.6.1",
    "type": "MC4-0480",
    "image": ""
  },
  {
    "id": "Q423",
    "originalId": "LK0278",
    "text": "频移电报技术（frequency-shift telegraphy）是指：电报信号控制载波频率在预定的范围之内变化的调频电报技术。下述业余通信使用的是移频电报技术：",
    "options": [
      {
        "letter": "A",
        "text": "RTTY"
      },
      {
        "letter": "B",
        "text": "CW"
      },
      {
        "letter": "C",
        "text": "PSK31"
      },
      {
        "letter": "D",
        "text": "SSTV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0481",
    "image": ""
  },
  {
    "id": "Q424",
    "originalId": "LX",
    "text": "RTTY 的调制方式为：",
    "options": [
      {
        "letter": "A",
        "text": "2FSK"
      },
      {
        "letter": "B",
        "text": "2ASK"
      },
      {
        "letter": "C",
        "text": "BPSK"
      },
      {
        "letter": "D",
        "text": "2QAM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0482",
    "image": ""
  },
  {
    "id": "Q425",
    "originalId": "LK0776",
    "text": "数字通信经常涉及描述信号状态变化的“符号速率”和描述信息流量的“数据速率”这两个参数。通信方式 RTTY 使用 f0 和 f1 共两个频率作为符号来传输数字 0 和 1，并且符号的发送时长通常是 0.02 秒。RTTY 的符号速率和数据速率分别为：",
    "options": [
      {
        "letter": "A",
        "text": "50 波特，50 比特/秒"
      },
      {
        "letter": "B",
        "text": "100 波特，100 比特/秒"
      },
      {
        "letter": "C",
        "text": "50 波特，100 比特/秒"
      },
      {
        "letter": "D",
        "text": "100 波特，50 比特/秒"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0483",
    "image": ""
  },
  {
    "id": "Q426",
    "originalId": "LK0777",
    "text": "数字通信经常涉及描述信号状态变化的“符号速率”和描述信息流量的“数据速率”这两个参数。通信方式 BPSK31 使用副载波 f 的两个相反的相位偏移作为符号来传输数字 0 和 1，并且符号的发送时长约为 32 毫秒。BPSK31 的符号速率和数据速率分别为：",
    "options": [
      {
        "letter": "A",
        "text": "31.25 波特，31.25 比特/秒"
      },
      {
        "letter": "B",
        "text": "100 波特，100 比特/秒"
      },
      {
        "letter": "C",
        "text": "50 波特，100 比特/秒"
      },
      {
        "letter": "D",
        "text": "100 波特，50 比特/秒"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0484",
    "image": ""
  },
  {
    "id": "Q427",
    "originalId": "LK0778",
    "text": "数字通信经常涉及描述信号状态变化的“符号速率”和描述信息流量的“数据速率”这两个参数。通信方式 MFSK16 使用 316Hz 带宽内的 16 个副载波作为符号来传输 16 种状态，并且符号的发送时长为 64 毫秒。MFSK16 的符号速率和数据速率分别为：",
    "options": [
      {
        "letter": "A",
        "text": "15.625 波特，62.5 比特/秒"
      },
      {
        "letter": "B",
        "text": "15.625 波特，250 比特/秒"
      },
      {
        "letter": "C",
        "text": "15.625 波特，15.625 比特/秒"
      },
      {
        "letter": "D",
        "text": "62.5 波特，250 比特/秒"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0485",
    "image": ""
  },
  {
    "id": "Q428",
    "originalId": "LK0779",
    "text": "数字通信经常涉及描述信号状态变化的“符号速率”和描述信息流量的“数据速率”这两个参数。通信方式 QPSK31 使用载波 f 的互为正交的一对反相相位作为符号来传输数字 00 至 11，并且符号的发送时长约为 32 毫秒。QPSK31 的符号速率和数据速率分别为：",
    "options": [
      {
        "letter": "A",
        "text": "31.25 波特，62.5 比特/秒"
      },
      {
        "letter": "B",
        "text": "31.25 波特，31.25 比特/秒"
      },
      {
        "letter": "C",
        "text": "50 波特，100 比特/秒"
      },
      {
        "letter": "D",
        "text": "31.25 波特，125 比特/秒"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0486",
    "image": ""
  },
  {
    "id": "Q429",
    "originalId": "LK0868",
    "text": "有些常用的业余无线电数字通信协议只支持 5 位或者 7 位数据字节的传送，因而不适合传输 8 位字节的二进制数据文件。下列方式中可以支持二进制数据文件传输的是：",
    "options": [
      {
        "letter": "A",
        "text": "PACTOR"
      },
      {
        "letter": "B",
        "text": "RTTY"
      },
      {
        "letter": "C",
        "text": "AMTOR"
      },
      {
        "letter": "D",
        "text": "PSK31"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0487",
    "image": ""
  },
  {
    "id": "Q430",
    "originalId": "LK0869",
    "text": "业余数据通信中的差错控制技术有“前向纠错”和“自动重传请求”两种。前向纠错（ForwardError Correction，FEC）是指：",
    "options": [
      {
        "letter": "A",
        "text": "发送方使用一定的算法获取待发送报文的冗余校验数据，将之与报文一同编码并发送；接收方按相应算法校验所收到的报文，如发现错误则利用冗余数据尝试加以纠正"
      },
      {
        "letter": "B",
        "text": "发送方在发送一定数量的报文后，如收到接收端的重传请求或者长时间收不到接收方的收妥确认即认定传输过程出错并开始重传报文，以便接收方对所收报文进行纠正"
      },
      {
        "letter": "C",
        "text": "接收方收到报文后，发回发送方，由发送方比较核对。如发现错误，将重传出错的报文，从而去除传输过程中的错误"
      },
      {
        "letter": "D",
        "text": "发送方将每组报文重复发送足够多的次数，接收方收到后加以互相比较，从而选取比较一致的一组。这可以消除传输中的随机错误"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0488",
    "image": ""
  },
  {
    "id": "Q431",
    "originalId": "LK0870",
    "text": "业余数据通信中的差错控制技术有“前向纠错”和“自动重传请求”两种。自动重传请求（Automatic Repeat Request，ARQ）是指：",
    "options": [
      {
        "letter": "A",
        "text": "发送方在发送一定数量的报文后，如收到接收端的重传请求或者长时间收不到接收方的收妥确认即认定传输过程出错并开始重传报文，以便接收方对所收报文进行纠正"
      },
      {
        "letter": "B",
        "text": "发送方使用一定的算法获取待发送报文的冗余校验数据，将之与报文一同编码并发送；接收方按相应算法校验所收到的报文，如发现错误则利用冗余数据尝试加以纠正"
      },
      {
        "letter": "C",
        "text": "接收方收到报文后，发回发送方，由发送方比较核对。如发现错误，将重传出错的报文，从而去除传输过程中的错误"
      },
      {
        "letter": "D",
        "text": "发送方将每组报文重复发送足够多的次数，接收方收到后加以互相比较，从而选取比较一致的一组。这可以消除传输中的随机错误"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0489",
    "image": ""
  },
  {
    "id": "Q432",
    "originalId": "LK0794",
    "text": "利用个人电脑（PC）和用于话音的普通收发信机进行 RTTY 通联的操作方法为：",
    "options": [
      {
        "letter": "A",
        "text": "FSK（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "B",
        "text": "MT63（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "C",
        "text": "DRM（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "D",
        "text": "仅使用到 SSB 调制"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0490",
    "image": ""
  },
  {
    "id": "Q433",
    "originalId": "LK0795",
    "text": "利用个人电脑（PC）和用于话音的普通收发信机进行 PSK31 通联的操作方法为：",
    "options": [
      {
        "letter": "A",
        "text": "PSK（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "B",
        "text": "MFSK16（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "C",
        "text": "GMSK（数字信息的音频基带调制）和 SSB（频率搬移）"
      },
      {
        "letter": "D",
        "text": "仅使用到 SSB 调制"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0491",
    "image": ""
  },
  {
    "id": "Q434",
    "originalId": "LK0796",
    "text": "利用个人电脑（PC）和用于话音的普通收发信机进行短波 PACKET 通联的操作方法为：",
    "options": [
      {
        "letter": "A",
        "text": "FSK（数字信息的音频基带信号调制）和 SSB（频率搬移）"
      },
      {
        "letter": "B",
        "text": "THROBX2（数字信息的音频基带信号调制）和 SSB（频率搬移）"
      },
      {
        "letter": "C",
        "text": "ALE1200（数字信息的音频基带信号调制）和 SSB（频率搬移）"
      },
      {
        "letter": "D",
        "text": "仅使用到 SSB 调制"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0492",
    "image": ""
  },
  {
    "id": "Q435",
    "originalId": "LK0867",
    "text": "PACKET 是爱好者们利用 AX.25 数据分组通信协议开发的业余无线电通信方式。用于 HF、VHF 和卫星通信时，所用符号速率通常选定为：",
    "options": [
      {
        "letter": "A",
        "text": "300 波特、1200 波特、9600 波特"
      },
      {
        "letter": "B",
        "text": "1200 波特、9600 波特、19200 波特"
      },
      {
        "letter": "C",
        "text": "300 波特、2400 波特、19200 波特"
      },
      {
        "letter": "D",
        "text": "600 波特、1200 波特、2400 波特"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0493",
    "image": ""
  },
  {
    "id": "Q436",
    "originalId": "LK1201",
    "text": "在 VHF 封包通信（PACKET）中，以下哪种调制模式用得最为广泛？",
    "options": [
      {
        "letter": "A",
        "text": "FM"
      },
      {
        "letter": "B",
        "text": "SSB"
      },
      {
        "letter": "C",
        "text": "AM"
      },
      {
        "letter": "D",
        "text": "OFDM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0494",
    "image": ""
  },
  {
    "id": "Q437",
    "originalId": "LX",
    "text": "APRS 信号经常出现在 2 米业余波段。其主要用途是：",
    "options": [
      {
        "letter": "A",
        "text": "业余电台移动时运用该模式共享地理位置信息"
      },
      {
        "letter": "B",
        "text": "业余电台移动时相互之间传输高清视频"
      },
      {
        "letter": "C",
        "text": "业余电台用来守听突发事件应急活动相关安排"
      },
      {
        "letter": "D",
        "text": "业余电台以线性调频方式相互发送文字短消息"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0495",
    "image": ""
  },
  {
    "id": "Q438",
    "originalId": "LK0806",
    "text": "相比 RTTY 和 APRS 等二值串行方式，同时传输多位二进制信息的方式属于并行通信方式。在下列业余无线电数字方式中，属于并行通信的有：",
    "options": [
      {
        "letter": "A",
        "text": "MFSK16"
      },
      {
        "letter": "B",
        "text": "FT8"
      },
      {
        "letter": "C",
        "text": "Olivia"
      },
      {
        "letter": "D",
        "text": "CW"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.2",
    "type": "MC3-0496",
    "image": ""
  },
  {
    "id": "Q439",
    "originalId": "LK0807",
    "text": "若以相同的信息传输速率传送消息，则使用 MFSK16 时的符号速率低于数据传输速率，而使用 RTTY 时的符号速率等于数据传输速率。这说明：",
    "options": [
      {
        "letter": "A",
        "text": "MFSK16 每个符号的发送时长增加，抗突发干扰能力提高，更利于短波 DX 通信"
      },
      {
        "letter": "B",
        "text": "RTTY 的实际通信能力肯定更强，因为任何情况下都是波特率越高越好"
      },
      {
        "letter": "C",
        "text": "既然两者数据速率相同，那么通信效果肯定是一样的"
      },
      {
        "letter": "D",
        "text": "这个命题不成立，符号速率是始终等于数据速率的"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0497",
    "image": ""
  },
  {
    "id": "Q440",
    "originalId": "LK0808",
    "text": "根据串行数据通信的收发两端的时钟是在一个有限的符号组或者一个帧内通过特殊的标志维持大致同步还是在发送每个符号时都保持严格同步，数据通信分为 “异步”和“同步”两种方式。下列属于异步方式的例子是：",
    "options": [
      {
        "letter": "A",
        "text": "RTTY"
      },
      {
        "letter": "B",
        "text": "QPSK31"
      },
      {
        "letter": "C",
        "text": "PACKET"
      },
      {
        "letter": "D",
        "text": "PACTOR-II"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0498",
    "image": ""
  },
  {
    "id": "Q441",
    "originalId": "LK0809",
    "text": "根据串行数据通信的收发两端的时钟是在一个有限的符号组或者一个帧内通过特殊的标志维持大致同步还是在发送每个符号时都保持严格同步，数据通信分为 “异步”和“同步”两种方式。下列属于同步方式的例子是：",
    "options": [
      {
        "letter": "A",
        "text": "BPSK31"
      },
      {
        "letter": "B",
        "text": "APRS"
      },
      {
        "letter": "C",
        "text": "FT8"
      },
      {
        "letter": "D",
        "text": "RTTY"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.2",
    "type": "MC3-0499",
    "image": ""
  },
  {
    "id": "Q442",
    "originalId": "LK0810",
    "text": "在进行串行异步数字通信时，双方需要设置相同的波特率，数据位数，校验位数和停止位数。RTTY 最常用的设置是：",
    "options": [
      {
        "letter": "A",
        "text": "50（或 45.45），5，N，1"
      },
      {
        "letter": "B",
        "text": "50（或 45.45），8，2，3"
      },
      {
        "letter": "C",
        "text": "31.25，7，170，0.3"
      },
      {
        "letter": "D",
        "text": "2295，2125，170，5"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0500",
    "image": ""
  },
  {
    "id": "Q443",
    "originalId": "LK0811",
    "text": "业余无线电爱好者常说的 RTTY 也叫移频电报，是利用电报信号控制载波频率在预定的范围之内变化的一种调频电报技术。使用移频电报技术的业余通信方式还有：",
    "options": [
      {
        "letter": "A",
        "text": "JT65"
      },
      {
        "letter": "B",
        "text": "MFSK16"
      },
      {
        "letter": "C",
        "text": "FT4"
      },
      {
        "letter": "D",
        "text": "SSTV"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.2",
    "type": "MC3-0501",
    "image": ""
  },
  {
    "id": "Q444",
    "originalId": "LK0871",
    "text": "国际 2 号电报码（ITA2）一直在业余无线电业务中发挥着重要作用。关于 ITA2 编码，其在业余无线电爱好者中的常见称呼、主要用途和编码属性分别是：",
    "options": [
      {
        "letter": "A",
        "text": "博多码（Baudot code），用于 RTTY，每个码包含 5 个二进制数据，可以换态扩位"
      },
      {
        "letter": "B",
        "text": "专用编码，用于 PSK31 通信，由可变长度的编码组成，可表达 130 个字符"
      },
      {
        "letter": "C",
        "text": "字节码，用于 PACKET 通信，比如 APRS，每个编码都有 8 个二进制位"
      },
      {
        "letter": "D",
        "text": "莫尔斯电码，用于 CW，由可变长度编码组成，致力于短而优雅的消息交换"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0502",
    "image": ""
  },
  {
    "id": "Q445",
    "originalId": "LK1209",
    "text": "什么是 PSK31？",
    "options": [
      {
        "letter": "A",
        "text": "一种低速率的 PSK 数据通信方式"
      },
      {
        "letter": "B",
        "text": "一种提升 FM 信号 SNR 的方法"
      },
      {
        "letter": "C",
        "text": "一种压缩数字音视频的方法"
      },
      {
        "letter": "D",
        "text": "一种高速率的 PSK 数据通信方式"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0503",
    "image": ""
  },
  {
    "id": "Q446",
    "originalId": "LX",
    "text": "PSK31 的调制方式为：",
    "options": [
      {
        "letter": "A",
        "text": "BPSK（BPSK31）或 QPSK（QPSK31）"
      },
      {
        "letter": "B",
        "text": "8FSK"
      },
      {
        "letter": "C",
        "text": "8ASK"
      },
      {
        "letter": "D",
        "text": "64QAM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0504",
    "image": ""
  },
  {
    "id": "Q447",
    "originalId": "LX",
    "text": "什么是 FT8？",
    "options": [
      {
        "letter": "A",
        "text": "一种适用于小功率和低信噪比环境的低速率 FSK 数据通信方式"
      },
      {
        "letter": "B",
        "text": "一种提升 SSB 信号 SNR 的方法"
      },
      {
        "letter": "C",
        "text": "一种通过卫星的线性转发器实现数字音视频通信的方法"
      },
      {
        "letter": "D",
        "text": "一种适用于大功率和高信噪比环境的高速率 FSK 数据通信方式"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0505",
    "image": ""
  },
  {
    "id": "Q448",
    "originalId": "LX",
    "text": "FT8 的调制方式为：",
    "options": [
      {
        "letter": "A",
        "text": "8FSK"
      },
      {
        "letter": "B",
        "text": "8ASK"
      },
      {
        "letter": "C",
        "text": "8PSK"
      },
      {
        "letter": "D",
        "text": "8QAM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0506",
    "image": ""
  },
  {
    "id": "Q449",
    "originalId": "LX",
    "text": "关于数字通信模式 JT65，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "即便 QRP 操作，爱好者也能够使用 JT65 联络距离很远的电台"
      },
      {
        "letter": "B",
        "text": "发送一条 JT65 消息大约需要 50 秒。通信速度不是很快"
      },
      {
        "letter": "C",
        "text": "JT65 适合千瓦级别的业余电台使用，否则难以联络远方电台"
      },
      {
        "letter": "D",
        "text": "JT65 每分钟可以发送大约 50 条消息。通信效率非常高"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.6.2",
    "type": "MC2-0507",
    "image": ""
  },
  {
    "id": "Q450",
    "originalId": "LX",
    "text": "FT8 信号常见于 HF 和 VHF 业余频段。这种方式的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "即使发射功率很小，成功联络远距离业余电台的概率也很大"
      },
      {
        "letter": "B",
        "text": "FT8 可以用来探索大气波导、流星余迹和对流层散射通信"
      },
      {
        "letter": "C",
        "text": "虽然 FT8 的发射带宽只有 3kHz，其中仍包含大量冗余信息"
      },
      {
        "letter": "D",
        "text": "FT8 的符号速率约是 50bps 并使用 5 单位博多码传输消息"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.6.2",
    "type": "MC2-0508",
    "image": ""
  },
  {
    "id": "Q451",
    "originalId": "LX",
    "text": "回应某个电台的 FT8 呼叫时，我们应如何使用通联软件（例如 WSJT-X）提供的瀑布图选出适当的发射频率？",
    "options": [
      {
        "letter": "A",
        "text": "在该电台守听时的瀑布时段中找一个相对清净的频率"
      },
      {
        "letter": "B",
        "text": "在瀑布图上随意选一个频率即可"
      },
      {
        "letter": "C",
        "text": "在该电台呼叫时的瀑布时段中找一个相对清净的频率"
      },
      {
        "letter": "D",
        "text": "选择该电台发起呼叫所用的频率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.2",
    "type": "MC1-0509",
    "image": ""
  },
  {
    "id": "Q452",
    "originalId": "LX",
    "text": "FT4 是与 FT8 类似的一种通信方式。其特点是：",
    "options": [
      {
        "letter": "A",
        "text": "FT4 的消息发送速度大约是 FT8 的 2 倍，但是误码率稍高"
      },
      {
        "letter": "B",
        "text": "FT4 的联络效率与 RTTY 基本相当，但是所用带宽更窄"
      },
      {
        "letter": "C",
        "text": "FT4 不适合用来探索流星余迹等突发性电波传播现象"
      },
      {
        "letter": "D",
        "text": "FT4 与 FT8 一样，也使用 5 单位博多码传输消息"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.6.2",
    "type": "MC2-0510",
    "image": ""
  },
  {
    "id": "Q453",
    "originalId": "LX",
    "text": "在准备 FT8、FT4 或 JT65 联络时，我们需要将通联软件（例如 WSJT-X）输出的音频基带馈入发信机，并将收信机的输出通过声卡送回该软件。值得借鉴的一些设置经验是：",
    "options": [
      {
        "letter": "A",
        "text": "仔细调整软件的输出电平和发射机的输入增益，避免发射机过载致使信号失真"
      },
      {
        "letter": "B",
        "text": "仔细调整接收机的输出电平和软件的输入增益，避免使用失真的信号进行解码"
      },
      {
        "letter": "C",
        "text": "如果电台支持 CAT，应使用软件来控制 PTT 和操作频率，减少误操作的可能性"
      },
      {
        "letter": "D",
        "text": "如果可能，应将日志软件设置好，尽量避免因联络时手工录入日志而忙中出错"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.6.2",
    "type": "MC4-0511",
    "image": ""
  },
  {
    "id": "Q454",
    "originalId": "LX",
    "text": "Yaesu System Fusion 简称 YSF，是数字语音和数据传输相互融合的一种通信方式，特点是：",
    "options": [
      {
        "letter": "A",
        "text": "该方式为业余无线电通信广为采用"
      },
      {
        "letter": "B",
        "text": "具备通过中继台转发进行通信的能力"
      },
      {
        "letter": "C",
        "text": "调制方式为 C4FM"
      },
      {
        "letter": "D",
        "text": "使用时分多址技术增加带宽的利用率"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.3",
    "type": "MC3-0512",
    "image": ""
  },
  {
    "id": "Q455",
    "originalId": "LX",
    "text": "Icom D-STAR System 提供了一种数据通信方式，特点是：",
    "options": [
      {
        "letter": "A",
        "text": "是业余无线电通信广为采用的一种数字语音和数据传输方式"
      },
      {
        "letter": "B",
        "text": "可以通过中继台扩展 D-STAR 用户的通信范围"
      },
      {
        "letter": "C",
        "text": "该方式允许用户通过互联网和 D-STAR 热点与其他用户通信"
      },
      {
        "letter": "D",
        "text": "D-STAR 支持全球卫星定位和位置报告功能"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.6.3",
    "type": "MC4-0513",
    "image": ""
  },
  {
    "id": "Q456",
    "originalId": "LX",
    "text": "FreeDV 是一种数字语音方式。其特点是：",
    "options": [
      {
        "letter": "A",
        "text": "为爱好者提供一种传输带宽较窄，完全适合 HF 的数字语音方式"
      },
      {
        "letter": "B",
        "text": "为爱好者提供探索数字通信原理和语音处理技术的可能性"
      },
      {
        "letter": "C",
        "text": "在遵循开源许可协议的前提下可用来研发自己的业余无线电装备"
      },
      {
        "letter": "D",
        "text": "使用 FM 手持或车载电台进行 FreeDV 通信时音色尤为优美"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "2.6.3",
    "type": "MC3-0514",
    "image": ""
  },
  {
    "id": "Q457",
    "originalId": "LX",
    "text": "数字业余电视（DATV）是将数字音视频压缩编码实验用于实时图像通信的一种方式。通过卫星转发器进行 DATV 联络时，爱好者们普遍选用 DVB-S2 协议，调制方式可以是：",
    "options": [
      {
        "letter": "A",
        "text": "QPSK"
      },
      {
        "letter": "B",
        "text": "8PSK"
      },
      {
        "letter": "C",
        "text": "16APSK"
      },
      {
        "letter": "D",
        "text": "32APSK"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "2.6.4",
    "type": "MC4-0515",
    "image": ""
  },
  {
    "id": "Q458",
    "originalId": "LX",
    "text": "使用 DRM 协议进行数字慢扫描电视（DSSTV）通信时，爱好者总是倾向于通过单边带而非调频话方式来传输在音频范围内生成的 DSSTV 基带。主要原因是：",
    "options": [
      {
        "letter": "A",
        "text": "单边带方式完整保留 DSSTV 的基带特性，利于衰落信道中的差错控制"
      },
      {
        "letter": "B",
        "text": "使用调频话传输 DSSTV 增添门限效应，因此也增加了信号的发射带宽"
      },
      {
        "letter": "C",
        "text": "使用调频话传输 DSSTV 虽然可以改善画质，但是无法提高伴音的音质"
      },
      {
        "letter": "D",
        "text": "使用调频话传输 DSSTV 虽然可以改善伴音的音质，但是无法提高画质"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.4",
    "type": "MC1-0516",
    "image": ""
  },
  {
    "id": "Q459",
    "originalId": "LK0460",
    "text": "一部业余无线电台以 FM 方式发射时的射频输出功率为 10 瓦，电源效率约为 80%。若该台连续发话 10 秒钟，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "约为 10 瓦"
      },
      {
        "letter": "B",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "C",
        "text": "约为 8 瓦"
      },
      {
        "letter": "D",
        "text": "肯定高于 10 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0517",
    "image": ""
  },
  {
    "id": "Q460",
    "originalId": "LK0461",
    "text": "一部业余无线电台以 CW 方式发射时的载波输出功率为 10 瓦，电源效率约为 80%。若该台连续发报 10 秒钟，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "显著低于 10 瓦"
      },
      {
        "letter": "B",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "C",
        "text": "约为 10 瓦"
      },
      {
        "letter": "D",
        "text": "约为 8 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0518",
    "image": ""
  },
  {
    "id": "Q461",
    "originalId": "LK0462",
    "text": "一部业余无线电台以 SSB 方式发射时的峰值输出功率为 10 瓦，电源效率约为 80%。若该台连续发话 10 秒钟，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "显著低于 10 瓦"
      },
      {
        "letter": "B",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "C",
        "text": "约为 10 瓦"
      },
      {
        "letter": "D",
        "text": "约为 8 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0519",
    "image": ""
  },
  {
    "id": "Q462",
    "originalId": "LK0463",
    "text": "一部业余无线电台以 SSB 方式发射时的峰值输出功率为 10 瓦，电源效率约为 80%。若该台利用此方式发送一条时长 12.6 秒的 FT8 消息，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "约为 10 瓦"
      },
      {
        "letter": "B",
        "text": "显著低于 10 瓦"
      },
      {
        "letter": "C",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "D",
        "text": "约为 8 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0520",
    "image": ""
  },
  {
    "id": "Q463",
    "originalId": "LK0464",
    "text": "一部业余无线电台以 SSB 方式发射时的峰值输出功率为 10 瓦，电源效率约为 80%。若该台利用此方式发送一条时长 12.8 秒的 PSK31 消息，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "约为 10 瓦"
      },
      {
        "letter": "B",
        "text": "显著低于 10 瓦"
      },
      {
        "letter": "C",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "D",
        "text": "约为 8 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0521",
    "image": ""
  },
  {
    "id": "Q464",
    "originalId": "LK0465",
    "text": "一部业余无线电台以 SSB 方式发射时的峰值输出功率为 10 瓦，电源效率约为 80%。若该台利用此方式发送一段时长 10 秒的 Robot 8 SSTV 黑白图像，则此期间的平均发射功率：",
    "options": [
      {
        "letter": "A",
        "text": "约为 10 瓦"
      },
      {
        "letter": "B",
        "text": "显著低于 10 瓦"
      },
      {
        "letter": "C",
        "text": "约为 12.5 瓦"
      },
      {
        "letter": "D",
        "text": "约为 8 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.6.5",
    "type": "MC1-0522",
    "image": ""
  },
  {
    "id": "Q465",
    "originalId": "LX",
    "text": "如何呼叫所有 DX 电台？",
    "options": [
      {
        "letter": "A",
        "text": "呼叫“CQ DX”并报出你的呼号"
      },
      {
        "letter": "B",
        "text": "呼叫“CQ AF”并报出你的呼号"
      },
      {
        "letter": "C",
        "text": "呼叫“CQ SA”并报出你的呼号"
      },
      {
        "letter": "D",
        "text": "呼叫“CQ OC”并报出你的呼号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0523",
    "image": ""
  },
  {
    "id": "Q466",
    "originalId": "LK1208",
    "text": "以下哪项描述了参加 DX 联络以及业余无线电竞赛的良好习惯？",
    "options": [
      {
        "letter": "A",
        "text": "尽可能不发送呼号与必要交换信息之外的任何消息"
      },
      {
        "letter": "B",
        "text": "与对方多次联络，确保自己出现在了对方的日志中"
      },
      {
        "letter": "C",
        "text": "如果频率上出现了堆叠，就只报自己呼号的后两位"
      },
      {
        "letter": "D",
        "text": "如果己方环境噪声突然升高，就相应增加发射功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0524",
    "image": ""
  },
  {
    "id": "Q467",
    "originalId": "LK0248",
    "text": "参加 DX 网络通信有助于与一些稀有电台建立通信。正确做法是：",
    "options": [
      {
        "letter": "A",
        "text": "事前了解网络规则，未经主控台允许不能随意发起呼叫，根据主控台要求进行登录，然后需随时注意主控台的安排，在主控台安排 DX 电台呼叫自己时及时回答联络"
      },
      {
        "letter": "B",
        "text": "听到 DX 网络通信后，应抓住机会立即对听到的电台发起呼叫"
      },
      {
        "letter": "C",
        "text": "当两个电台在网络主控台安排下互联联络时，自己可以呼叫“Breaker”以插入通信"
      },
      {
        "letter": "D",
        "text": "DX 网络时间内肯定有很多 DX 电台在守听，利用该频点呼叫 CQ 定有收获"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0525",
    "image": ""
  },
  {
    "id": "Q468",
    "originalId": "LK0273",
    "text": "如果短波业余电台附近环境有不可避免的强烈噪声源影响接收微弱信号，合理的做法是：",
    "options": [
      {
        "letter": "A",
        "text": "尽量只呼叫和回答能听到的电台，必须发起 CQ 呼叫时应降低功率"
      },
      {
        "letter": "B",
        "text": "发起 CQ 呼叫时应增大功率，以便压倒环境噪声"
      },
      {
        "letter": "C",
        "text": "发起正常满功率 CQ 呼叫，并应尽量调小接收机射频增益"
      },
      {
        "letter": "D",
        "text": "发起正常满功率 CQ 呼叫，并设置好接收机的 NB、AGC 等功能"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0526",
    "image": ""
  },
  {
    "id": "Q469",
    "originalId": "LK1012",
    "text": "BD0ZZ 听到某业余电台的 CW 呼叫并希望与之联络。但是，他只听清对方呼号的分区号和后缀为 2MAX。此时的正确回叫应当是：",
    "options": [
      {
        "letter": "A",
        "text": "?2MAX DE BD0ZZ K"
      },
      {
        "letter": "B",
        "text": "QRZ？DE BD0ZZ PSE UR PREFIX KN"
      },
      {
        "letter": "C",
        "text": "R 2MAX DE BD0ZZ PSE UR PREFIX K"
      },
      {
        "letter": "D",
        "text": "2MAX DE BD0ZZ PSE UR PREFIX AND MY QSL IS OK SO PSE K"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0527",
    "image": ""
  },
  {
    "id": "Q470",
    "originalId": "LK1013",
    "text": "BD0ZZ 听到某业余电台的 SSB 呼叫并希望与之联络。但是，他只听清对方呼号的分区号和后缀为 2MAX。此时的正确回叫应当是：",
    "options": [
      {
        "letter": "A",
        "text": "2MAX, this is BD0ZZ. Your prefix, please"
      },
      {
        "letter": "B",
        "text": "QRZed？This is BD0ZZ, standing by"
      },
      {
        "letter": "C",
        "text": "Roger. 2MAX, this is BD0ZZ. Please tell me your prefix over and over"
      },
      {
        "letter": "D",
        "text": "Hey, 2MAX, this is BD0ZZ calling CQ. Please give me your prefix. You know I need it"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0528",
    "image": ""
  },
  {
    "id": "Q471",
    "originalId": "LK1078",
    "text": "DX Summit 消息“PY2SS 28005.3 KH6/N6GQ simplex, fading signal in SA 2040 15 Feb 2012”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "巴西电台收听夏威夷电台效果不好"
      },
      {
        "letter": "B",
        "text": "巴西电台收听关岛电台效果很好"
      },
      {
        "letter": "C",
        "text": "巴西电台收听夏威夷电台效果很好"
      },
      {
        "letter": "D",
        "text": "巴西电台收听关岛电台效果不好"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0529",
    "image": ""
  },
  {
    "id": "Q472",
    "originalId": "LK1080",
    "text": "DX Summit 消息“JA2WS 14009.6 E51WWA Calling CQ, no takers, Cook Is 0052 14 Feb2018”的意思是：",
    "options": [
      {
        "letter": "A",
        "text": "E51WWA 在库克岛呼叫 CQ，没人应答"
      },
      {
        "letter": "B",
        "text": "E51WWA 在库克岛呼叫 JA2WS，没有应答"
      },
      {
        "letter": "C",
        "text": "JA2WS 在库克岛呼叫 CQ，没人应答"
      },
      {
        "letter": "D",
        "text": "JA2WS 在库克岛呼叫 E51WWA，没有应答"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0530",
    "image": ""
  },
  {
    "id": "Q473",
    "originalId": "LK1092",
    "text": "20 米波段的 SSTV 联络最常见于：",
    "options": [
      {
        "letter": "A",
        "text": "14.230MHz"
      },
      {
        "letter": "B",
        "text": "14.260MHz"
      },
      {
        "letter": "C",
        "text": "14.040MHz"
      },
      {
        "letter": "D",
        "text": "14.030MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0531",
    "image": ""
  },
  {
    "id": "Q474",
    "originalId": "LK1093",
    "text": "20 米波段的 IOTA 活动最常见于：",
    "options": [
      {
        "letter": "A",
        "text": "SSB：14.260 MHz；CW：14.040 MHz"
      },
      {
        "letter": "B",
        "text": "SSB：14.190 MHz；CW：14.040 MHz"
      },
      {
        "letter": "C",
        "text": "SSB：14.190 MHz；CW：14.060 MHz"
      },
      {
        "letter": "D",
        "text": "SSB：14.260 MHz；CW：14.060 MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0532",
    "image": ""
  },
  {
    "id": "Q475",
    "originalId": "LK1095",
    "text": "以 SSB 方式参加业余无线电竞赛，以下频段中可以选用的有：",
    "options": [
      {
        "letter": "A",
        "text": "3560 - 3600kHz"
      },
      {
        "letter": "B",
        "text": "7040 - 7060kHz"
      },
      {
        "letter": "C",
        "text": "14060 - 14125kHz"
      },
      {
        "letter": "D",
        "text": "14300 - 14350kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0533",
    "image": ""
  },
  {
    "id": "Q476",
    "originalId": "LK1121",
    "text": "通常来说，10 米波段 DX 通信的最佳时段是：",
    "options": [
      {
        "letter": "A",
        "text": "白天"
      },
      {
        "letter": "B",
        "text": "夜间"
      },
      {
        "letter": "C",
        "text": "当有日冕物质抛射时"
      },
      {
        "letter": "D",
        "text": "在太阳通量很低的时候"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0534",
    "image": ""
  },
  {
    "id": "Q477",
    "originalId": "LK1074",
    "text": "申请 WAS 奖状时，不能用以下哪个呼号的卡片作为通联证明：",
    "options": [
      {
        "letter": "A",
        "text": "VA3EJ"
      },
      {
        "letter": "B",
        "text": "AC6HY"
      },
      {
        "letter": "C",
        "text": "N8DX"
      },
      {
        "letter": "D",
        "text": "KC1XX"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0535",
    "image": ""
  },
  {
    "id": "Q478",
    "originalId": "LK1075",
    "text": "申请五波段 WAZ 奖状（5BWAZ），至少要提交多少个分区的卡片：",
    "options": [
      {
        "letter": "A",
        "text": "198"
      },
      {
        "letter": "B",
        "text": "199"
      },
      {
        "letter": "C",
        "text": "200"
      },
      {
        "letter": "D",
        "text": "40"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0536",
    "image": ""
  },
  {
    "id": "Q479",
    "originalId": "LK1076",
    "text": "对于我国爱好者来说，以下电台中最稀有，最不易通联的是：",
    "options": [
      {
        "letter": "A",
        "text": "KP5A"
      },
      {
        "letter": "B",
        "text": "VK0HR"
      },
      {
        "letter": "C",
        "text": "AH0K"
      },
      {
        "letter": "D",
        "text": "ZS1EZ"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0537",
    "image": ""
  },
  {
    "id": "Q480",
    "originalId": "LK1084",
    "text": "申请卫星和 6 米 WAZ 奖状需要至少提交多少个区的 QSL 卡片？",
    "options": [
      {
        "letter": "A",
        "text": "25"
      },
      {
        "letter": "B",
        "text": "30"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "40"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0538",
    "image": ""
  },
  {
    "id": "Q481",
    "originalId": "LK1085",
    "text": "申请 160 米 WAZ 奖状需要至少提交多少个区的 QSL 卡片？",
    "options": [
      {
        "letter": "A",
        "text": "25"
      },
      {
        "letter": "B",
        "text": "30"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "40"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0539",
    "image": ""
  },
  {
    "id": "Q482",
    "originalId": "LK1036",
    "text": "在 14022kHz 有很多电台争相报出自己的呼号。他们是在呼叫发射频率为 14020kHz 的一个稀有台。如果你要联络该台，你可以：",
    "options": [
      {
        "letter": "A",
        "text": "守听 14020kHz。在稀有台结束与他台的联络或完成 CQ 或 QRZ 呼叫时，在 14022kHz 快速准确地发送自己的呼号"
      },
      {
        "letter": "B",
        "text": "守听 14020KHz。在稀有台结束与他台的联络或完成 CQ 或 QRZ 呼叫时，在 14020KHz 快速准确地发送对方的呼号加自己的呼号"
      },
      {
        "letter": "C",
        "text": "在 14022kHz 用较慢的速率或用手键不断发送自己的呼号"
      },
      {
        "letter": "D",
        "text": "在 14020KHz 用较慢的速率或用手键不断发送稀有台的呼号加自己的呼号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.1",
    "type": "MC1-0540",
    "image": ""
  },
  {
    "id": "Q483",
    "originalId": "LK1090",
    "text": "以北京为中心，则与 DXCC 实体 3X、HZ、G、OE 的大圆距离由远及近可排列为：",
    "options": [
      {
        "letter": "A",
        "text": "3X、G、OE、HZ"
      },
      {
        "letter": "B",
        "text": "3X、HZ、OE、G"
      },
      {
        "letter": "C",
        "text": "G、OE、3X、HZ"
      },
      {
        "letter": "D",
        "text": "HZ、OE、3X、G"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.2",
    "type": "MC1-0541",
    "image": ""
  },
  {
    "id": "Q484",
    "originalId": "LK1062",
    "text": "我们使用定向天线联络欧洲的业余电台时常将天线指向大约 300 度（十点钟）的方向。相应地，如果某个欧洲电台要联络我们，其天线应大体指向：",
    "options": [
      {
        "letter": "A",
        "text": "60 度（两点钟）"
      },
      {
        "letter": "B",
        "text": "120 度（四点钟）"
      },
      {
        "letter": "C",
        "text": "240 度（八点钟）"
      },
      {
        "letter": "D",
        "text": "300 度（十点钟）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.2",
    "type": "MC1-0542",
    "image": ""
  },
  {
    "id": "Q485",
    "originalId": "LK1035",
    "text": "在北京架设一副水平极化的半波长偶极天线以尝试联络纽约的业余电台，若按最短的传播路径考虑，天线的走向应大致为：",
    "options": [
      {
        "letter": "A",
        "text": "东西走向"
      },
      {
        "letter": "B",
        "text": "南北走向"
      },
      {
        "letter": "C",
        "text": "东偏南 30 度-西偏北 30 度"
      },
      {
        "letter": "D",
        "text": "西偏南 30 度-东偏北 30 度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.2",
    "type": "MC1-0543",
    "image": ""
  },
  {
    "id": "Q486",
    "originalId": "LK0267",
    "text": "某业余电台 CW 信号的片段为“B1CRA TEST UP 5”，意思是：",
    "options": [
      {
        "letter": "A",
        "text": "该台的呼号为 B1CRA，正在参加比赛，接收频率从发射频率向上偏移 5kHz"
      },
      {
        "letter": "B",
        "text": "该台的呼号为 B1CRA，正在试验型号为 UP5 的发射设备"
      },
      {
        "letter": "C",
        "text": "该台正在试验设备并且呼叫 B1CRA，请对方在高 5kHz 的频率回答"
      },
      {
        "letter": "D",
        "text": "该台的呼号为 B1CRA，正在试验信号，并希望呼号前缀为 UP5 的业余电台回答"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0544",
    "image": ""
  },
  {
    "id": "Q487",
    "originalId": "LK0865",
    "text": "在 HF 比赛时，回答参赛电台的 CQ 是一项基本操作。我们可以先听他一会儿以了解该台正在守听什么频率，然后在其询问“QRZ？”或结束 CQ 呼叫时完成如下操作：",
    "options": [
      {
        "letter": "A",
        "text": "在其守听频率上发送本台的完整呼号"
      },
      {
        "letter": "B",
        "text": "在其守听频率上发送对方的完整呼号和本台的完整呼号"
      },
      {
        "letter": "C",
        "text": "在其呼叫频率上发送对方的完整呼号和本台的完整呼号"
      },
      {
        "letter": "D",
        "text": "在其呼叫频率上发送本台的完整呼号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0545",
    "image": ""
  },
  {
    "id": "Q488",
    "originalId": "LK1077",
    "text": "在 CQWW 比赛中，以下哪个组别不能使用 CW Skimmer 来辅助发现 QSO 机会？",
    "options": [
      {
        "letter": "A",
        "text": "SOAB"
      },
      {
        "letter": "B",
        "text": "SOAB-A"
      },
      {
        "letter": "C",
        "text": "SOSB-20"
      },
      {
        "letter": "D",
        "text": "MS"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0546",
    "image": ""
  },
  {
    "id": "Q489",
    "originalId": "LK1079",
    "text": "若在 IARU 短波世界锦标赛期间听到某台发送“5NNJARL”，该台呼号极可能是：",
    "options": [
      {
        "letter": "A",
        "text": "8N1HQ"
      },
      {
        "letter": "B",
        "text": "JA1HQ"
      },
      {
        "letter": "C",
        "text": "S99JARL"
      },
      {
        "letter": "D",
        "text": "W1AW"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0547",
    "image": ""
  },
  {
    "id": "Q490",
    "originalId": "LK1081",
    "text": "北京某 20 岁女大学生参加 IARU 短波世界锦标赛 SSB 单人组比赛。她发给别人的信号报告可以是：",
    "options": [
      {
        "letter": "A",
        "text": "5944"
      },
      {
        "letter": "B",
        "text": "5900"
      },
      {
        "letter": "C",
        "text": "5924"
      },
      {
        "letter": "D",
        "text": "5920"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0548",
    "image": ""
  },
  {
    "id": "Q491",
    "originalId": "LK1082",
    "text": "北京某 20 岁女大学生参加 ALL ASIAN DX CONTEST SSB 单人组比赛。她发给别人的信号报告可以是：",
    "options": [
      {
        "letter": "A",
        "text": "5900"
      },
      {
        "letter": "B",
        "text": "5920"
      },
      {
        "letter": "C",
        "text": "5944"
      },
      {
        "letter": "D",
        "text": "5924"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "2.7.3",
    "type": "MC2-0549",
    "image": ""
  },
  {
    "id": "Q492",
    "originalId": "LK1083",
    "text": "北京某 20 岁女大学生参加 CQ WW CW 竞赛。她发给别人的信号报告可以是：",
    "options": [
      {
        "letter": "A",
        "text": "59924"
      },
      {
        "letter": "B",
        "text": "59900"
      },
      {
        "letter": "C",
        "text": "59944"
      },
      {
        "letter": "D",
        "text": "59920"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0550",
    "image": ""
  },
  {
    "id": "Q493",
    "originalId": "LK1091",
    "text": "若在某业余无线电比赛期间听到交换消息“599NJ”，该比赛可能是：",
    "options": [
      {
        "letter": "A",
        "text": "ARRL 160-Meter Contest"
      },
      {
        "letter": "B",
        "text": "CQWW"
      },
      {
        "letter": "C",
        "text": "ALL ASIAN DX CONTEST"
      },
      {
        "letter": "D",
        "text": "CQ WPX"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.3",
    "type": "MC1-0551",
    "image": ""
  },
  {
    "id": "Q494",
    "originalId": "LK0862",
    "text": "业余无线电爱好者经常使用梅登海德网格定位系统（Maidenhead Grid Square Locator）来标示自己的电台所在地。例如，BR1KA 的网格定位是 OM89。这种定位系统是：",
    "options": [
      {
        "letter": "A",
        "text": "根据经纬度坐标对地球表面进行网格划分和命名，用以标示地理位置的一种系统"
      },
      {
        "letter": "B",
        "text": "一种卫星定位系统"
      },
      {
        "letter": "C",
        "text": "根据国际呼号系列对地球表面进行网格划分和命名，用以标示地理位置的一种系统"
      },
      {
        "letter": "D",
        "text": "根据全球行政区划对地球表面进行网格划分和命名，用以标示地理位置的一种系统"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.4",
    "type": "MC1-0552",
    "image": ""
  },
  {
    "id": "Q495",
    "originalId": "LK0863",
    "text": "业余无线电通联中用到的梅登海德网格定位系统，其编码格式可以是：",
    "options": [
      {
        "letter": "A",
        "text": "2 个字母和 2 位数字、2 个字母和 2 位数字再加 2 个字母"
      },
      {
        "letter": "B",
        "text": "4 位数字或者 6 位数字"
      },
      {
        "letter": "C",
        "text": "4 个字母或者 6 个字母"
      },
      {
        "letter": "D",
        "text": "呼号前缀字母加 2 位数字和 2 个字母"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.4",
    "type": "MC1-0553",
    "image": ""
  },
  {
    "id": "Q496",
    "originalId": "LK0864",
    "text": "业余无线电爱好者使用梅登海德网格定位系统标示己方电台位置所用的编码可以具有 4个或 6 个字符。二者的定位精度不同，区别为：",
    "options": [
      {
        "letter": "A",
        "text": "4 字符网格为经度 2 度和纬度 1 度；6 字符网格为经度 5 分和纬度 2.5 分"
      },
      {
        "letter": "B",
        "text": "4 字符网格精确到国家分区，6 字符网格精确到国家的城市或县乡"
      },
      {
        "letter": "C",
        "text": "4 字符网格根据国际呼号系列区分，6 字符网格在 4 字符基础上加以经纬度细分"
      },
      {
        "letter": "D",
        "text": "4 字符网格名称用于 HF 通信，6 字符网格名称用于 VHF/UHF 通信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.4",
    "type": "MC1-0554",
    "image": ""
  },
  {
    "id": "Q497",
    "originalId": "LK0189",
    "text": "为了便于计算时间，将地球划分为若干个时区，各理论时区的划分方法是：",
    "options": [
      {
        "letter": "A",
        "text": "全球划分为 24 个时区，每个理论时区宽度为经度 15 度，本初子午线通过 0 区的中心"
      },
      {
        "letter": "B",
        "text": "全球划分为 12 个时区，每个理论时区宽度为经度 30 度，本初子午线通过 0 区的中心"
      },
      {
        "letter": "C",
        "text": "全球划分为 24 个时区，每个理论时区宽度为经度 15 度，其边界为东西经度为 15 的整倍数的子午线"
      },
      {
        "letter": "D",
        "text": "全球划分为 12 个时区，每个理论时区宽度为经度 30 度，其边界为东西经度为 30 的整倍数的子午线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0555",
    "image": ""
  },
  {
    "id": "Q498",
    "originalId": "LK0190",
    "text": "为了便于计算时间，将地球划分为若干个时区，各理论时区的命名规则是：",
    "options": [
      {
        "letter": "A",
        "text": "本初子午线通过其中心的为 0 区，向东依次为东 1 区、东 2 区…东 12 区，向西依次为西1 区、西 2 区…西 12 区"
      },
      {
        "letter": "B",
        "text": "本初子午线通过中心的为 0 区，向东依次为 1 区、2 区…24 区"
      },
      {
        "letter": "C",
        "text": "本初子午线通过中心的为 0 区，向西依次为 1 区、2 区…24 区"
      },
      {
        "letter": "D",
        "text": "本初子午线通过中心的为 0 区，如向东数则依次称为东 1 区、东 2 区…东 24 区，如向西数则依次称为西 1 区、西 2 区…西 24 区"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0556",
    "image": ""
  },
  {
    "id": "Q499",
    "originalId": "LK0191",
    "text": "为了便于计算时间，将地球划分为若干个时区，北京的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "北京处于东 8 区，地方时间比 0 时区的时间早 8 小时"
      },
      {
        "letter": "B",
        "text": "北京处于东 8 区，地方时间比 0 时区的时间晚 8 小时"
      },
      {
        "letter": "C",
        "text": "北京处于西 8 区，地方时间比 0 时区的时间早 8 小时"
      },
      {
        "letter": "D",
        "text": "北京处于西 8 区，地方时间比 0 时区的时间晚 8 小时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0557",
    "image": ""
  },
  {
    "id": "Q500",
    "originalId": "LK0192",
    "text": "为了便于计算时间，将地球划分为若干个时区，其理论分区为每区宽经度 15 度。北京、西安和乌鲁木齐实际所属的时区应为：",
    "options": [
      {
        "letter": "A",
        "text": "世界上实际使用法定分区，北京、西安、乌鲁木齐都属于东 8 区"
      },
      {
        "letter": "B",
        "text": "根据所在经度推算，北京、西安、乌鲁木齐分别处于东 8 区、东 7 区和东 6 区"
      },
      {
        "letter": "C",
        "text": "根据所在经度推算，北京、西安、乌鲁木齐分别处于西 8 区、西 7 区和西 6 区"
      },
      {
        "letter": "D",
        "text": "根据所在经度推算，北京、西安、乌鲁木齐分别处于东 6 区、东 7 区和东 8 区"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0558",
    "image": ""
  },
  {
    "id": "Q501",
    "originalId": "LK0193",
    "text": "已知北京时间，相应的 UTC 时间应为：",
    "options": [
      {
        "letter": "A",
        "text": "北京时间的小时数减 8，如小时数小于 0，则小时数加 24，日期改为前一天。"
      },
      {
        "letter": "B",
        "text": "北京时间的小时数减 8，如小时数小于 0，则小时数加 24，日期改为后一天。"
      },
      {
        "letter": "C",
        "text": "北京时间的小时数加 8，如小时数大于 24，则小时数减 24，日期改为前一天。"
      },
      {
        "letter": "D",
        "text": "北京时间的小时数加 8，如小时数大于 24，则小时数减 24，日期改为后一天。"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0559",
    "image": ""
  },
  {
    "id": "Q502",
    "originalId": "LK0194",
    "text": "已知 UTC 时间，相应的北京时间应为：",
    "options": [
      {
        "letter": "A",
        "text": "UTC 时间的小时数加 8，如小时数大于 24，则小时数减 24，日期改为后一天。"
      },
      {
        "letter": "B",
        "text": "北京时间的小时数减 8，如小时数小于 0，则小时数加 24，日期改为后一天。"
      },
      {
        "letter": "C",
        "text": "北京时间的小时数加 8，如小时数大于 24，则小时数减 24，日期改为前一天。"
      },
      {
        "letter": "D",
        "text": "北京时间的小时数减 8，如小时数小于 0，则小时数加 24，日期改为前一天。"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0560",
    "image": ""
  },
  {
    "id": "Q503",
    "originalId": "LK0195",
    "text": "已知某业余电台处于西 N 时区（N 为 0-12 间的整数），该台的当地时间应比北京时间：",
    "options": [
      {
        "letter": "A",
        "text": "晚 8+N 小时"
      },
      {
        "letter": "B",
        "text": "晚 8-N 小时"
      },
      {
        "letter": "C",
        "text": "早 8+N 小时"
      },
      {
        "letter": "D",
        "text": "早 8-N 小时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0561",
    "image": ""
  },
  {
    "id": "Q504",
    "originalId": "LK0196",
    "text": "已知某业余电台处于东 N 时区（N 为 0-12 间的整数），该台的当地时间应比北京时间：",
    "options": [
      {
        "letter": "A",
        "text": "晚 8-N 小时"
      },
      {
        "letter": "B",
        "text": "晚 8+N 小时"
      },
      {
        "letter": "C",
        "text": "早 8-N 小时"
      },
      {
        "letter": "D",
        "text": "早 8+N 小时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.5",
    "type": "MC1-0562",
    "image": ""
  },
  {
    "id": "Q505",
    "originalId": "LY0394",
    "text": "如果在参加业余无线电 CW 竞赛时抄下“B4”或“WKD”则说明：",
    "options": [
      {
        "letter": "A",
        "text": "已经与该台联络过了。你最好检查日志，看看是否有差错"
      },
      {
        "letter": "B",
        "text": "已经与该台联系过了。你应当再叫他一次，问问是否他记错了什么"
      },
      {
        "letter": "C",
        "text": "这说明对方日志混乱，联络差错频出。你应将其通联记录全部删除"
      },
      {
        "letter": "D",
        "text": "很明显，这说明以前联络过的。对方是在向老朋友打招呼"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.6",
    "type": "MC1-0563",
    "image": ""
  },
  {
    "id": "Q506",
    "originalId": "LX",
    "text": "为什么大家参加比赛都应及时提交日志？",
    "options": [
      {
        "letter": "A",
        "text": "竞赛主办方根据日志匹配参赛双方的通信联络，计算比赛得分"
      },
      {
        "letter": "B",
        "text": "提交日志只是竞赛主办方的行政规定，建议执行，但是不予理会也是个好主意"
      },
      {
        "letter": "C",
        "text": "如果对方电台通联与否已不影响自己的 DX 成绩，那就可以将其从日志中剔除"
      },
      {
        "letter": "D",
        "text": "HF 竞赛确实要提交日志。为此，我们可以多来 VHF 参赛"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "2.7.6",
    "type": "MC1-0564",
    "image": ""
  },
  {
    "id": "Q507",
    "originalId": "LK0858",
    "text": "业余中继台上下行共用一副天线时，需要在接收机、发信机和天线之间插入一个：",
    "options": [
      {
        "letter": "A",
        "text": "双工器（duplexer）"
      },
      {
        "letter": "B",
        "text": "收发信转换开关"
      },
      {
        "letter": "C",
        "text": "功率分配器（power divider）"
      },
      {
        "letter": "D",
        "text": "环形器（circulator）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0592",
    "image": ""
  },
  {
    "id": "Q508",
    "originalId": "LK0859",
    "text": "业余中继台上下行共用一副天线时，需要在接收机、发射机与天线之间插入一个双工器。其基本构造和作用为：",
    "options": [
      {
        "letter": "A",
        "text": "一组滤波器；阻止中继台发射的信号反馈进入中继台的接收机"
      },
      {
        "letter": "B",
        "text": "一组半导体开关；在中继台发射时关断中继台的接收机"
      },
      {
        "letter": "C",
        "text": "一个匹配网络；使天线、中继发射机、中继接收机三者之间都满足阻抗匹配关系"
      },
      {
        "letter": "D",
        "text": "一个环形器；使信号只能沿中继发射机-天线-中继接收机的方向行进"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0593",
    "image": ""
  },
  {
    "id": "Q509",
    "originalId": "LK0860",
    "text": "在架设业余中继台之前必须调查台址附近有没有其他频率的发射机，其信号强到可以在中继台的接收机中与中继台的下行信号产生三阶互调，并且互调产物落入中继台的上行频率范围内。如果中继台的上、下行频率分别为 fR 和 fT，则可能造成这种三阶互调干扰的频率fX 可以计算为：",
    "options": [
      {
        "letter": "A",
        "text": "2fT - fR 或 (fT + fR ) / 2"
      },
      {
        "letter": "B",
        "text": "fT - fR 或 fT + fR"
      },
      {
        "letter": "C",
        "text": "2（fT - fR） 或 2(fT + fR )"
      },
      {
        "letter": "D",
        "text": "2fT 或 2fR"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0594",
    "image": ""
  },
  {
    "id": "Q510",
    "originalId": "LK0855",
    "text": "某业余中继台的发射机常被断断续续的干扰信号激发，其中夹杂模糊不清的话音。根据覆盖区域内其他业余电台守听，出现问题时上行频率上并无其他电台在工作。则：",
    "options": [
      {
        "letter": "A",
        "text": "这可能是中继台附近另外两部发射机的强信号在中继台的接收机中产生了等同于上行频率的互调干扰，打开了静噪"
      },
      {
        "letter": "B",
        "text": "这肯定是中继台接收机受到了人为恶意干扰"
      },
      {
        "letter": "C",
        "text": "这可能是中继台接收机发生了寄生振荡"
      },
      {
        "letter": "D",
        "text": "这可能是中继台发射机发生了寄生振荡"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0595",
    "image": ""
  },
  {
    "id": "Q511",
    "originalId": "LK0856",
    "text": "某 FM 业余中继台的发射机一旦被上行信号启动就会持续发射，即使上行信号消失也不停止。可能的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "中继台上下行隔离不良，中继台自身发射的信号窜入了中继台的接收机，造成自锁"
      },
      {
        "letter": "B",
        "text": "肯定受到了人为恶意干扰"
      },
      {
        "letter": "C",
        "text": "中继台接收机电源电压不稳"
      },
      {
        "letter": "D",
        "text": "中继台发射机电源电压不稳"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0596",
    "image": ""
  },
  {
    "id": "Q512",
    "originalId": "LK0857",
    "text": "FM 业余中继台的发射机可以被上行信号正常启动。但是在上行信号消失后，该台常会继续发射一段时间，或长或短，其中夹杂模糊不清的语音。可能的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "中继台的下行信号与附近其他发射机的信号在中继台接收机中产生了等同于上行频率的互调干扰"
      },
      {
        "letter": "B",
        "text": "肯定是受到了人为恶意干扰"
      },
      {
        "letter": "C",
        "text": "中继台接收机电源电压不稳"
      },
      {
        "letter": "D",
        "text": "中继台发射机电源电压不稳"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.2",
    "type": "MC1-0597",
    "image": ""
  },
  {
    "id": "Q513",
    "originalId": "LK1122",
    "text": "如果进行 SSB 或 CW 通联时周边环境嘈杂，哪种设备可以替代电台上的扬声器，改善话音抄收？",
    "options": [
      {
        "letter": "A",
        "text": "耳机"
      },
      {
        "letter": "B",
        "text": "低通滤波器"
      },
      {
        "letter": "C",
        "text": "视频显示器"
      },
      {
        "letter": "D",
        "text": "吊杆胖话筒"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0598",
    "image": ""
  },
  {
    "id": "Q514",
    "originalId": "LK0249",
    "text": "全功能小型收发信机的面板上常有缩写为“NB”和“SQL”的功能，它们有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "NB 为“抑噪”，切除高于平均信号的大幅度突发脉冲噪声；SQL 为“静噪”，信噪比达不到一定水平时自动关闭音频输出"
      },
      {
        "letter": "B",
        "text": "NB 和 SQL 都是指“抑噪”，收不到有用信号时自动关断背景噪声"
      },
      {
        "letter": "C",
        "text": "NB 和 SQL 都是指“静噪”，切除高于平均信号的大幅度突发脉冲噪声"
      },
      {
        "letter": "D",
        "text": "NB 和 SQL 都是指“静噪”，收不到带有预期的特定控制信号时自动关断音频输出"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0599",
    "image": ""
  },
  {
    "id": "Q515",
    "originalId": "LK1132",
    "text": "某些车辆的火花塞辐射脉冲干扰。这可能导致收信机的 AGC 过早起控，使正在接收的 SSB或 CW 信号受到压制，进而影响听抄。遇到这种情况，你应当如何设置你的电台？",
    "options": [
      {
        "letter": "A",
        "text": "打开电台的抑噪（NB）功能"
      },
      {
        "letter": "B",
        "text": "降低静噪（SQL）阀值"
      },
      {
        "letter": "C",
        "text": "将频率稍稍调偏一点儿"
      },
      {
        "letter": "D",
        "text": "反复调节电台的 RIT 旋钮"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0600",
    "image": ""
  },
  {
    "id": "Q516",
    "originalId": "LK0369",
    "text": "全功能小型收发信机面板上的“MODE”代表什么功能：",
    "options": [
      {
        "letter": "A",
        "text": "用来切换工作方式，比如 FM、LSB、USB 和 CW 等"
      },
      {
        "letter": "B",
        "text": "用来切换静噪方式，比如 CTCSS 和 DCS 等"
      },
      {
        "letter": "C",
        "text": "用来切换接收机的工作方式，比如射频直采和低中频超外差等"
      },
      {
        "letter": "D",
        "text": "用来切换监听方式，比如单耳音频、双耳音频和 CW 立体声等"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0601",
    "image": ""
  },
  {
    "id": "Q517",
    "originalId": "LK0253",
    "text": "收发信机面板上的符号 ATT 代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "收信机输入衰减器，在接收大信号时接入，使信号不致过大而使前级电路过载"
      },
      {
        "letter": "B",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "C",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "D",
        "text": "发信自动音量控制，对音频输入电平进行检测并反馈控制，以维持其在适当限度之内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0602",
    "image": ""
  },
  {
    "id": "Q518",
    "originalId": "LK0254",
    "text": "收发信机面板上的符号 AGC 代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "收信机自动增益控制，对中频级信号电平进行检测并反馈控制，防止电路过载"
      },
      {
        "letter": "B",
        "text": "收信自动音量控制，对音频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "C",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "D",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0603",
    "image": ""
  },
  {
    "id": "Q519",
    "originalId": "LK0853",
    "text": "既然全功能收信机具有 AGC 功能，那为什么好多机型还要装设衰减（ATT）开关？",
    "options": [
      {
        "letter": "A",
        "text": "特强带外信号可以阻塞接收机的前级电路，致使器件非线性工作，产生失真和互调。此时需在接收机的前端电路之前加入衰减器，并用开关控制其切入与否"
      },
      {
        "letter": "B",
        "text": "通常，增益控制旋钮的控制范围不够宽，加入 ATT 开关可以拓展增益控制范围"
      },
      {
        "letter": "C",
        "text": "如果遭遇特强带内干扰，那么打开 ATT 就可防止过大的音量损坏扬声器或耳机了"
      },
      {
        "letter": "D",
        "text": "这可以防止本台发射机的强信号损坏本台的接收机电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0604",
    "image": ""
  },
  {
    "id": "Q520",
    "originalId": "LK1180",
    "text": "关于接收机的“过载”现象，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "输入信号过于强大以至机内电路饱和阻塞，严重时会损坏接收机前端电路的元器件"
      },
      {
        "letter": "B",
        "text": "启用接收机的 ATT 功能可消除或缓解过载"
      },
      {
        "letter": "C",
        "text": "接收机消耗的电流过大，致使电源出现过载现象。情况严重时供电装置会烧毁"
      },
      {
        "letter": "D",
        "text": "减小接收机的喇叭音量，可缓解过载现象"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.1.3",
    "type": "MC2-0605",
    "image": ""
  },
  {
    "id": "Q521",
    "originalId": "LK0268",
    "text": "应关闭接收机 AGC 功能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "有用微弱信号和强干扰同时出现时"
      },
      {
        "letter": "B",
        "text": "接收微弱信号时"
      },
      {
        "letter": "C",
        "text": "接收特强信号时"
      },
      {
        "letter": "D",
        "text": "有用强信号中夹杂着微弱干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0606",
    "image": ""
  },
  {
    "id": "Q522",
    "originalId": "LK0269",
    "text": "应选择较短的 AGC 时间常数的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "接收 FM/FSK/PSK 等包络幅度恒定的信号"
      },
      {
        "letter": "B",
        "text": "接收 SSB 和 AM 等正常信号的包络幅度不断变化的信号"
      },
      {
        "letter": "C",
        "text": "将接收机应用于“比幅度法规”测向时"
      },
      {
        "letter": "D",
        "text": "有用微弱信号和强干扰同时出现时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0607",
    "image": ""
  },
  {
    "id": "Q523",
    "originalId": "LK0270",
    "text": "应选择较长的 AGC 时间常数的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "接收 SSB 和 AM 等正常信号的包络幅度不断变化的信号"
      },
      {
        "letter": "B",
        "text": "接收 FM/FSK/PSK 等包络幅度恒定的信号遇到变化很快的传播衰落时"
      },
      {
        "letter": "C",
        "text": "将接收机应用于“比幅度法规”测向时"
      },
      {
        "letter": "D",
        "text": "有用微弱信号和强干扰同时出现时"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0608",
    "image": ""
  },
  {
    "id": "Q524",
    "originalId": "LK0256",
    "text": "多数小型全功能收发信机的面板上都可以看到符号 PRE，其代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "收信机前置放大器，在接收微弱信号时接入（此时某些技术指标可能低于额定值）"
      },
      {
        "letter": "B",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "C",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "D",
        "text": "发信语音压缩，对音频输入电平进行检测并反馈控制，以提升语音包络幅度较小的部分"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0609",
    "image": ""
  },
  {
    "id": "Q525",
    "originalId": "LK0251",
    "text": "收发信机面板上的符号 ALC 代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "B",
        "text": "发信自动音量控制，对音频输入电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "C",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "D",
        "text": "自动频率控制，对发射频率的漂移进行检测并反馈控制，以维持准确的工作频率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0610",
    "image": ""
  },
  {
    "id": "Q526",
    "originalId": "LK1029",
    "text": "在单边带发信机中，发信自动电平控制（ALC）的主要作用是：",
    "options": [
      {
        "letter": "A",
        "text": "防止过驱动导致调制失真或引发电路故障"
      },
      {
        "letter": "B",
        "text": "改善发信机的频率稳定度"
      },
      {
        "letter": "C",
        "text": "自动实现天线电路的阻抗匹配"
      },
      {
        "letter": "D",
        "text": "防止话筒过于灵敏带来背景噪声"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0611",
    "image": ""
  },
  {
    "id": "Q527",
    "originalId": "LK1030",
    "text": "业余电台进行单边带话音通信时，如果对方反映虽然己方的讲话基本可辨，但是在话音的间隙中夹杂嘈杂的背景噪声。这时应当：",
    "options": [
      {
        "letter": "A",
        "text": "调低发射机的话筒增益。如果发射机带有语音压缩处理功能，则应尝试调低控制深度"
      },
      {
        "letter": "B",
        "text": "调低发射机的射频输出功率"
      },
      {
        "letter": "C",
        "text": "调整发射机的天线匹配电路"
      },
      {
        "letter": "D",
        "text": "调整发射机的 ALC 控制深度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0612",
    "image": ""
  },
  {
    "id": "Q528",
    "originalId": "LK1129",
    "text": "即使打开了发射机的 ALC，将话筒的增益调得过高仍可能导致：",
    "options": [
      {
        "letter": "A",
        "text": "发出的信号失真"
      },
      {
        "letter": "B",
        "text": "发射机的功率提升"
      },
      {
        "letter": "C",
        "text": "发射机的频率漂移变大"
      },
      {
        "letter": "D",
        "text": "天线的驻波比增加"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0613",
    "image": ""
  },
  {
    "id": "Q529",
    "originalId": "LX",
    "text": "为什么使用单边带收发信机发送 AFSK 信号时需要关闭 ALC？",
    "options": [
      {
        "letter": "A",
        "text": "ALC 增加 AFSK 信号的失真，抬升误码率"
      },
      {
        "letter": "B",
        "text": "ALC 使发射功率失控，导致发射机故障"
      },
      {
        "letter": "C",
        "text": "ALC 使信号的极性反转，致使无法解码"
      },
      {
        "letter": "D",
        "text": "ALC 影响 AFSK 信号的频响，使音色变差"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0614",
    "image": ""
  },
  {
    "id": "Q530",
    "originalId": "LK0250",
    "text": "单边带发信机的语音压缩功能有什么作用？",
    "options": [
      {
        "letter": "A",
        "text": "压低较强语音信号的幅度、提升较弱信号的幅度，改善较弱的语音在接收端的信噪比"
      },
      {
        "letter": "B",
        "text": "压低较弱语音信号的幅度、提升较强信号的幅度，增加语音的动态范围和抑扬顿挫感"
      },
      {
        "letter": "C",
        "text": "压低语音信号的低频分量，提升高频分量，增加信号的带宽，使高音更加细腻"
      },
      {
        "letter": "D",
        "text": "压缩信号所占用的频谱宽度，提高无线电频谱的利用率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0615",
    "image": ""
  },
  {
    "id": "Q531",
    "originalId": "LK0257",
    "text": "收发信机面板上的符号 PROC 代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "发信语音压缩，对音频输入电平进行检测并反馈控制，以使包络幅度较小语音获得提升"
      },
      {
        "letter": "B",
        "text": "收信机前置放大器，在接收微弱信号时接入（此时某些技术指标可能低于额定值）"
      },
      {
        "letter": "C",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "D",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0616",
    "image": ""
  },
  {
    "id": "Q532",
    "originalId": "LX",
    "text": "发信时，若话音压缩调整不当可能带来什么问题?",
    "options": [
      {
        "letter": "A",
        "text": "可能产生很多互调成分，影响对方收信时的辨识度"
      },
      {
        "letter": "B",
        "text": "可能使话音严重失真，但是不影响对方电台的收信"
      },
      {
        "letter": "C",
        "text": "可能发射很大的交流声"
      },
      {
        "letter": "D",
        "text": "可能使话筒过载损坏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0617",
    "image": ""
  },
  {
    "id": "Q533",
    "originalId": "LX",
    "text": "为什么用单边带收发信机发送 AFSK 信号时应关闭语音压缩功能？",
    "options": [
      {
        "letter": "A",
        "text": "语音压缩可能导致信号的包络畸变，破坏基带特征，抬升误码率"
      },
      {
        "letter": "B",
        "text": "经语音压缩处理的信号，其相位变化已不存在，本质上无法解码"
      },
      {
        "letter": "C",
        "text": "经语音压缩处理的信号，其幅度变化已不存在，本质上无法解码"
      },
      {
        "letter": "D",
        "text": "语音压缩提升信号的峰均比，易导致发射机功率放大器过热损坏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0618",
    "image": ""
  },
  {
    "id": "Q534",
    "originalId": "LK0233",
    "text": "业余电台以发射的方法测量发射功率和天线驻波比时必须留意并做到的是：",
    "options": [
      {
        "letter": "A",
        "text": "先将频率设置到无人使用的空闲频率、偏离常用的热点频率"
      },
      {
        "letter": "B",
        "text": "先将天线的发射方向指向正北"
      },
      {
        "letter": "C",
        "text": "先将收发信机的语音压缩功能打开"
      },
      {
        "letter": "D",
        "text": "话筒离嘴距离在 2 公分以上，电键按键时间不短于 5 秒钟"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0619",
    "image": ""
  },
  {
    "id": "Q535",
    "originalId": "LK0234",
    "text": "单边带业余电台测试检查天线驻波比需要发射平稳的连续信号。文明的作法是：",
    "options": [
      {
        "letter": "A",
        "text": "将电台设为 CW 方式并按下电键。或者，将电台设为 AM 或 FM 方式并按下 PTT 键（不对话筒说话）以产生连续载波。测试结束后设回 SSB 方式"
      },
      {
        "letter": "B",
        "text": "将电台设为 SSB 方式，用平稳的气流对话筒吹口哨"
      },
      {
        "letter": "C",
        "text": "将电台设为 SSB 方式，深呼吸后用平稳的气流对话筒发长音“啊”"
      },
      {
        "letter": "D",
        "text": "将电台设为 SSB 方式，深呼吸后用平稳的气流对话筒发长音“嘻”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0620",
    "image": ""
  },
  {
    "id": "Q536",
    "originalId": "LK0252",
    "text": "收发信机面板上的符号 AT 或者 TUNE 代表什么功能？",
    "options": [
      {
        "letter": "A",
        "text": "自动天线调谐，对天线电路的电压驻波比进行检测并进行自动补偿，以维持最小驻波比"
      },
      {
        "letter": "B",
        "text": "发信自动音量控制，对音频输入电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "C",
        "text": "发信自动电平控制，对射频输出电平进行检测并反馈控制，以维持其在适当限度之内"
      },
      {
        "letter": "D",
        "text": "自动频率控制，对发射频率的漂移进行检测并反馈控制，以维持准确的工作频率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0621",
    "image": ""
  },
  {
    "id": "Q537",
    "originalId": "LK0271",
    "text": "使用射频/中频增益和音频增益分开控制的通信接收机进行收听时，可以这样设置：",
    "options": [
      {
        "letter": "A",
        "text": "信号特弱时尽量把射频/中频增益开到最大，信号特强时尽量把音频增益开到最大，然后从低到高调整另一个增益以得到适当的音量"
      },
      {
        "letter": "B",
        "text": "信号特弱时尽量把音频增益开到最大，信号特强时尽量把射频/中频增益开到最大，然后从低到高调整另一个增益以得到适当的音量"
      },
      {
        "letter": "C",
        "text": "任何情况下都应将射频/中频增益放在中间位置，然后从低到高调整音频增益以得到适当的音量"
      },
      {
        "letter": "D",
        "text": "任何情况下都应将音频增益放在中间位置，然后从低到高调整射频/中频增益以得到适当的音量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0622",
    "image": ""
  },
  {
    "id": "Q538",
    "originalId": "LX",
    "text": "HF 通信与 VHF 或 UHF 通信相比，最大的不同是什么？",
    "options": [
      {
        "letter": "A",
        "text": "HF 通信依靠电离层的反射"
      },
      {
        "letter": "B",
        "text": "HF 传播更为稳定，衰落小"
      },
      {
        "letter": "C",
        "text": "HF 天线体积小"
      },
      {
        "letter": "D",
        "text": "HF 更适合远距离宽带通信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0623",
    "image": ""
  },
  {
    "id": "Q539",
    "originalId": "LK1126",
    "text": "下面哪种方法可以减小话筒或耳机用音频电缆可能感生的射频电流？",
    "options": [
      {
        "letter": "A",
        "text": "在电缆外面穿套铁氧体磁环"
      },
      {
        "letter": "B",
        "text": "在电缆芯线中串联低通滤波器"
      },
      {
        "letter": "C",
        "text": "在电缆前端添置话筒放大器"
      },
      {
        "letter": "D",
        "text": "在电缆芯线中串联带通滤波器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.1.3",
    "type": "MC1-0624",
    "image": ""
  },
  {
    "id": "Q540",
    "originalId": "LK0264",
    "text": "业余收发信机面板上 RIT 的中文名称及其代表的意义是：",
    "options": [
      {
        "letter": "A",
        "text": "接收增量调谐，在接收频率的主调谐不变的基础上，对接收频率进行附加微调"
      },
      {
        "letter": "B",
        "text": "发射增量调谐，在发射频率的主调谐不变的基础上，对发射频率进行附加微调"
      },
      {
        "letter": "C",
        "text": "异频收发，接收和发射使用互相独立的频率"
      },
      {
        "letter": "D",
        "text": "清除信道频率存贮器的所有数据"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0625",
    "image": ""
  },
  {
    "id": "Q541",
    "originalId": "LK0265",
    "text": "业余收发信机面板上 XIT 的中文名称及其代表的意义是：",
    "options": [
      {
        "letter": "A",
        "text": "发射增量调谐，在发射频率的主调谐不变的基础上，对发射频率进行附加微调"
      },
      {
        "letter": "B",
        "text": "接收增量调谐，在接收频率的主调谐不变的基础上，对接收频率进行附加微调"
      },
      {
        "letter": "C",
        "text": "异频收发，接收和发射使用互相独立的频率"
      },
      {
        "letter": "D",
        "text": "清除信道频率存贮器的所有数据"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0626",
    "image": ""
  },
  {
    "id": "Q542",
    "originalId": "LK0266",
    "text": "业余收发信机面板上 SPLIT 的中文名称及其代表的意义是：",
    "options": [
      {
        "letter": "A",
        "text": "异频收发，接收和发射使用互相独立的频率"
      },
      {
        "letter": "B",
        "text": "发射增量调谐，在发射频率的主调谐不变的基础上，对发射频率进行附加微调"
      },
      {
        "letter": "C",
        "text": "接收增量调谐，在接收频率的主调谐不变的基础上，对接收频率进行附加微调"
      },
      {
        "letter": "D",
        "text": "清除信道频率存贮器的所有数据"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0627",
    "image": ""
  },
  {
    "id": "Q543",
    "originalId": "LK0861",
    "text": "业余电台的异频收发操作方式（SPLIT）主要适用于什么场景？",
    "options": [
      {
        "letter": "A",
        "text": "大量电台持续地同时回答本台的呼叫，造成严重的信号堆叠（pile-up）。此时可要求各台在高于本台主载波大约 2-5kHz 的频率上异频抢答，以免各台都无法听清本台的信号"
      },
      {
        "letter": "B",
        "text": "双方处于不同的国际无线电分区，工作频段或方式存在一定差异，但是需要相互通联"
      },
      {
        "letter": "C",
        "text": "两个业余电台不想让其他业余电台听到完整的对话内容"
      },
      {
        "letter": "D",
        "text": "某个业余电台使用了独立的收信和发信设备，且确实无法使之同频工作"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.2.1",
    "type": "MC2-0628",
    "image": ""
  },
  {
    "id": "Q544",
    "originalId": "LK1133",
    "text": "下列哪项功能可以使听上去声调偏高或偏低的 SSB 或 CW 信号变得正常？",
    "options": [
      {
        "letter": "A",
        "text": "RIT"
      },
      {
        "letter": "B",
        "text": "中频带宽选择"
      },
      {
        "letter": "C",
        "text": "SQL 控制深度"
      },
      {
        "letter": "D",
        "text": "AGC 释放速度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0629",
    "image": ""
  },
  {
    "id": "Q545",
    "originalId": "LX",
    "text": "有些收发信机带有 CW-R 功能，可以反转接收等幅电报时所用的边带。该功能有利于：",
    "options": [
      {
        "letter": "A",
        "text": "减少或消除其他信号的干扰。"
      },
      {
        "letter": "B",
        "text": "产生 CW 信号的相反边带，以显著抵消噪声干扰"
      },
      {
        "letter": "C",
        "text": "使相同接收带宽内的信号容量翻一番"
      },
      {
        "letter": "D",
        "text": "防止误触电键，意外发出信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0630",
    "image": ""
  },
  {
    "id": "Q546",
    "originalId": "LX",
    "text": "有些收发信机带有 QSK 功能，即“全插入”或“full break-in”。具体含义是：",
    "options": [
      {
        "letter": "A",
        "text": "该机接收机可以在所发电码的间隙中接收信号"
      },
      {
        "letter": "B",
        "text": "操作员需要在每次发送结束时手动切换收发开关"
      },
      {
        "letter": "C",
        "text": "激活该功能可以提高自动键控器的发送速度"
      },
      {
        "letter": "D",
        "text": "激活该功能可以提高发射机的输出功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0631",
    "image": ""
  },
  {
    "id": "Q547",
    "originalId": "LX",
    "text": "具有多种带宽选择的接收机有什么优点？",
    "options": [
      {
        "letter": "A",
        "text": "可以为所用的通联方式选择适合的接收带宽，提高收信信噪比"
      },
      {
        "letter": "B",
        "text": "可以为同时运行的多个并行接收机分配不同的带宽间隔"
      },
      {
        "letter": "C",
        "text": "可以同时接收相同带宽的不同调制方式的信号"
      },
      {
        "letter": "D",
        "text": "可以为每种带宽分别指配独立接收机，同时守听不同的信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0632",
    "image": ""
  },
  {
    "id": "Q548",
    "originalId": "LK0704",
    "text": "业余通信接收机的中频滤波器带宽有 100Hz、400Hz、2.7kHz 和 6kHz 几档选择。如果要为接收 CW、SSB、AM 和 FT8 方式的信号选择合适的档位，应该依次为：",
    "options": [
      {
        "letter": "A",
        "text": "CW 选用 100Hz 或 400Hz"
      },
      {
        "letter": "B",
        "text": "SSB 选用 2.7kHz"
      },
      {
        "letter": "C",
        "text": "AM 选用 6kHz"
      },
      {
        "letter": "D",
        "text": "FT8 选用 400Hz"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.2.1",
    "type": "MC3-0633",
    "image": ""
  },
  {
    "id": "Q549",
    "originalId": "LX",
    "text": "我们总是希望接收机的接收带宽与当前操作方式下的必要带宽相匹配。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "可以获得最佳的收信信噪比"
      },
      {
        "letter": "B",
        "text": "可以得到最佳的接收机输入阻抗"
      },
      {
        "letter": "C",
        "text": "可以最大化接收机的动态范围"
      },
      {
        "letter": "D",
        "text": "可以看到波段内更多的信号活动，更利于收获 DX 通联"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0634",
    "image": ""
  },
  {
    "id": "Q550",
    "originalId": "LK1178",
    "text": "参加 VHF 业余无线电竞赛或进行 EME 通信实验时，我们可能需要为接收机添置外置式射频前置放大器。这种设备通常应安装在整个收发信系统的什么地方？",
    "options": [
      {
        "letter": "A",
        "text": "在天线与接收机之间"
      },
      {
        "letter": "B",
        "text": "在发射机功放的后面"
      },
      {
        "letter": "C",
        "text": "在发射机和天调之间"
      },
      {
        "letter": "D",
        "text": "在接收机音频输出端"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0635",
    "image": ""
  },
  {
    "id": "Q551",
    "originalId": "LK1123",
    "text": "用来增强滤除杂散发射的外置低通滤波器应装在业余无线电设备的什么地方？",
    "options": [
      {
        "letter": "A",
        "text": "发信机与天线之间"
      },
      {
        "letter": "B",
        "text": "发信机与收信机之间"
      },
      {
        "letter": "C",
        "text": "发信机与电源之间"
      },
      {
        "letter": "D",
        "text": "发信机与话筒之间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0636",
    "image": ""
  },
  {
    "id": "Q552",
    "originalId": "LK0685",
    "text": "开展多人多机 HF 竞赛时，为了尽力预防发射机的谐波干扰工作在倍频频段的接收机，我们可在发射机与天线之间串联一个与操作波段相匹配的 LC 低通或带通滤波器。关于这样的滤波器，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "滤波器的阶数越高，抑制倍频干扰的效果越好"
      },
      {
        "letter": "B",
        "text": "滤波器的阶数越低，抑制倍频干扰的效果越好"
      },
      {
        "letter": "C",
        "text": "滤波器的阶数越高，损耗的功率越小"
      },
      {
        "letter": "D",
        "text": "滤波器的阶数越高，耐受的功率越大"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0637",
    "image": ""
  },
  {
    "id": "Q553",
    "originalId": "LK1181",
    "text": "短截线滤波器有时也叫分支线滤波器（coax stub），是利用馈线制作的带通或带阻滤波器，时有见于业余无线电比赛设施中。对于这种滤波器，以下描述正确的有：",
    "options": [
      {
        "letter": "A",
        "text": "40 米波段的 1/4 波长（电长度）末端短路同轴电缆：通过 40 米和 15 米信号，短路 20米和 10 米波段的谐波"
      },
      {
        "letter": "B",
        "text": "40 米波段的 1/4 波长（电长度）末端开路同轴电缆：通过 20 米和 10 米信号，短路 40米和 15 米波段的谐波"
      },
      {
        "letter": "C",
        "text": "40 米波段的 1/2 波长（电长度）末端短路同轴电缆：通过 40 米和 15 米信号，短路 20米和 10 米波段的谐波"
      },
      {
        "letter": "D",
        "text": "40 米波段的 1/2 波长（电长度）末端开路同轴电缆：通过 20 米和 10 米信号，短路 40米和 10 米波段的谐波"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.2.1",
    "type": "MC2-0638",
    "image": ""
  },
  {
    "id": "Q554",
    "originalId": "LX",
    "text": "某些收发信机具有 RX ANT 接口。这种接口是用来：",
    "options": [
      {
        "letter": "A",
        "text": "连接一副独立的接收天线"
      },
      {
        "letter": "B",
        "text": "连接外部的独立接收机"
      },
      {
        "letter": "C",
        "text": "通过 3dB 耦合器连至发射天线"
      },
      {
        "letter": "D",
        "text": "通过前置放大器连至发射天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.1",
    "type": "MC1-0639",
    "image": ""
  },
  {
    "id": "Q555",
    "originalId": "LX",
    "text": "某些收发信机内置了辅助接收机，主要用于：",
    "options": [
      {
        "letter": "A",
        "text": "使用独立的接收天线以任意频率独立调谐，实现异频操作"
      },
      {
        "letter": "B",
        "text": "使用独立的接收天线与主接收机同频工作，实现分集接收"
      },
      {
        "letter": "C",
        "text": "将 I/Q 基带信号输出至耳机接口，以实现独立的 RTTY 解码"
      },
      {
        "letter": "D",
        "text": "将中频信号输出至 IF 接口，以连接独立的波段频谱显示器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.2.1",
    "type": "MC2-0640",
    "image": ""
  },
  {
    "id": "Q556",
    "originalId": "LX",
    "text": "分集接收用多个接收机同时捕获同一信号，以获取更完整的信息并使信号更易辩识。但是，为收发信机的辅助接收机架设用于分集接收的独立接收天线时需注意：",
    "options": [
      {
        "letter": "A",
        "text": "这种天线应距主天线远一些；例如，至少 1 个工作波长"
      },
      {
        "letter": "B",
        "text": "这种天线的极化最好与主天线正交；例如，分别使用水平和垂直天线"
      },
      {
        "letter": "C",
        "text": "为捕获更多信息，我们要为这种天线安装前置放大器"
      },
      {
        "letter": "D",
        "text": "如果天线是宽带的，我们必须为其安装外置式波段预选器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.2.1",
    "type": "MC2-0641",
    "image": ""
  },
  {
    "id": "Q557",
    "originalId": "LX",
    "text": "参加比赛或进行 DX 联络时，我们或许需要一台独立运行的 SDR 接收机来辅助 CW 或 FT8解码软件的运行，以获取更多系数，提高通联成绩。如果这类接收机是使用 USB 接口的便携产品，我们需为之准备：",
    "options": [
      {
        "letter": "A",
        "text": "PC 机、SDR 接收机软件、CW 或 FT8 等解码软件，以及分流音频数据流的桥接软件"
      },
      {
        "letter": "B",
        "text": "C/C++、Python 或 Rust 等开发环境，为编写 SDR 软件做好准备"
      },
      {
        "letter": "C",
        "text": "Octave 或 Anaconda 等科学计算/大规模数据处理软件，为编写解码模块做好准备"
      },
      {
        "letter": "D",
        "text": "带 USB 接口的示波器或频谱仪，以将 SDR 接收机接入，并将所收信号做可视化展示"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.2",
    "type": "MC1-0642",
    "image": ""
  },
  {
    "id": "Q558",
    "originalId": "LX",
    "text": "收发信机与线性功率放大器相互连接会用到那些接口？",
    "options": [
      {
        "letter": "A",
        "text": "射频接口"
      },
      {
        "letter": "B",
        "text": "PTT 控制接口"
      },
      {
        "letter": "C",
        "text": "ALC 接口"
      },
      {
        "letter": "D",
        "text": "AGC 接口"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.2.3",
    "type": "MC3-0643",
    "image": ""
  },
  {
    "id": "Q559",
    "originalId": "LX",
    "text": "为什么使用线性功率放大器时需要连接一条自动电平控制 （ALC）线？",
    "options": [
      {
        "letter": "A",
        "text": "防止过驱动产生的大量互调成分干扰邻近频率"
      },
      {
        "letter": "B",
        "text": "降低放大器的谐波失真，防止干扰倍频频率"
      },
      {
        "letter": "C",
        "text": "均衡信号的频响，确保信号的音色不变"
      },
      {
        "letter": "D",
        "text": "使经放大的信号峰均比更佳，更易辩识"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.3",
    "type": "MC1-0644",
    "image": ""
  },
  {
    "id": "Q560",
    "originalId": "LX",
    "text": "在多机比赛场地中使用 HF 线性功率放大器时，我们会设法提高输出信号的纯净程度，以免工作于倍频频段的其他操作员受到谐波的影响。可用的方法为：",
    "options": [
      {
        "letter": "A",
        "text": "在线性放大器的输出端与天线之间串联工作于倍频频段的陷波器"
      },
      {
        "letter": "B",
        "text": "在电台的射频输出端与放大器的输入端之间串联工作于倍频频段的带通滤波器"
      },
      {
        "letter": "C",
        "text": "在线性放大器的输出端与天线之间串联工作于操作频段的陷波器"
      },
      {
        "letter": "D",
        "text": "在电台的射频输出端与放大器的输入端之间串联工作于倍频频段的低通滤波器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.3",
    "type": "MC1-0645",
    "image": ""
  },
  {
    "id": "Q561",
    "originalId": "LX",
    "text": "调整电子三极管 HF 线性功率放大器的一般方法为：",
    "options": [
      {
        "letter": "A",
        "text": "调整“Tune”使屏极电流最小，调整“Load”使输出功率最大，然后反复微调几次"
      },
      {
        "letter": "B",
        "text": "调整“Tune”使屏极电流最大，调整“Load”使输出功率最大，然后反复微调几次"
      },
      {
        "letter": "C",
        "text": "调整“Tune”使输出功率最大，调整“Load”使天线端的 SWR 最小，然后反复微调几次"
      },
      {
        "letter": "D",
        "text": "调整“Tune”使天线端的 SWR 最小，调整“Load”使输出功率最大，然后反复微调几次"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.3",
    "type": "MC1-0646",
    "image": ""
  },
  {
    "id": "Q562",
    "originalId": "LK1225",
    "text": "正规生产的电子管 HF 线性放大器一般都在射频输出端对地并联一个电感量很大的射频扼流圈。其作用是：",
    "options": [
      {
        "letter": "A",
        "text": "将输出端直流接地，以在机内屏极耦合电容意外击穿时短路暴露的直流高压并辅助熔断交流供电线路的保险丝"
      },
      {
        "letter": "B",
        "text": "将输出端直流接地。这既可以泄放雷击电流，又可以阻碍静电放电引起的 QRN 窜入接收机，从而确保正常收信"
      },
      {
        "letter": "C",
        "text": "作为放大器调谐匹配电路的一部分，这可以增加调谐电路的感抗，从而拓宽 160 米和 80米波段的阻抗匹配范围"
      },
      {
        "letter": "D",
        "text": "旁路频率较低的信号。例如，避免强大的 MF 广播信号经天线进入接收机"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.3",
    "type": "MC1-0647",
    "image": ""
  },
  {
    "id": "Q563",
    "originalId": "LK1226",
    "text": "电子管线性放大器的机箱盖板内侧通常装有一个联锁开关。若取下盖板则开关立即断开。这种开关的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "断开市电输入，降低维修人员误触机内高压的可能性"
      },
      {
        "letter": "B",
        "text": "断开射频输入，防止机内高功率射频能量灼伤维修者"
      },
      {
        "letter": "C",
        "text": "断开灯丝供电，防止电子管持续发热，阻碍维修工作"
      },
      {
        "letter": "D",
        "text": "断开风机电源，防止飞转的叶轮伤及下手工作的人士"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.2.3",
    "type": "MC1-0648",
    "image": ""
  },
  {
    "id": "Q564",
    "originalId": "LK0420",
    "text": "发射天线的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "把发射机输出的射频信号转化为无线电波"
      },
      {
        "letter": "B",
        "text": "利用天线的增益放大发射机的输出功率"
      },
      {
        "letter": "C",
        "text": "将发射机输出的射频信号转化为音频信号"
      },
      {
        "letter": "D",
        "text": "将发射机输出的射频信号转化为红外线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0649",
    "image": ""
  },
  {
    "id": "Q565",
    "originalId": "LK0421",
    "text": "接收天线的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "把空间的无线电波转化为接收机中的射频电信号"
      },
      {
        "letter": "B",
        "text": "利用天线的增益放大空间的无线电波并将之传向接收机"
      },
      {
        "letter": "C",
        "text": "将空间的无线电波转化为接收机中的音频信号"
      },
      {
        "letter": "D",
        "text": "将空间的无线电波转化为红外线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0650",
    "image": ""
  },
  {
    "id": "Q566",
    "originalId": "LK0926",
    "text": "关于天线的增益，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "待测天线最大辐射方向上的辐射功率密度与基准天线对应值的比值"
      },
      {
        "letter": "B",
        "text": "与参考天线相比，被测天线在某个方向上使信号增强的程度"
      },
      {
        "letter": "C",
        "text": "天线辐射的电波功率与输入到天线的射频功率之比"
      },
      {
        "letter": "D",
        "text": "天线发热耗散的功率与输入到天线的射频功率之比"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.1",
    "type": "MC2-0651",
    "image": ""
  },
  {
    "id": "Q567",
    "originalId": "LK0929",
    "text": "以 dBi 为单位的天线增益是指：",
    "options": [
      {
        "letter": "A",
        "text": "待测天线最大辐射方向上的辐射功率密度与理想点源天线对应值之比的 dB 值"
      },
      {
        "letter": "B",
        "text": "待测天线最大辐射方向上的辐射功率密度与半波长偶极天线对应值之比的 dB 值"
      },
      {
        "letter": "C",
        "text": "待测天线最大辐射方向上的辐射功率密度与 1/4 波长地网天线对应值之比的 dB 值"
      },
      {
        "letter": "D",
        "text": "待测天线最大辐射方向及其（180°）反方向的辐射功率密度测量值之比的 dB 值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0652",
    "image": ""
  },
  {
    "id": "Q568",
    "originalId": "LK0976",
    "text": "什么是“理想点源天线”？对业余无线电又有什么意义？",
    "options": [
      {
        "letter": "A",
        "text": "存在于理论中的一种小到一个点，可将发射机输出的全部射频能量都转化为各向同性且均匀辐射的电磁波的假想天线；用作比较实际天线辐射性能的一种全向基准天线"
      },
      {
        "letter": "B",
        "text": "一种用于专业通信的增益极高的专用天线，在业余无线电中没有应用价值"
      },
      {
        "letter": "C",
        "text": "仅用于无线电测试的一种标准接收天线，发射效果不佳，对业余无线电无用"
      },
      {
        "letter": "D",
        "text": "一种带宽近乎无限的高级天线的专利名称，业余无线电业务不需要宽带天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0653",
    "image": ""
  },
  {
    "id": "Q569",
    "originalId": "LK0930",
    "text": "以 dBd 为单位的天线增益是指：",
    "options": [
      {
        "letter": "A",
        "text": "待测天线最大辐射方向上的辐射功率密度与半波长偶极天线对应值之比的 dB 值"
      },
      {
        "letter": "B",
        "text": "待测天线最大辐射方向上的辐射功率密度与理想点源天线对应值之比的 dB 值"
      },
      {
        "letter": "C",
        "text": "待测天线最大辐射方向上的辐射功率密度与 1/4 波长垂直天线对应值之比的 dB 值"
      },
      {
        "letter": "D",
        "text": "待测天线最大辐射方向及其（180°）反方向的辐射功率密度测量值之比的 dB 值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0654",
    "image": ""
  },
  {
    "id": "Q570",
    "originalId": "LK1112",
    "text": "半波振子是能够辐射电波的一种实用天线。为了获得最低输入阻抗，人们通常从中点为这种振子馈电。这就构成了具有两个 1/4 波长不同电极性区域的谐振偶极天线，亦称半波长偶极天线。这种天线的增益规定为 0dBd。那么相比理想点源天线，其增益为：",
    "options": [
      {
        "letter": "A",
        "text": "2.15dBi"
      },
      {
        "letter": "B",
        "text": "6dBi"
      },
      {
        "letter": "C",
        "text": "3dBi"
      },
      {
        "letter": "D",
        "text": "1.64dBi"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0655",
    "image": ""
  },
  {
    "id": "Q571",
    "originalId": "LK0931",
    "text": "某商品天线说明书给出的天线增益指标以 dB 为单位。其意义为：",
    "options": [
      {
        "letter": "A",
        "text": "该指标未指明计算方法和所用基准，缺乏参考价值"
      },
      {
        "letter": "B",
        "text": "待测天线最大辐射方向上的辐射功率密度与理想点源天线对应值之比的 dB 值"
      },
      {
        "letter": "C",
        "text": "待测天线最大辐射方向上的辐射功率密度与 1/4 波长垂直天线对应值之比的 dB 值"
      },
      {
        "letter": "D",
        "text": "待测天线最大辐射方向及其（180°）反方向的辐射功率密度测量值之比的 dB 值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0656",
    "image": ""
  },
  {
    "id": "Q572",
    "originalId": "LK0918",
    "text": "我们之所以称垂直接地天线为“全向天线”，是因为：",
    "options": [
      {
        "letter": "A",
        "text": "这种天线在水平方向上没有指向性"
      },
      {
        "letter": "B",
        "text": "这种天线在垂直方向上没有指向性"
      },
      {
        "letter": "C",
        "text": "这种天线的 E 面和 H 面方向图均为正圆"
      },
      {
        "letter": "D",
        "text": "这种天线辐射各向同性的球面波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0657",
    "image": ""
  },
  {
    "id": "Q573",
    "originalId": "LK0904",
    "text": "如需垂直接地天线在大体为零仰角的水平发射方向上具有主辐射瓣并可以与同轴电缆直接耦合，则振子长度应选为：",
    "options": [
      {
        "letter": "A",
        "text": "1/4 波长"
      },
      {
        "letter": "B",
        "text": "1/2 波长"
      },
      {
        "letter": "C",
        "text": "1/8 波长"
      },
      {
        "letter": "D",
        "text": "3/2 波长"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0658",
    "image": ""
  },
  {
    "id": "Q574",
    "originalId": "LK0919",
    "text": "关于振子长度为 1/4 波长的垂直接地天线的最大辐射方向，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "在水平方向上是全向的"
      },
      {
        "letter": "B",
        "text": "在垂直方向上有指向性，且辐射仰角稍大于 0°"
      },
      {
        "letter": "C",
        "text": "其 E 面方向图为“8”字形"
      },
      {
        "letter": "D",
        "text": "其 H 面方向图为“8”字形"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.1",
    "type": "MC2-0659",
    "image": ""
  },
  {
    "id": "Q575",
    "originalId": "LK1215",
    "text": "关于大多数手持电台随附的“橡胶天线”，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "就电台的一般持握方式而言，电波的垂直极化分量要强一些"
      },
      {
        "letter": "B",
        "text": "相对于全尺寸天线，“橡胶天线”的发射与接收增益都低一些"
      },
      {
        "letter": "C",
        "text": "如果橡胶护套内的天线是螺旋加感的，则电波是旋转极化的"
      },
      {
        "letter": "D",
        "text": "如果橡胶护套某处开裂，则振子会迅速解体，天线随即报废"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.1",
    "type": "MC2-0660",
    "image": ""
  },
  {
    "id": "Q576",
    "originalId": "LX",
    "text": "在车内使用手持电台和俗称“橡胶天线”的柔性天线进行通信可能遇到什么问题？",
    "options": [
      {
        "letter": "A",
        "text": "车体的屏蔽作用影响信号强度"
      },
      {
        "letter": "B",
        "text": "大量电波反射回天线，抬升 SWR"
      },
      {
        "letter": "C",
        "text": "影响电台散热"
      },
      {
        "letter": "D",
        "text": "行车噪声影响通话质量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0661",
    "image": ""
  },
  {
    "id": "Q577",
    "originalId": "LX",
    "text": "如果架设天线时发现场地附近有电线等市电供电装置，你该怎么办？",
    "options": [
      {
        "letter": "A",
        "text": "应确保在风雨中意外掉落的天线部件不落入供电装置的安全距离内。例如，35 千伏及以下电压时至少 1 米"
      },
      {
        "letter": "B",
        "text": "应确保供电装置带来的电源噪声不会影响电台接收弱信号的能力。通常，这个距离应至少 10 倍于工作波长"
      },
      {
        "letter": "C",
        "text": "必须防止通信和供电两套系统之间发生打火拉弧事故。经验上讲，按照每千伏 1 毫米算出的间距是足够的"
      },
      {
        "letter": "D",
        "text": "应确保天线转动到平行于供电系统的电线时，电线不会成为反射单元，即，应至少保持1/4 波长以上距离"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0662",
    "image": ""
  },
  {
    "id": "Q578",
    "originalId": "LK0925",
    "text": "垂直接地天线（GP）由电气长度为 1/4 波长的垂直振子加上一个“镜像地平面”构成，因十分简洁而被大量应用于手持和车载业余通信。但是，这种天线的工作有效性往往不如理论预计的那么完美，特别是在波长较长的波段。造成这种情况的原因及改善方法是：",
    "options": [
      {
        "letter": "A",
        "text": "缺乏有效接地镜像；GP 天线必须有足够大的导电平面以形成振子镜像，否则谐振频率和阻抗都与理论值有出入。为此，应尽量用大面积金属导体与天线/馈线的接地端相连"
      },
      {
        "letter": "B",
        "text": "1/4 波长垂直振子显然是太短了。改成 1/2 波长即可解决问题"
      },
      {
        "letter": "C",
        "text": "1/4 波长垂直振子显然是太短了。在振子当中串联加感线圈即可解决问题"
      },
      {
        "letter": "D",
        "text": "天线与电缆直接相连，匹配不佳。在天线和电缆之间加接“巴伦”即可解决问题"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0663",
    "image": ""
  },
  {
    "id": "Q579",
    "originalId": "LX",
    "text": "关于天线的加载，以下描述正确的是",
    "options": [
      {
        "letter": "A",
        "text": "为天线振子串联电感线圈，延长振子的电气长度"
      },
      {
        "letter": "B",
        "text": "为车载天线增添弹簧减震器"
      },
      {
        "letter": "C",
        "text": "为柔性不足的天线基座增加螺旋式延长器"
      },
      {
        "letter": "D",
        "text": "为八木天线的拉纤加接弹性张力器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0664",
    "image": ""
  },
  {
    "id": "Q580",
    "originalId": "LK0944",
    "text": "谐振的垂直接地天线的振子长度最短也要 1/4 波长。如果架设天线时因条件受限而不得不将振子缩短，那么在振子之中串入电感可以补偿失去的感抗，使天线谐振在所需频率上。为了提高发射效率，应在振子的什么位置串入电感需根据架设条件择优确定。下图给出三种加感方案。假设振子（灰色部分）均等长，则 A、B、C 三种方案按发射效率可排列为：",
    "options": [
      {
        "letter": "A",
        "text": "C-顶部加感，B-中部加感，A-底部加感"
      },
      {
        "letter": "B",
        "text": "A-底部加感，B-中部加感，C-顶部加感"
      },
      {
        "letter": "C",
        "text": "A-底部加感，C-顶部加感，B-中部加感"
      },
      {
        "letter": "D",
        "text": "B-中部加感，A-底部加感，C-顶部加感"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0665",
    "image": "LK0944.jpg"
  },
  {
    "id": "Q581",
    "originalId": "LK0206",
    "text": "甲天线增益 6.15dBi，乙天线增益 1dBd。若两副天线按同样条件架设并用同样功率来驱动，则在它们最大发射方向的同一远方地点接收时，两天线给出的信号功率关系为：",
    "options": [
      {
        "letter": "A",
        "text": "甲天线的信号功率为乙天线的两倍"
      },
      {
        "letter": "B",
        "text": "甲天线的信号功率为乙天线的 1/2"
      },
      {
        "letter": "C",
        "text": "甲天线的信号功率为乙天线的 5.15 倍"
      },
      {
        "letter": "D",
        "text": "甲天线的信号功率为乙天线的 6.15 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0666",
    "image": ""
  },
  {
    "id": "Q582",
    "originalId": "LK0207",
    "text": "甲天线增益 0dBd，乙天线增益 2dBi。若两副天线按同样条件架设用用同样功率来驱动，则在它们最大发射方向的同一远方地点接收时，两天线给出的信号功率关系为：",
    "options": [
      {
        "letter": "A",
        "text": "甲天线的效果与半波长偶极天线相当，乙天线比甲天线略差"
      },
      {
        "letter": "B",
        "text": "甲天线效果为零，不能工作，乙天线效果比甲天线好 2 倍"
      },
      {
        "letter": "C",
        "text": "甲天线的效果与半波长偶极天线相当，乙天线发射的信号强度比甲天线好 2dB"
      },
      {
        "letter": "D",
        "text": "甲、乙天线的效果实际相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0667",
    "image": ""
  },
  {
    "id": "Q583",
    "originalId": "LK0932",
    "text": "有两款 VHF 垂直全向天线作发射之用。甲天线增益为 4.5dBd，而乙天线的是 5.85dBi。它们在远处某接收天线中产生的信号功率有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "来自甲天线的信号比乙天线的强 0.8dB"
      },
      {
        "letter": "B",
        "text": "来自乙天线的信号比甲天线的强 1.35dB"
      },
      {
        "letter": "C",
        "text": "来自甲天线的信号比乙天线的强 1.35dB"
      },
      {
        "letter": "D",
        "text": "来自乙天线的信号比甲天线的强 3.5dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0668",
    "image": ""
  },
  {
    "id": "Q584",
    "originalId": "LK0933",
    "text": "有两款 VHF 垂直全向天线作发射之用。甲天线增益为 2.9dBd，而乙天线的是 5.85dBi。它们在远处某接收天线中产生的信号功率有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "来自乙天线的信号比甲天线的强 0.8dB"
      },
      {
        "letter": "B",
        "text": "来自乙天线的信号比甲天线的强 2.95dB"
      },
      {
        "letter": "C",
        "text": "来自甲天线的信号比乙天线的强 2.95dB"
      },
      {
        "letter": "D",
        "text": "来自乙天线的信号比甲天线的强 7.1dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.1",
    "type": "MC1-0669",
    "image": ""
  },
  {
    "id": "Q585",
    "originalId": "LK1185",
    "text": "业余无线电爱好者讨论天线系统时常会提及术语 “驻波比（SWR）”。其含义为：",
    "options": [
      {
        "letter": "A",
        "text": "连接到传输线终端的负载阻抗与传输线自身的特性阻抗相匹配的程度"
      },
      {
        "letter": "B",
        "text": "负载与传输线完美匹配时，传输线之中没有驻波，因此驻波比为 1:1"
      },
      {
        "letter": "C",
        "text": "如果负载与传输线不匹配，传向负载的部分能量会沿传输线返回始端"
      },
      {
        "letter": "D",
        "text": "如果传输线中出现驻波，则调整传输线始端的信源阻抗可使驻波归零"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.3.2",
    "type": "MC3-0670",
    "image": ""
  },
  {
    "id": "Q586",
    "originalId": "LK1186",
    "text": "通联时，如果收发信机的 SWR 表显示读数 4:1，则意味着：",
    "options": [
      {
        "letter": "A",
        "text": "从发射机的输出端口来看，天线系统的整体匹配情况不佳"
      },
      {
        "letter": "B",
        "text": "从发射机的输出端口来看，天线系统的整体阻抗为 200 欧或 12.5 欧"
      },
      {
        "letter": "C",
        "text": "天线系统的辐射效率仅为 25%"
      },
      {
        "letter": "D",
        "text": "天线系统的整体增益仅为 4dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0671",
    "image": ""
  },
  {
    "id": "Q587",
    "originalId": "LK1187",
    "text": "小强用长度不短于 1/4 波长的 50 欧馈线连接收发信机和天线。发信时，他发现 SWR 表的指示为 3:1。该值意味着：",
    "options": [
      {
        "letter": "A",
        "text": "馈线中任意位置上的最大峰值电压与最小峰值电压之比为 3:1"
      },
      {
        "letter": "B",
        "text": "馈线中任意位置上的最大峰值电流与最小峰值电流之比为 3:1"
      },
      {
        "letter": "C",
        "text": "馈线中的驻波致使平均射频电压高于常值，这降低了导体损耗"
      },
      {
        "letter": "D",
        "text": "馈线中的驻波致使平均射频电流高于常值，这降低了介质损耗"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.2",
    "type": "MC2-0672",
    "image": ""
  },
  {
    "id": "Q588",
    "originalId": "LX",
    "text": "多数发射机都在 SWR 超过一定值时降低输出功率。这是为了：",
    "options": [
      {
        "letter": "A",
        "text": "保护发射机中的功率半导体器件"
      },
      {
        "letter": "B",
        "text": "防止烧断供电线路中的保险丝"
      },
      {
        "letter": "C",
        "text": "防止传输线上的驻波超过限值"
      },
      {
        "letter": "D",
        "text": "防止发射出去的无线电波带有过大的驻波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0673",
    "image": ""
  },
  {
    "id": "Q589",
    "originalId": "LK1188",
    "text": "用同轴电缆连接天线时，为什么驻波比趋于 1:1 为好？",
    "options": [
      {
        "letter": "A",
        "text": "降低电缆的损耗，使射频能量更有效地传输"
      },
      {
        "letter": "B",
        "text": "防止屏蔽层的外层辐射能量，导致射频干扰（RFI）"
      },
      {
        "letter": "C",
        "text": "延长天线的使用寿命"
      },
      {
        "letter": "D",
        "text": "延长发信机的使用寿命"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0674",
    "image": ""
  },
  {
    "id": "Q590",
    "originalId": "LK1222",
    "text": "以下哪种情况可能导致业余发信机显示的驻波比不稳定？",
    "options": [
      {
        "letter": "A",
        "text": "发信机、馈线或天线某处接触不良"
      },
      {
        "letter": "B",
        "text": "发信机采用相位调制"
      },
      {
        "letter": "C",
        "text": "发信机过调制"
      },
      {
        "letter": "D",
        "text": "馈线温度过高"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0675",
    "image": ""
  },
  {
    "id": "Q591",
    "originalId": "LK1223",
    "text": "SSB 通联时，即使天馈系统没有故障，有时候 SWR 显示也不稳定。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "SSB 话音的幅度变化本质上影响测量的稳定性。改用 CW 方式进行测量效果更好"
      },
      {
        "letter": "B",
        "text": "SSB 话音包含幅度与相位两种信息，并非所有天线均能同时给出稳定的响应"
      },
      {
        "letter": "C",
        "text": "出现这种情况是因为发信机过调制，应调整话筒增益以解决"
      },
      {
        "letter": "D",
        "text": "出现这种情况说明发信机出了故障，应停机检修"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0676",
    "image": ""
  },
  {
    "id": "Q592",
    "originalId": "LK0701",
    "text": "我们都知道发射机与天线间的馈线应当与天线阻抗匹配。否则，馈线中的驻波会使沿线各处的电压和电流周期性起伏。然而，业余电台所用的发射机与电网中的发电机同属交流电源，我们却从未在连到电网的电线中观察到驻波现象。这是为什么？",
    "options": [
      {
        "letter": "A",
        "text": "电网供电的频率很低，导线长度与波长相比微不足道，驻波现象不明显而已"
      },
      {
        "letter": "B",
        "text": "业余电台所用的馈线和电网中的电线工作原理不同，所以现象不尽相同"
      },
      {
        "letter": "C",
        "text": "适用于供电技术和业余无线电的电学理论本质不同，所以现象自然不同"
      },
      {
        "letter": "D",
        "text": "电网的供电能力远超发射机所能提供的电功率，这就迫使线路各处电压趋同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.2",
    "type": "MC1-0677",
    "image": ""
  },
  {
    "id": "Q593",
    "originalId": "LK1218",
    "text": "对于业余无线电通信，最适合的同轴电缆特性阻抗为：",
    "options": [
      {
        "letter": "A",
        "text": "50 欧姆"
      },
      {
        "letter": "B",
        "text": "75 欧姆"
      },
      {
        "letter": "C",
        "text": "93 欧姆"
      },
      {
        "letter": "D",
        "text": "300 欧姆"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0678",
    "image": ""
  },
  {
    "id": "Q594",
    "originalId": "LK1219",
    "text": "传输线具有多种类型，但是为什么架设业余电台通常选用同轴电缆？",
    "options": [
      {
        "letter": "A",
        "text": "因为它易于使用，与架设环境之中其他物体间的互耦也很低"
      },
      {
        "letter": "B",
        "text": "因为它的损耗比其他任何种类的馈线都低"
      },
      {
        "letter": "C",
        "text": "因为相比其他馈线，它可以传输更大的功率"
      },
      {
        "letter": "D",
        "text": "因为很明显，它比其他任何馈线都便宜"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0679",
    "image": ""
  },
  {
    "id": "Q595",
    "originalId": "LK0910",
    "text": "在为业余电台选购用作天线馈线的同轴电缆时应关注什么电气参数？",
    "options": [
      {
        "letter": "A",
        "text": "特性阻抗"
      },
      {
        "letter": "B",
        "text": "指定频率下每百米的传输损耗"
      },
      {
        "letter": "C",
        "text": "芯线的截面积和最大额定电流"
      },
      {
        "letter": "D",
        "text": "电介质的耐压和最高允许温升"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.3",
    "type": "MC2-0680",
    "image": ""
  },
  {
    "id": "Q596",
    "originalId": "LK1217",
    "text": "我们都知道要为业余电台选配损耗较低的馈线。但是，馈线的损耗会导致什么问题？",
    "options": [
      {
        "letter": "A",
        "text": "发信功率降低"
      },
      {
        "letter": "B",
        "text": "收信信噪比下降"
      },
      {
        "letter": "C",
        "text": "驻波比的测量值永远高于 1:1"
      },
      {
        "letter": "D",
        "text": "发出的信号失真"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.3",
    "type": "MC2-0681",
    "image": ""
  },
  {
    "id": "Q597",
    "originalId": "LK1189",
    "text": "受潮是同轴电缆失效损坏的主要原因。湿气渗透会导致：",
    "options": [
      {
        "letter": "A",
        "text": "介质损耗变大"
      },
      {
        "letter": "B",
        "text": "屏蔽层或芯线氧化、锈蚀，甚至断路"
      },
      {
        "letter": "C",
        "text": "速度因子逐渐大于 1"
      },
      {
        "letter": "D",
        "text": "驻波比越来越小于 1"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.3",
    "type": "MC2-0682",
    "image": ""
  },
  {
    "id": "Q598",
    "originalId": "LK1190",
    "text": "将同轴电缆装于室外时，为什么要求电缆外皮（护套）能够耐受紫外线？",
    "options": [
      {
        "letter": "A",
        "text": "如果电缆护套被紫外线破坏，电缆就会受潮损坏"
      },
      {
        "letter": "B",
        "text": "紫外线会激励非线性导行模式，导致互调和谐波发射"
      },
      {
        "letter": "C",
        "text": "紫外线会与射频信号相互混频，导致相当复杂的宽带干扰"
      },
      {
        "letter": "D",
        "text": "紫外线会促使电缆升温，并因此增加电缆的功率损耗"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0683",
    "image": ""
  },
  {
    "id": "Q599",
    "originalId": "LK1191",
    "text": "相比填充有机介质的同轴电缆，空气介质同轴电缆的劣势是什么？",
    "options": [
      {
        "letter": "A",
        "text": "空气介质同轴电缆需要特别措施来防止湿气渗透"
      },
      {
        "letter": "B",
        "text": "空气介质同轴电缆只能用于 30MHz 以下业余频段"
      },
      {
        "letter": "C",
        "text": "空气介质同轴电缆的每百米损耗太大"
      },
      {
        "letter": "D",
        "text": "空气介质同轴电缆不能在冰点以下工作"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0684",
    "image": ""
  },
  {
    "id": "Q600",
    "originalId": "LK1220",
    "text": "如果通过同轴电缆的信号频率升高，则同轴电缆的",
    "options": [
      {
        "letter": "A",
        "text": "传输损耗增加"
      },
      {
        "letter": "B",
        "text": "反射功率升高"
      },
      {
        "letter": "C",
        "text": "特性阻抗变高"
      },
      {
        "letter": "D",
        "text": "输入驻波比变大"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0685",
    "image": ""
  },
  {
    "id": "Q601",
    "originalId": "LK1224",
    "text": "以下给出了一些同等外径的馈线。其中哪一种在 VHF/UHF 频段损耗更低？",
    "options": [
      {
        "letter": "A",
        "text": "空气介质同轴硬电缆"
      },
      {
        "letter": "B",
        "text": "独立屏蔽分组双绞线"
      },
      {
        "letter": "C",
        "text": "50 欧姆同轴软电缆"
      },
      {
        "letter": "D",
        "text": "75 欧姆同轴软电缆"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0686",
    "image": ""
  },
  {
    "id": "Q602",
    "originalId": "LK1221",
    "text": "对于 400MHz 或更高频率的信号，应当优先选用的同轴电缆连接器是：",
    "options": [
      {
        "letter": "A",
        "text": "N 型连接器"
      },
      {
        "letter": "B",
        "text": "M 型连接器"
      },
      {
        "letter": "C",
        "text": "RS-213 型连接器"
      },
      {
        "letter": "D",
        "text": "DB-23 型连接器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0687",
    "image": ""
  },
  {
    "id": "Q603",
    "originalId": "LX",
    "text": "关于 M 型同轴电缆连接器，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "这种连接器广泛应用于 HF 和 VHF 通信系统"
      },
      {
        "letter": "B",
        "text": "这种连接器使用了先进的螺纹式锁紧技术，防水防盗"
      },
      {
        "letter": "C",
        "text": "这种连接器使用了卡式锁紧技术，便于快拔快插"
      },
      {
        "letter": "D",
        "text": "这种连接器制造成本很高，通常用于微波通信系统"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.3",
    "type": "MC1-0688",
    "image": ""
  },
  {
    "id": "Q604",
    "originalId": "LK0988",
    "text": "关于垂直天线，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "该天线发射垂直极化波，电场与地面垂直"
      },
      {
        "letter": "B",
        "text": "垂直天线是全向天线，其 H 面方向图是全向的"
      },
      {
        "letter": "C",
        "text": "该天线发射垂直极化波，磁场与地面垂直"
      },
      {
        "letter": "D",
        "text": "垂直天线是全向天线，其 E 面方向图是全向的"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.4",
    "type": "MC2-0689",
    "image": ""
  },
  {
    "id": "Q605",
    "originalId": "LK0989",
    "text": "关于水平极化偶极天线，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "通过该天线发射的电磁波，电场平行于地面"
      },
      {
        "letter": "B",
        "text": "该天线水平面上的（E 面）方向图呈“8”字展开"
      },
      {
        "letter": "C",
        "text": "通过该天线发射的电磁波，电场垂直于地面"
      },
      {
        "letter": "D",
        "text": "该天线垂直面上的（H 面）方向图呈“8”字展开"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.4",
    "type": "MC2-0690",
    "image": ""
  },
  {
    "id": "Q606",
    "originalId": "LK0950",
    "text": "甲、乙业余电台相距 10 千米，均使用 1/2 波长水平偶极天线进行 UHF 通联。现其中一方改用 1/2 波长垂直偶极天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变差"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变好"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0691",
    "image": ""
  },
  {
    "id": "Q607",
    "originalId": "LK0951",
    "text": "甲、乙业余电台相距 10 千米，分别使用 1/2 波长水平和垂直偶极天线进行 UHF 通联。现双方都改用 1/2 波长垂直偶极天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变差"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0692",
    "image": ""
  },
  {
    "id": "Q608",
    "originalId": "LK0952",
    "text": "甲、乙业余电台相距 10 千米，分别使用 1/2 波长水平和垂直偶极天线进行 UHF 通联。现双方都改用 1/2 波长水平偶极天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变差"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0693",
    "image": ""
  },
  {
    "id": "Q609",
    "originalId": "LK0953",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和右旋圆极化天线彼此对指进行 UHF通联。现双方都改用左旋圆极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变差"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0694",
    "image": ""
  },
  {
    "id": "Q610",
    "originalId": "LK0954",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和右旋圆极化天线彼此对指进行 UHF通联。现双方都改用右旋圆极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变差"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0695",
    "image": ""
  },
  {
    "id": "Q611",
    "originalId": "LK0955",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和半波长水平偶极天线彼此对指进行UHF 通联。现乙台改用半波长垂直极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果不变"
      },
      {
        "letter": "B",
        "text": "通信效果变差"
      },
      {
        "letter": "C",
        "text": "通信效果变好"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0696",
    "image": ""
  },
  {
    "id": "Q612",
    "originalId": "LK0956",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和半波长水平偶极天线彼此对指进行UHF 通联。现甲台改用右旋圆极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果不变"
      },
      {
        "letter": "B",
        "text": "通信效果变差"
      },
      {
        "letter": "C",
        "text": "通信效果变好"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0697",
    "image": ""
  },
  {
    "id": "Q613",
    "originalId": "LK0957",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和半波长水平偶极天线彼此对指进行UHF 通联。现乙台改用右旋圆极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变差"
      },
      {
        "letter": "B",
        "text": "通信效果变好"
      },
      {
        "letter": "C",
        "text": "通信效果不变"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0698",
    "image": ""
  },
  {
    "id": "Q614",
    "originalId": "LK0958",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和半波长水平偶极天线彼此对指进行UHF 通联。现乙台改用左旋圆极化天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果变差"
      },
      {
        "letter": "C",
        "text": "通信效果不变"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0699",
    "image": ""
  },
  {
    "id": "Q615",
    "originalId": "LK0959",
    "text": "甲、乙业余电台相距 10 千米，分别使用左旋圆极化和右旋圆极化天线彼此对指进行 UHF通联。现双方均改用半波长水平偶极天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果变好"
      },
      {
        "letter": "B",
        "text": "通信效果不变"
      },
      {
        "letter": "C",
        "text": "通信效果变差"
      },
      {
        "letter": "D",
        "text": "通信效果的变化不确定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0700",
    "image": ""
  },
  {
    "id": "Q616",
    "originalId": "LK0990",
    "text": "假设接收和发射天线均使用半波长偶极天线，则在地面台站间的近距离通联中，接收和发射天线的最佳极化方式应当安排为：",
    "options": [
      {
        "letter": "A",
        "text": "接收和发射天线均位于垂直于两台站连线的平面内，极化保持一致"
      },
      {
        "letter": "B",
        "text": "接收和发射天线均位于垂直于两台站连线的平面内，极化彼此正交"
      },
      {
        "letter": "C",
        "text": "接收和发射天线的极化应当平行于两台站之间的连线"
      },
      {
        "letter": "D",
        "text": "发射天线垂直极化，接收天线的极化应当平行于两台站之间的连线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0701",
    "image": ""
  },
  {
    "id": "Q617",
    "originalId": "LK0992",
    "text": "右旋极化波是指在垂直于传播方向的任意平面上，沿传播方向观察时，电场矢量为随时间向右（顺时针）旋转的椭圆或圆极化波。如果地面上某业余电台在观测业余卫星时发现从卫星到达该台的无线电波的电场是顺时针旋转的，则该信号的极化方式为：",
    "options": [
      {
        "letter": "A",
        "text": "左旋椭圆极化或圆极化"
      },
      {
        "letter": "B",
        "text": "右旋椭圆极化或圆极化"
      },
      {
        "letter": "C",
        "text": "垂直极化"
      },
      {
        "letter": "D",
        "text": "水平极化"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0702",
    "image": ""
  },
  {
    "id": "Q618",
    "originalId": "LK0993",
    "text": "在视距通联中，已知发射天线为指向接收点的左旋圆极化天线，接收天线的最佳极化方式为：",
    "options": [
      {
        "letter": "A",
        "text": "指向发射点的左旋圆极化"
      },
      {
        "letter": "B",
        "text": "指向发射点的右旋圆极化"
      },
      {
        "letter": "C",
        "text": "垂直极化"
      },
      {
        "letter": "D",
        "text": "水平极化"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0703",
    "image": ""
  },
  {
    "id": "Q619",
    "originalId": "LK0994",
    "text": "某卫星下行链路采用右旋圆极化天线，从北向南飞行，天线始终指向地球的南极。如果地面上某业余电台采用圆极化天线自动跟踪该卫星，则该台所用天线的最佳极化方式应当为：",
    "options": [
      {
        "letter": "A",
        "text": "卫星过顶前为右旋圆极化，过顶后为左旋圆极化"
      },
      {
        "letter": "B",
        "text": "卫星过顶后为右旋圆极化，过顶前为左旋圆极化"
      },
      {
        "letter": "C",
        "text": "最佳方向始终为右旋圆极化"
      },
      {
        "letter": "D",
        "text": "最佳方向始终为左旋圆极化"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0704",
    "image": ""
  },
  {
    "id": "Q620",
    "originalId": "LK0995",
    "text": "已知某卫星下行信号的发射天线是指向地面的偶极天线。由于卫星不断旋转，地面台站所收电波的极化方向就会不断变化。为了不至极化问题致使接收中断，接收天线可以是：",
    "options": [
      {
        "letter": "A",
        "text": "指向卫星的右旋或左旋圆极化天线"
      },
      {
        "letter": "B",
        "text": "垂直极化天线"
      },
      {
        "letter": "C",
        "text": "水平极化天线"
      },
      {
        "letter": "D",
        "text": "极化方向平行于卫星与地面电台之间连线的天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0705",
    "image": ""
  },
  {
    "id": "Q621",
    "originalId": "LK0946",
    "text": "某业余电台使用半波垂直偶极天线通联时，对方所收信号的强度为 S4。现发射功率不变，发信方改用增益为 8.15dBi 的八木天线（最大辐射方向和极化均不变），则对方所收信号的强度变为：【提示：收信机信号强度指示从 S1 至 S9 每档增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S5"
      },
      {
        "letter": "B",
        "text": "S6"
      },
      {
        "letter": "C",
        "text": "S7"
      },
      {
        "letter": "D",
        "text": "S8"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0706",
    "image": ""
  },
  {
    "id": "Q622",
    "originalId": "LK0947",
    "text": "某业余电台使用半波长垂直偶极天线发射时，对方所收信号的强度为 S4。现发射功率不变，发信方改用增益为 12dBd 的八木天线（最大辐射方向和极化均不变），则对方所收信号的强度变为：【提示：收信机信号强度指示从 S1 至 S9 每档增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S6"
      },
      {
        "letter": "B",
        "text": "S5"
      },
      {
        "letter": "C",
        "text": "S7"
      },
      {
        "letter": "D",
        "text": "S8"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0707",
    "image": ""
  },
  {
    "id": "Q623",
    "originalId": "LK0948",
    "text": "两位业余爱好者使用半波长垂直偶极天线相互通联，双方所收信号的强度均为 S4。现双方发射功率不变，都改用增益为 8.15dBi 的八木天线（最大辐射方向和极化均不变）再次联络，则双方信号的强度变为：【提示：收信机信号强度指示 S1 至 S9 每档增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S6"
      },
      {
        "letter": "B",
        "text": "S4"
      },
      {
        "letter": "C",
        "text": "S5"
      },
      {
        "letter": "D",
        "text": "S7"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.4",
    "type": "MC1-0708",
    "image": ""
  },
  {
    "id": "Q624",
    "originalId": "LK0971",
    "text": "即便是在辽阔的平原或广袤的戈壁，我们所收本地 VHF/UHF 信号的强度也会伴随设备的移动而发生周期性的变化。主要原因是：",
    "options": [
      {
        "letter": "A",
        "text": "来自直射和地面反射等多个路径的无线电波相互干涉，相消或相长（多径效应）"
      },
      {
        "letter": "B",
        "text": "发信和收信地点间的气流导致电波传播路径弯曲，发生频率漂移（多普勒效应）"
      },
      {
        "letter": "C",
        "text": "无论收信发信，地面各处的电导率不尽相同会导致设备移动时的接地电阻变化"
      },
      {
        "letter": "D",
        "text": "发信过程中，设备与大地间分布电容的改变导致天线失谐，发射功率随之改变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.5",
    "type": "MC1-0709",
    "image": ""
  },
  {
    "id": "Q625",
    "originalId": "LK1065",
    "text": "在 VHF/UHF 频段通联时的一个现象，如果远方电台给出的信号报告很差，则仅需移动几步或将工作频率改变数十千赫就可能显著改善通信效果。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "多径传播。经不同路径达到天线的电波存在相位和幅度差异，相互干涉，相消或相长"
      },
      {
        "letter": "B",
        "text": "发射机与接收机之间的距离，以及工作频率的变化都会显著改变路径损耗"
      },
      {
        "letter": "C",
        "text": "大气扰动影响"
      },
      {
        "letter": "D",
        "text": "地磁活动影响"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.5",
    "type": "MC1-0710",
    "image": ""
  },
  {
    "id": "Q626",
    "originalId": "LK1103",
    "text": "多径传播对 UHF 或 VHF 波段数据通信的影响是：",
    "options": [
      {
        "letter": "A",
        "text": "可能使误码率上升"
      },
      {
        "letter": "B",
        "text": "如果是 FM 通联，则影响微不足道，不可察觉"
      },
      {
        "letter": "C",
        "text": "随着传播路径的增加，数据通信速率线性减小"
      },
      {
        "letter": "D",
        "text": "随着传播路径的增加，数据通信速率线性增加"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.5",
    "type": "MC1-0711",
    "image": ""
  },
  {
    "id": "Q627",
    "originalId": "LK0812",
    "text": "使用 VSB 方式进行 ATV 通信时，即使信号相对较强，有时所收图像的边缘也有重影。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "多径传播。来自不同路径的信号到达接收天线的时延不同，造成重影"
      },
      {
        "letter": "B",
        "text": "发射天线的 VSWR 过高。如果信号在馈线中多次往返于发射机和天线，会造成重影"
      },
      {
        "letter": "C",
        "text": "天线的极化配置出错。极化不同的信号同时到达天线，导致重影"
      },
      {
        "letter": "D",
        "text": "遭遇了重放干扰。或许是某中继台也转发了这个信号，其到达接收天线，导致重影"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.3.5",
    "type": "MC2-0712",
    "image": ""
  },
  {
    "id": "Q628",
    "originalId": "LK1068",
    "text": "决定超短波视距传播距离极限的主要因素是：",
    "options": [
      {
        "letter": "A",
        "text": "发射天线和接收天线距地面的相对高度"
      },
      {
        "letter": "B",
        "text": "发射天线和接收天线距海平面的绝对高度"
      },
      {
        "letter": "C",
        "text": "发射天线和接收天线的挂高波长比，即，离地高度除以波长"
      },
      {
        "letter": "D",
        "text": "发射天线和接收天线的增益"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0713",
    "image": ""
  },
  {
    "id": "Q629",
    "originalId": "LK1104",
    "text": "有时，相隔数百千米的业余电台可以实现 VHF/UHF 超视距直接联络。可能的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "信号的传播路径中出现了大气波导现象"
      },
      {
        "letter": "B",
        "text": "有飞行器在空中反射了电波"
      },
      {
        "letter": "C",
        "text": "降雨增加了大地电导率，增强了电波传播"
      },
      {
        "letter": "D",
        "text": "每当冬季，植被的减少都有利于电波传播"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0714",
    "image": ""
  },
  {
    "id": "Q630",
    "originalId": "LK1117",
    "text": "有时，我们可以在 6 米或 2 米业余波段中收到上千千米外的“超视距传播”信号。这与下列哪种现象密切相关？",
    "options": [
      {
        "letter": "A",
        "text": "突发 E 层的传播"
      },
      {
        "letter": "B",
        "text": "流星余迹反向散射"
      },
      {
        "letter": "C",
        "text": "D 层的吸收所致"
      },
      {
        "letter": "D",
        "text": "灰线传播"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0715",
    "image": ""
  },
  {
    "id": "Q631",
    "originalId": "LK1120",
    "text": "是什么导致了对流层的大气波导现象？",
    "options": [
      {
        "letter": "A",
        "text": "大气高空逆温"
      },
      {
        "letter": "B",
        "text": "太阳黑子和/或太阳耀斑"
      },
      {
        "letter": "C",
        "text": "飓风或龙卷风所致的上升气流"
      },
      {
        "letter": "D",
        "text": "雷暴时大量闪电所产生的等离子体"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0716",
    "image": ""
  },
  {
    "id": "Q632",
    "originalId": "LK1116",
    "text": "如果你收到了一个上千千米外的 VHF 信号，最可能的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "信号经电离层的突发 E 层反射而来"
      },
      {
        "letter": "B",
        "text": "信号由微波接力电台合力 QSP 过来"
      },
      {
        "letter": "C",
        "text": "信号被附近的雷雨区反射而来"
      },
      {
        "letter": "D",
        "text": "信号经宇宙射线的电离路径传导过来"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0717",
    "image": ""
  },
  {
    "id": "Q633",
    "originalId": "LK1118",
    "text": "有时，VHF/UHF 业余波段中可能出现远达 500 千米的“超视距传播”信号。这与下列哪种现象密切相关？",
    "options": [
      {
        "letter": "A",
        "text": "对流层散射"
      },
      {
        "letter": "B",
        "text": "D 层折射"
      },
      {
        "letter": "C",
        "text": "F2 层折射"
      },
      {
        "letter": "D",
        "text": "法拉第旋转"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.3.6",
    "type": "MC1-0718",
    "image": ""
  },
  {
    "id": "Q634",
    "originalId": "LK0702",
    "text": "由半波长偶极天线和传输线构成的天线系统的理想工作状态应当是：",
    "options": [
      {
        "letter": "A",
        "text": "天线上只有驻波，馈线上只有行波"
      },
      {
        "letter": "B",
        "text": "天线上只有行波，馈线上只有驻波"
      },
      {
        "letter": "C",
        "text": "天线和馈线上都只有驻波"
      },
      {
        "letter": "D",
        "text": "天线和馈线上都只有行波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0719",
    "image": ""
  },
  {
    "id": "Q635",
    "originalId": "LK0973",
    "text": "天线振子的端点效应、信号的相移等因素影响电磁波沿振子传播的速度。修整天线时，我们应考虑振子的实际长度会因此略短于计算值。这就是所谓的“缩短系数”。其经验值为：",
    "options": [
      {
        "letter": "A",
        "text": "0.95"
      },
      {
        "letter": "B",
        "text": "1.05"
      },
      {
        "letter": "C",
        "text": "0.707"
      },
      {
        "letter": "D",
        "text": "1.414"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0720",
    "image": ""
  },
  {
    "id": "Q636",
    "originalId": "LK0917",
    "text": "制作工作频率为 f（单位：兆赫）的半波长偶极天线。每边振子的长度（单位：米）约为：",
    "options": [
      {
        "letter": "A",
        "text": "71.3/f"
      },
      {
        "letter": "B",
        "text": "48.8/f"
      },
      {
        "letter": "C",
        "text": "142.6/f"
      },
      {
        "letter": "D",
        "text": "150/f"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0721",
    "image": ""
  },
  {
    "id": "Q637",
    "originalId": "LK0974",
    "text": "电波在介质中的传播速度低于光速，其与光速的比值称为“速度因子”，是介电常数平方根的倒数。聚乙烯介质同轴电缆我们最为常用。其速度因子约为：",
    "options": [
      {
        "letter": "A",
        "text": "0.65"
      },
      {
        "letter": "B",
        "text": "1.54"
      },
      {
        "letter": "C",
        "text": "1.95"
      },
      {
        "letter": "D",
        "text": "1.0006"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0722",
    "image": ""
  },
  {
    "id": "Q638",
    "originalId": "LK0916",
    "text": "制作工作频率为 f（单位：兆赫兹）的某相控天线阵列需要长度为 1/4 波长的同轴电缆，大致长度（单位：米）应当为：",
    "options": [
      {
        "letter": "A",
        "text": "48.8/f"
      },
      {
        "letter": "B",
        "text": "149.8/f"
      },
      {
        "letter": "C",
        "text": "75/f"
      },
      {
        "letter": "D",
        "text": "71.3/f"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0723",
    "image": ""
  },
  {
    "id": "Q639",
    "originalId": "LK0903",
    "text": "如需偶极天线谐振于工作频率之时具有低输入阻抗，振子的总长度可以是：",
    "options": [
      {
        "letter": "A",
        "text": "1/2 波长的奇数倍"
      },
      {
        "letter": "B",
        "text": "1/2 波长的整数倍"
      },
      {
        "letter": "C",
        "text": "1/2 波长的偶数倍"
      },
      {
        "letter": "D",
        "text": "1/4 波长的奇数倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0724",
    "image": ""
  },
  {
    "id": "Q640",
    "originalId": "LK0905",
    "text": "偶极天线谐振于所需工作频率的充分和必要条件是：",
    "options": [
      {
        "letter": "A",
        "text": "两臂总电气长度为 1/2 工作波长的整数倍"
      },
      {
        "letter": "B",
        "text": "两臂总电气长度为 1/4 工作波长的整数倍"
      },
      {
        "letter": "C",
        "text": "两臂总电气长度为 1/2 工作波长的奇数倍"
      },
      {
        "letter": "D",
        "text": "两臂总电气长度为工作波长的整数倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0725",
    "image": ""
  },
  {
    "id": "Q641",
    "originalId": "LK0906",
    "text": "下列哪种谐振偶极天线在垂直于振子的方向上具有峰值增益：",
    "options": [
      {
        "letter": "A",
        "text": "振子长度为 1/2 工作波长"
      },
      {
        "letter": "B",
        "text": "振子长度为 1/8 个工作波长"
      },
      {
        "letter": "C",
        "text": "振子长度为 1/4 工作波长"
      },
      {
        "letter": "D",
        "text": "振子长度为 3/2 工作波长"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0726",
    "image": ""
  },
  {
    "id": "Q642",
    "originalId": "LK1113",
    "text": "提高偶极天线谐振频率的方法是：",
    "options": [
      {
        "letter": "A",
        "text": "将振子截短一些"
      },
      {
        "letter": "B",
        "text": "在振子某处串联线圈"
      },
      {
        "letter": "C",
        "text": "将振子加长一些"
      },
      {
        "letter": "D",
        "text": "为振子添加“X”形电容帽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0727",
    "image": ""
  },
  {
    "id": "Q643",
    "originalId": "LK0908",
    "text": "在天线和馈线之间常会接入一个俗称“巴伦（BALUN）”的部件。“巴伦”的由来是：",
    "options": [
      {
        "letter": "A",
        "text": "平衡与不平衡两个英文字头的组合"
      },
      {
        "letter": "B",
        "text": "发明平衡-不平衡转换器的人的名字"
      },
      {
        "letter": "C",
        "text": "著名天线阻抗匹配理论家的名字"
      },
      {
        "letter": "D",
        "text": "大牌宽带匹配网络的制造商名字"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0728",
    "image": ""
  },
  {
    "id": "Q644",
    "originalId": "LK0909",
    "text": "在天线和馈线之间常会接入一个俗称“巴伦（BALUN）”的部件。它的主要功能是：",
    "options": [
      {
        "letter": "A",
        "text": "在平衡电路和不平衡电路之间传递射频能量，阻断两者之间的任何寄生耦合"
      },
      {
        "letter": "B",
        "text": "实现天线和馈线之间的自动阻抗匹配"
      },
      {
        "letter": "C",
        "text": "展宽天线的工作频带"
      },
      {
        "letter": "D",
        "text": "降低天线的驻波比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0729",
    "image": ""
  },
  {
    "id": "Q645",
    "originalId": "LK0907",
    "text": "一副两臂电气长度各为 1/4 波长的偶极天线，断开中点，通过巴伦馈电，测得谐振频率为 f，输入阻抗为 Z。如果总长不变，但是将断开的馈电点向一侧偏移 1/8 波长，则天线特性的最明显变化是：",
    "options": [
      {
        "letter": "A",
        "text": "阻抗 Z 显著变大，相比之下谐振频率 f 变化不大"
      },
      {
        "letter": "B",
        "text": "阻抗 Z 显著变小，相比之下谐振频率 f 变化不大"
      },
      {
        "letter": "C",
        "text": "谐振频率 f 显著升高，相比之下阻抗 Z 变化不大"
      },
      {
        "letter": "D",
        "text": "谐振频率 f 显著下降，相比之下阻抗 Z 变化不大"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0730",
    "image": ""
  },
  {
    "id": "Q646",
    "originalId": "LY1034",
    "text": "南北走向的水平极化偶极天线，中点馈电，通过特性阻抗为 50 欧的电缆连接到输入/输出阻抗为 50 欧的收发信机，通信对象在东西方向。选择天线长度的原则是：",
    "options": [
      {
        "letter": "A",
        "text": "当振子两臂各为四分之一波长时，通信效果是最好的"
      },
      {
        "letter": "B",
        "text": "当振子两臂各为二分之一波长时，通信效果是最好的"
      },
      {
        "letter": "C",
        "text": "当振子两臂各为四分之三波长时，通信效果是最好的"
      },
      {
        "letter": "D",
        "text": "驻波比接近 1:1 时通信效果才会最好，无关振子长度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0731",
    "image": ""
  },
  {
    "id": "Q647",
    "originalId": "LK0920",
    "text": "短波水平偶极类天线（含八木天线等）的发射仰角主要由下列因素决定：",
    "options": [
      {
        "letter": "A",
        "text": "由天线的辐射和大地的反射叠加而成。天线距地面的高度与波长的比值影响仰角"
      },
      {
        "letter": "B",
        "text": "由天线振子导体所指的方向决定"
      },
      {
        "letter": "C",
        "text": "由八木天线主梁所指的方向决定"
      },
      {
        "letter": "D",
        "text": "由天线振子的长度所决定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0732",
    "image": ""
  },
  {
    "id": "Q648",
    "originalId": "LK0921",
    "text": "架设短波天线时，应大致按照如下原则选择天线的发射仰角：",
    "options": [
      {
        "letter": "A",
        "text": "远距离通信选择低发射仰角，近距离通信选择高发射仰角"
      },
      {
        "letter": "B",
        "text": "近距离通信选择低发射仰角，远距离通信选择高发射仰角"
      },
      {
        "letter": "C",
        "text": "近处开阔时选择低发射仰角，近处有建筑物时选择高发射仰角"
      },
      {
        "letter": "D",
        "text": "较低频率通信选择低发射仰角，较高频率通信选择高发射仰角"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0733",
    "image": ""
  },
  {
    "id": "Q649",
    "originalId": "LK0922",
    "text": "架设短波天线时，应大致按照如下原则规划天线的架设高度：",
    "options": [
      {
        "letter": "A",
        "text": "远距离通信选择较高的高度，近距离通信选择较低的高度"
      },
      {
        "letter": "B",
        "text": "远距离通信选择较低的高度，近距离通信选择较高的高度"
      },
      {
        "letter": "C",
        "text": "近处有建筑物时选择较低的高度，近处开阔时选择较高的高度"
      },
      {
        "letter": "D",
        "text": "较低频率通信选择较高的高度，较高频率通信选择较低的高度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0734",
    "image": ""
  },
  {
    "id": "Q650",
    "originalId": "LK0923",
    "text": "在针对特定对象的 DX 通信中，计算天线最佳发射仰角的基本方法是：",
    "options": [
      {
        "letter": "A",
        "text": "根据所使用电离层的大致高度、通信对象的大致距离、电波在传播中经历电离层反射的次数，用简单几何方法计算"
      },
      {
        "letter": "B",
        "text": "根据通信对象所在的方位、地球半径、对方天线的高度、实际工作频率、太阳平均黑子数，查表计算"
      },
      {
        "letter": "C",
        "text": "根据通信对象所在的方位、通信方向上障碍物所遮挡的仰角、本台周围的大地电导率、实际工作频率，找公式计算"
      },
      {
        "letter": "D",
        "text": "根据通信双方的发射功率、天线极化、通信方向上障碍物所遮挡的仰角、太阳 10.7 cm 射电通量，找公式计算"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0735",
    "image": ""
  },
  {
    "id": "Q651",
    "originalId": "LK0924",
    "text": "收发信天线周边大地电导率对 HF 远距离通信的影响大致为：",
    "options": [
      {
        "letter": "A",
        "text": "大地电导率越高，大地的镜像作用越理想，天线的效果越好"
      },
      {
        "letter": "B",
        "text": "大地电导率越低，大地中的感生电流越弱，天线的效果越好"
      },
      {
        "letter": "C",
        "text": "HF 远距离通信依靠天波反射，与大地电导率无关"
      },
      {
        "letter": "D",
        "text": "大地电导率太高、太低都不好，最好是处于中间值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0736",
    "image": ""
  },
  {
    "id": "Q652",
    "originalId": "LX",
    "text": "如果将水平偶极天线的架高降低到距地面 1/10 波长处，其馈电点阻抗有什么变化？",
    "options": [
      {
        "letter": "A",
        "text": "下降"
      },
      {
        "letter": "B",
        "text": "上升"
      },
      {
        "letter": "C",
        "text": "电抗分量消失"
      },
      {
        "letter": "D",
        "text": "电阻分量消失"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0737",
    "image": ""
  },
  {
    "id": "Q653",
    "originalId": "LK1069",
    "text": "在导电良好的地面上，影响短波天线辐射仰角的主要因素是：",
    "options": [
      {
        "letter": "A",
        "text": "天线距地面的高度与波长之比"
      },
      {
        "letter": "B",
        "text": "天线的绝对高度，与波长无关"
      },
      {
        "letter": "C",
        "text": "天线离海平面的绝对高度"
      },
      {
        "letter": "D",
        "text": "天线振子或者八木天线主梁与地面之间的夹角"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0738",
    "image": ""
  },
  {
    "id": "Q654",
    "originalId": "LK0935",
    "text": "自己架设 HF 偶极天线时，如果因空间限制而无法将振子展开到在工作频率下自然谐振所需的长度，则可将电感线圈串入振子某处或干脆将整个振子都做成线圈以制成某种“加感天线”并通过调整电感量来获取所需谐振频率。关于这种天线，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "通过迭代修整线圈的电感量及其串入振子的位置，我们肯定可以获得与某个全尺寸天线等效的谐振频率和馈电点阻抗。但是，这种加感天线的辐射效率比全尺寸天线低"
      },
      {
        "letter": "B",
        "text": "无论是谐振频率、阻抗特性还是辐射效率，这种加感天线都不能媲美全尺寸天线"
      },
      {
        "letter": "C",
        "text": "只要设计得当，制作精心，调试得法，这种加感天线的效果与全尺寸天线一样好"
      },
      {
        "letter": "D",
        "text": "如果设计得当、制作精心、调试得法，这种加感天线的效果可以超越全尺寸天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0739",
    "image": ""
  },
  {
    "id": "Q655",
    "originalId": "LK0941",
    "text": "下图所示是我国业余无线电爱好者开展野外通信活动常用的 14/21/29MHz 三频段偶极天线。图中天线各段的电气长度应分别为：",
    "options": [
      {
        "letter": "A",
        "text": "A 为 28MHz 的 1/4 波长，A+B 为 21MHz 的 1/4 波长，A+B+C 为 14MHz 的 1/4 波长"
      },
      {
        "letter": "B",
        "text": "A 为 28MHz 的半波长，A+B 为 21MHz 的半波长，A+B+C 为 14MHz 的半波长"
      },
      {
        "letter": "C",
        "text": "A 为 28MHz 的 1/4 波长，B 为 21MHz 的 1/4 波长，C 为 14MHz 的 1/4 波长"
      },
      {
        "letter": "D",
        "text": "A 为 28MHz 的半波长，B 为 21MHz 的半波长，C 为 14MHz 的半波长"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0740",
    "image": "LK0941.jpg"
  },
  {
    "id": "Q656",
    "originalId": "LK0942",
    "text": "下图所示是我国业余无线电爱好者开展野外通信活动常用的 14/21/29MHz 三频段偶极天线。图中部件 A、B、C、D 的作用分别为：",
    "options": [
      {
        "letter": "A",
        "text": "A、D 为 21MHz 陷波器，B、C 为 28MHz 陷波器，即，分别谐振于 21MHz 和 28MHz 的并联谐振回路"
      },
      {
        "letter": "B",
        "text": "A、D 为 21MHz 陷波器，B、C 为 28MHz 陷波器，即，分别谐振于 21MHz 和 28MHz 的串联谐振回路"
      },
      {
        "letter": "C",
        "text": "A、D 为 14MHz 陷波器，B、C 为 21MHz 陷波器，即，分别谐振于 14MHz 和 21MHz 的并联谐振回路"
      },
      {
        "letter": "D",
        "text": "A、D 为 14MHz 陷波器，B、C 为 21MHz 陷波器，即，分别谐振于 14MHz 和 21MHz 的串联谐振回路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0741",
    "image": "LK0942.jpg"
  },
  {
    "id": "Q657",
    "originalId": "LK0943",
    "text": "谐振偶极天线的振子长度最短也要半个波长。如果架设天线时因条件受限而不得不将振子缩短，那么在振子之中串入电感可以补偿失去的感抗，使天线谐振在所需频率下。为了提高发射效率，应在振子的什么位置串入电感需根据架设条件择优确定。下图给出三种加感方案。假设振子（灰色部分）均等长，则 A、B、C 三种方案按发射效率可排列为：",
    "options": [
      {
        "letter": "A",
        "text": "C-顶部加感，B-中部加感，A-底部加感"
      },
      {
        "letter": "B",
        "text": "A-底部加感，B-中部加感，C-顶部加感"
      },
      {
        "letter": "C",
        "text": "A-底部加感，C-顶部加感，B-中部加感"
      },
      {
        "letter": "D",
        "text": "B-中部加感，A-底部加感，C-顶部加感"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0742",
    "image": "LK0943.jpg"
  },
  {
    "id": "Q658",
    "originalId": "LK0945",
    "text": "对于需要频繁改换频段的业余无线电业务，爱好者们有时会将所用频段的偶极振子并联起来一同馈电，构成一种用一根电缆即可操作的多频段天线。下图给出了一副由 7、14 和28MHz 半波长振子构成的多频段天线实例。关于其工作原理，以下分析正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "7MHz 振子以 3/2 波长方式工作于 21MHz，该天线由此工作在 7、14、21 和 28MHz 四个频段。由于不谐振的振子呈现高阻抗，所以并联后的总阻抗仍为 50 欧左右"
      },
      {
        "letter": "B",
        "text": "该天线工作于 7、14 和 28MHz。由于不谐振的振子呈现高阻抗，所以并联后的总阻抗仍为50 欧左右"
      },
      {
        "letter": "C",
        "text": "7MHz 振子以 3/2 波长方式工作于 21MHz，该天线由此工作在 7、14、21 和 28MHz 四个频段。由于每个振子的阻抗都在 50 欧上下，所以并联后的总阻抗降至 17 欧左右"
      },
      {
        "letter": "D",
        "text": "该天线工作于 7、14 和 28MHz。由于每个振子的阻抗都在 50 欧上下，所以并联后的总阻抗降至 17 欧左右"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.1",
    "type": "MC1-0743",
    "image": "LK0945.jpg"
  },
  {
    "id": "Q659",
    "originalId": "LK1210",
    "text": "什么是八木天线？",
    "options": [
      {
        "letter": "A",
        "text": "一种通过反射器和引向器来增强方向性的半波长偶极天线"
      },
      {
        "letter": "B",
        "text": "任何一种可以汇聚无线电波的方向性天线的统称"
      },
      {
        "letter": "C",
        "text": "八木秀次博士发明的一种全向天线"
      },
      {
        "letter": "D",
        "text": "一种具有八根水平振子的中心馈电天线，也叫 Octopus"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.2",
    "type": "MC1-0744",
    "image": ""
  },
  {
    "id": "Q660",
    "originalId": "LK0934",
    "text": "八木天线是在普通偶极天线（主振子）的基础上通过添加引向器和反射器而制成的一种定向天线。目视确定全尺寸八木天线发射方向的方法是：",
    "options": [
      {
        "letter": "A",
        "text": "比主振子短者为引向器，比主振子长者为反射器，引向器朝向最大辐射方向"
      },
      {
        "letter": "B",
        "text": "比主振子长者为引向器，比主振子短者为反射器，引向器朝向最大辐射方向"
      },
      {
        "letter": "C",
        "text": "比主振子短者为引向器，比主振子长者为反射器，反射器朝向最大辐射方向"
      },
      {
        "letter": "D",
        "text": "主振子的轴向为最大辐射方向"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.2",
    "type": "MC1-0745",
    "image": ""
  },
  {
    "id": "Q661",
    "originalId": "LX",
    "text": "八木天线的“前后比”是如何定义的？",
    "options": [
      {
        "letter": "A",
        "text": "主瓣辐射功率与反向辐射功率之比"
      },
      {
        "letter": "B",
        "text": "前向增益与理想点源天线增益之比"
      },
      {
        "letter": "C",
        "text": "导向器与反射器的数量之比"
      },
      {
        "letter": "D",
        "text": "导向器与驱动器的数量之比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.2",
    "type": "MC1-0746",
    "image": ""
  },
  {
    "id": "Q662",
    "originalId": "LK0939",
    "text": "行波天线依靠射频电流在长导线组成的连续匹配回路中行进而产生辐射。业余通信常用的行波天线有 T2FD 和贝伐列奇（Beverage）。与驻波天线相比，行波天线的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "没有自然谐振点；对长度要求不严格但通常需接近或大于一个波长"
      },
      {
        "letter": "B",
        "text": "对制作尺寸要求严格；没有自然谐振点"
      },
      {
        "letter": "C",
        "text": "在较宽频带内具有一系列自然谐振点；对长度要求严格"
      },
      {
        "letter": "D",
        "text": "可以依靠天线调谐器实现较宽频带内的匹配；对长度没有严格要求"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.3",
    "type": "MC1-0747",
    "image": ""
  },
  {
    "id": "Q663",
    "originalId": "LK0940",
    "text": "业余无线电通信中常用的行波天线，如 T2FD 和贝伐列奇（Beverage），其天线终端都接有无感电阻。关于该电阻的作用，正确说法是：",
    "options": [
      {
        "letter": "A",
        "text": "天线的电长度达到数个波长时，大部分能量都是边行进边辐射到空间，只有一小部分进入终端电阻耗散掉，以避免因反射而引起驻波"
      },
      {
        "letter": "B",
        "text": "该电阻相当于假负载。尽管这实现了宽带操作，却耗散了大部分能量"
      },
      {
        "letter": "C",
        "text": "无论天线有多长，输入功率的一半都会耗散在电阻上。这导致发射效率仅为 50%"
      },
      {
        "letter": "D",
        "text": "考虑大部分行波天线都是谐振天线，则串联电阻可以有效降低天线的有载 Q 值。这使天线的频率响应展宽，但是发射效率也因此降低"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.3",
    "type": "MC1-0748",
    "image": ""
  },
  {
    "id": "Q664",
    "originalId": "LK1114",
    "text": "小明在一条 20 米长的导线中点连接一个线圈，并将导线水平提升至稍高于 20 米的悬挂位置。线圈的另一端接有另一条长度为 20 米并垂向地面的导线。他将馈线的芯线与垂直导线相连，将馈线的屏蔽层连至地网。这种看似“T”形的天线，极化方式如何？",
    "options": [
      {
        "letter": "A",
        "text": "垂直"
      },
      {
        "letter": "B",
        "text": "水平"
      },
      {
        "letter": "C",
        "text": "垂直与水平分量各半"
      },
      {
        "letter": "D",
        "text": "正上方波束是旋转极化的"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.3",
    "type": "MC1-0749",
    "image": ""
  },
  {
    "id": "Q665",
    "originalId": "LK1115",
    "text": "为了降低辐射仰角，小明试着将 T2FD 天线的半边振子直立悬挂起来。他将折合振子的馈电端通过匹配变压器连至电缆的芯线，将带有吸收电阻的另一端与地网和电缆的屏蔽层相连。这种天线的极化方式为：",
    "options": [
      {
        "letter": "A",
        "text": "垂直"
      },
      {
        "letter": "B",
        "text": "水平"
      },
      {
        "letter": "C",
        "text": "右旋圆极化"
      },
      {
        "letter": "D",
        "text": "左旋圆极化"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.3",
    "type": "MC1-0750",
    "image": ""
  },
  {
    "id": "Q666",
    "originalId": "LK1212",
    "text": "关于环形天线，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "该天线发射的电磁波，磁场分量垂直于环所在的平面"
      },
      {
        "letter": "B",
        "text": "自然谐振的环形天线，半径刚好等于 1/4 波长"
      },
      {
        "letter": "C",
        "text": "这种天线的辐射角很高，仅适合低频段近距离通联"
      },
      {
        "letter": "D",
        "text": "在环中串入可变电容可显著抵消感抗，拓展工作带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.3",
    "type": "MC1-0751",
    "image": ""
  },
  {
    "id": "Q667",
    "originalId": "LK1214",
    "text": "如果架设天线的空间受限，则磁场耦合可调谐环形天线或许是一种选择。关于这种天线，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "通过调整激励单元与谐振单元的尺寸，我们可以获得接近 1:1 的输入 SWR"
      },
      {
        "letter": "B",
        "text": "谐振单元中的可变电容器应选用耐压较高的，这便于承载更大一些的输入功率"
      },
      {
        "letter": "C",
        "text": "谐振单元的尺寸越大，天线的发射效率越高。但是，可调谐的最高频率也越低"
      },
      {
        "letter": "D",
        "text": "这种天线对电场不敏感，损失一半的电磁能量，理论增益非常低"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.4.3",
    "type": "MC3-0752",
    "image": ""
  },
  {
    "id": "Q668",
    "originalId": "LK0961",
    "text": "开展野外通联活动或演练紧急情况下的通信程序时，爱好者们可能会发现，联络 100 至200 千米范围内的 HF 电台要比联络 300 至 500 千米外的更为棘手。好在有很多技术可用来解决这个问题，比较简单的有：",
    "options": [
      {
        "letter": "A",
        "text": "尝试使用较低的频段。例如白天 40 米，夜晚 80 米"
      },
      {
        "letter": "B",
        "text": "使用架设高度较低的水平偶极天线或端馈斜拉天线"
      },
      {
        "letter": "C",
        "text": "在偶极天线的下方装反射器，将主瓣调整至正上方"
      },
      {
        "letter": "D",
        "text": "使用 1 米以内外径的高效率磁场耦合谐振环形天线"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.4.4",
    "type": "MC3-0753",
    "image": ""
  },
  {
    "id": "Q669",
    "originalId": "LK0936",
    "text": "收发信机内置的或与收发信机相连的天线调谐器（俗称“天调”）有什么作用？",
    "options": [
      {
        "letter": "A",
        "text": "将天馈系统的输入阻抗变换为发射机所需的负载阻抗"
      },
      {
        "letter": "B",
        "text": "通过实现共轭匹配，整体提升天馈系统的工作效率"
      },
      {
        "letter": "C",
        "text": "允许某个天线在用作发射天线或接收天线时都谐振"
      },
      {
        "letter": "D",
        "text": "可根据发射机的当前工作频段自动切换适合的天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.5",
    "type": "MC1-0754",
    "image": ""
  },
  {
    "id": "Q670",
    "originalId": "LK1216",
    "text": "关于天线调谐器（俗称“天调”）可以改善通联效果的说法，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "天调可以补偿失配天线系统的参数，使发射机输出规定的射频功率"
      },
      {
        "letter": "B",
        "text": "天调可以实现天线系统的整体谐振，使天线振子的辐射效率大幅提升"
      },
      {
        "letter": "C",
        "text": "天调对失配天线系统的补偿消除了系统内的驻波，传输损耗随之降低"
      },
      {
        "letter": "D",
        "text": "天调是将失配天线所反射的能量化热耗散了。通联效果其实更差了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.5",
    "type": "MC1-0755",
    "image": ""
  },
  {
    "id": "Q671",
    "originalId": "LK0937",
    "text": "某天线通过 50 欧馈线与 50 欧输出阻抗的收发信机相连。现计划在天线电路中串入天线调谐器和通过式驻波功率计来补偿并监测天线的失配情况。理论上的最佳连接顺序为：",
    "options": [
      {
        "letter": "A",
        "text": "天线-天线调谐器-驻波功率计-馈线-收发信机"
      },
      {
        "letter": "B",
        "text": "天线-馈线-天线调谐器-驻波功率计-收发信机"
      },
      {
        "letter": "C",
        "text": "天线-天线调谐器-馈线-驻波功率计-收发信机"
      },
      {
        "letter": "D",
        "text": "天线-驻波功率计-天线调谐器-馈线-收发信机"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.5",
    "type": "MC1-0756",
    "image": ""
  },
  {
    "id": "Q672",
    "originalId": "LK0938",
    "text": "塔上某天线通过 50 欧馈线连至 50 欧输出阻抗的收发信机。现需要在天线电路中串入天线调谐器 ATU 和通过式驻波功率计 M 对天线的匹配情况进行补偿和监测。有四种方案可选：1：ATU 和 M 都在塔顶；2：ATU 和 M 都在塔底；3：ATU 在塔底，M 在机房；4：ATU 和 M都在机房。ATU 完成调谐时，若按天线系统整体效率从高到低为序，各方案可排列为：",
    "options": [
      {
        "letter": "A",
        "text": "方案 1 最好，方案 2、3 其次，方案 4 最差"
      },
      {
        "letter": "B",
        "text": "方案 4 最好，方案 2、3 其次，方案 1 最差"
      },
      {
        "letter": "C",
        "text": "方案 3 最好，方案 4 其次，方案 2 再其次，方案 1 最差"
      },
      {
        "letter": "D",
        "text": "方案 2 最好，方案 1 其次，方案 4 再其次，方案 3 最差"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.5",
    "type": "MC1-0757",
    "image": "LK0938.jpg"
  },
  {
    "id": "Q673",
    "originalId": "LK0209",
    "text": "《中华人民共和国无线电频率划分规定》脚注 5.67A 说“使用 135.7-137.8kHz 频段内频率的业余业务台站，其最大有效辐射功率不得超过 1 瓦（e.i.r.p.）”。其意思为，该频段的业余电台：",
    "options": [
      {
        "letter": "A",
        "text": "实际馈送到发射天线的功率不得超过 1 瓦除以天线的绝对增益比值 Gi 后得到的功率值"
      },
      {
        "letter": "B",
        "text": "发射机标称输出功率不得超过 1 瓦"
      },
      {
        "letter": "C",
        "text": "扣除馈线损耗后实际馈送到发射天线的功率不得超过 1 瓦"
      },
      {
        "letter": "D",
        "text": "扣除馈线和天线的总损耗后天线实际辐射的功率最大不得超过 1 瓦"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.6",
    "type": "MC1-0758",
    "image": ""
  },
  {
    "id": "Q674",
    "originalId": "LK0208",
    "text": "已知某天线的增益为 3.85dBd，馈入的功率为 10W，其等效全向辐射功率（e.i.r.p）为：",
    "options": [
      {
        "letter": "A",
        "text": "40W"
      },
      {
        "letter": "B",
        "text": "13.85W"
      },
      {
        "letter": "C",
        "text": "38.5W"
      },
      {
        "letter": "D",
        "text": "100W"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.6",
    "type": "MC1-0759",
    "image": ""
  },
  {
    "id": "Q675",
    "originalId": "LK0211",
    "text": "已知某天线的增益为 5.15dBi，馈入的功率为 10W，其有效辐射功率（e.r.p）为：",
    "options": [
      {
        "letter": "A",
        "text": "20W"
      },
      {
        "letter": "B",
        "text": "51.5W"
      },
      {
        "letter": "C",
        "text": "10W"
      },
      {
        "letter": "D",
        "text": "15.15W"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.4.6",
    "type": "MC1-0760",
    "image": ""
  },
  {
    "id": "Q676",
    "originalId": "LK1173",
    "text": "传输线通常用来连接电台与天线。比较常见的传输线有：",
    "options": [
      {
        "letter": "A",
        "text": "同轴电缆"
      },
      {
        "letter": "B",
        "text": "平行馈线"
      },
      {
        "letter": "C",
        "text": "波导"
      },
      {
        "letter": "D",
        "text": "波纹软管"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.5.1",
    "type": "MC3-0761",
    "image": ""
  },
  {
    "id": "Q677",
    "originalId": "LK0911",
    "text": "关于同轴电缆特性阻抗，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "外导体的内径与内导体的外径之比越大，特性阻抗越高"
      },
      {
        "letter": "B",
        "text": "绝缘介质的介电常数越小，特性阻抗越高"
      },
      {
        "letter": "C",
        "text": "外屏蔽层越致密，特性阻抗越高"
      },
      {
        "letter": "D",
        "text": "电缆的外径越粗，特性阻抗越高"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.1",
    "type": "MC2-0762",
    "image": ""
  },
  {
    "id": "Q678",
    "originalId": "LK0912",
    "text": "一根特性阻抗为 50 欧的同轴电缆的末端接有一个 50 欧姆负载电阻。如果用天线阻抗分析仪测量该电缆始端在不同频率下的阻抗，则读数为：",
    "options": [
      {
        "letter": "A",
        "text": "读数为电缆的特性阻抗 50 欧。该值与电缆的长度和工作频率均无关"
      },
      {
        "letter": "B",
        "text": "在电缆末端连接任何大小的电阻，在其始端都能测得相同的阻值。当前为 50 欧"
      },
      {
        "letter": "C",
        "text": "读数取决于电缆的电长度：1/4 波长奇数倍时接近无穷大；1/4 波长偶数倍时接近零"
      },
      {
        "letter": "D",
        "text": "读数取决于电缆的电长度：1/4 波长偶数倍时接近无穷大；1/4 波长奇数倍时接近零"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.1",
    "type": "MC1-0763",
    "image": ""
  },
  {
    "id": "Q679",
    "originalId": "LK0913",
    "text": "一根特性阻抗为 50 欧的同轴电缆的末端开路。如果用天线阻抗分析仪测量该电缆始端在不同频率下的阻抗，则读数为：",
    "options": [
      {
        "letter": "A",
        "text": "读数取决于电缆的电长度：1/4 波长偶数倍时接近无穷大；1/4 波长奇数倍时接近零"
      },
      {
        "letter": "B",
        "text": "读数取决于电缆的电长度：1/4 波长奇数倍时接近无穷大；1/4 波长偶数倍时接近零"
      },
      {
        "letter": "C",
        "text": "在电缆末端连接任何大小的电阻，在电缆始端都能测得相同的阻值。当前为无穷大"
      },
      {
        "letter": "D",
        "text": "读数为电缆的特性阻抗 50 欧。该值与电缆的长度和工作频率均无关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.1",
    "type": "MC1-0764",
    "image": ""
  },
  {
    "id": "Q680",
    "originalId": "LK0914",
    "text": "一根特性阻抗为 50 欧的同轴电缆的末端短路。如果用天线阻抗分析仪测量该电缆始端在不同频率下的阻抗，则读数为：",
    "options": [
      {
        "letter": "A",
        "text": "读数取决于电缆的电长度：1/4 波长奇数倍时接近无穷大；1/4 波长偶数倍时接近零"
      },
      {
        "letter": "B",
        "text": "读数取决于电缆的电长度：1/4 波长偶数倍时接近无穷大；1/4 波长奇数倍时接近零"
      },
      {
        "letter": "C",
        "text": "在电缆末端连接任何大小的电阻，在电缆始端都能测得相同的阻值。当前为 0"
      },
      {
        "letter": "D",
        "text": "读数为电缆的特性阻抗 50 欧。该值与电缆的长度和工作频率均无关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.1",
    "type": "MC1-0765",
    "image": ""
  },
  {
    "id": "Q681",
    "originalId": "LK0915",
    "text": "在用天线阻抗分析仪测量某天线失配情况下的阻抗表现时，我们会发现仪表的读数随天线和仪表间电缆跳线的长度而变。为保证测量的准确性，可以采取如下措施：",
    "options": [
      {
        "letter": "A",
        "text": "使用电气长度正好等于测量波长的连接电缆"
      },
      {
        "letter": "B",
        "text": "换用接触面镀金的高档电缆接头"
      },
      {
        "letter": "C",
        "text": "用高档纯银音响线材代替普通铜质同轴电缆"
      },
      {
        "letter": "D",
        "text": "将电缆外皮妥善接地，并将仪表放入屏蔽室"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.1",
    "type": "MC1-0766",
    "image": ""
  },
  {
    "id": "Q682",
    "originalId": "LK1109",
    "text": "由场源（比如天线）产生的电场会形成位移电流，在其周边激起变化的磁场。该磁场又会在稍远处再次激起变化的电场。这个过程周而复始，形成传向远方的电磁波。关于电磁波的传播，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "在一定场强下，频率越高，位移电流越强，场源辐射的能量也越多"
      },
      {
        "letter": "B",
        "text": "只有场源为某种开放系统，变化的电磁场才能向远方传播开来"
      },
      {
        "letter": "C",
        "text": "在一定能量下，频率越高，位移电流越强，场源辐射的场强也越强"
      },
      {
        "letter": "D",
        "text": "只有场源为某种封闭系统，变化的电磁场才能在同一时空中传播开来"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.2",
    "type": "MC2-0767",
    "image": ""
  },
  {
    "id": "Q683",
    "originalId": "LK1108",
    "text": "电磁波（electromagnetic waves）的两个组成部分是：",
    "options": [
      {
        "letter": "A",
        "text": "电场和磁场"
      },
      {
        "letter": "B",
        "text": "电压和电流"
      },
      {
        "letter": "C",
        "text": "阻抗和功率"
      },
      {
        "letter": "D",
        "text": "电离辐射和非电离辐射（ionizing radiation and non-ionizing radiation）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0768",
    "image": ""
  },
  {
    "id": "Q684",
    "originalId": "LK0972",
    "text": "无线电波在真空中的传播速度有多快？",
    "options": [
      {
        "letter": "A",
        "text": "和光速相同，大约为 300,000,000 米/秒"
      },
      {
        "letter": "B",
        "text": "与音速相同，从 300 米/秒至数十千米/秒不等"
      },
      {
        "letter": "C",
        "text": "无法确定，与介质的特性有关"
      },
      {
        "letter": "D",
        "text": "无法确定，与电波的频率有关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0769",
    "image": ""
  },
  {
    "id": "Q685",
    "originalId": "LK1106",
    "text": "电磁波在真空中传播时，其各个周期的传播距离都是相等的。该距离叫做：",
    "options": [
      {
        "letter": "A",
        "text": "波长"
      },
      {
        "letter": "B",
        "text": "波形"
      },
      {
        "letter": "C",
        "text": "波速"
      },
      {
        "letter": "D",
        "text": "波束"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0770",
    "image": ""
  },
  {
    "id": "Q686",
    "originalId": "LK1110",
    "text": "如果已知无线电波的频率，则其波长为：",
    "options": [
      {
        "letter": "A",
        "text": "使用 300 除以频率的兆赫数（MHz）可以得到以米为单位的波长"
      },
      {
        "letter": "B",
        "text": "将频率的赫兹数（Hz）除以 300 可以得到以米为单位的波长"
      },
      {
        "letter": "C",
        "text": "将频率的兆赫数（MHz）除以 300 可以得到以米为单位的波长"
      },
      {
        "letter": "D",
        "text": "将频率的赫兹数（Hz）乘以 300 可以得到以米为单位的波长"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0771",
    "image": ""
  },
  {
    "id": "Q687",
    "originalId": "LK1111",
    "text": "关于无线电波的频率、周期和波长，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "无线电波的频率 f 代表τ时间内电磁场重复改变的次数 n。所以，f=n/τ"
      },
      {
        "letter": "B",
        "text": "周期 T 代表电磁场重复改变的时间间隔，其与频率 f 为倒数关系。即，T=1/f"
      },
      {
        "letter": "C",
        "text": "无线电波的波长λ与光速 c 成正比，但是与频率 f 成反比。因此，λ=c/f"
      },
      {
        "letter": "D",
        "text": "由于λ仅与光速有关，所以架设天线时考虑振子的缩短系数其实没什么必要"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.5.2",
    "type": "MC3-0772",
    "image": ""
  },
  {
    "id": "Q688",
    "originalId": "LK1060",
    "text": "自由空间中的无线电波随传播距离的增加而逐渐减弱。其减弱程度遵循什么规律？",
    "options": [
      {
        "letter": "A",
        "text": "与距离的平方成正比，与频率的平方成正比"
      },
      {
        "letter": "B",
        "text": "与距离的平方成正比，与频率的平方成反比"
      },
      {
        "letter": "C",
        "text": "与距离成正比，与频率的平方成正比"
      },
      {
        "letter": "D",
        "text": "与距离的平方成正比，但是与频率无关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0773",
    "image": ""
  },
  {
    "id": "Q689",
    "originalId": "LK0978",
    "text": "自由空间中的无线电波随传播距离的增加逐渐发散减弱，形成路径损耗。该损耗可以描述为 L=32.4 + 20log(d) + 20log(f)（其中，损耗 L 的单位为 dB，距离 d 的单位是 km 而频率 f 的单位为 MHz）。关于 L，以下描述正确的是：（“X＾M”表示“X 的 M 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "当频率一定时，距离增加到 N 倍，L 增大到 N＾2 倍"
      },
      {
        "letter": "B",
        "text": "当距离一定时，频率增加到 N 倍，L 增大到 N＾2 倍"
      },
      {
        "letter": "C",
        "text": "当频率一定时，距离增加到 N 倍，L 增大到 log(N)倍"
      },
      {
        "letter": "D",
        "text": "当距离一定时，频率增加到 N 倍，L 增大到 log(N)倍"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.2",
    "type": "MC2-0774",
    "image": ""
  },
  {
    "id": "Q690",
    "originalId": "LK0872",
    "text": "自由空间中甲乙两电台相距 100km，均使用增益为 0dBi 的天线工作于 145MHz。如果发射方的功率为 1W，则接收方可获得约-115.6dBm 的信号功率。现将两电台的距离增至 500km，则接收方的信号功率变为：【提示：自由空间中无线电波的路径损耗 L =32.4 + 20log(d) +20log(f)；其中，d 为发射方与接收方之间的距离（km），f 为工作频率（MHz）】",
    "options": [
      {
        "letter": "A",
        "text": "-129.6dBm"
      },
      {
        "letter": "B",
        "text": "-121.6dBm"
      },
      {
        "letter": "C",
        "text": "-125.1dBm"
      },
      {
        "letter": "D",
        "text": "-135.6dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0775",
    "image": ""
  },
  {
    "id": "Q691",
    "originalId": "LK0873",
    "text": "自由空间中甲乙两电台相距 100km，均使用增益为 0dBi 的天线工作于 145MHz。如果发射方的功率为 1W，则接收方可获得约-115.6dBm 的信号功率。现将两电台的距离增至 1000km，则接收方的信号功率变为：【提示：自由空间中无线电波的路径损耗 L =32.4 + 20log(d) +20log(f)；其中，d 为发射方与接收方之间的距离（km），f 为工作频率（MHz）】",
    "options": [
      {
        "letter": "A",
        "text": "-135.6dBm"
      },
      {
        "letter": "B",
        "text": "-129.6dBm"
      },
      {
        "letter": "C",
        "text": "-121.6dBm"
      },
      {
        "letter": "D",
        "text": "-125.1dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0776",
    "image": ""
  },
  {
    "id": "Q692",
    "originalId": "LK0874",
    "text": "自由空间中甲乙两电台相距 100km，均使用增益为 0dBi 的天线工作于 145MHz。如果发射方的功率为 1W，则接收方可获得约-115.6dBm 的信号功率。现发射方将频率变为 435MHz，则接收方的信号功率变为：【提示：自由空间中无线电波的路径损耗 L =32.4 + 20log(d) +20log(f)；其中，d 为发射方与接收方之间的距离（km），f 为工作频率（MHz）】",
    "options": [
      {
        "letter": "A",
        "text": "-125.1dBm"
      },
      {
        "letter": "B",
        "text": "-135.6dBm"
      },
      {
        "letter": "C",
        "text": "-129.6dBm"
      },
      {
        "letter": "D",
        "text": "-121.6dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0777",
    "image": ""
  },
  {
    "id": "Q693",
    "originalId": "LK0875",
    "text": "自由空间中甲乙两电台相距 100km，均使用增益为 0dBi 的天线工作于 145MHz。如果发射方的功率为 1W， 则接收方可获得约-115.6dBm 的信号功率。 现发射方将功率降低为 0.25W，则接收方的信号功率变为：【提示：自由空间中无线电波的路径损耗 L =32.4 + 20log(d) +20log(f)；其中，d 为发射方与接收方之间的距离（km），f 为工作频率（MHz）】",
    "options": [
      {
        "letter": "A",
        "text": "-121.6dBm"
      },
      {
        "letter": "B",
        "text": "-125.1dBm"
      },
      {
        "letter": "C",
        "text": "-135.6dBm"
      },
      {
        "letter": "D",
        "text": "-129.6dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0778",
    "image": ""
  },
  {
    "id": "Q694",
    "originalId": "LK0876",
    "text": "自由空间中的甲电台在 145MHz 联络相距 100km 的乙电台并获得信号报告 S8。如果两电台的距离增至 500km，则信号报告变为：【提示：收信机信号强度指示从 S1 至 S9 每级增加6dB】",
    "options": [
      {
        "letter": "A",
        "text": "略低于 S6"
      },
      {
        "letter": "B",
        "text": "略高于 S6"
      },
      {
        "letter": "C",
        "text": "略低于 S5"
      },
      {
        "letter": "D",
        "text": "略高于 S4"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0779",
    "image": ""
  },
  {
    "id": "Q695",
    "originalId": "LK0877",
    "text": "自由空间中的甲电台在 145MHz 联络相距 100km 的乙电台并获得信号报告 S8。如果两电台的距离增至 1000km，则信号报告变为：【提示：收信机信号强度指示从 S1 至 S9 每级增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "略低于 S5"
      },
      {
        "letter": "B",
        "text": "略高于 S5"
      },
      {
        "letter": "C",
        "text": "略高于 S6"
      },
      {
        "letter": "D",
        "text": "S7"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0780",
    "image": ""
  },
  {
    "id": "Q696",
    "originalId": "LK0878",
    "text": "自由空间中的甲电台在 145MHz 联络相距 100km 的乙电台并获得信号报告 S8。如果双方改用频率 435MHz，则信号报告变为： 【提示：收信机信号强度指示从 S1 至 S9 每级增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "略高于 S6"
      },
      {
        "letter": "B",
        "text": "略低于 S5"
      },
      {
        "letter": "C",
        "text": "略低于 S6"
      },
      {
        "letter": "D",
        "text": "S7"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0781",
    "image": ""
  },
  {
    "id": "Q697",
    "originalId": "LK0879",
    "text": "自由空间中的甲电台在 145MHz 联络相距 100km 的乙电台并获得信号报告 S8。如果甲电台将发射功率减少到原来的 1/4，则信号报告变为：【提示：收信机信号强度指示从 S1 至S9 每级增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S7"
      },
      {
        "letter": "B",
        "text": "略高于 S5"
      },
      {
        "letter": "C",
        "text": "略高于 S6"
      },
      {
        "letter": "D",
        "text": "略低于 S5"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0782",
    "image": ""
  },
  {
    "id": "Q698",
    "originalId": "LK0880",
    "text": "某业余电台以 100 瓦发射功率工作时，对方报告信号强度 S8。现该台将发射功率降至 25瓦，则对方给出的信号报告应为：【提示：收信机信号强度指示 S1 至 S9 每级增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S7"
      },
      {
        "letter": "B",
        "text": "S6"
      },
      {
        "letter": "C",
        "text": "S5"
      },
      {
        "letter": "D",
        "text": "S4"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0783",
    "image": ""
  },
  {
    "id": "Q699",
    "originalId": "LK0881",
    "text": "某业余电台以 80 瓦发射功率工作时，对方报告信号强度 S8。现该台将发射功率降至 5瓦进行 QRP 实验，则对方给出的信号报告应为：【提示：收信机信号强度指示 S1 至 S9 每级增加 6dB】",
    "options": [
      {
        "letter": "A",
        "text": "S6"
      },
      {
        "letter": "B",
        "text": "S7"
      },
      {
        "letter": "C",
        "text": "S4"
      },
      {
        "letter": "D",
        "text": "S2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.2",
    "type": "MC1-0784",
    "image": ""
  },
  {
    "id": "Q700",
    "originalId": "LK0975",
    "text": "关于电磁波的波阻抗 Z，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "在电磁波的传播过程中，电场 E 和磁场 H 在空间的比值称为波阻抗 Z"
      },
      {
        "letter": "B",
        "text": "随电磁波传向远方，Z 逐渐趋于常数。此时 E 和 H 可以相互推算而出"
      },
      {
        "letter": "C",
        "text": "无线电波从馈线进入发射天线的馈电点时遇到的阻碍即为波阻抗 Z"
      },
      {
        "letter": "D",
        "text": "无线电波从馈线进入发射天线的馈电点时遇到的反射即为波阻抗 Z"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.3",
    "type": "MC2-0785",
    "image": ""
  },
  {
    "id": "Q701",
    "originalId": "LK0980",
    "text": "在电磁场理论中，“强度与距辐射源的距离的平方成反比”的说法适用于：",
    "options": [
      {
        "letter": "A",
        "text": "相距辐射源 10 倍及以上波长的“远区场”"
      },
      {
        "letter": "B",
        "text": "相距辐射源一定距离内的“远区场”"
      },
      {
        "letter": "C",
        "text": "辐射源周围空间中的任意点"
      },
      {
        "letter": "D",
        "text": "LF 至 UHF 的频率范围"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.3",
    "type": "MC1-0786",
    "image": ""
  },
  {
    "id": "Q702",
    "originalId": "LK0981",
    "text": "有时，我们需要在空旷场地用场强计测量比较不同型号的全向垂直天线零仰角情况下的实际辐射效果。不过，测量时应注意什么问题？",
    "options": [
      {
        "letter": "A",
        "text": "测试地点应选在远场区，离天线 10 个波长以上"
      },
      {
        "letter": "B",
        "text": "场强计外壳应妥善接地"
      },
      {
        "letter": "C",
        "text": "场强计应与地面平行"
      },
      {
        "letter": "D",
        "text": "在馈线的外面穿套多个磁环以形成“连珠巴伦”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.3",
    "type": "MC1-0787",
    "image": ""
  },
  {
    "id": "Q703",
    "originalId": "LK0927",
    "text": "业余条件下测试天线增益的典型方法如下图所示。用场强表或接收机接收设置在远处同一地点，最大辐射方向朝向自己的半波偶极天线（上）和待测天线（下）的信号。调整送至两副天线的射频功率 Po 和 P，使收到的场强相同。则，待测天线的增益 dBd 值为：",
    "options": [
      {
        "letter": "A",
        "text": "10 log(Po/P)"
      },
      {
        "letter": "B",
        "text": "10 log(P/Po)"
      },
      {
        "letter": "C",
        "text": "P - Po"
      },
      {
        "letter": "D",
        "text": "10 log(P-Po)"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.3",
    "type": "MC1-0788",
    "image": "LK0927.jpg"
  },
  {
    "id": "Q704",
    "originalId": "LK0928",
    "text": "业余条件下测试天线增益的典型方法如下图所示。用场强表或接收机接收设置在远处同一地点，最大辐射方向朝向自己的半波偶极天线（上）和待测天线（下）的信号。调整送至两副天线的射频功率 Po 和 P，使收到的场强相同。则，待测天线的增益 dBi 值为：",
    "options": [
      {
        "letter": "A",
        "text": "10 log(Po/P) + 2.15"
      },
      {
        "letter": "B",
        "text": "10 log(P/Po) + 2.15"
      },
      {
        "letter": "C",
        "text": "20 log(P/Po) + 2.15"
      },
      {
        "letter": "D",
        "text": "10 log(P-Po) + 2.15"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.3",
    "type": "MC1-0789",
    "image": "LK0928.jpg"
  },
  {
    "id": "Q705",
    "originalId": "LK1058",
    "text": "若按传播形式分类，无线电波大体分为：",
    "options": [
      {
        "letter": "A",
        "text": "地面波、天波、空间波、散射波"
      },
      {
        "letter": "B",
        "text": "长波、中波、短波、超短波、微波"
      },
      {
        "letter": "C",
        "text": "调幅波、调频波、调相波"
      },
      {
        "letter": "D",
        "text": "正弦波、方波、三角波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0790",
    "image": ""
  },
  {
    "id": "Q706",
    "originalId": "LK1067",
    "text": "顾名思义，地面波就是沿地面传播的无线电波，其衰减特性取决于：",
    "options": [
      {
        "letter": "A",
        "text": "电波频率、大地电导率和传播距离"
      },
      {
        "letter": "B",
        "text": "电波频率、太阳活动和地磁活动情况"
      },
      {
        "letter": "C",
        "text": "电波频率、发射功率和天线增益"
      },
      {
        "letter": "D",
        "text": "天线高度、发射功率和调制方式"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0791",
    "image": ""
  },
  {
    "id": "Q707",
    "originalId": "LK1105",
    "text": "大气层的哪一组成部分使得无线电波在世界范围内传播？",
    "options": [
      {
        "letter": "A",
        "text": "电离层"
      },
      {
        "letter": "B",
        "text": "对流层"
      },
      {
        "letter": "C",
        "text": "平流层"
      },
      {
        "letter": "D",
        "text": "磁层"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0792",
    "image": ""
  },
  {
    "id": "Q708",
    "originalId": "LK1061",
    "text": "HF 通信术语“静寂区”和“越距”是指：",
    "options": [
      {
        "letter": "A",
        "text": "“静寂区”是指天波、地波和空间波都未能覆盖的区域。在此区域中我们说传播“越距”了"
      },
      {
        "letter": "B",
        "text": "“静寂区”是指超出视距，导致空间波传播不到的区域。在此区域中我们说传播“越距”了"
      },
      {
        "letter": "C",
        "text": "“静寂区”是指因障碍物遮挡，空间波无法覆盖的区域。在此区域中我们说传播“越距”了"
      },
      {
        "letter": "D",
        "text": "“静寂区”是指短波通信卫星下行信号无法覆盖的区域。在此区域中我们说传播“越距”了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0793",
    "image": ""
  },
  {
    "id": "Q709",
    "originalId": "LK0854",
    "text": "“衰减”和“衰落”都是无线电通信领域中的常见名词。它们的含义分别为：",
    "options": [
      {
        "letter": "A",
        "text": "衰减是指信号通过信道或电路后功率减少；衰落是指信号通过信道或电路后发生幅度随时间而变的起伏"
      },
      {
        "letter": "B",
        "text": "衰减是指信号通过信道或电路后发生幅度随时间而变的起伏；衰落是指信号通过信道或电路后功率减少"
      },
      {
        "letter": "C",
        "text": "衰减和衰落是一回事，都是指信号通过信道或电路后功率减少"
      },
      {
        "letter": "D",
        "text": "衰减和衰落是一回事，都是指信号通过信道或电路后发生幅度随时间而变的起伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0794",
    "image": ""
  },
  {
    "id": "Q710",
    "originalId": "LK1066",
    "text": "无线电信号经地面和电离层交相反射之后会有什么改变？",
    "options": [
      {
        "letter": "A",
        "text": "信号的极化特性会伴随时间随机改变"
      },
      {
        "letter": "B",
        "text": "信号的不同频率成分会伴随时间随机衰落"
      },
      {
        "letter": "C",
        "text": "信号的上下边带会伴随时间随机反转"
      },
      {
        "letter": "D",
        "text": "信号中随时都会夹杂强力广播电台的播音"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.4",
    "type": "MC2-0795",
    "image": ""
  },
  {
    "id": "Q711",
    "originalId": "LK0866",
    "text": "用 SDR 接收机的频谱显示器观察短波 RTTY 等 2FSK 调制的数据通信信号，我们应当看到两个幅度相等的谱峰。但是实际观察结果是这两个谱峰的高度在随机变化。造成这种现象的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "电离层的选择性衰落"
      },
      {
        "letter": "B",
        "text": "接收机的工作点漂移"
      },
      {
        "letter": "C",
        "text": "发射机的 ALC 不稳定"
      },
      {
        "letter": "D",
        "text": "接收机的 AGC 不稳定"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0796",
    "image": ""
  },
  {
    "id": "Q712",
    "originalId": "LK0991",
    "text": "假设接收和发射天线均使用半波长偶极天线，则在依靠电离层反射的远距离通联中，接收和发射天线的最佳极化方式应当安排为：",
    "options": [
      {
        "letter": "A",
        "text": "不确定。天波反射的特点是信号强度、频率成分和极化会随机改变"
      },
      {
        "letter": "B",
        "text": "接收和发射天线均位于垂直于两台站连线的平面内，极化保持一致"
      },
      {
        "letter": "C",
        "text": "接收和发射天线均位于垂直于两台站连线的平面内，极化彼此正交"
      },
      {
        "letter": "D",
        "text": "发射天线垂直极化，接收天线的极化应当平行于两台站之间的连线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0797",
    "image": ""
  },
  {
    "id": "Q713",
    "originalId": "LK0949",
    "text": "甲、乙业余电台相距 2000 千米，均使用 1/2 波长水平偶极天线进行 HF 通联。现其中一方改用 1/2 波长垂直偶极天线，则改变前后的通信效果有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "通信效果的变化不确定，取决于天波反射过程中电波极化的随机变化"
      },
      {
        "letter": "B",
        "text": "通信效果变差"
      },
      {
        "letter": "C",
        "text": "通信效果变好"
      },
      {
        "letter": "D",
        "text": "通信效果不变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0798",
    "image": ""
  },
  {
    "id": "Q714",
    "originalId": "LK0960",
    "text": "影响电离层的短波传播特性的主要因素有：",
    "options": [
      {
        "letter": "A",
        "text": "太阳黑子活动、太阳耀斑和地磁活动"
      },
      {
        "letter": "B",
        "text": "季节和昼夜变化"
      },
      {
        "letter": "C",
        "text": "工作频率和通信距离"
      },
      {
        "letter": "D",
        "text": "高空云量和气温变化"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.5.4",
    "type": "MC3-0799",
    "image": ""
  },
  {
    "id": "Q715",
    "originalId": "LK0962",
    "text": "喜爱 HF 通联的爱好者大都了解术语“最高可用频率（MUF）”。其涵义为：",
    "options": [
      {
        "letter": "A",
        "text": "在地球上的两点间通过天波建立 HF 联络时可以使用的最高频率"
      },
      {
        "letter": "B",
        "text": "通常，MUF 在夜间降低，在白天显著升高"
      },
      {
        "letter": "C",
        "text": "当 MUF 偶尔达到数百兆赫兹时，VHF/UHF 可能出现超视距传播"
      },
      {
        "letter": "D",
        "text": "使用较低仰角的天线进行 DX 通联时，需将 MUF 估计得低一些"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.4",
    "type": "MC2-0800",
    "image": ""
  },
  {
    "id": "Q716",
    "originalId": "LK1048",
    "text": "若已知最高可用频率（MUF）为 20MHz，则 DX 通联成功率最高的业余频段为：",
    "options": [
      {
        "letter": "A",
        "text": "18MHz"
      },
      {
        "letter": "B",
        "text": "14MHz"
      },
      {
        "letter": "C",
        "text": "21MHz"
      },
      {
        "letter": "D",
        "text": "24MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0801",
    "image": ""
  },
  {
    "id": "Q717",
    "originalId": "LK0964",
    "text": "如果按距离地表的高度从高到低排列，对短波传播有主要影响的电离层有：",
    "options": [
      {
        "letter": "A",
        "text": "F2、F1、E、D"
      },
      {
        "letter": "B",
        "text": "C1、C2、D1、D2"
      },
      {
        "letter": "C",
        "text": "F、E2、E1、D"
      },
      {
        "letter": "D",
        "text": "E1、E2、F1、F2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0802",
    "image": ""
  },
  {
    "id": "Q718",
    "originalId": "LK0965",
    "text": "如果按离子密度从高到低排列，对短波传播有主要影响的电离层有：",
    "options": [
      {
        "letter": "A",
        "text": "F2、F1、E、D"
      },
      {
        "letter": "B",
        "text": "C1、C2、D1、D2"
      },
      {
        "letter": "C",
        "text": "F、E2、E1、D"
      },
      {
        "letter": "D",
        "text": "E1、E2、F1、F2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0803",
    "image": ""
  },
  {
    "id": "Q719",
    "originalId": "LK0966",
    "text": "电离层对短波传播的影响主要体现为：",
    "options": [
      {
        "letter": "A",
        "text": "F2、F1 和 E 层反射电波"
      },
      {
        "letter": "B",
        "text": "D 层不反射电波，但是吸收电波"
      },
      {
        "letter": "C",
        "text": "D2 和 D1 层不反射电波，但是吸收电波"
      },
      {
        "letter": "D",
        "text": "C2、C1 和 F 层白天反射电波，夜晚吸收电波"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.5.4",
    "type": "MC2-0804",
    "image": ""
  },
  {
    "id": "Q720",
    "originalId": "LK0983",
    "text": "讨论 1.9MHz 或 3.5MHz 等短波低频段 DX 通信时，业余无线电爱好者常会谈及术语“灰线”。这是指：",
    "options": [
      {
        "letter": "A",
        "text": "地球上白昼与黑夜交汇的区域"
      },
      {
        "letter": "B",
        "text": "地球上有极光活动的区域"
      },
      {
        "letter": "C",
        "text": "连接地球上具有相同最高可用频率的地点形成的线"
      },
      {
        "letter": "D",
        "text": "地球上通讯双方所在地点的大圆连线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0805",
    "image": ""
  },
  {
    "id": "Q721",
    "originalId": "LK0984",
    "text": "业余无线电爱好者经常利用“灰线”来建立 1.9MH 或 3.5MHz 等短波低频段 DX 联络。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "通信双方同时位于灰线时，最有可能利用天波的多跳反射路径建立联络"
      },
      {
        "letter": "B",
        "text": "通信双方位于灰线两侧 4000 千米以外的对称点时，传播效果最佳"
      },
      {
        "letter": "C",
        "text": "通信双方位于灰线同一侧 4000 千米以外的两点时，传播效果最佳"
      },
      {
        "letter": "D",
        "text": "通信双方应避免同时处于灰线才能获得更稳定的传播"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0806",
    "image": ""
  },
  {
    "id": "Q722",
    "originalId": "LX",
    "text": "如果你尝试用“长路径”联络某个业余电台，你的定向天线应当指向：",
    "options": [
      {
        "letter": "A",
        "text": "该台短路径方向的反方向"
      },
      {
        "letter": "B",
        "text": "垂直于灰线，但是背向灰线"
      },
      {
        "letter": "C",
        "text": "可能出现北极光的方向"
      },
      {
        "letter": "D",
        "text": "可能出现南极光的方向"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.4",
    "type": "MC1-0807",
    "image": ""
  },
  {
    "id": "Q723",
    "originalId": "LK0963",
    "text": "进行短波电离层传播预测所必需的参数为：",
    "options": [
      {
        "letter": "A",
        "text": "太阳黑子平均数"
      },
      {
        "letter": "B",
        "text": "地磁活动指数"
      },
      {
        "letter": "C",
        "text": "通信双方的位置"
      },
      {
        "letter": "D",
        "text": "通信时间"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "3.5.5",
    "type": "MC4-0808",
    "image": ""
  },
  {
    "id": "Q724",
    "originalId": "LK1086",
    "text": "尝试进行传播预测时，太阳通量的最低值可以取为 50 左右。其最高值可以取为：",
    "options": [
      {
        "letter": "A",
        "text": "300"
      },
      {
        "letter": "B",
        "text": "280"
      },
      {
        "letter": "C",
        "text": "250"
      },
      {
        "letter": "D",
        "text": "200"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0809",
    "image": ""
  },
  {
    "id": "Q725",
    "originalId": "LK1087",
    "text": "反映地磁活动程度的常见指标是 A 指数和 K 指数。K 指数的取值范围是：",
    "options": [
      {
        "letter": "A",
        "text": "0-9"
      },
      {
        "letter": "B",
        "text": "0-8"
      },
      {
        "letter": "C",
        "text": "0-7"
      },
      {
        "letter": "D",
        "text": "0-6"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0810",
    "image": ""
  },
  {
    "id": "Q726",
    "originalId": "LK0967",
    "text": "太阳黑子活动的平均周期约为：",
    "options": [
      {
        "letter": "A",
        "text": "11.2 年，每个周期中的太阳活跃程度有所差别"
      },
      {
        "letter": "B",
        "text": "11.2 年，每个周期中的太阳活跃程度完全相同"
      },
      {
        "letter": "C",
        "text": "38 年，每个周期中的太阳活跃程度有所差别"
      },
      {
        "letter": "D",
        "text": "38 年，每个周期中的太阳活跃程度完全相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0811",
    "image": ""
  },
  {
    "id": "Q727",
    "originalId": "LK0968",
    "text": "太阳黑子活动的强弱是用“太阳黑子平均数（SSN）”来描述的。其一般规律为：",
    "options": [
      {
        "letter": "A",
        "text": "较大的 SSN 利于短波 DX 通信"
      },
      {
        "letter": "B",
        "text": "较小的 SSN 利于短波 DX 通信"
      },
      {
        "letter": "C",
        "text": "在地磁活动剧烈的年份，SSN 与短波 DX 通信关系不大"
      },
      {
        "letter": "D",
        "text": "只在发生太阳耀斑时，SSN 才影响短波 DX 通信"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0812",
    "image": ""
  },
  {
    "id": "Q728",
    "originalId": "LK1049",
    "text": "太阳耀斑可以引发电离层扰动（SID）。其对短波通信的影响是：",
    "options": [
      {
        "letter": "A",
        "text": "低频率通信所受的影响超过高频率的"
      },
      {
        "letter": "B",
        "text": "高纬度地区传播路径所受的影响超过低纬度的"
      },
      {
        "letter": "C",
        "text": "卫星通信所受的影响超过地面台站间直射波的"
      },
      {
        "letter": "D",
        "text": "地球上黑夜区域所受的影响超过白昼区域的"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0813",
    "image": ""
  },
  {
    "id": "Q729",
    "originalId": "LK0969",
    "text": "业余无线电爱好者在预测 HF 传播时经常用到一个缩写为 F107 的参数。其意义是：",
    "options": [
      {
        "letter": "A",
        "text": "太阳 10.7cm 波长射电辐射通量指数"
      },
      {
        "letter": "B",
        "text": "107MHz 调频广播信号的典型传播距离"
      },
      {
        "letter": "C",
        "text": "电离层对 10.7MHz 电波的衰减指数"
      },
      {
        "letter": "D",
        "text": "最高可用频率与 10.7MHz 的比值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0814",
    "image": ""
  },
  {
    "id": "Q730",
    "originalId": "LK0970",
    "text": "业余无线电爱好者在预测 HF 传播时经常使用缩写为 F107 的参数，其值大体都在 50-300的范围内。如果该数值增大，则：",
    "options": [
      {
        "letter": "A",
        "text": "安静太阳的辐射强度增加，电离层密度变大。这些都有利于 F 层反射 DX 信号"
      },
      {
        "letter": "B",
        "text": "10.7MHz 无线电波受到电离层的衰减变大，远距离传播的条件变差"
      },
      {
        "letter": "C",
        "text": "107MHz 调频广播可能超视距传播，收到 50-300 千米 VHF 信号的几率将增加"
      },
      {
        "letter": "D",
        "text": "安静太阳的辐射强度增加，电离层密度变大。这些不利于 DX 信号的传播"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.5",
    "type": "MC1-0815",
    "image": ""
  },
  {
    "id": "Q731",
    "originalId": "LK0985",
    "text": "我国《无线电频率划分规定》指出，122.25-123GHz 业余频段用于业余业务，但是不包括卫星业余业务。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "60、120、183GHz 左右存在大气吸收频带，电波衰减大，不适合地面至空间的卫星业余通信"
      },
      {
        "letter": "B",
        "text": "120GHz 附近频段的宇宙射线特别强烈，干扰卫星通信，包括卫星间的各种业务"
      },
      {
        "letter": "C",
        "text": "业余无线电爱好者尚无力制作工作于 120GHz 及以上频段的设备"
      },
      {
        "letter": "D",
        "text": "120GHz 这类频段的天线太大，不适合业余性质的卫星通信研究"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.6",
    "type": "MC1-0816",
    "image": ""
  },
  {
    "id": "Q732",
    "originalId": "LK0986",
    "text": "以下频段受降雨影响最为严重的是：",
    "options": [
      {
        "letter": "A",
        "text": "极高频 EHF（毫米波）"
      },
      {
        "letter": "B",
        "text": "高频 HF（短波）"
      },
      {
        "letter": "C",
        "text": "低频 LF（长波）"
      },
      {
        "letter": "D",
        "text": "特高频 UHF（分米波）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.6",
    "type": "MC1-0817",
    "image": ""
  },
  {
    "id": "Q733",
    "originalId": "LK0987",
    "text": "根据 ITU 的建议，植被在一定程度上吸收无线电波。大体规律是：",
    "options": [
      {
        "letter": "A",
        "text": "频率越高，吸收越多"
      },
      {
        "letter": "B",
        "text": "频率越低，吸收越多"
      },
      {
        "letter": "C",
        "text": "吸收程度与植物种类有关，与频率无关"
      },
      {
        "letter": "D",
        "text": "吸收程度与季节有关，与频率无关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.5.6",
    "type": "MC1-0818",
    "image": ""
  },
  {
    "id": "Q734",
    "originalId": "LK0815",
    "text": "自制业余无线电发射设备，在经无线电检测机构检验合格并取得电台执照之前，应在调测时在设备的天线端口连接（或在串联必要的仪表之后连接）：",
    "options": [
      {
        "letter": "A",
        "text": "假负载"
      },
      {
        "letter": "B",
        "text": "VSWR 严格等于 1:1 的驻波天线"
      },
      {
        "letter": "C",
        "text": "VSWR 严格等于 1:1 的行波天线"
      },
      {
        "letter": "D",
        "text": "专门用于测试的标准环形天线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0819",
    "image": ""
  },
  {
    "id": "Q735",
    "originalId": "LK0418",
    "text": "在无线电发射机中，调制器的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "以原始调制信号控制射频载波的幅度、频率和相位参数"
      },
      {
        "letter": "B",
        "text": "以电能转换效率最高的方式控制线性射频放大器的工作点"
      },
      {
        "letter": "C",
        "text": "调整天馈系统的参数，实现阻抗匹配"
      },
      {
        "letter": "D",
        "text": "自动控制发射信号的频谱，将其保持在核准的必要带宽内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0820",
    "image": ""
  },
  {
    "id": "Q736",
    "originalId": "LK0422",
    "text": "保证业余无线电通信接收机优良接收能力的主要因素是：",
    "options": [
      {
        "letter": "A",
        "text": "良好的抗干扰能力"
      },
      {
        "letter": "B",
        "text": "足够高的整机增益"
      },
      {
        "letter": "C",
        "text": "尽量低的本机噪声"
      },
      {
        "letter": "D",
        "text": "尽量小的信号失真"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "3.6.1",
    "type": "MC4-0821",
    "image": ""
  },
  {
    "id": "Q737",
    "originalId": "LK0423",
    "text": "接收机解调器的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "从接收到的已调射频信号中分离出原始调制信号"
      },
      {
        "letter": "B",
        "text": "对接收到的射频信号进行宽带线性放大"
      },
      {
        "letter": "C",
        "text": "对接收到的射频信号进行与必要带宽相匹配的选频放大"
      },
      {
        "letter": "D",
        "text": "从接收到的已调制射频信号中提取出载波分量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0822",
    "image": ""
  },
  {
    "id": "Q738",
    "originalId": "LK0424",
    "text": "选用解调器的主要应考因素是：",
    "options": [
      {
        "letter": "A",
        "text": "尽量忠实地还原原始调制信号"
      },
      {
        "letter": "B",
        "text": "尽量对已调射频信号加以放大"
      },
      {
        "letter": "C",
        "text": "尽量提升已调射频信号中的载频分量"
      },
      {
        "letter": "D",
        "text": "尽量补偿接所收射频信号的频率偏移"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0823",
    "image": ""
  },
  {
    "id": "Q739",
    "originalId": "LK0496",
    "text": "亚音频静噪系统（CTCSS）所用的声调大体位于音频中的什么范围？",
    "options": [
      {
        "letter": "A",
        "text": "67-250.3Hz"
      },
      {
        "letter": "B",
        "text": "16Hz-20kHz"
      },
      {
        "letter": "C",
        "text": "16kHz-20kHz"
      },
      {
        "letter": "D",
        "text": "220Hz-2503Hz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0824",
    "image": ""
  },
  {
    "id": "Q740",
    "originalId": "LK0681",
    "text": "对于比较考究的接收机，其说明书中常常列出一项“通带矩形系数”或“通带形状系数”指标，是用来描述：",
    "options": [
      {
        "letter": "A",
        "text": "带通滤波器频率特性曲线两侧斜坡的陡峭程度"
      },
      {
        "letter": "B",
        "text": "矩形波信号通过滤波器后波形两侧的陡峭程度"
      },
      {
        "letter": "C",
        "text": "矩形波信号通过滤波器后谐波成分的损失程度"
      },
      {
        "letter": "D",
        "text": "带通晶体滤波器中石英晶体的切割方向和形状"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0825",
    "image": ""
  },
  {
    "id": "Q741",
    "originalId": "LK0682",
    "text": "根据说明书给出的技术指标，两台业余无线电接收机在 USB 方式下选择带宽为 2.7kHz 的滤波器时具有不同的“通带矩形系数”。接收机 A 的“60dB 带宽对 6dB 带宽的矩形系数”为 3.8，接收机 B 的为 5。由此可得出结论：",
    "options": [
      {
        "letter": "A",
        "text": "A 机对邻近频道干扰的抑制能力比 B 机强"
      },
      {
        "letter": "B",
        "text": "A 机对邻近频道干扰的抑制能力比 B 机差"
      },
      {
        "letter": "C",
        "text": "A 机对镜像频率干扰的抑制能力比 B 机强"
      },
      {
        "letter": "D",
        "text": "A 机对偏离工作频率±10kHz 以外的干扰信号的抑制能力比 B 机强"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0826",
    "image": ""
  },
  {
    "id": "Q742",
    "originalId": "LK0746",
    "text": "接收机前置放大器的主要作用是：",
    "options": [
      {
        "letter": "A",
        "text": "降低接收机内部噪声的影响"
      },
      {
        "letter": "B",
        "text": "提高接收机最终的音频输出功率电平"
      },
      {
        "letter": "C",
        "text": "提高接收机音频输出的保真度"
      },
      {
        "letter": "D",
        "text": "提高接收机的动态范围"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0827",
    "image": ""
  },
  {
    "id": "Q743",
    "originalId": "LK0783",
    "text": "进行 FM 话音通联时，我们能否单凭接收机中传出的对方的声音大小来准确判断对方的信号有多强？",
    "options": [
      {
        "letter": "A",
        "text": "不能。鉴频器所解调的声音，其大小仅取决于中频信号的频偏，与中频信号的幅度无关。况且，中频信号在进入鉴频器之前早已被限幅电路切齐，已无法鉴别强弱"
      },
      {
        "letter": "B",
        "text": "不能。信号越强，自动增益控制的起控程度就越深。增益的急剧下降反而会压低音量"
      },
      {
        "letter": "C",
        "text": "能。最终的信号就是经过放大处理的原始射频信号，当然是信号越强声音越大"
      },
      {
        "letter": "D",
        "text": "能。调频信号的特点是信号越强频偏越大，解调之后的声音当然也越大"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0828",
    "image": ""
  },
  {
    "id": "Q744",
    "originalId": "LK0788",
    "text": "用设置在 NFM 方式的对讲机接收 WFM 信号，效果为：",
    "options": [
      {
        "letter": "A",
        "text": "可以听到信号。如果调制信号幅度较大或音调较高，会听到明显的非线性失真"
      },
      {
        "letter": "B",
        "text": "听不到信号。但是一旦接收到了信号，调频方式所特有的强烈噪声仍然会消失"
      },
      {
        "letter": "C",
        "text": "可以正常听到信号。但是声音的高音频部分衰减较大，缺乏高音"
      },
      {
        "letter": "D",
        "text": "可以正常听到信号，只是声音比较小"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0829",
    "image": ""
  },
  {
    "id": "Q745",
    "originalId": "LK0789",
    "text": "用设置在 WFM 方式的对讲机接收 NFM 信号，效果为：",
    "options": [
      {
        "letter": "A",
        "text": "可以正常听到信号，只是声音比较小"
      },
      {
        "letter": "B",
        "text": "可以听到信号。如果调制信号幅度较大或音调较高，会听到明显的非线性失真"
      },
      {
        "letter": "C",
        "text": "听不到信号。但是一旦接收到了信号，调频方式所特有的强烈噪声仍然会消失"
      },
      {
        "letter": "D",
        "text": "可以正常听到信号。但是声音的高音频部分衰减较大，缺乏高音"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0830",
    "image": ""
  },
  {
    "id": "Q746",
    "originalId": "LK0790",
    "text": "没有信号时，调频接收机会输出一种强烈的沙沙声。关于这种噪声，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "天线收到的 QRN 与机内电路的固有噪声共同构成一种随机信号。该信号的随机相位变化经鉴频形成强烈的沙沙声。只是，该信号的随机幅度变化与沙沙声没有关系"
      },
      {
        "letter": "B",
        "text": "由天线收到的 QRN 的随机幅度变化经放大形成，其大小与 QRN 的电压成正比"
      },
      {
        "letter": "C",
        "text": "由天线收到的 QRN 的随机幅度变化经放大形成，其大小与 QRN 的电压的平方成正比"
      },
      {
        "letter": "D",
        "text": "由天线收到的 QRN 的随机幅度变化经放大形成，其大小与 QRN 的电压的平方根成正比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0831",
    "image": ""
  },
  {
    "id": "Q747",
    "originalId": "LK1176",
    "text": "下列哪种电路可以解调 FM 信号？",
    "options": [
      {
        "letter": "A",
        "text": "鉴频器"
      },
      {
        "letter": "B",
        "text": "限幅器"
      },
      {
        "letter": "C",
        "text": "乘积检波器"
      },
      {
        "letter": "D",
        "text": "混频器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0832",
    "image": ""
  },
  {
    "id": "Q748",
    "originalId": "LK0791",
    "text": "什么是“鉴频”？",
    "options": [
      {
        "letter": "A",
        "text": "对调频信号进行解调的过程称为鉴频"
      },
      {
        "letter": "B",
        "text": "判断信号的频率是否超过允许的频率范围的过程称为鉴频"
      },
      {
        "letter": "C",
        "text": "判断信号的频率是否发生了不应有的偏离或者漂移的过程称为鉴频"
      },
      {
        "letter": "D",
        "text": "对调幅信号进行解调的过程称为鉴频"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0833",
    "image": ""
  },
  {
    "id": "Q749",
    "originalId": "LX",
    "text": "下列哪一项可以解调 AM 信号？",
    "options": [
      {
        "letter": "A",
        "text": "检波器"
      },
      {
        "letter": "B",
        "text": "限幅器"
      },
      {
        "letter": "C",
        "text": "鉴频器"
      },
      {
        "letter": "D",
        "text": "反相器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0834",
    "image": ""
  },
  {
    "id": "Q750",
    "originalId": "LK0792",
    "text": "什么是“检波”？",
    "options": [
      {
        "letter": "A",
        "text": "对调幅信号进行解调的过程称为检波"
      },
      {
        "letter": "B",
        "text": "检查信号的波形是否超过了允许的幅度范围的过程称为检波"
      },
      {
        "letter": "C",
        "text": "检查信号的频率是否发生了不应有的偏离或者漂移的过程称为检波"
      },
      {
        "letter": "D",
        "text": "对调频信号进行解调的过程称为检波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0835",
    "image": ""
  },
  {
    "id": "Q751",
    "originalId": "LK1088",
    "text": "关于收发信机的 AGC 功能，以下说法正确的有：",
    "options": [
      {
        "letter": "A",
        "text": "AGC 实现收信机自动增益控制，对中频信号进行检测并反馈控制，防止电路过载"
      },
      {
        "letter": "B",
        "text": "进行基于 FSK 或 PSK 的数据通信时，关闭 AGC 功能有可能提高弱信号的解码效果"
      },
      {
        "letter": "C",
        "text": "进行太阳噪声测试的时候，需要关闭 AGC 功能"
      },
      {
        "letter": "D",
        "text": "AGC 实现收信机自动音量控制，对音频电平进行检测并反馈控制，防止扬声器损坏"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.6.1",
    "type": "MC2-0836",
    "image": ""
  },
  {
    "id": "Q752",
    "originalId": "LK0840",
    "text": "学习现代通信技术或制作业余无线电作品时，我们经常遇到一种工作原理不同于超外差式收信机的“DC 式收信机”。其中，缩写 DC 是指：",
    "options": [
      {
        "letter": "A",
        "text": "直接变换（Direct-Conversion），即接收到的射频信号在解调之前不做频率变换"
      },
      {
        "letter": "B",
        "text": "直流（Direct Current），指直流电源供电的收信机"
      },
      {
        "letter": "C",
        "text": "介质电容（Dielectric Capacitor），指收信机中用于调谐的电容器所用的特定介质"
      },
      {
        "letter": "D",
        "text": "数字变频（Digital-Conversion），指接收到的射频信号经过了数字化的变频处理"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0837",
    "image": ""
  },
  {
    "id": "Q753",
    "originalId": "LX",
    "text": "接收机和发射机中常见的混频器有什么作用？",
    "options": [
      {
        "letter": "A",
        "text": "频率变换。将信号的原始频率变换成另一个频率"
      },
      {
        "letter": "B",
        "text": "混合式调音。将两个信号相互叠加，送往扬声器"
      },
      {
        "letter": "C",
        "text": "变频调速。把直流电变成变频交流电以驱动天调"
      },
      {
        "letter": "D",
        "text": "多频放大器。同时放大具有不同频率的多个信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0838",
    "image": ""
  },
  {
    "id": "Q754",
    "originalId": "LK0847",
    "text": "在超外差式收发信机中，混频器的工作方式可分为“上变频”和“下变频”两种，具体指：",
    "options": [
      {
        "letter": "A",
        "text": "中频频率高于输入频率的为上变频方式，中频频率低于输入频率的为下变频方式"
      },
      {
        "letter": "B",
        "text": "输入频率高于中频频率的为上变频方式，输入频率低于中频频率的为下变频方式"
      },
      {
        "letter": "C",
        "text": "本振频率高于输入频率的为上变频方式，本振频率低于输入频率的为下变频方式"
      },
      {
        "letter": "D",
        "text": "输入频率高于本振频率的为上变频方式，输入频率低于本振频率的为下变频方式"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0839",
    "image": ""
  },
  {
    "id": "Q755",
    "originalId": "LK0845",
    "text": "超外差式业余收发信机的面板上经常设有选择中频滤波器带宽的控制部件。这些中频滤波器所抑制的干扰可以分类为：",
    "options": [
      {
        "letter": "A",
        "text": "邻近频率干扰"
      },
      {
        "letter": "B",
        "text": "镜像频率干扰"
      },
      {
        "letter": "C",
        "text": "中频频率干扰"
      },
      {
        "letter": "D",
        "text": "突发脉冲干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0840",
    "image": ""
  },
  {
    "id": "Q756",
    "originalId": "LK0846",
    "text": "在超外差式业余收发信机中，负责抑制镜像频率干扰的部件是：",
    "options": [
      {
        "letter": "A",
        "text": "变频级之前的波段预选滤波器"
      },
      {
        "letter": "B",
        "text": "变频级之后的中频滤波器"
      },
      {
        "letter": "C",
        "text": "中频放大级中的限幅电路"
      },
      {
        "letter": "D",
        "text": "带有音调控制的音频输出电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0841",
    "image": ""
  },
  {
    "id": "Q757",
    "originalId": "LK0841",
    "text": "超外差式收信机所收信号的频率要比本振频率低（或高）一个中频。然而，比本振频率高（或低）一个中频的另一个遥相对应的信号也可能经混频窜入中频通道，形成“镜像频率干扰”或“镜频干扰”。如果某对讲机的技术规格书给出的 VHF 接收机第一中频为 45.05MHz，那么在 145.00MHz 收到的镜频干扰可能来自：",
    "options": [
      {
        "letter": "A",
        "text": "235.10MHz 或 54.90MHz"
      },
      {
        "letter": "B",
        "text": "190.05MHz 或 99.95MHz"
      },
      {
        "letter": "C",
        "text": "45.05MHz 或 90.10MHz"
      },
      {
        "letter": "D",
        "text": "90.10MHz 或 180.20MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0842",
    "image": ""
  },
  {
    "id": "Q758",
    "originalId": "LK0842",
    "text": "超外差式收信机所收信号的频率要比本振频率低（或高）一个中频。然而，比本振频率高（或低）一个中频的另一个遥相对应的信号也可能经混频窜入中频通道，形成“镜像频率干扰”或“镜频干扰”。如果某对讲机的技术规格书给出 NFM 方式时的第一中频为 47.25MHz，那么在 145.00MHz 收到的镜频干扰可能来自：",
    "options": [
      {
        "letter": "A",
        "text": "239.50MHz 或 50.50MHz"
      },
      {
        "letter": "B",
        "text": "192.25MHz 或 97.75MHz"
      },
      {
        "letter": "C",
        "text": "50.50MHz 或 101.00MHz"
      },
      {
        "letter": "D",
        "text": "151.50MHz 或.202.00MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0843",
    "image": ""
  },
  {
    "id": "Q759",
    "originalId": "LK0843",
    "text": "超外差式收信机所收信号的频率要比本振频率低（或高）一个中频。然而，比本振频率高（或低）一个中频的另一个遥相对应的信号也可能经混频窜入中频通道，形成“镜像频率干扰”或“镜频干扰”。如果某对讲机的技术规格书给出 NFM 接收所用的第一中频为 47.25MHz，那么在 435.00MHz 收到的镜频干扰可能来自：",
    "options": [
      {
        "letter": "A",
        "text": "340.50MHz 或 529.50MHz"
      },
      {
        "letter": "B",
        "text": "387.75MHz 或 482.25MHz"
      },
      {
        "letter": "C",
        "text": "47.25MHz 或 94.50MHz"
      },
      {
        "letter": "D",
        "text": "141.70MHz 或.236.25MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0844",
    "image": ""
  },
  {
    "id": "Q760",
    "originalId": "LK0844",
    "text": "超外差式收信机所收信号的频率要比本振频率低（或高）一个中频。然而，比本振频率高（或低）一个中频的另一个遥相对应的信号也可能经混频窜入中频通道，形成“镜像频率干扰”或“镜频干扰”。如果某对讲机的技术规格书给出的 UHF 接收机第一中频为 58.525MHz，那么在 435.00MHz 收到的镜频干扰可能来自：",
    "options": [
      {
        "letter": "A",
        "text": "317.95MHz 或 552.05MHz"
      },
      {
        "letter": "B",
        "text": "376.475MHz 或 493.525MHz"
      },
      {
        "letter": "C",
        "text": "58.525MHz 或 117.05MHz"
      },
      {
        "letter": "D",
        "text": "234.10.05MHz 或.468.20MHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0845",
    "image": ""
  },
  {
    "id": "Q761",
    "originalId": "LK0813",
    "text": "业余无线电发射机的效率是指：",
    "options": [
      {
        "letter": "A",
        "text": "输出到天线系统的信号功率与发射机所消耗的电源功率之比"
      },
      {
        "letter": "B",
        "text": "通信对象的接收天线得到的信号功率与发射机所消耗的电源功率之比"
      },
      {
        "letter": "C",
        "text": "通信对象的接收天线得到的信号功率与发射机输出到天线系统的信号功率之比"
      },
      {
        "letter": "D",
        "text": "输出到天线系统的有用信号功率与到达天线的包含杂散等无用信号的总功率之比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0846",
    "image": ""
  },
  {
    "id": "Q762",
    "originalId": "LK0814",
    "text": "业余无线电发射机的效率总是明显低于 1。所损耗的那部分能量：",
    "options": [
      {
        "letter": "A",
        "text": "绝大部分转化为热量，极小一部分转化为杂散等无用信号"
      },
      {
        "letter": "B",
        "text": "绝大部分转化为杂散等无用信号并对外辐射"
      },
      {
        "letter": "C",
        "text": "绝大部分因阻抗失配而返回电源，极小一部分转化为热量对外散发"
      },
      {
        "letter": "D",
        "text": "损耗的能量在电容、电感、开关器件等零部件中消失了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0847",
    "image": ""
  },
  {
    "id": "Q763",
    "originalId": "LK0457",
    "text": "若一部业余无线电台的工作电压为直流 13.8 伏，FM 方式的射频输出功率为 N 瓦，电源效率约为 80%，则发射时的工作电流约为：",
    "options": [
      {
        "letter": "A",
        "text": "0.091×Ｎ（安）"
      },
      {
        "letter": "B",
        "text": "13.8×Ｎ（安）"
      },
      {
        "letter": "C",
        "text": "13.8/Ｎ×80%（安）"
      },
      {
        "letter": "D",
        "text": "0.058×Ｎ（安）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0848",
    "image": ""
  },
  {
    "id": "Q764",
    "originalId": "LK0458",
    "text": "若一部业余无线电台的工作电压为交流 220 伏，FM 方式的射频输出功率为 N 瓦，电源效率约为 80%，则发射时的工作电流约为：",
    "options": [
      {
        "letter": "A",
        "text": "0.0057×Ｎ（安）"
      },
      {
        "letter": "B",
        "text": "220×Ｎ（安）"
      },
      {
        "letter": "C",
        "text": "200/Ｎ×80%（安）"
      },
      {
        "letter": "D",
        "text": "0.0036×Ｎ（安）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0849",
    "image": ""
  },
  {
    "id": "Q765",
    "originalId": "LK0459",
    "text": "若一部业余无线电台以 FM 方式发射时的射频输出功率为 N 瓦，电源效率约为 80%，则每发射 10 秒钟所消耗的电能约为：",
    "options": [
      {
        "letter": "A",
        "text": "0.0000035×Ｎ（千瓦小时）"
      },
      {
        "letter": "B",
        "text": "0.0768 /Ｎ（千瓦小时）"
      },
      {
        "letter": "C",
        "text": "0.0022×Ｎ（千瓦小时）"
      },
      {
        "letter": "D",
        "text": "220 / Ｎ（千瓦小时）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0850",
    "image": ""
  },
  {
    "id": "Q766",
    "originalId": "LK1044",
    "text": "无线电发信机在无调制情况下，在一个射频周期内供给天线馈线的平均功率称为：",
    "options": [
      {
        "letter": "A",
        "text": "载波功率"
      },
      {
        "letter": "B",
        "text": "无用功率"
      },
      {
        "letter": "C",
        "text": "平均功率"
      },
      {
        "letter": "D",
        "text": "峰包功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0851",
    "image": ""
  },
  {
    "id": "Q767",
    "originalId": "LK1045",
    "text": "如果某话音发射机在不同调制方式下的峰值输出功率相同，则在无语音输入时，实际射频输出功率由大到小可以排序为：",
    "options": [
      {
        "letter": "A",
        "text": "FM，AM，SSB"
      },
      {
        "letter": "B",
        "text": "AM，SSB，FM"
      },
      {
        "letter": "C",
        "text": "SSB，FM，AM"
      },
      {
        "letter": "D",
        "text": "SSB，AM，FM"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.1",
    "type": "MC1-0852",
    "image": ""
  },
  {
    "id": "Q768",
    "originalId": "LK0119",
    "text": "必要带宽（necessary bandwidth）是指：对给定的发射类别而言，其恰好足以保证在相应速率及在指定条件下具有所要求质量的信息传输的所需带宽。业余电台单边带话音通信 SSB、低速莫尔斯电码通信 CW、调频话音通信 FM 和残余边带业余电视 VSB ATV 的必要带宽分别是：",
    "options": [
      {
        "letter": "A",
        "text": "3000Hz、400Hz、12.5kHz、5MHz 以上"
      },
      {
        "letter": "B",
        "text": "3000Hz、400Hz、5MHz 以上、12.5kHz"
      },
      {
        "letter": "C",
        "text": "5MHz、3000Hz、400Hz、12.5kHz"
      },
      {
        "letter": "D",
        "text": "12.5kHz、5MHz 以上、400Hz、2700Hz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0853",
    "image": ""
  },
  {
    "id": "Q769",
    "originalId": "LK0120",
    "text": "以 CW 方式进行速度为 25WPM 的摩尔斯电码通信，如果考虑传播衰落等因素，必要带宽通常不大于：",
    "options": [
      {
        "letter": "A",
        "text": "200Hz"
      },
      {
        "letter": "B",
        "text": "2700Hz"
      },
      {
        "letter": "C",
        "text": "6.25kHz"
      },
      {
        "letter": "D",
        "text": "12.5kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0854",
    "image": ""
  },
  {
    "id": "Q770",
    "originalId": "LK0121",
    "text": "用单边带方式进行 RTTY 通信，速度为 50 波特，频偏为 170Hz，必要带宽通常不大于：",
    "options": [
      {
        "letter": "A",
        "text": "450Hz"
      },
      {
        "letter": "B",
        "text": "200Hz"
      },
      {
        "letter": "C",
        "text": "2700Hz"
      },
      {
        "letter": "D",
        "text": "12.5kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0855",
    "image": ""
  },
  {
    "id": "Q771",
    "originalId": "LK0122",
    "text": "用单边带方式进行话音通信并间或传输速度为 50 波特，频偏为 70Hz 的 RTTY 消息，必要带宽约为：",
    "options": [
      {
        "letter": "A",
        "text": "2700Hz"
      },
      {
        "letter": "B",
        "text": "200Hz"
      },
      {
        "letter": "C",
        "text": "6.25kHz"
      },
      {
        "letter": "D",
        "text": "12.5kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0856",
    "image": ""
  },
  {
    "id": "Q772",
    "originalId": "LK0123",
    "text": "用通常的调频方式进行话音通信，必要带宽约为：",
    "options": [
      {
        "letter": "A",
        "text": "12.5kHz"
      },
      {
        "letter": "B",
        "text": "2700Hz"
      },
      {
        "letter": "C",
        "text": "200Hz"
      },
      {
        "letter": "D",
        "text": "6.25kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0857",
    "image": ""
  },
  {
    "id": "Q773",
    "originalId": "LK0124",
    "text": "商用业余单边带电台的语音信号通道为 300-3000Hz，高音频部分衰减很大。如果希望对设备进行改装，以将信号带宽扩展到 30-16000Hz，大大提升信号质量。可行的方案是：",
    "options": [
      {
        "letter": "A",
        "text": "放弃该目标，不应超越业务性质所允许的必要带宽最低值"
      },
      {
        "letter": "B",
        "text": "配用广播级超高音质话筒"
      },
      {
        "letter": "C",
        "text": "将原单边带信道的晶体滤波器更换为带宽更宽的滤波器"
      },
      {
        "letter": "D",
        "text": "在话筒电路中增加分段可控音频均衡电路以提升话筒信号的高音分量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.2",
    "type": "MC1-0858",
    "image": ""
  },
  {
    "id": "Q774",
    "originalId": "LK1177",
    "text": "下列哪项技术指标描述了接收机抗拒邻近频率干扰的能力？",
    "options": [
      {
        "letter": "A",
        "text": "中频选择性"
      },
      {
        "letter": "B",
        "text": "整机灵敏度"
      },
      {
        "letter": "C",
        "text": "频道扫描速率"
      },
      {
        "letter": "D",
        "text": "本底噪声"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0859",
    "image": ""
  },
  {
    "id": "Q775",
    "originalId": "LK0829",
    "text": "接收机抗拒工作频率附近干扰信号的能力可以用选择性指标来表示，分别为：",
    "options": [
      {
        "letter": "A",
        "text": "信道带宽、信道选择性和信道滤波器的矩形系数"
      },
      {
        "letter": "B",
        "text": "带内波动和信道带宽"
      },
      {
        "letter": "C",
        "text": "镜像抑制比"
      },
      {
        "letter": "D",
        "text": "前端带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0860",
    "image": ""
  },
  {
    "id": "Q776",
    "originalId": "LK0830",
    "text": "接收机接收 SSB 话音信号时的频响均匀程度可以用选择性指标来表示，分别为：",
    "options": [
      {
        "letter": "A",
        "text": "带内波动和信道带宽"
      },
      {
        "letter": "B",
        "text": "信道带宽、信道选择性和信道滤波器的矩形系数"
      },
      {
        "letter": "C",
        "text": "镜像抑制比"
      },
      {
        "letter": "D",
        "text": "前端带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0861",
    "image": ""
  },
  {
    "id": "Q777",
    "originalId": "LK0831",
    "text": "接收机抗拒相距工作频率较远的强干扰信号的能力可以用选择性指标来表示，分别为：",
    "options": [
      {
        "letter": "A",
        "text": "前端带宽"
      },
      {
        "letter": "B",
        "text": "带内波动和信道带宽"
      },
      {
        "letter": "C",
        "text": "信道带宽、信道选择性和信道滤波器的矩形系数"
      },
      {
        "letter": "D",
        "text": "镜像抑制比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0862",
    "image": ""
  },
  {
    "id": "Q778",
    "originalId": "LK0832",
    "text": "接收机抗拒相距工作频率两倍于中频的强干扰信号的能力可以用选择性指标来表示，分别为：",
    "options": [
      {
        "letter": "A",
        "text": "镜像抑制比"
      },
      {
        "letter": "B",
        "text": "前端带宽"
      },
      {
        "letter": "C",
        "text": "带内波动和信道带宽"
      },
      {
        "letter": "D",
        "text": "信道带宽、信道选择性和信道滤波器的矩形系数"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0863",
    "image": ""
  },
  {
    "id": "Q779",
    "originalId": "LK0816",
    "text": "接收机灵敏度指标的数值大小具有什么意义？",
    "options": [
      {
        "letter": "A",
        "text": "灵敏度指标的数值越小，接收微弱信号的能力越强"
      },
      {
        "letter": "B",
        "text": "灵敏度指标的数值越大，接收微弱信号的能力越强"
      },
      {
        "letter": "C",
        "text": "灵敏度指标的数值越小，对与有用信号同时出现的干扰信号的响应越灵敏"
      },
      {
        "letter": "D",
        "text": "灵敏度指标的数值越大，对与有用信号同时出现的干扰信号的响应越灵敏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0864",
    "image": ""
  },
  {
    "id": "Q780",
    "originalId": "LK0817",
    "text": "用功率电平表示接收机的灵敏度具有什么意义？常用单位是什么？",
    "options": [
      {
        "letter": "A",
        "text": "输出信号达到一定质量标准时输入信号的最小功率电平。单位是 dBm 或 dBμW"
      },
      {
        "letter": "B",
        "text": "输出信号达到一定质量标准时输出信号与输入信号的功率电平之比。单位是 dB"
      },
      {
        "letter": "C",
        "text": "输出信号达到一定质量标准时输入信号与输出信号的功率电平之比。单位是 dB"
      },
      {
        "letter": "D",
        "text": "输出信号维持一定质量标准时输入信号的最小和最大功率电平之比。单位是 dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0865",
    "image": ""
  },
  {
    "id": "Q781",
    "originalId": "LK0818",
    "text": "用电压电平表示接收机的灵敏度具有什么意义？常用单位是什么？",
    "options": [
      {
        "letter": "A",
        "text": "输出信号达到一定质量标准时输入信号的最小电动势。单位是μV、dBμV 或 dBmV"
      },
      {
        "letter": "B",
        "text": "输出信号达到一定质量标准时输入信号的最小电压。单位是μV、dBμV 或 dBmV"
      },
      {
        "letter": "C",
        "text": "输出信号达到一定质量标准时输入信号的最大电动势。单位是μV 或 mV"
      },
      {
        "letter": "D",
        "text": "输出信号达到一定质量标准时输出信号与输入信号的电压之比。单位是 dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0866",
    "image": ""
  },
  {
    "id": "Q782",
    "originalId": "LK0839",
    "text": "业余无线电接收机大多具备信号强度指示功能。在 VHF/UHF 频段，信号强度的最小刻度S1 与输入信号功率电平-141dBm（50Ω上的电压电平 0.02μV）相一致；而在 HF 频段，S1则与-121dBm 的输入信号（50Ω上的 0.2μV）相对应。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "HF 频段的背景噪声较 VHF/UHF 频段为高，使得可感知最小信号电平相应高出约 20dB"
      },
      {
        "letter": "B",
        "text": "由于技术原因，HF 接收机的灵敏度都比 VHF/UHF 频段的低大约 20dB"
      },
      {
        "letter": "C",
        "text": "HF 业余电台功率大一些，而 VHF/UHF 的相对较小，这导致信号强度的刻度标准差异"
      },
      {
        "letter": "D",
        "text": "HF 业余电台主要用于 DX 通信，而 VHF/UHF 的面向本地通信，刻度可以更随意一些"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0867",
    "image": ""
  },
  {
    "id": "Q783",
    "originalId": "LK0820",
    "text": "甲乙两种型号的业余无线电收发信机在技术规格中给出的接收机灵敏度指标分别为 0.1μV 和 0.15μV。关于该指标，正确的推论是：",
    "options": [
      {
        "letter": "A",
        "text": "无法比较二者接收微弱信号的能力，测量灵敏度时所用的输出信号质量标准未知"
      },
      {
        "letter": "B",
        "text": "可以推断甲机接收微弱信号的能力比乙机的差，因为灵敏度指标的数值较小"
      },
      {
        "letter": "C",
        "text": "可以推断甲机接收微弱信号的能力比乙机的高，因为可以接收的信号更微弱"
      },
      {
        "letter": "D",
        "text": "可以推断甲机承受强信号的能力比乙机的低，因为其灵敏度数值比较小"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0868",
    "image": ""
  },
  {
    "id": "Q784",
    "originalId": "LK0821",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 1μV。如果用电压电平μV 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "2μV"
      },
      {
        "letter": "B",
        "text": "1μV"
      },
      {
        "letter": "C",
        "text": "50μV"
      },
      {
        "letter": "D",
        "text": "0.5μV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0869",
    "image": ""
  },
  {
    "id": "Q785",
    "originalId": "LK0822",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 1μV。如果用功率电平 dBm 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "-107dBm"
      },
      {
        "letter": "B",
        "text": "-103dBm"
      },
      {
        "letter": "C",
        "text": "-73dBm"
      },
      {
        "letter": "D",
        "text": "-113dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0870",
    "image": ""
  },
  {
    "id": "Q786",
    "originalId": "LK0823",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 1μV。如果用电压电平 dBμV 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "6dBμV"
      },
      {
        "letter": "B",
        "text": "-2dBμV"
      },
      {
        "letter": "C",
        "text": "3dBμV"
      },
      {
        "letter": "D",
        "text": "0dBμV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0871",
    "image": ""
  },
  {
    "id": "Q787",
    "originalId": "LK0824",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 0.5μV。如果用电压电平μV 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "1μV"
      },
      {
        "letter": "B",
        "text": "0.5μV"
      },
      {
        "letter": "C",
        "text": "50μV"
      },
      {
        "letter": "D",
        "text": "2.5μV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0872",
    "image": ""
  },
  {
    "id": "Q788",
    "originalId": "LK0825",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 0.5μV。如果用功率电平 dBm 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "-113 dBm"
      },
      {
        "letter": "B",
        "text": "-107dBm"
      },
      {
        "letter": "C",
        "text": "-103 dBm"
      },
      {
        "letter": "D",
        "text": "-73 dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0873",
    "image": ""
  },
  {
    "id": "Q789",
    "originalId": "LK0826",
    "text": "当输出信号满足规定质量标准时，在输入阻抗为 50 欧的某接收机天线输入端口处测得的输入信号最小电压为 0.5μV。如果用电压电平 dBμV 表示该机的灵敏度，则为：",
    "options": [
      {
        "letter": "A",
        "text": "0dBμV"
      },
      {
        "letter": "B",
        "text": "-2dBμV"
      },
      {
        "letter": "C",
        "text": "3dBμV"
      },
      {
        "letter": "D",
        "text": "6dBμV"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0874",
    "image": ""
  },
  {
    "id": "Q790",
    "originalId": "LK0827",
    "text": "已知某接收机的天线输入阻抗为 50Ω，灵敏度指标为 2μV，则功率电平相应为：",
    "options": [
      {
        "letter": "A",
        "text": "-107dBm"
      },
      {
        "letter": "B",
        "text": "0.02dBm"
      },
      {
        "letter": "C",
        "text": "-103dBm"
      },
      {
        "letter": "D",
        "text": "-113dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0875",
    "image": ""
  },
  {
    "id": "Q791",
    "originalId": "LK0828",
    "text": "已知某接收机的天线输入阻抗为 50Ω，灵敏度指标为 1μV，则功率电平相应为：",
    "options": [
      {
        "letter": "A",
        "text": "-113dBm"
      },
      {
        "letter": "B",
        "text": "-107dBm"
      },
      {
        "letter": "C",
        "text": "0.01dBm"
      },
      {
        "letter": "D",
        "text": "-103dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0876",
    "image": ""
  },
  {
    "id": "Q792",
    "originalId": "LK0838",
    "text": "制约现代无线电接收机灵敏度的主要因素是：",
    "options": [
      {
        "letter": "A",
        "text": "机内噪声"
      },
      {
        "letter": "B",
        "text": "放大电路的增益"
      },
      {
        "letter": "C",
        "text": "放大电路的稳定性"
      },
      {
        "letter": "D",
        "text": "电源噪声"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0877",
    "image": ""
  },
  {
    "id": "Q793",
    "originalId": "LK0833",
    "text": "术语“信噪比（SNR）”在业余无线电领域广为使用。它是指：",
    "options": [
      {
        "letter": "A",
        "text": "有用信号功率对噪声功率的比值"
      },
      {
        "letter": "B",
        "text": "有用信号峰值电压对噪声峰值电压的比值"
      },
      {
        "letter": "C",
        "text": "有用信号功率对有用信号功率及噪声功率之和的比值"
      },
      {
        "letter": "D",
        "text": "有用信号峰值电压对有用信号峰值电压及噪声峰值电压之和的比值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0878",
    "image": ""
  },
  {
    "id": "Q794",
    "originalId": "LK0834",
    "text": "对于需要接收微弱信号的业余通信，例如 EME 通联，接收机的噪声系数 Fn（以比值的形式表示）是一项重要技术指标。它是指：",
    "options": [
      {
        "letter": "A",
        "text": "接收机输入端信噪比 Si/Ni 对输出端信噪比 So/No 的比值"
      },
      {
        "letter": "B",
        "text": "接收机输入端无信号时，输出端的噪声功率电平"
      },
      {
        "letter": "C",
        "text": "接收机输出端噪声功率电平与输入端噪声功率电平的比值"
      },
      {
        "letter": "D",
        "text": "接收机输入端噪声功率电平与输出端噪声功率电平的比值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0879",
    "image": ""
  },
  {
    "id": "Q795",
    "originalId": "LK0819",
    "text": "接收机的静噪灵敏度是指：",
    "options": [
      {
        "letter": "A",
        "text": "能够使静噪电路退出静噪状态的射频信号最小输入电平"
      },
      {
        "letter": "B",
        "text": "关闭静噪功能之后所能接收到的射频信号最小输入电平"
      },
      {
        "letter": "C",
        "text": "带有静噪功能的接收机开启静噪功能后，按照灵敏度定义测得的灵敏度"
      },
      {
        "letter": "D",
        "text": "带有静噪功能的接收机关闭静噪功能后，按照灵敏度定义测得的灵敏度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0880",
    "image": ""
  },
  {
    "id": "Q796",
    "originalId": "LK0835",
    "text": "对于需要接收微弱信号的业余通信，例如 EME 通联，接收机的噪声系数 Fn（以比值的形式表示）是一项重要技术指标。关于 Fn 的一些基本常识是：",
    "options": [
      {
        "letter": "A",
        "text": "Fn 一定大于 1；在同样的灵敏度下，Fn 越接近 1 越好"
      },
      {
        "letter": "B",
        "text": "Fn 一定小于 1；在同样的灵敏度下，Fn 越接近 0 越好"
      },
      {
        "letter": "C",
        "text": "Fn 一定大于 1；在同样的灵敏度下，Fn 越大越好"
      },
      {
        "letter": "D",
        "text": "Fn 一定小于 1；在同样的灵敏度下，Fn 越接近 1 越好"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0881",
    "image": ""
  },
  {
    "id": "Q797",
    "originalId": "LK0836",
    "text": "对于需要接收微弱信号的业余通信，例如 EME 通联，接收机的噪声指数 NF（以对数表示）是一项重要技术指标。它是指：",
    "options": [
      {
        "letter": "A",
        "text": "接收机输入端信噪比 Si/Ni 对输出端信噪比 So/No 的比值的对数形式"
      },
      {
        "letter": "B",
        "text": "接收机输入端无信号时，输出端的噪声功率电平的对数形式"
      },
      {
        "letter": "C",
        "text": "接收机输出端噪声功率电平与输入端噪声功率电平的比值的对数形式"
      },
      {
        "letter": "D",
        "text": "接收机输入端噪声功率电平与输出端噪声功率电平的比值的对数形式"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0882",
    "image": ""
  },
  {
    "id": "Q798",
    "originalId": "LK0837",
    "text": "对于需要接收微弱信号的业余通信，例如 EME 通联，接收机的噪声指数 NF（以对数表示）是一项重要技术指标。关于 NF 的一些基本常识是：",
    "options": [
      {
        "letter": "A",
        "text": "NF 一定大于 0；在同样的灵敏度下，NF 越接近 0 越好"
      },
      {
        "letter": "B",
        "text": "NF 一定小于 0；在同样的灵敏度下，NF 越接近 0 越好"
      },
      {
        "letter": "C",
        "text": "NF 一定大于 1；在同样的灵敏度下，NF 越大越好"
      },
      {
        "letter": "D",
        "text": "NF 一定处于 0 和 1 之间；在同样的灵敏度下，NF 越接近 1 越好"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0883",
    "image": ""
  },
  {
    "id": "Q799",
    "originalId": "LK0850",
    "text": "在无线电通信领域中，描述信号源、放大器或接收机等设备或系统组件的内部噪声大小时常用“噪声温度”指标。以接收机为例，等效噪声温度 Te 的意义是：",
    "options": [
      {
        "letter": "A",
        "text": "接收机的内部噪声功率等于一个接在天线输入端的优质匹配电阻在产生相同的热噪声功率时该电阻所具有的绝对温度"
      },
      {
        "letter": "B",
        "text": "接收机内部噪声在输出端的功率可以使一个接在输出端上的匹配电阻发热的相对温度"
      },
      {
        "letter": "C",
        "text": "接收机内部噪声在输出端的功率可以使一个接在输出端上的匹配电阻升温的绝对温度"
      },
      {
        "letter": "D",
        "text": "接收机信噪比符合技术指标时所要求的设备工作环境的温度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0884",
    "image": ""
  },
  {
    "id": "Q800",
    "originalId": "LK0851",
    "text": "不产生任何内部噪声的理想放大器或接收机的噪声系数 Fn、噪声指数 NF 和噪声温度 Te分别为：",
    "options": [
      {
        "letter": "A",
        "text": "1，0dB，0°K"
      },
      {
        "letter": "B",
        "text": "0，0dB，-273°K"
      },
      {
        "letter": "C",
        "text": "0，1dB，17°K"
      },
      {
        "letter": "D",
        "text": "0，0dB，-275°K"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0885",
    "image": ""
  },
  {
    "id": "Q801",
    "originalId": "LK0852",
    "text": "假设一个用于卫星业余业务的天线放大器工作在标准温度（17℃）下，其输入端已连接良好匹配的天线。如果放大器所产生的内部噪声与输入的热噪声等效，则该放大器的噪声系数 Fn、噪声指数 NF 和噪声温度 Te 分别为：",
    "options": [
      {
        "letter": "A",
        "text": "2，3dB，290°K"
      },
      {
        "letter": "B",
        "text": "1，1dB，0°K"
      },
      {
        "letter": "C",
        "text": "2，0dB，17°K"
      },
      {
        "letter": "D",
        "text": "1，0dB，-273°K"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.3",
    "type": "MC1-0886",
    "image": ""
  },
  {
    "id": "Q802",
    "originalId": "LK0769",
    "text": "现代收发信机大多基于 DSP 技术设计并制造。因主要功能由软件实现，便获得软件无线电（SDR）设备的称谓。相比模拟收发信机，SDR 设备的优势是：",
    "options": [
      {
        "letter": "A",
        "text": "噪声更低，几乎仅包含数字系统的量化噪声"
      },
      {
        "letter": "B",
        "text": "精度更高，具有更低的信号失真和更好的滤波性能"
      },
      {
        "letter": "C",
        "text": "很少因元器件老化而出现参数漂移等软故障"
      },
      {
        "letter": "D",
        "text": "处理信号的时间延迟较模拟设备更短"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.6.4",
    "type": "MC3-0887",
    "image": ""
  },
  {
    "id": "Q803",
    "originalId": "LX",
    "text": "SDR 收发信机大多提供波段频谱显示器，其基本用途是：",
    "options": [
      {
        "letter": "A",
        "text": "观察波段内的信号活动，以快速切换频率与之通联"
      },
      {
        "letter": "B",
        "text": "观察信号的强度、发射质量和频率组成，以向对方提供更精确的信号描述"
      },
      {
        "letter": "C",
        "text": "观察信号的衰落情况，以快速了解当前工作波段的传播情况"
      },
      {
        "letter": "D",
        "text": "观察信号的音色并向对方提供多频段话音频谱均衡器的调整建议"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "3.6.4",
    "type": "MC3-0888",
    "image": ""
  },
  {
    "id": "Q804",
    "originalId": "LX",
    "text": "有些 SDR 收发信机可以提供 CW、RTTY 或 FT8 等信号的编解码功能。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "利用设备内部的计算机或与设备相连的外部 PC 机，用软件实现了相应功能"
      },
      {
        "letter": "B",
        "text": "制造商向第三方购买编解码模块，并将之插入了收发信机内部的相应插槽"
      },
      {
        "letter": "C",
        "text": "通过云数据中心，经高速联网和 AI 识别获得了相应的编解码结果"
      },
      {
        "letter": "D",
        "text": "一种屏保，通过 3D 动画或虚拟现实实现了正在解码的某种视觉效果"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.4",
    "type": "MC1-0889",
    "image": ""
  },
  {
    "id": "Q805",
    "originalId": "LX",
    "text": "相比模拟收发信机，为什么多数 SDR 收发信机可以提供更加灵活的滤波功能？",
    "options": [
      {
        "letter": "A",
        "text": "数字滤波无需物理元件支持，只要设备的计算能力足够便可现场调节滤波特性"
      },
      {
        "letter": "B",
        "text": "SDR 收发信机大量内置机械滤波器组，以通过插值运算实现带宽的连续调节"
      },
      {
        "letter": "C",
        "text": "SDR 收发信机用移相法实现调制与解调。只需改变电阻便可改变信号的带宽"
      },
      {
        "letter": "D",
        "text": "SDR 收发信机运用高速联网和云数据中心，可对任意信号进行随心所欲的滤波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.6.4",
    "type": "MC1-0890",
    "image": ""
  },
  {
    "id": "Q806",
    "originalId": "LK1206",
    "text": "下列哪种活动适合业余无线电爱好者组织比赛或用来定位 QRM？",
    "options": [
      {
        "letter": "A",
        "text": "业余无线电测向"
      },
      {
        "letter": "B",
        "text": "扫频多普勒探测"
      },
      {
        "letter": "C",
        "text": "回波定位"
      },
      {
        "letter": "D",
        "text": "单、多基地 PSD 分析"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.1",
    "type": "MC1-0891",
    "image": ""
  },
  {
    "id": "Q807",
    "originalId": "LX",
    "text": "下列哪些物品与接收机的组合可用于 ARDF 活动？",
    "options": [
      {
        "letter": "A",
        "text": "定向天线"
      },
      {
        "letter": "B",
        "text": "射频电桥"
      },
      {
        "letter": "C",
        "text": "噪声电桥"
      },
      {
        "letter": "D",
        "text": "SWR 电桥"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.1",
    "type": "MC1-0892",
    "image": ""
  },
  {
    "id": "Q808",
    "originalId": "LK0175",
    "text": "业余无线电测向活动所用的隐蔽台属于下列范畴的设备：",
    "options": [
      {
        "letter": "A",
        "text": "属于业余无线电台设备，设置使用须向无线电管理机构提出申请并得到批准"
      },
      {
        "letter": "B",
        "text": "属于特殊免执照发射设备，不需取得任何行政许可即可任意设置使用"
      },
      {
        "letter": "C",
        "text": "不属于无线电管理对象，由体育主管部门或者体育民间组织的默认即可设置使用"
      },
      {
        "letter": "D",
        "text": "属于体育或游戏器材，其性能指标不需经过无线电检测部门检测合格"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.1",
    "type": "MC1-0893",
    "image": ""
  },
  {
    "id": "Q809",
    "originalId": "LK0176",
    "text": "国际业余无线电联盟（IARU）业余无线电测向锦标赛规则要求 144MHz 测向发射机采用调幅度为 70%-80%的 A2A 调制方式发射 8-15WPM 的音频摩尔斯电码发射电台标识。该类发射占用带宽不得大于下列数值：",
    "options": [
      {
        "letter": "A",
        "text": "6kHz"
      },
      {
        "letter": "B",
        "text": "12.5kHz"
      },
      {
        "letter": "C",
        "text": "25kHz"
      },
      {
        "letter": "D",
        "text": "100Hz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.1",
    "type": "MC1-0894",
    "image": ""
  },
  {
    "id": "Q810",
    "originalId": "LK0982",
    "text": "80 米波段业余无线电测向机的接收天线多为环形天线与鞭状天线的组合，以通过分别接收信号的磁场和电场分量获得具有单向性的心形方向图。但是，随着测向机逐渐接近发信电台，在远处调好的方向性会变差。这迫使我们重调鞭状天线的长度。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "在远场区，波阻抗几乎是恒定的。而至近场，波阻抗的变化就会越来越大"
      },
      {
        "letter": "B",
        "text": "当接近发信电台时，信号变强会导致接收机的前级半导体器件过载"
      },
      {
        "letter": "C",
        "text": "当接近发信电台时，信号变强会导致鞭状天线进入非线性工作区"
      },
      {
        "letter": "D",
        "text": "当接近发信电台时，信号变强会导致环形天线发热、变形，迫使参数改变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.2",
    "type": "MC1-0895",
    "image": ""
  },
  {
    "id": "Q811",
    "originalId": "LK1213",
    "text": "有时，160/80 米波段业余无线电测向机所用的带屏蔽环形天线会被类似于中波收音机的磁棒天线所替代。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "如将磁棒上的线圈中置，则天线的接收特性与环形天线相似。并且，设备还会更小巧"
      },
      {
        "letter": "B",
        "text": "接近发射机时，非屏蔽磁棒天线的电容感应会影响方向性，选手需熟练应对这种情况"
      },
      {
        "letter": "C",
        "text": "接近发射机时，变强的信号使磁棒饱和，这相当于实现了自动增益控制（AGC）功能"
      },
      {
        "letter": "D",
        "text": "接近发射机时，变强的信号使磁棒饱和，这相当于添加了衰减器，便于选手测定方位"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.7.2",
    "type": "MC2-0896",
    "image": ""
  },
  {
    "id": "Q812",
    "originalId": "LK1211",
    "text": "有时，两米波段 ARDF 接收机会选配仅有驱动和反射两个单元的八木天线。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "二单元天线仍有一定的单向性并更为轻便。对熟练的测向选手来说，其仍不失实用性"
      },
      {
        "letter": "B",
        "text": "在接近发信电台的近场区，选手通常利用天线的零点辅助定位。此时单元数并不关键"
      },
      {
        "letter": "C",
        "text": "在接近发信电台的近场区，选手可以为天线临时添加一个引向器以获得尖锐的方向性"
      },
      {
        "letter": "D",
        "text": "在接近发信电台的近场区，三单元八木天线的方向性反而变差，影响正确测定方位角"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.7.2",
    "type": "MC2-0897",
    "image": ""
  },
  {
    "id": "Q813",
    "originalId": "LK1207",
    "text": "有时，业余无线电爱好者会使用 HB9CV 天线来自制两米波段 ARDF 接收机。关于 HB9CV天线，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "该天线是一种双驱动单元八木天线，引向器与反射器通过移相跳线以 225°分相馈电"
      },
      {
        "letter": "B",
        "text": "HB9CV 天线带宽较宽，水平和垂直方向上的单向特性理想，并且便于选手移动携带"
      },
      {
        "letter": "C",
        "text": "但是，这种天线需要通过电容耦合来抵消移相跳线的感抗，这会导致 SWR 居高不下"
      },
      {
        "letter": "D",
        "text": "HB9CV 天线是轻便高效的业余无线电测向天线，可惜无法用于通联，其具有方向性"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.7.2",
    "type": "MC2-0898",
    "image": ""
  },
  {
    "id": "Q814",
    "originalId": "LK0663",
    "text": "在 HF 业余频段的数据通信段中，我们有时会在 SSB 方式下听到一种包含两个音调的信号,两个音调还以一定的速率交替变化。使用这种信号的通信方式可能是：",
    "options": [
      {
        "letter": "A",
        "text": "RTTY"
      },
      {
        "letter": "B",
        "text": "PSK31"
      },
      {
        "letter": "C",
        "text": "FT4"
      },
      {
        "letter": "D",
        "text": "SSTV 或 FAX"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0899",
    "image": ""
  },
  {
    "id": "Q815",
    "originalId": "LK0664",
    "text": "在 HF 业余频段的数据通信段中，我们有时会在 SSB 方式下听到一种音调不变但似乎又在不断颤动的信号。使用这种信号的通信方式可能是：",
    "options": [
      {
        "letter": "A",
        "text": "BPSK31"
      },
      {
        "letter": "B",
        "text": "QPSK31"
      },
      {
        "letter": "C",
        "text": "FT4"
      },
      {
        "letter": "D",
        "text": "SSTV 或 FAX"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "3.7.3",
    "type": "MC2-0900",
    "image": ""
  },
  {
    "id": "Q816",
    "originalId": "LK0665",
    "text": "在 HF 业余频段中，我们有时会在 SSB 方式下听到一种音调周期性变化的信号，并可以在每个周期中听到“笃、笃”声或“咯、咯”声。不同业余电台所发的这种信号，音调的变化周期可能不同，从每秒数次至一两秒一次都有。使用这种信号的通信方式可能是：",
    "options": [
      {
        "letter": "A",
        "text": "SSTV 或 FAX"
      },
      {
        "letter": "B",
        "text": "PSK31"
      },
      {
        "letter": "C",
        "text": "RTTY"
      },
      {
        "letter": "D",
        "text": "FT4"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0901",
    "image": ""
  },
  {
    "id": "Q817",
    "originalId": "LK0709",
    "text": "一个 CW 信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "一条闪动的垂直线"
      },
      {
        "letter": "B",
        "text": "一条固定的直线"
      },
      {
        "letter": "C",
        "text": "两条水平直线"
      },
      {
        "letter": "D",
        "text": "一条正弦波曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0902",
    "image": ""
  },
  {
    "id": "Q818",
    "originalId": "LK0710",
    "text": "一个 RTTY 信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "两条闪动的垂直线"
      },
      {
        "letter": "B",
        "text": "一条垂直线"
      },
      {
        "letter": "C",
        "text": "一条正弦波曲线"
      },
      {
        "letter": "D",
        "text": "一条复杂的周期性曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0903",
    "image": ""
  },
  {
    "id": "Q819",
    "originalId": "LK0711",
    "text": "一个 SSB 话音信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "一组随语音出现和变化的非对称垂直线"
      },
      {
        "letter": "B",
        "text": "一条随语音闪烁的直线"
      },
      {
        "letter": "C",
        "text": "一条固定的直线"
      },
      {
        "letter": "D",
        "text": "一条复杂的周期性曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0904",
    "image": ""
  },
  {
    "id": "Q820",
    "originalId": "LK0712",
    "text": "一个 AM 话音信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "一条固定的垂直线，左右对称伴随一组随语音出现和变化的垂直线"
      },
      {
        "letter": "B",
        "text": "一条随语音闪烁的直线"
      },
      {
        "letter": "C",
        "text": "多条固定的直线"
      },
      {
        "letter": "D",
        "text": "一条复杂的周期性曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0905",
    "image": ""
  },
  {
    "id": "Q821",
    "originalId": "LK0713",
    "text": "一个 FM 话音信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "一条随语音变化高度的垂直线，左右对称伴随一组随语音出现和变化的垂直线"
      },
      {
        "letter": "B",
        "text": "一条随语音闪烁的直线"
      },
      {
        "letter": "C",
        "text": "多条固定的直线"
      },
      {
        "letter": "D",
        "text": "一条复杂的周期性曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0906",
    "image": ""
  },
  {
    "id": "Q822",
    "originalId": "LK0714",
    "text": "一个 PSK31 信号的频谱表现为：",
    "options": [
      {
        "letter": "A",
        "text": "一个宽度很窄的单峰"
      },
      {
        "letter": "B",
        "text": "一条固定的直线，左右伴随一组对称的随语音变化的直线"
      },
      {
        "letter": "C",
        "text": "多条固定的直线"
      },
      {
        "letter": "D",
        "text": "一条复杂的周期性曲线"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.7.3",
    "type": "MC1-0907",
    "image": ""
  },
  {
    "id": "Q823",
    "originalId": "LK0895",
    "text": "在业余无线电领域中，缩写 AMSAT 是指：",
    "options": [
      {
        "letter": "A",
        "text": "美国的业余无线电卫星公司，是一个专注于实验卫星的设计、制造、运行和推进空间教育的非营利性志愿者组织"
      },
      {
        "letter": "B",
        "text": "所有业余无线电卫星的总称"
      },
      {
        "letter": "C",
        "text": "某一系列业余无线电卫星的总称"
      },
      {
        "letter": "D",
        "text": "某一颗业余无线电卫星的名称"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0908",
    "image": ""
  },
  {
    "id": "Q824",
    "originalId": "LK0896",
    "text": "在描述业余无线电卫星时经常用到缩写 OSCAR（奥斯卡），这个名称的由来是：",
    "options": [
      {
        "letter": "A",
        "text": "“搭载有业余无线电装置的地球轨道卫星”的英文缩写"
      },
      {
        "letter": "B",
        "text": "按照发明者奥斯卡的方案设计制造的业余卫星"
      },
      {
        "letter": "C",
        "text": "纪念业余无线电技术先驱者奥斯卡"
      },
      {
        "letter": "D",
        "text": "电影奥斯卡金奖的基金所赞助的业余卫星活动"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0909",
    "image": ""
  },
  {
    "id": "Q825",
    "originalId": "LK0897",
    "text": "我国发射的第一颗业余卫星的发射年份、名称、国际 OSCAR 系列号和转发器模式分别为：",
    "options": [
      {
        "letter": "A",
        "text": "2009 年，希望一号（XW-1），HO68，V/U（J）"
      },
      {
        "letter": "B",
        "text": "2008 年，希望一号（XW-1），HO68，V/U（J）"
      },
      {
        "letter": "C",
        "text": "2010 年，希望一号（XW-1），HO68，V/U（J）"
      },
      {
        "letter": "D",
        "text": "2008 年，希望一号（XW-1），无 OSCAR 编号，B"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0910",
    "image": ""
  },
  {
    "id": "Q826",
    "originalId": "LK1047",
    "text": "开展 EME 通信试验的最佳时机是：",
    "options": [
      {
        "letter": "A",
        "text": "月亮处于近地点"
      },
      {
        "letter": "B",
        "text": "满月"
      },
      {
        "letter": "C",
        "text": "通信两端天气都好"
      },
      {
        "letter": "D",
        "text": "太阳黑子数高"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0911",
    "image": ""
  },
  {
    "id": "Q827",
    "originalId": "LK0747",
    "text": "在 EME 通信等需要接收极微弱信号的场合，安装前置放大器时应做到：",
    "options": [
      {
        "letter": "A",
        "text": "尽量安装在靠近天线的地方，信号特别微弱时对放大器进行冷却以降低热噪声"
      },
      {
        "letter": "B",
        "text": "尽量安装在靠近接收机的地方，放大器最好加热以防止元器件温度过低"
      },
      {
        "letter": "C",
        "text": "尽量安装在靠近接收机的地方，放大器尽量采用较高的电源电压以求更高的增益"
      },
      {
        "letter": "D",
        "text": "尽量安装在远离天线的地方，放大器采用射频正反馈电路以提高增益"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0912",
    "image": ""
  },
  {
    "id": "Q828",
    "originalId": "LK0703",
    "text": "对于需要接收 VHF/UHF 微弱信号的通信场景，比如月面反射实验，爱好者们时常需要在所用八木天线的馈电端处就近加装低噪声前置放大器。相比之下，HF 通信爱好者却很少将他们所用的前置放大器装在八木天线或其他收信天线的馈电点处。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "VHF/UHF 频段的背景噪声较 HF 频段为低。将放大器置于接收天线处可降低传输线固有噪声的影响，提高收信信噪比。而对于 HF 频段，是否这样做，差别并不明显"
      },
      {
        "letter": "B",
        "text": "电缆的固有噪声在 VHF/UHF 频段更高"
      },
      {
        "letter": "C",
        "text": "HF 频段的放大器体积太大，不适合安装于天线端"
      },
      {
        "letter": "D",
        "text": "HF 频段的八木天线体积较大，把放大器装得太近容易引发自激"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0913",
    "image": ""
  },
  {
    "id": "Q829",
    "originalId": "LK1119",
    "text": "下列哪个业余波段最适合流星余迹散射通信？",
    "options": [
      {
        "letter": "A",
        "text": "6 米"
      },
      {
        "letter": "B",
        "text": "10 米"
      },
      {
        "letter": "C",
        "text": "2 米"
      },
      {
        "letter": "D",
        "text": "70 厘米"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0914",
    "image": ""
  },
  {
    "id": "Q830",
    "originalId": "LX",
    "text": "下列哪些通信方式可用于流星余迹和对流层散射通信实验？",
    "options": [
      {
        "letter": "A",
        "text": "FT4"
      },
      {
        "letter": "B",
        "text": "APRS"
      },
      {
        "letter": "C",
        "text": "QPSK31"
      },
      {
        "letter": "D",
        "text": "MT63"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "3.8.1",
    "type": "MC1-0915",
    "image": ""
  },
  {
    "id": "Q831",
    "originalId": "LK1147",
    "text": "静电放电是一种常见电磁现象，时刻伴随日常生活。但是，较强的静电放电却足以损坏电子设备甚至危及人身，需要预防。以下所述与静电有关的是：",
    "options": [
      {
        "letter": "A",
        "text": "刮风时，斜拉天线上出现的直流高压"
      },
      {
        "letter": "B",
        "text": "雷雨时，云层中积蓄的巨大能量"
      },
      {
        "letter": "C",
        "text": "收信时，接收机收到的各种 QRN"
      },
      {
        "letter": "D",
        "text": "发话时，电台馈送到天线的射频能量"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.1.2",
    "type": "MC3-0924",
    "image": ""
  },
  {
    "id": "Q832",
    "originalId": "LK1148",
    "text": "如果将导体置于静电场中，导体将呈现如下特点：",
    "options": [
      {
        "letter": "A",
        "text": "静电平衡后，导体是等势体，内部场强为零，外表面出现电荷"
      },
      {
        "letter": "B",
        "text": "外表面曲率很小时，导体表面的电荷会高度聚集。这可能形成尖端放电"
      },
      {
        "letter": "C",
        "text": "静电平衡后，导体是等势体，内部电荷与外表面电荷极性相反"
      },
      {
        "letter": "D",
        "text": "外表面曲率很大时，导体表面的电荷会高度聚集。这可能形成尖端放电"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.1.2",
    "type": "MC2-0925",
    "image": ""
  },
  {
    "id": "Q833",
    "originalId": "LK1139",
    "text": "直流电（DC）是以电荷的运动方向始终不变来定义的。关于直流电，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "直流电源的输出端有正负极之分"
      },
      {
        "letter": "B",
        "text": "电池提供的是直流电"
      },
      {
        "letter": "C",
        "text": "直流电压通常为 13.8 伏。这样的低压即使短路也没什么危害"
      },
      {
        "letter": "D",
        "text": "脉动直流电不含交流成分，因为电荷的运动方向始终不变"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.1.2",
    "type": "MC2-0926",
    "image": ""
  },
  {
    "id": "Q834",
    "originalId": "LK1140",
    "text": "交流电（AC）是以电荷的运动方向随时间交替变化来定义的。关于交流电，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "交流电源的输出端没有正负极之分，因为极性总在交替变化"
      },
      {
        "letter": "B",
        "text": "220V 市电是一种交流电。由于不需区分正负极，所以火线和零线可以混用"
      },
      {
        "letter": "C",
        "text": "交流电均为纯正弦波，仅包含单一频率成分"
      },
      {
        "letter": "D",
        "text": "业余电台所接收的信号不是交流电。那是复杂波形信号，也就是“复信号”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0927",
    "image": ""
  },
  {
    "id": "Q835",
    "originalId": "LK1107",
    "text": "以下哪一个术语可以用来描述交流电每秒改变极性的次数？",
    "options": [
      {
        "letter": "A",
        "text": "频率"
      },
      {
        "letter": "B",
        "text": "速率"
      },
      {
        "letter": "C",
        "text": "波长"
      },
      {
        "letter": "D",
        "text": "脉率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0928",
    "image": ""
  },
  {
    "id": "Q836",
    "originalId": "LX",
    "text": "业余无线电爱好者经常提及的“波长”与无线电波的频率有什么关系？",
    "options": [
      {
        "letter": "A",
        "text": "波长为光速与频率之比；频率越高，波长越短"
      },
      {
        "letter": "B",
        "text": "波长与真空有些关联，但是在现实生活中无用"
      },
      {
        "letter": "C",
        "text": "很明显，波长为频率的 1/4。这个常数应当牢记"
      },
      {
        "letter": "D",
        "text": "很明显，波长为频率的 4 倍。这个常数应当牢记"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0929",
    "image": ""
  },
  {
    "id": "Q837",
    "originalId": "LK0428",
    "text": "物理量“电动势”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "电子器件或装置将某种形式的能量转化为电能的能力"
      },
      {
        "letter": "B",
        "text": "加在电路两端的电源驱动电子流动的力量大小"
      },
      {
        "letter": "C",
        "text": "单位时间内流过电路的电子数量"
      },
      {
        "letter": "D",
        "text": "电源所能供应的电子数量最大值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0930",
    "image": ""
  },
  {
    "id": "Q838",
    "originalId": "LK0427",
    "text": "物理量“电压”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "加在电路两端的电源驱动电子流动的力量大小"
      },
      {
        "letter": "B",
        "text": "电子器件或装置将其它形式的能量转化为电能的能力"
      },
      {
        "letter": "C",
        "text": "单位时间内流过电路的电子数量"
      },
      {
        "letter": "D",
        "text": "电源所能供应的电子数量最大值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0931",
    "image": ""
  },
  {
    "id": "Q839",
    "originalId": "LK0474",
    "text": "正弦交流电压或电流的峰值（peak value）是指：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "从零点算起的最大值"
      },
      {
        "letter": "B",
        "text": "一个周期内瞬时值的平均值乘以 2＾(1/2)"
      },
      {
        "letter": "C",
        "text": "负半周最大幅度与正半周最大幅度的平均值"
      },
      {
        "letter": "D",
        "text": "负半周最大幅度与正半周最大幅度的差值的二次方"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0932",
    "image": ""
  },
  {
    "id": "Q840",
    "originalId": "LK0475",
    "text": "正弦交流电压或电流的峰-峰值（peak-to-peak value）是指：",
    "options": [
      {
        "letter": "A",
        "text": "从负半周峰值到正半周峰值之间的差值"
      },
      {
        "letter": "B",
        "text": "从零点算起的最大值"
      },
      {
        "letter": "C",
        "text": "负半周最大幅度与正半周最大幅度的差值的二次方"
      },
      {
        "letter": "D",
        "text": "负半周最大幅度与正半周最大幅度的差值的平方根"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0933",
    "image": ""
  },
  {
    "id": "Q841",
    "originalId": "LK0476",
    "text": "任意交流电压的有效值（RMS voltage）是指：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "在同一电阻上可以转换出与该交流电压效果相同的热量的直流电压"
      },
      {
        "letter": "B",
        "text": "最终转换成在应用场景中真正发挥作用的有效能量的那部分电压值"
      },
      {
        "letter": "C",
        "text": "电压的平均值乘以 2＾(1/2)"
      },
      {
        "letter": "D",
        "text": "电压的峰值除以 2＾(1/2)"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0934",
    "image": ""
  },
  {
    "id": "Q842",
    "originalId": "LK0426",
    "text": "物理量“电流”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "单位时间内流过电路的电子数量"
      },
      {
        "letter": "B",
        "text": "电源所能供应的电子数量最大值"
      },
      {
        "letter": "C",
        "text": "通电后流过电路的电子数量"
      },
      {
        "letter": "D",
        "text": "电子在导体中的运动速度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0935",
    "image": ""
  },
  {
    "id": "Q843",
    "originalId": "LK0429",
    "text": "物理量“电阻”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "电路从一点到另一点阻碍电流通过的能力大小"
      },
      {
        "letter": "B",
        "text": "电子克服电路阻力所需的能量大小"
      },
      {
        "letter": "C",
        "text": "电路阻碍电流通过所消耗的能量大小"
      },
      {
        "letter": "D",
        "text": "电路阻断电流所需的过渡时间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0936",
    "image": ""
  },
  {
    "id": "Q844",
    "originalId": "LK0430",
    "text": "物理量“功率”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "电流在单位时间内所做的功"
      },
      {
        "letter": "B",
        "text": "电子通过电路所获得的能量大小"
      },
      {
        "letter": "C",
        "text": "负载总共消耗的能量"
      },
      {
        "letter": "D",
        "text": "电源所能供应的电子数量最大值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0937",
    "image": ""
  },
  {
    "id": "Q845",
    "originalId": "LK0440",
    "text": "直流电路欧姆定律是说：",
    "options": [
      {
        "letter": "A",
        "text": "流过电阻的电流 I 与电阻两端的电压 U 成正比，与阻值 R 成反比"
      },
      {
        "letter": "B",
        "text": "电阻两端的电压 U 与流过电阻的电流 I 成正比，与阻值 R 成正比"
      },
      {
        "letter": "C",
        "text": "流过电阻的电流 I 与电阻两端的电压 U 成正比，与阻值 R 成正比"
      },
      {
        "letter": "D",
        "text": "电阻两端的电压 U 与流过电阻的电流 I 成正比，与阻值 R 成反比"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.1.2",
    "type": "MC2-0938",
    "image": ""
  },
  {
    "id": "Q846",
    "originalId": "LK1141",
    "text": "在电路中不受电阻阻碍的电流，种类如下：",
    "options": [
      {
        "letter": "A",
        "text": "不存在"
      },
      {
        "letter": "B",
        "text": "射频电流"
      },
      {
        "letter": "C",
        "text": "音频电流"
      },
      {
        "letter": "D",
        "text": "直流电流"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0939",
    "image": ""
  },
  {
    "id": "Q847",
    "originalId": "LX",
    "text": "术语“阻抗”描述的是：",
    "options": [
      {
        "letter": "A",
        "text": "电路从一点到另一点对交流电流阻碍作用的统称"
      },
      {
        "letter": "B",
        "text": "电路从一点到另一点阻断直流电流，通过交流电流的能力大小"
      },
      {
        "letter": "C",
        "text": "电路从一点到另一点阻断交流电流，通过直流电流的能力大小"
      },
      {
        "letter": "D",
        "text": "电路从一点到另一点阻断特定频率交流电流的能力大小"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.2",
    "type": "MC1-0940",
    "image": ""
  },
  {
    "id": "Q848",
    "originalId": "LK0435",
    "text": "电动势的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "伏（特）"
      },
      {
        "letter": "B",
        "text": "安（培）"
      },
      {
        "letter": "C",
        "text": "瓦（特）"
      },
      {
        "letter": "D",
        "text": "欧（姆）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0941",
    "image": ""
  },
  {
    "id": "Q849",
    "originalId": "LK0432",
    "text": "电压的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "伏（特）"
      },
      {
        "letter": "B",
        "text": "安（培）"
      },
      {
        "letter": "C",
        "text": "瓦（特）"
      },
      {
        "letter": "D",
        "text": "欧（姆）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0942",
    "image": ""
  },
  {
    "id": "Q850",
    "originalId": "LK0431",
    "text": "电流的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "安（培）"
      },
      {
        "letter": "B",
        "text": "伏（特）"
      },
      {
        "letter": "C",
        "text": "瓦（特）"
      },
      {
        "letter": "D",
        "text": "欧（姆）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0943",
    "image": ""
  },
  {
    "id": "Q851",
    "originalId": "LK0433",
    "text": "电阻的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "欧（姆）"
      },
      {
        "letter": "B",
        "text": "安（培）"
      },
      {
        "letter": "C",
        "text": "伏（特）"
      },
      {
        "letter": "D",
        "text": "瓦（特）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0944",
    "image": ""
  },
  {
    "id": "Q852",
    "originalId": "LY0433",
    "text": "阻抗的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "欧（姆）"
      },
      {
        "letter": "B",
        "text": "安（培）"
      },
      {
        "letter": "C",
        "text": "伏（特）"
      },
      {
        "letter": "D",
        "text": "瓦（特）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0945",
    "image": ""
  },
  {
    "id": "Q853",
    "originalId": "LK0434",
    "text": "功率的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "瓦（特）"
      },
      {
        "letter": "B",
        "text": "安（培）"
      },
      {
        "letter": "C",
        "text": "伏（特）"
      },
      {
        "letter": "D",
        "text": "欧（姆）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0946",
    "image": ""
  },
  {
    "id": "Q854",
    "originalId": "LX",
    "text": "频率的单位是：",
    "options": [
      {
        "letter": "A",
        "text": "赫（兹）"
      },
      {
        "letter": "B",
        "text": "亨（利）"
      },
      {
        "letter": "C",
        "text": "法（拉）"
      },
      {
        "letter": "D",
        "text": "库（伦）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0947",
    "image": ""
  },
  {
    "id": "Q855",
    "originalId": "LK0466",
    "text": "在法定计量单位中，词头 k 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾3，千"
      },
      {
        "letter": "B",
        "text": "10＾(-3)，毫"
      },
      {
        "letter": "C",
        "text": "10＾6，兆"
      },
      {
        "letter": "D",
        "text": "10＾(-6)，微"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0948",
    "image": ""
  },
  {
    "id": "Q856",
    "originalId": "LK0467",
    "text": "在法定计量单位中，词头 m 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾(-3)，毫"
      },
      {
        "letter": "B",
        "text": "10＾3，千"
      },
      {
        "letter": "C",
        "text": "10＾6，兆"
      },
      {
        "letter": "D",
        "text": "10＾(-6)，微"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0949",
    "image": ""
  },
  {
    "id": "Q857",
    "originalId": "LK0468",
    "text": "在法定计量单位中，词头 M 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾6，兆"
      },
      {
        "letter": "B",
        "text": "10＾(-6)，微"
      },
      {
        "letter": "C",
        "text": "10＾3，千"
      },
      {
        "letter": "D",
        "text": "10＾(-3)，毫"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0950",
    "image": ""
  },
  {
    "id": "Q858",
    "originalId": "LK0469",
    "text": "在法定计量单位中，词头μ的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾(-6)，微"
      },
      {
        "letter": "B",
        "text": "10＾6，兆"
      },
      {
        "letter": "C",
        "text": "10＾(-3)，毫"
      },
      {
        "letter": "D",
        "text": "10＾3，千"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0951",
    "image": ""
  },
  {
    "id": "Q859",
    "originalId": "LK0470",
    "text": "在法定计量单位中，词头 G 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾9，吉"
      },
      {
        "letter": "B",
        "text": "10＾6，兆"
      },
      {
        "letter": "C",
        "text": "10＾12，太"
      },
      {
        "letter": "D",
        "text": "10＾(-12)，皮"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0952",
    "image": ""
  },
  {
    "id": "Q860",
    "originalId": "LK0471",
    "text": "在法定计量单位中，词头 n 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾(-9)，纳"
      },
      {
        "letter": "B",
        "text": "10＾9，吉"
      },
      {
        "letter": "C",
        "text": "10＾12，太"
      },
      {
        "letter": "D",
        "text": "10＾(-12)，皮"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0953",
    "image": ""
  },
  {
    "id": "Q861",
    "originalId": "LK0472",
    "text": "在法定计量单位中，词头 T 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾12，太"
      },
      {
        "letter": "B",
        "text": "10＾-12，皮"
      },
      {
        "letter": "C",
        "text": "10＾9，吉"
      },
      {
        "letter": "D",
        "text": "10＾(-9)，纳"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0954",
    "image": ""
  },
  {
    "id": "Q862",
    "originalId": "LK0473",
    "text": "在法定计量单位中，词头 p 的数学意义和文字含义分别为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "10＾(-12)，皮"
      },
      {
        "letter": "B",
        "text": "10＾12，太"
      },
      {
        "letter": "C",
        "text": "10＾(-9)，纳"
      },
      {
        "letter": "D",
        "text": "10＾9，吉"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0955",
    "image": ""
  },
  {
    "id": "Q863",
    "originalId": "LK1146",
    "text": "以下哪个业余无线电通信缩语可以表述术语“射频”或特指无线电用途的某个频率？",
    "options": [
      {
        "letter": "A",
        "text": "RF"
      },
      {
        "letter": "B",
        "text": "HF"
      },
      {
        "letter": "C",
        "text": "AF"
      },
      {
        "letter": "D",
        "text": "MF"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0956",
    "image": ""
  },
  {
    "id": "Q864",
    "originalId": "LK0495",
    "text": "术语“音频”是指人们可以普遍听到的声音的频率。以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "音频的频率范围大致为 16Hz-20kHz"
      },
      {
        "letter": "B",
        "text": "音频位于 VLF 至 MF 多个频带内"
      },
      {
        "letter": "C",
        "text": "音频的频率范围大致为 16kHz-20kHz"
      },
      {
        "letter": "D",
        "text": "音频位于 VHF 频带内"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0957",
    "image": ""
  },
  {
    "id": "Q865",
    "originalId": "LK0849",
    "text": "无线电通信及相关测试设备、电视设备和音频设备常用的传输接口标称阻抗分别为：",
    "options": [
      {
        "letter": "A",
        "text": "50 欧、75 欧和 600 欧"
      },
      {
        "letter": "B",
        "text": "50 欧、600 欧和 75 欧"
      },
      {
        "letter": "C",
        "text": "50 欧、50 欧和 75 欧"
      },
      {
        "letter": "D",
        "text": "75 欧、50 欧和 16 欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0958",
    "image": ""
  },
  {
    "id": "Q866",
    "originalId": "LX",
    "text": "1,805,000Hz 可以表述为：",
    "options": [
      {
        "letter": "A",
        "text": "1.805MHz"
      },
      {
        "letter": "B",
        "text": "1.805kHz"
      },
      {
        "letter": "C",
        "text": "1.805mHz"
      },
      {
        "letter": "D",
        "text": "1.805GHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0959",
    "image": ""
  },
  {
    "id": "Q867",
    "originalId": "LX",
    "text": "2430MHz 可以表示为：",
    "options": [
      {
        "letter": "A",
        "text": "2.43GHz"
      },
      {
        "letter": "B",
        "text": "243GHz"
      },
      {
        "letter": "C",
        "text": "0.00243nHz"
      },
      {
        "letter": "D",
        "text": "24.3kHz"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0960",
    "image": ""
  },
  {
    "id": "Q868",
    "originalId": "LX",
    "text": "将阻值为 1 欧的电阻与 13.8 伏电源并联，电阻所耗散的功率大约为：",
    "options": [
      {
        "letter": "A",
        "text": "190 瓦"
      },
      {
        "letter": "B",
        "text": "13.8 伏"
      },
      {
        "letter": "C",
        "text": "13.8 安"
      },
      {
        "letter": "D",
        "text": "190 伏安"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0961",
    "image": ""
  },
  {
    "id": "Q869",
    "originalId": "LK0566",
    "text": "5W 可以表示为：",
    "options": [
      {
        "letter": "A",
        "text": "37dBm"
      },
      {
        "letter": "B",
        "text": "5dBW"
      },
      {
        "letter": "C",
        "text": "17dBm"
      },
      {
        "letter": "D",
        "text": "35dBμ"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0962",
    "image": ""
  },
  {
    "id": "Q870",
    "originalId": "LK0567",
    "text": "0.25W 可以表示为：",
    "options": [
      {
        "letter": "A",
        "text": "54dBμ"
      },
      {
        "letter": "B",
        "text": "6dBW"
      },
      {
        "letter": "C",
        "text": "36dBm"
      },
      {
        "letter": "D",
        "text": "25dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0963",
    "image": ""
  },
  {
    "id": "Q871",
    "originalId": "LK0568",
    "text": "0.4kW 可以表示为：",
    "options": [
      {
        "letter": "A",
        "text": "86dBμ"
      },
      {
        "letter": "B",
        "text": "400dBm"
      },
      {
        "letter": "C",
        "text": "6000dBm"
      },
      {
        "letter": "D",
        "text": "34dBm"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.3",
    "type": "MC1-0964",
    "image": ""
  },
  {
    "id": "Q872",
    "originalId": "LK1141",
    "text": "电源是业余无线电爱好者常用的一种供电装置。我们对电源的理解是：",
    "options": [
      {
        "letter": "A",
        "text": "电源是一种将某种形式的能量转化为电能的供电装置"
      },
      {
        "letter": "B",
        "text": "电池是一种电源，其将化学能转化为电能，也称化学电源"
      },
      {
        "letter": "C",
        "text": "直流电源是将输入交流电或直流电转换成电压和电流符合要求的另一直流电的装置"
      },
      {
        "letter": "D",
        "text": "变压器可将交流电压和电流转换成交流的另一种电压和电流，可用来制作交流电源"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.1.4",
    "type": "MC4-0965",
    "image": ""
  },
  {
    "id": "Q873",
    "originalId": "LK0439",
    "text": "电源两端电动势的方向为：",
    "options": [
      {
        "letter": "A",
        "text": "从电源的负极到正极"
      },
      {
        "letter": "B",
        "text": "从电源的正极到负极"
      },
      {
        "letter": "C",
        "text": "取决于负载电阻和电源内阻的相对大小"
      },
      {
        "letter": "D",
        "text": "与电源的电压方向相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0966",
    "image": ""
  },
  {
    "id": "Q874",
    "originalId": "LK0438",
    "text": "电源两端电压的方向为：",
    "options": [
      {
        "letter": "A",
        "text": "从电源的正极到负极"
      },
      {
        "letter": "B",
        "text": "从电源的负极到正极"
      },
      {
        "letter": "C",
        "text": "取决于负载电阻和电源内阻的相对大小"
      },
      {
        "letter": "D",
        "text": "与电源的电动势方向相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0967",
    "image": ""
  },
  {
    "id": "Q875",
    "originalId": "LK1142",
    "text": "为业余无线电设备供电的外置电源具有多种类型。常见的有：",
    "options": [
      {
        "letter": "A",
        "text": "开关电源"
      },
      {
        "letter": "B",
        "text": "线性电源"
      },
      {
        "letter": "C",
        "text": "蓄电池"
      },
      {
        "letter": "D",
        "text": "标准电池"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.1.4",
    "type": "MC3-0968",
    "image": ""
  },
  {
    "id": "Q876",
    "originalId": "LK1143",
    "text": "下列哪一种电池可以充电？",
    "options": [
      {
        "letter": "A",
        "text": "锂离子电池"
      },
      {
        "letter": "B",
        "text": "钠离子电池"
      },
      {
        "letter": "C",
        "text": "铅酸电池"
      },
      {
        "letter": "D",
        "text": "碱性干电池"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.1.4",
    "type": "MC3-0969",
    "image": ""
  },
  {
    "id": "Q877",
    "originalId": "LK1229",
    "text": "如何在电网停电的情况下给一个 12 伏的铅酸蓄电池充电？",
    "options": [
      {
        "letter": "A",
        "text": "用适当的连线将待充电蓄电池与汽车的蓄电池并联，然后发动车辆"
      },
      {
        "letter": "B",
        "text": "往蓄电池里加一些酸"
      },
      {
        "letter": "C",
        "text": "将蓄电池放在冰里冷却一会儿"
      },
      {
        "letter": "D",
        "text": "将蓄电池串联一个电灯泡作为限流装置，然后连接到 220 伏市电上"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0970",
    "image": ""
  },
  {
    "id": "Q878",
    "originalId": "LX",
    "text": "使用蓄电池为电台供电时，应如何估算电池供电的时长？",
    "options": [
      {
        "letter": "A",
        "text": "用电池的标称安时数除以收发信机的平均工作电流"
      },
      {
        "letter": "B",
        "text": "用电池的标称瓦时数除以收发信机的发射功率"
      },
      {
        "letter": "C",
        "text": "用电池的标称电压除以收发信机的平均工作电流"
      },
      {
        "letter": "D",
        "text": "用收发信机的发射功率除以电池的标称电压"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0971",
    "image": ""
  },
  {
    "id": "Q879",
    "originalId": "LK0537",
    "text": "电源的内阻对电路的影响是：",
    "options": [
      {
        "letter": "A",
        "text": "使电源的实际输出电压降低"
      },
      {
        "letter": "B",
        "text": "使电源的电动势降低"
      },
      {
        "letter": "C",
        "text": "使电源的输出功率增加"
      },
      {
        "letter": "D",
        "text": "使电源的自身的能耗降低"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0972",
    "image": ""
  },
  {
    "id": "Q880",
    "originalId": "LK0698",
    "text": "有些收发信机会在直流 13.8V 供电线路中串联一个熔断器，并在其后反向并联一个额定电流很大的二极管作保护之用。该电路利用了二极管的什么特性？是如何工作的？",
    "options": [
      {
        "letter": "A",
        "text": "利用二极管中 PN 结的单向导电性；若电源极性接反，近乎短路的电流烧断熔丝，切断供电"
      },
      {
        "letter": "B",
        "text": "在电源过压时利用二极管的击穿特性吸收电流以稳定供电电压"
      },
      {
        "letter": "C",
        "text": "在电源过流时利用二极管的击穿特性吸收电流以稳定供电电压"
      },
      {
        "letter": "D",
        "text": "若设备过热时利用二极管的热失控特性短路电源，烧断熔丝，切断供电"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.4",
    "type": "MC1-0973",
    "image": ""
  },
  {
    "id": "Q881",
    "originalId": "LK0699",
    "text": "有些收发信机会在 13.8V 直流电源插座附近安装一个标有数字的复位按钮。其作用是什么？",
    "options": [
      {
        "letter": "A",
        "text": "当设备过流时切断电源"
      },
      {
        "letter": "B",
        "text": "当电源极性接反时切断电源"
      },
      {
        "letter": "C",
        "text": "如果工作温度超过数字所注的温度值则切断电源"
      },
      {
        "letter": "D",
        "text": "如果工作电压超过数字所注的伏特数则切断电源"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.1.4",
    "type": "MC2-0974",
    "image": ""
  },
  {
    "id": "Q882",
    "originalId": "LK1196",
    "text": "万用表可以用来测量哪些物理量？",
    "options": [
      {
        "letter": "A",
        "text": "电压、电流和电阻"
      },
      {
        "letter": "B",
        "text": "信号的强度和噪声"
      },
      {
        "letter": "C",
        "text": "阻抗中的电抗成分"
      },
      {
        "letter": "D",
        "text": "驻波比和射频功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0975",
    "image": ""
  },
  {
    "id": "Q883",
    "originalId": "LK0477",
    "text": "用万用表的交流电压档测量简单正弦交流电压时所得的读数为该电压的：",
    "options": [
      {
        "letter": "A",
        "text": "有效值"
      },
      {
        "letter": "B",
        "text": "最大值"
      },
      {
        "letter": "C",
        "text": "峰-峰值"
      },
      {
        "letter": "D",
        "text": "平均值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0976",
    "image": ""
  },
  {
    "id": "Q884",
    "originalId": "LK0478",
    "text": "用万用表的直流电压档测量简单正弦交流电压时所得的读数均应视为：",
    "options": [
      {
        "letter": "A",
        "text": "零值"
      },
      {
        "letter": "B",
        "text": "该电压的最大值"
      },
      {
        "letter": "C",
        "text": "该电压的峰-峰值"
      },
      {
        "letter": "D",
        "text": "该电压的有效值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0977",
    "image": ""
  },
  {
    "id": "Q885",
    "originalId": "LK1193",
    "text": "使用万用表测量电流时，应怎样将仪表接入电路？",
    "options": [
      {
        "letter": "A",
        "text": "串联至电路中"
      },
      {
        "letter": "B",
        "text": "并联至电路中"
      },
      {
        "letter": "C",
        "text": "正交至电路中"
      },
      {
        "letter": "D",
        "text": "与电路同相连接"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0978",
    "image": ""
  },
  {
    "id": "Q886",
    "originalId": "LK1195",
    "text": "下列哪一种做法可能损坏万用表？",
    "options": [
      {
        "letter": "A",
        "text": "用万用表的电流档测量电压"
      },
      {
        "letter": "B",
        "text": "用数字式万用表的电阻档测量电压"
      },
      {
        "letter": "C",
        "text": "用大电压量程测量了一个非常小的电压"
      },
      {
        "letter": "D",
        "text": "没有让待测量设备适当地预热"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0979",
    "image": ""
  },
  {
    "id": "Q887",
    "originalId": "LK1199",
    "text": "用万用表的电阻档测量某电路两点间的阻值时需要留意什么先决条件？",
    "options": [
      {
        "letter": "A",
        "text": "确保待测电路没有连接任何电源"
      },
      {
        "letter": "B",
        "text": "确保待测电路已正常接通了工作所需的电源"
      },
      {
        "letter": "C",
        "text": "确保待测电路已经正常接地"
      },
      {
        "letter": "D",
        "text": "确保待测电路正常工作在所需频率下"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0980",
    "image": ""
  },
  {
    "id": "Q888",
    "originalId": "LK0436",
    "text": "要大致判断一节干电池是否已经失效，可用的方法是：",
    "options": [
      {
        "letter": "A",
        "text": "用万用表的电压档测量电池的端电压，显著低于标称电压表明电池失效"
      },
      {
        "letter": "B",
        "text": "用指针式万用表的电阻档测量电池的内阻。指针缓慢回退表明电池失效"
      },
      {
        "letter": "C",
        "text": "找一支内置熔丝的万用表，用电流档测量电池两端并观察电流是否够大"
      },
      {
        "letter": "D",
        "text": "用万用表的通断测试档判断电池极性。如果极性消失则表明电池已失效"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0981",
    "image": ""
  },
  {
    "id": "Q889",
    "originalId": "LK0485",
    "text": "用万用表的电阻档测量一副阻抗为 50 欧姆的四分之一波长接地天线，读数为 0 欧。可能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "该天线与地之间可能存在由电感线圈构成的直流通路"
      },
      {
        "letter": "B",
        "text": "该天线肯定已经短路损坏"
      },
      {
        "letter": "C",
        "text": "该天线肯定无法与特性阻抗为 50 欧的馈线相匹配"
      },
      {
        "letter": "D",
        "text": "该天线肯定无法与输出阻抗为 50 欧姆的收发信机相匹配"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0982",
    "image": ""
  },
  {
    "id": "Q890",
    "originalId": "LK0486",
    "text": "用万用表的电阻档测量一副阻抗为 50 欧姆的四分之一波长接地天线，读数为无穷大。可能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "该天线与地之间不存在由电感线圈构成的直流通路"
      },
      {
        "letter": "B",
        "text": "该天线肯定已经开路损坏"
      },
      {
        "letter": "C",
        "text": "该天线肯定无法与特性阻抗为 50 欧的馈线相匹配"
      },
      {
        "letter": "D",
        "text": "该天线肯定无法与输出阻抗为 50 欧姆的收发信机相匹配"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0983",
    "image": ""
  },
  {
    "id": "Q891",
    "originalId": "LK0487",
    "text": "用万用表的电阻档测量一副用四分之一波长的导线自制的偶极天线的中心馈电点阻抗。可能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "读数为无穷大"
      },
      {
        "letter": "B",
        "text": "读数为 50 欧姆"
      },
      {
        "letter": "C",
        "text": "随着天线升高，阻抗逐渐接近 75 欧姆"
      },
      {
        "letter": "D",
        "text": "读数受表笔连线引入的附加驻波比影响"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0984",
    "image": ""
  },
  {
    "id": "Q892",
    "originalId": "LK0488",
    "text": "用万用表的电阻档测量一条终端开路的任意长度理想 50 欧同轴电缆的中心导体和屏蔽层之间的电阻。可能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "读数为无穷大"
      },
      {
        "letter": "B",
        "text": "读数为 0 欧姆"
      },
      {
        "letter": "C",
        "text": "读数为 50 欧姆"
      },
      {
        "letter": "D",
        "text": "读数与电缆长度有关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0985",
    "image": ""
  },
  {
    "id": "Q893",
    "originalId": "LK0489",
    "text": "用万用表的电阻档测量一条终端短路的任意长度理想 50 欧同轴电缆的中心导体和屏蔽层之间的电阻。可能的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "读数为 0 欧姆"
      },
      {
        "letter": "B",
        "text": "读数为无穷大"
      },
      {
        "letter": "C",
        "text": "读数为 50 欧姆"
      },
      {
        "letter": "D",
        "text": "读数与电缆长度有关"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0986",
    "image": ""
  },
  {
    "id": "Q894",
    "originalId": "LK1197",
    "text": "哪一种焊接材料比较适合业余无线电制作和维修？",
    "options": [
      {
        "letter": "A",
        "text": "松香芯焊锡丝"
      },
      {
        "letter": "B",
        "text": "银焊条"
      },
      {
        "letter": "C",
        "text": "铜焊条"
      },
      {
        "letter": "D",
        "text": "酸性芯焊锡丝"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.1.5",
    "type": "MC1-0987",
    "image": ""
  },
  {
    "id": "Q895",
    "originalId": "LK0441",
    "text": "将一个电阻为 R 的负载接到电压为 U 的电源上。关于负载中的电流 I 及负载所消耗的功率Ｐ，以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "I=U/R； P=U＾2/R"
      },
      {
        "letter": "B",
        "text": "I=U/R； P=U/R"
      },
      {
        "letter": "C",
        "text": "I=R/U； P=U＾2×R"
      },
      {
        "letter": "D",
        "text": "I=R/U； P=U×R"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0988",
    "image": ""
  },
  {
    "id": "Q896",
    "originalId": "LK0442",
    "text": "一个电阻为 R 的负载中流过的电流为 I。关于负载两端的电压 U 及负载所消耗的功率Ｐ，以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "U=I×R； P=I＾2×R"
      },
      {
        "letter": "B",
        "text": "U=I×R； P=I×R"
      },
      {
        "letter": "C",
        "text": "U=R / I；P=R / I＾2"
      },
      {
        "letter": "D",
        "text": "U=R / I；P=R / I"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0989",
    "image": ""
  },
  {
    "id": "Q897",
    "originalId": "LK0443",
    "text": "一个电阻负载两端电压为 U，流过的电流为 I。关于该负载的电阻 R 和所消耗的功率 P，以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "R=U/I； P=U×I"
      },
      {
        "letter": "B",
        "text": "R=U×I；P=U/I"
      },
      {
        "letter": "C",
        "text": "R=U×I；P=U/ I＾2"
      },
      {
        "letter": "D",
        "text": "R=U×I；P=U/ I"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0990",
    "image": ""
  },
  {
    "id": "Q898",
    "originalId": "LK0444",
    "text": "一个电阻负载两端电压为 U，所消耗的功率为 P。关于负载的电阻 R 及流过其中的电流 I，以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "R=U＾2/P；I=P/U"
      },
      {
        "letter": "B",
        "text": "R=U/P；I=P/U"
      },
      {
        "letter": "C",
        "text": "R=P＾2/U；I=U/P"
      },
      {
        "letter": "D",
        "text": "R=P/U；I=U/P"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0991",
    "image": ""
  },
  {
    "id": "Q899",
    "originalId": "LK0445",
    "text": "有阻值分别为 R1 和 R2 的两个负载。R1 的阻值是 R2 的 N 倍。把它们并联后接到电源上，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "流过 R1 的电流是 R2 的 1/N，R1 消耗的功率是 R2 的 1/N"
      },
      {
        "letter": "B",
        "text": "流过 R1 的电流是 R2 的 N 倍，R1 消耗的功率是 R2 的 N＾2 倍"
      },
      {
        "letter": "C",
        "text": "流过 R1 的电流与 R2 的相同，R1 消耗的功率是 R2 的 1/N＾2"
      },
      {
        "letter": "D",
        "text": "流过 R1 的电流与 R2 的相同，R1 消耗的功率是 R2 的 N 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0992",
    "image": ""
  },
  {
    "id": "Q900",
    "originalId": "LK0446",
    "text": "有阻值分别为 R1 和 R2 的两个负载。R1 的阻值是 R2 的 N 倍。把它们并联后接到电源上，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "R1 两端的电压与 R2 的相同，R1 消耗的功率是 R2 的 1/N"
      },
      {
        "letter": "B",
        "text": "R1 两端的电压与 R2 的相同，R1 消耗的功率是 R2 的 N＾2 倍"
      },
      {
        "letter": "C",
        "text": "R1 两端的电压是 R2 的 1/N，R1 消耗的功率是 R2 的 1/N＾2"
      },
      {
        "letter": "D",
        "text": "R1 两端的电压是 R2 的 N 倍，R1 消耗的功率是 R2 的 N＾2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0993",
    "image": ""
  },
  {
    "id": "Q901",
    "originalId": "LK0447",
    "text": "有阻值分别为 R1 和 R2 的两个负载。R1 的阻值是 R2 的 N 倍。把它们串联后接到电源上，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "流过 R1 的电流与 R2 的相同，R1 消耗的功率是 R2 的 N 倍"
      },
      {
        "letter": "B",
        "text": "流过 R1 的电流与 R2 的相同，R1 消耗的功率是 R2 的 1/N"
      },
      {
        "letter": "C",
        "text": "流过 R1 的电流是 R2 的 1/N，R1 消耗的功率是 R2 的 1/N＾2"
      },
      {
        "letter": "D",
        "text": "流过 R1 的电流是 R2 的 N 倍，R1 消耗的功率是 R2 的 N＾2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0994",
    "image": ""
  },
  {
    "id": "Q902",
    "originalId": "LK0448",
    "text": "有阻值分别为 R1 和 R2 的两个负载。R1 的阻值是 R2 的 N 倍。把它们串联后接到电源上，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "R1 两端的电压是 R2 的 N 倍，R1 消耗的功率是 R2 的 N 倍"
      },
      {
        "letter": "B",
        "text": "R1 两端的电压是 R2 的 1/N，R1 消耗的功率是 R2 的 1/N＾2"
      },
      {
        "letter": "C",
        "text": "R1 两端的电压与 R2 的相同，R1 消耗的功率是 R2 的 1/N"
      },
      {
        "letter": "D",
        "text": "R1 两端的电压与 R2 的相同，R1 消耗的功率是 R2 的 N＾2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0995",
    "image": ""
  },
  {
    "id": "Q903",
    "originalId": "LK0449",
    "text": "已知 A、B 两个设备的工作电压相同，若 A 所消耗的电功率是 B 的 N 倍，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "A 的工作电流是 B 的 N 倍"
      },
      {
        "letter": "B",
        "text": "A 的工作电流是 B 的 N＾(1/2)倍"
      },
      {
        "letter": "C",
        "text": "A 的工作电流是 B 的 N＾2 倍"
      },
      {
        "letter": "D",
        "text": "A 的工作电流是 B 的 1/N 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0996",
    "image": ""
  },
  {
    "id": "Q904",
    "originalId": "LK0450",
    "text": "已知 A、B 两个设备的工作电压相同，若流过 A 的电流是 B 的 N 倍，则以下描述正确的是：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "A 所消耗的电功率是 B 的 N 倍"
      },
      {
        "letter": "B",
        "text": "A 所消耗的电功率是 B 的 N＾(1/2)倍"
      },
      {
        "letter": "C",
        "text": "A 所消耗的电功率是 B 的 N＾2 倍"
      },
      {
        "letter": "D",
        "text": "A 所消耗的电功率是 B 的 1/N 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0997",
    "image": ""
  },
  {
    "id": "Q905",
    "originalId": "LK0451",
    "text": "将 N 个相同的电阻负载串联后接到电源上，则与每个负载分别接到电源上相比：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "串联后流过每个电阻的电流减少到 1/N，每个电阻的耗电功率减少到 1/N＾2"
      },
      {
        "letter": "B",
        "text": "串联后流过每个电阻的电流减少到 1/N，每个电阻的耗电功率减少到 1/N"
      },
      {
        "letter": "C",
        "text": "串联后流过每个电阻的电流不变，每个电阻的耗电功率减少到 1/N"
      },
      {
        "letter": "D",
        "text": "串联后流过每个电阻的电流增加到 N 倍，每个电阻的耗电功率增加到 N＾2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0998",
    "image": ""
  },
  {
    "id": "Q906",
    "originalId": "LK0452",
    "text": "将 N 个相同的电阻负载串联后接到电源上，则与每个负载分别接到电源上相比：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "串联后每个电阻两端的电压减少到 1/N，每个电阻的耗电功率减少到 1/ N＾2"
      },
      {
        "letter": "B",
        "text": "串联后每个电阻两端的电压减少到 1/N，每个电阻的耗电功率减少到 1/N"
      },
      {
        "letter": "C",
        "text": "串联后每个电阻两端的电压不变，每个电阻的耗电功率减少到 1/N"
      },
      {
        "letter": "D",
        "text": "串联后每个电阻两端的电压增加到 N 倍，每个电阻的耗电功率增加到 N＾2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-0999",
    "image": ""
  },
  {
    "id": "Q907",
    "originalId": "LK0453",
    "text": "将 N 个相同的电阻负载并联后接到电源上，则与每个负载分别接到电源上相比：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "并联后流过每个电阻的电流不变，所有电阻的总耗电功率为单个电阻的 N 倍"
      },
      {
        "letter": "B",
        "text": "并联后流过每个电阻的电流不变，所有电阻的总耗电功率为单个电阻的 N＾2 倍"
      },
      {
        "letter": "C",
        "text": "并联后流过每个电阻的电流增加到 N 倍，每个电阻的总耗电功率增加到 N＾2 倍"
      },
      {
        "letter": "D",
        "text": "并联后流过每个电阻的电流减少到 1/N，每个电阻的总耗电功率减少到 1/N＾2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-1000",
    "image": ""
  },
  {
    "id": "Q908",
    "originalId": "LK0454",
    "text": "将 N 个相同的电阻负载并联后接到电源上，则与每个负载分别接到电源上相比：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "并联后每个电阻两端的电压不变，所有电阻的总耗电功率为单个电阻的 N 倍"
      },
      {
        "letter": "B",
        "text": "并联后每个电阻两端的电压不变，所有电阻的总耗电功率为单个电阻的 N＾2 倍"
      },
      {
        "letter": "C",
        "text": "并联后每个电阻两端的电压增加到 N 倍，每个电阻的总耗电功率增加到 N＾2 倍"
      },
      {
        "letter": "D",
        "text": "并联后每个电阻两端的电压减少到 1/N，每个电阻的总耗电功率减少到 1/N＾2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-1001",
    "image": ""
  },
  {
    "id": "Q909",
    "originalId": "LK0455",
    "text": "对于一个电阻负载，若将其两端的电压提高 n%，则：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "耗电量增加到原来的[（100+n）/100]＾2"
      },
      {
        "letter": "B",
        "text": "耗电量增加到原来的（100+n）/100"
      },
      {
        "letter": "C",
        "text": "耗电量比原来增加 n%"
      },
      {
        "letter": "D",
        "text": "耗电量比原来增加（n%）＾2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-1002",
    "image": ""
  },
  {
    "id": "Q910",
    "originalId": "LK0456",
    "text": "对于一个电阻负载，若将其两端的电压降低 n%，则：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "耗电量减少到原来的[（100-n）/100]＾2"
      },
      {
        "letter": "B",
        "text": "耗电量减少到原来的（100-n）/100"
      },
      {
        "letter": "C",
        "text": "耗电量比原来减少 n%"
      },
      {
        "letter": "D",
        "text": "耗电量比原来减少（n%）＾2"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.1",
    "type": "MC1-1003",
    "image": ""
  },
  {
    "id": "Q911",
    "originalId": "LK0512",
    "text": "对于峰-峰值为 100 伏的正弦交流信号，其有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "35.4 伏"
      },
      {
        "letter": "B",
        "text": "70.7 伏"
      },
      {
        "letter": "C",
        "text": "141 伏"
      },
      {
        "letter": "D",
        "text": "50.0 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1004",
    "image": ""
  },
  {
    "id": "Q912",
    "originalId": "LK0513",
    "text": "对于峰值为 100 伏的正弦交流信号，其有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "70.7 伏"
      },
      {
        "letter": "B",
        "text": "35.4 伏"
      },
      {
        "letter": "C",
        "text": "141 伏"
      },
      {
        "letter": "D",
        "text": "50.0 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1005",
    "image": ""
  },
  {
    "id": "Q913",
    "originalId": "LK0514",
    "text": "对于最小值为-50 伏、峰-峰值为 100 伏的方波信号，其有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "50.0 伏"
      },
      {
        "letter": "B",
        "text": "70.7 伏"
      },
      {
        "letter": "C",
        "text": "35.4 伏"
      },
      {
        "letter": "D",
        "text": "100 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1006",
    "image": ""
  },
  {
    "id": "Q914",
    "originalId": "LK0515",
    "text": "对于最小值为 0 伏，峰-峰值为 100 伏的方波信号，其有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "50.0 伏"
      },
      {
        "letter": "B",
        "text": "100 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "35.4 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1007",
    "image": ""
  },
  {
    "id": "Q915",
    "originalId": "LK0516",
    "text": "对于最小值为-100 伏，平均值为 0 伏的正弦波信号，若将其负半周的极性调转，使之成为一种脉动直流电，则有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "70.7 伏"
      },
      {
        "letter": "B",
        "text": "50.0 伏"
      },
      {
        "letter": "C",
        "text": "-50.0 伏"
      },
      {
        "letter": "D",
        "text": "-70.7 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1008",
    "image": ""
  },
  {
    "id": "Q916",
    "originalId": "LK0517",
    "text": "对于最大值为 100 伏，平均值为 0 伏的正弦波信号，若将其正半周的极性调转，使之成为一种负的脉动直流电，则有效值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "70.7 伏"
      },
      {
        "letter": "B",
        "text": "50.0 伏"
      },
      {
        "letter": "C",
        "text": "-50.0 伏"
      },
      {
        "letter": "D",
        "text": "-70.7 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1009",
    "image": ""
  },
  {
    "id": "Q917",
    "originalId": "LK0518",
    "text": "对于峰-峰值为 100 伏的正弦交流信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "0 伏"
      },
      {
        "letter": "B",
        "text": "35.4 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "141 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1010",
    "image": ""
  },
  {
    "id": "Q918",
    "originalId": "LK0519",
    "text": "对于峰值为 100 伏的正弦交流信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "0 伏"
      },
      {
        "letter": "B",
        "text": "50.0 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "35.4 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1011",
    "image": ""
  },
  {
    "id": "Q919",
    "originalId": "LK0520",
    "text": "对于最小值为-50 伏、峰-峰值为 100 伏的方波信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "0 伏"
      },
      {
        "letter": "B",
        "text": "50.0 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "50.0 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1012",
    "image": ""
  },
  {
    "id": "Q920",
    "originalId": "LK0521",
    "text": "对于最小值为 0 伏，峰-峰值为 100 伏的方波信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "50.0 伏"
      },
      {
        "letter": "B",
        "text": "100 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "35.4 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1013",
    "image": ""
  },
  {
    "id": "Q921",
    "originalId": "LK0522",
    "text": "对于最小值为-50 伏，峰-峰值为 100 伏的三角波信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "0 伏"
      },
      {
        "letter": "B",
        "text": "50.0 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "35.4 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1014",
    "image": ""
  },
  {
    "id": "Q922",
    "originalId": "LK0523",
    "text": "对于最小值为 0 伏、峰-峰值为 100 伏的三角波信号，其平均值电压为：",
    "options": [
      {
        "letter": "A",
        "text": "50.0 伏"
      },
      {
        "letter": "B",
        "text": "100 伏"
      },
      {
        "letter": "C",
        "text": "70.7 伏"
      },
      {
        "letter": "D",
        "text": "35.4 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1015",
    "image": ""
  },
  {
    "id": "Q923",
    "originalId": "LK0524",
    "text": "用电压为 120V 的蓄电池组和峰值电压为 120V 的交流变压器分别驱动参数相同的两个电阻负载。在相同时间内，哪一个电阻发出的热量多？",
    "options": [
      {
        "letter": "A",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 2 倍左右"
      },
      {
        "letter": "B",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 0.7 倍左右"
      },
      {
        "letter": "C",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 1.4 倍左右"
      },
      {
        "letter": "D",
        "text": "两个电源所驱动的电阻发热相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1016",
    "image": ""
  },
  {
    "id": "Q924",
    "originalId": "LK0525",
    "text": "用电压为 120V 的蓄电池组和有效值电压为 120V 的交流变压器分别驱动参数相同的两个电阻负载。在相同时间内，哪一个电阻发出的热量多？",
    "options": [
      {
        "letter": "A",
        "text": "两个电源所驱动的电阻发热相同"
      },
      {
        "letter": "B",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 1.4 倍左右"
      },
      {
        "letter": "C",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 0.7 倍左右"
      },
      {
        "letter": "D",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器上的电阻的 2 倍左右"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1017",
    "image": ""
  },
  {
    "id": "Q925",
    "originalId": "LK0526",
    "text": "用电压为 120V 的蓄电池组和有效值电压为 120V 的交流变压器串联二极管后分别驱动参数相同的两个电阻负载。在相同时间内，哪一个电阻发出的热量多？（忽略二极管的正向压降）",
    "options": [
      {
        "letter": "A",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 2 倍左右"
      },
      {
        "letter": "B",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 1.4 倍左右"
      },
      {
        "letter": "C",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 0.7 倍左右"
      },
      {
        "letter": "D",
        "text": "两个电源所驱动的电阻发热相同"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1018",
    "image": ""
  },
  {
    "id": "Q926",
    "originalId": "LK0527",
    "text": "用电压为 120V 的蓄电池组和峰值电压为 120V 的交流变压器经过带电容滤波的全波整流电路分别驱动参数相同的两个电阻负载。在相同时间内，哪一个电阻发出的热量多？（忽略整流器的正向压降）",
    "options": [
      {
        "letter": "A",
        "text": "两个电源所驱动的电阻发热大致相同"
      },
      {
        "letter": "B",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 2 倍左右"
      },
      {
        "letter": "C",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 1.4 倍左右"
      },
      {
        "letter": "D",
        "text": "蓄电池驱动的电阻所发的热量是交流变压器电路上的电阻的 0.7 倍左右"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1019",
    "image": ""
  },
  {
    "id": "Q927",
    "originalId": "LK0528",
    "text": "用有效值电压为 120V、频率为 50Hz 的交流电源和有效值电压为 120V、频率为 10kHz 的方波电源分别驱动参数相同的两个电阻负载。在相同时间内，哪一个电阻发出的热量多？",
    "options": [
      {
        "letter": "A",
        "text": "两个电源所驱动的电阻发热大致相同"
      },
      {
        "letter": "B",
        "text": "10kHz 电路电阻所发的热量是 50Hz 电路电阻的 5 倍左右"
      },
      {
        "letter": "C",
        "text": "10kHz 电路电阻所发的热量是 50Hz 电路电阻的 1/5 左右"
      },
      {
        "letter": "D",
        "text": "10kHz 电路电阻所发的热量是 50Hz 电路电阻的 200 倍左右"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.2",
    "type": "MC1-1020",
    "image": ""
  },
  {
    "id": "Q928",
    "originalId": "LK1144",
    "text": "能够以电场形式储存能量的元件是：",
    "options": [
      {
        "letter": "A",
        "text": "电容"
      },
      {
        "letter": "B",
        "text": "电阻"
      },
      {
        "letter": "C",
        "text": "压敏元件"
      },
      {
        "letter": "D",
        "text": "电感"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1021",
    "image": ""
  },
  {
    "id": "Q929",
    "originalId": "LK0650",
    "text": "若在电容器的两端施加一个正弦交流电压，则流过电容器的电流的大小：",
    "options": [
      {
        "letter": "A",
        "text": "与电压和电容量都成正比"
      },
      {
        "letter": "B",
        "text": "与电压和电容量都成反比"
      },
      {
        "letter": "C",
        "text": "与电压成正比，与电容量成反比"
      },
      {
        "letter": "D",
        "text": "与电容量成正比，与电压成反比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1022",
    "image": ""
  },
  {
    "id": "Q930",
    "originalId": "LK0632",
    "text": "一个电容器，在某一频率下测得容抗为若干欧姆。如果频率提高 N 倍，其容抗将：",
    "options": [
      {
        "letter": "A",
        "text": "减少到原来的 1/N"
      },
      {
        "letter": "B",
        "text": "增大到原来的 N 倍"
      },
      {
        "letter": "C",
        "text": "减少到原来的 1/（2πN）"
      },
      {
        "letter": "D",
        "text": "增大到原来的 2πN 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1023",
    "image": ""
  },
  {
    "id": "Q931",
    "originalId": "LK1145",
    "text": "能够以磁场形式储存能量的元件是：",
    "options": [
      {
        "letter": "A",
        "text": "电感"
      },
      {
        "letter": "B",
        "text": "电阻"
      },
      {
        "letter": "C",
        "text": "电磁铁"
      },
      {
        "letter": "D",
        "text": "电容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1024",
    "image": ""
  },
  {
    "id": "Q932",
    "originalId": "LK0653",
    "text": "若在线圈两端施加一个正弦交流电压，则流过线圈的电流的大小：",
    "options": [
      {
        "letter": "A",
        "text": "与电压成正比，与电感量成反比"
      },
      {
        "letter": "B",
        "text": "与电压和电感量都成正比"
      },
      {
        "letter": "C",
        "text": "与电压和电感量都成反比"
      },
      {
        "letter": "D",
        "text": "与电感量成正比，与电压成反比"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1025",
    "image": ""
  },
  {
    "id": "Q933",
    "originalId": "LK0633",
    "text": "一个电感线圈，在某一频率下测得感抗为若干欧姆。如果频率提高 N 倍，其感抗将：",
    "options": [
      {
        "letter": "A",
        "text": "增大到原来的 N 倍"
      },
      {
        "letter": "B",
        "text": "减少到原来的 1/N"
      },
      {
        "letter": "C",
        "text": "增大到原来的 2πN 倍"
      },
      {
        "letter": "D",
        "text": "减少到原来的 1/（2πN）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.3",
    "type": "MC1-1026",
    "image": ""
  },
  {
    "id": "Q934",
    "originalId": "LK0529",
    "text": "术语“相位差”通常用来描述频率相同的两个周期信号在时间上的超前或滞后关系。关于周期信号的相位差，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "两个信号的相位差为 180°的偶数倍时为同相关系，为奇数倍时为反相关系"
      },
      {
        "letter": "B",
        "text": "相位相差 90°的两个信号互为正交关系"
      },
      {
        "letter": "C",
        "text": "信号通过含有电感或电容的电路，其电压与电流将不再同相"
      },
      {
        "letter": "D",
        "text": "无线电波因相互叠加而相互干涉，同相相长，反相相消"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.2.4",
    "type": "MC4-1027",
    "image": ""
  },
  {
    "id": "Q935",
    "originalId": "LK0530",
    "text": "将两个幅度相等，相位相差 360°的正弦电压源串联，所得结果是：",
    "options": [
      {
        "letter": "A",
        "text": "幅度为单个信号源的 2 倍、相位与原信号源相同的正弦电压"
      },
      {
        "letter": "B",
        "text": "电压为 0"
      },
      {
        "letter": "C",
        "text": "幅度与单个信号源的相同、相位与原信号源相差 180°的正弦电压"
      },
      {
        "letter": "D",
        "text": "幅度与单个信号源的相同、频率比原信号高一倍的正弦电压"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1028",
    "image": ""
  },
  {
    "id": "Q936",
    "originalId": "LK0531",
    "text": "将两个幅度相等，相位相差 180°的正弦电压源串联，所得结果是：",
    "options": [
      {
        "letter": "A",
        "text": "电压为 0"
      },
      {
        "letter": "B",
        "text": "幅度为单个信号源的 2 倍、相位与原信号源相同的正弦电压"
      },
      {
        "letter": "C",
        "text": "幅度与单个信号源的相同、相位与原信号源相差 90°的正弦电压"
      },
      {
        "letter": "D",
        "text": "幅度与单个信号源的相同、频率比原信号高一倍的正弦电压"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1029",
    "image": ""
  },
  {
    "id": "Q937",
    "originalId": "LK0532",
    "text": "将两个幅度相等，相位相差 90°的正弦电压源串联，所得结果是：",
    "options": [
      {
        "letter": "A",
        "text": "幅度为单个信号源的 1.41 倍、相位与原信号源各差 45°的正弦电压"
      },
      {
        "letter": "B",
        "text": "幅度与单个信号源的相同、相位与原信号源相差 45°的正弦电压"
      },
      {
        "letter": "C",
        "text": "幅度为单个信号源的 2 倍、相位与原信号源相同的正弦电压"
      },
      {
        "letter": "D",
        "text": "幅度与单个信号源的相同、频率比原信号高一倍的正弦电压"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1030",
    "image": ""
  },
  {
    "id": "Q938",
    "originalId": "LK0648",
    "text": "在电容器两端施加正弦交流电压，则流过其中的电流是正弦交流电流。该电流的相位：",
    "options": [
      {
        "letter": "A",
        "text": "超前于电压相位 90 度"
      },
      {
        "letter": "B",
        "text": "落后于电压相位 90 度"
      },
      {
        "letter": "C",
        "text": "与电压相位相同"
      },
      {
        "letter": "D",
        "text": "与电压相差 180 度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1031",
    "image": ""
  },
  {
    "id": "Q939",
    "originalId": "LK0649",
    "text": "若正弦交流电流流过电容器，则其两端的电压是正弦交流电压。该电压的相位：",
    "options": [
      {
        "letter": "A",
        "text": "落后于电流相位 90 度"
      },
      {
        "letter": "B",
        "text": "超前于电流相位 90 度"
      },
      {
        "letter": "C",
        "text": "与电压相位相同"
      },
      {
        "letter": "D",
        "text": "与电流相差 180 度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1032",
    "image": ""
  },
  {
    "id": "Q940",
    "originalId": "LK0651",
    "text": "在线圈两端施加正弦交流电压，则流过其中的电流是正弦交流电流。该电流的相位：",
    "options": [
      {
        "letter": "A",
        "text": "落后于电压相位 90 度"
      },
      {
        "letter": "B",
        "text": "超前于电压相位 90 度"
      },
      {
        "letter": "C",
        "text": "与电压相位相同"
      },
      {
        "letter": "D",
        "text": "与电压相差 180 度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1033",
    "image": ""
  },
  {
    "id": "Q941",
    "originalId": "LK0652",
    "text": "若正弦交流电流流过线圈，则其两端的电压是正弦交流电压。该电压的相位：",
    "options": [
      {
        "letter": "A",
        "text": "超前于电流相位 90 度"
      },
      {
        "letter": "B",
        "text": "落后于电流相位 90 度"
      },
      {
        "letter": "C",
        "text": "与电流相位相同"
      },
      {
        "letter": "D",
        "text": "与电流相差 180 度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1034",
    "image": ""
  },
  {
    "id": "Q942",
    "originalId": "LK0615",
    "text": "将电阻 R 和电容 C 串联后突然接到直流电压 U 上，电容 C 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "B",
        "text": "从 U 按指数规律逐渐减小到 0"
      },
      {
        "letter": "C",
        "text": "从 0 突然跳到 U，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0，然后再按指数规律逐渐增大到 U"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1035",
    "image": ""
  },
  {
    "id": "Q943",
    "originalId": "LK0616",
    "text": "给定电阻 R 和电容 C，则其阻值和电容量的乘积称为时间常数τ。将 R 和 C 串联后突然接到直流电压 U 上，电容 C 两端的电压经过τ时间后大约为 U 的：",
    "options": [
      {
        "letter": "A",
        "text": "63%"
      },
      {
        "letter": "B",
        "text": "99%"
      },
      {
        "letter": "C",
        "text": "37%"
      },
      {
        "letter": "D",
        "text": "6.28%"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1036",
    "image": ""
  },
  {
    "id": "Q944",
    "originalId": "LK0617",
    "text": "将电阻 R 和电容 C 串联后突然接到直流电压 U 上，电阻 R 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 突然跳到 U，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "C",
        "text": "从 U 按直线规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0，然后再按直线规律逐渐减小到 U"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1037",
    "image": ""
  },
  {
    "id": "Q945",
    "originalId": "LK0618",
    "text": "给定电阻 R 和电容 C，则其阻值和电容量的乘积称为时间常数τ。将 R 和 C 串联后突然接到直流电压 U 上，电阻 R 两端的电压经过τ时间后大约为 U 的：",
    "options": [
      {
        "letter": "A",
        "text": "37%"
      },
      {
        "letter": "B",
        "text": "99%"
      },
      {
        "letter": "C",
        "text": "63%"
      },
      {
        "letter": "D",
        "text": "6.28%"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1038",
    "image": ""
  },
  {
    "id": "Q946",
    "originalId": "LK0619",
    "text": "将电阻 R 和电容 C 串联后突然接到直流电压 U 上，流过电阻 R 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 突然跳到 U/R 并保持"
      },
      {
        "letter": "C",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "D",
        "text": "从 U/R 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1039",
    "image": ""
  },
  {
    "id": "Q947",
    "originalId": "LK0620",
    "text": "将电阻 R 和电容 C 串联后突然接到直流电压 U 上，流过电容 C 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 突然跳到 U/R 并保持"
      },
      {
        "letter": "C",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "D",
        "text": "从 U/R 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1040",
    "image": ""
  },
  {
    "id": "Q948",
    "originalId": "LK0621",
    "text": "将电阻 R 和电容 C 并联后接到电压为 U 的直流电源上。突然断开电源，电容 C 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 U 按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "C",
        "text": "从 0 突然跳到 U 并保持"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1041",
    "image": ""
  },
  {
    "id": "Q949",
    "originalId": "LK0622",
    "text": "将电阻 R 和电容 C 并联后接在电压为 U 的直流电源上。突然断开电源，电阻 R 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 U 按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "C",
        "text": "从 0 突然跳到 U 并保持"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1042",
    "image": ""
  },
  {
    "id": "Q950",
    "originalId": "LK0623",
    "text": "将电阻 R 和电容 C 并联后接在电压为 U 的直流电源上。突然断开电源，流过电阻 R 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 U/R 按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "C",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0，然后再按指数规律逐渐增大到 U/R"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1043",
    "image": ""
  },
  {
    "id": "Q951",
    "originalId": "LK0624",
    "text": "将电阻 R 和电容 C 并联后接到电压为 U 的直流电源上。突然断开电源，流过电容 C 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 突然跳到 U/R 并保持"
      },
      {
        "letter": "C",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0，然后再按指数规律逐渐增大到 U/R"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1044",
    "image": ""
  },
  {
    "id": "Q952",
    "originalId": "LK0625",
    "text": "将电阻 R 和电感 L 串联后突然接到直流电压 U 上，电感 L 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 突然跳到 U，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "C",
        "text": "从 U 按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1045",
    "image": ""
  },
  {
    "id": "Q953",
    "originalId": "LK0626",
    "text": "给定电阻 R 和电感 L，则其阻值和电感量的乘积称为时间常数τ。将 R 和 L 串联后突然接到直流电压 U 上。经过τ时间后，电感 L 两端的电压大约为 U 的：",
    "options": [
      {
        "letter": "A",
        "text": "37%"
      },
      {
        "letter": "B",
        "text": "99%"
      },
      {
        "letter": "C",
        "text": "63%"
      },
      {
        "letter": "D",
        "text": "6.28%"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1046",
    "image": ""
  },
  {
    "id": "Q954",
    "originalId": "LK0627",
    "text": "给定电阻 R 和电感 L，则其阻值和电感量的乘积称为时间常数τ。将 R 和 L 串联后突然接到直流电压 U 上。经过τ时间后，电阻 R 两端的电压大约为 U 的：",
    "options": [
      {
        "letter": "A",
        "text": "63%"
      },
      {
        "letter": "B",
        "text": "99%"
      },
      {
        "letter": "C",
        "text": "37%"
      },
      {
        "letter": "D",
        "text": "6.28%"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1047",
    "image": ""
  },
  {
    "id": "Q955",
    "originalId": "LK0628",
    "text": "将电阻 R 和电感 L 串联后突然接到直流电压 U 上，电阻 R 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 按指数规律逐渐增加到 U"
      },
      {
        "letter": "B",
        "text": "从 U 按指数规律逐渐减小到 0"
      },
      {
        "letter": "C",
        "text": "从 0 突然跳到 U，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 U 突然跳到 0 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1048",
    "image": ""
  },
  {
    "id": "Q956",
    "originalId": "LK0629",
    "text": "将电阻 R 和电感 L 串联后突然接到直流电压 U 上，流过电阻 R 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "B",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "C",
        "text": "从 U/R 按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 0 突然跳到 U/R 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1049",
    "image": ""
  },
  {
    "id": "Q957",
    "originalId": "LK0630",
    "text": "将电阻 R 和电感 L 串联后突然接到直流电压 U 上，流过电感 L 的电流会：",
    "options": [
      {
        "letter": "A",
        "text": "从 0 按指数规律逐渐增加到 U/R"
      },
      {
        "letter": "B",
        "text": "从 0 突然跳到 U/R，然后再按指数规律逐渐减小到 0"
      },
      {
        "letter": "C",
        "text": "从 U/R 按指数规律逐渐减小到 0"
      },
      {
        "letter": "D",
        "text": "从 0 突然跳到 U/R 并保持"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1050",
    "image": ""
  },
  {
    "id": "Q958",
    "originalId": "LK0631",
    "text": "将电阻 R 和电感 L 并联后接在电流为 I 的直流电路中。突然断开电路，电感 L 两端的电压会：",
    "options": [
      {
        "letter": "A",
        "text": "从 I*R 按指数规律逐渐减小到 0"
      },
      {
        "letter": "B",
        "text": "从 0 按指数规律逐渐增加到 I*R"
      },
      {
        "letter": "C",
        "text": "保持为 I*R"
      },
      {
        "letter": "D",
        "text": "始终为 0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.4",
    "type": "MC1-1051",
    "image": ""
  },
  {
    "id": "Q959",
    "originalId": "LK0671",
    "text": "由电容与电感组成的串联或并联电路存在一种状态，此时电容的容抗与电感的感抗在特定频率下相互抵消，电路中的电抗消失。该状态称为：",
    "options": [
      {
        "letter": "A",
        "text": "谐振"
      },
      {
        "letter": "B",
        "text": "匹配"
      },
      {
        "letter": "C",
        "text": "负阻"
      },
      {
        "letter": "D",
        "text": "幻象"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.5",
    "type": "MC1-1052",
    "image": ""
  },
  {
    "id": "Q960",
    "originalId": "LK0672",
    "text": "由电感为 L 的线圈和容量为 C 的电容组成的 LC 谐振电路的谐振频率 f 为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "f = 1/（2π(LC)＾(1/2)）"
      },
      {
        "letter": "B",
        "text": "f = 2π(LC)＾(1/2)"
      },
      {
        "letter": "C",
        "text": "f = 1/((2πLC)＾2)"
      },
      {
        "letter": "D",
        "text": "f = 2π(LC)＾(1/2)"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.5",
    "type": "MC1-1053",
    "image": ""
  },
  {
    "id": "Q961",
    "originalId": "LK0673",
    "text": "由电感为 L 的线圈和容量为 C 的电容组成的串联电路的总阻抗为：",
    "options": [
      {
        "letter": "A",
        "text": "谐振时呈现最小值"
      },
      {
        "letter": "B",
        "text": "高于谐振频率呈现电感特性"
      },
      {
        "letter": "C",
        "text": "低于谐振频率呈现电容特性"
      },
      {
        "letter": "D",
        "text": "频率为零时呈现断路特性"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.2.5",
    "type": "MC4-1054",
    "image": ""
  },
  {
    "id": "Q962",
    "originalId": "LK0674",
    "text": "由电感为 L 的线圈和容量为 C 的电容组成的并联电路的总阻抗为：",
    "options": [
      {
        "letter": "A",
        "text": "谐振时呈现最大值"
      },
      {
        "letter": "B",
        "text": "高于谐振频率呈现电容特性"
      },
      {
        "letter": "C",
        "text": "低于谐振频率呈现电感特性"
      },
      {
        "letter": "D",
        "text": "频率为零时呈现短路特性"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.2.5",
    "type": "MC4-1055",
    "image": ""
  },
  {
    "id": "Q963",
    "originalId": "LK0675",
    "text": "我们通常讨论的谐振电路的 Q 值均指该电路与规定负载相连之后的“有载 Q 值”。但是，我们也时而讨论术语“空载 Q 值”。其涵义为：",
    "options": [
      {
        "letter": "A",
        "text": "空载 Q 值是回路自身储能与自身损耗之比，所以该值高代表回路的制作质量好"
      },
      {
        "letter": "B",
        "text": "空载 Q 值主要取决于回路中电感的 Q 值，因为电容的损耗通常较电感为低"
      },
      {
        "letter": "C",
        "text": "空载 Q 值越高则谐振电路的工作带宽越窄，所以没必要追求该值的最大化"
      },
      {
        "letter": "D",
        "text": "空载 Q 值与有载 Q 值的比值过大说明回路的储能过多。这样的电路易打火损坏"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.2.5",
    "type": "MC2-1056",
    "image": ""
  },
  {
    "id": "Q964",
    "originalId": "LK0676",
    "text": "根据谐振回路或者谐振天线电路 Q 值的高低，我们可以得到结论：",
    "options": [
      {
        "letter": "A",
        "text": "Q 值越高，谐振曲线越尖锐，选择性越好，通带宽度越窄"
      },
      {
        "letter": "B",
        "text": "Q 值越高，谐振曲线越平坦，选择性越不明显，通带宽度越宽"
      },
      {
        "letter": "C",
        "text": "Q 值越高，回路或天线的工作状态受频率变化的影响越小"
      },
      {
        "letter": "D",
        "text": "Q 值越高，回路或天线的工作频率越高"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.5",
    "type": "MC1-1057",
    "image": ""
  },
  {
    "id": "Q965",
    "originalId": "LK0677",
    "text": "谐振回路的通带宽度 (BW) 是指：",
    "options": [
      {
        "letter": "A",
        "text": "在回路谐振频率的两侧，信号衰减达到 3dB 时两个频率之间的间隔"
      },
      {
        "letter": "B",
        "text": "在回路谐振频率的两侧，信号衰减达到 30%时两个频率之间的间隔"
      },
      {
        "letter": "C",
        "text": "在回路谐振频率的两侧，信号衰减达到 80%时两个频率之间的间隔"
      },
      {
        "letter": "D",
        "text": "在回路谐振频率的两侧，信号衰减达到 95%时两个频率之间的间隔"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.2.5",
    "type": "MC1-1058",
    "image": ""
  },
  {
    "id": "Q966",
    "originalId": "LK0497",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "接地"
      },
      {
        "letter": "B",
        "text": "天线"
      },
      {
        "letter": "C",
        "text": "电阻"
      },
      {
        "letter": "D",
        "text": "二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1059",
    "image": "LK0497.jpg"
  },
  {
    "id": "Q967",
    "originalId": "LK0498",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "天线"
      },
      {
        "letter": "B",
        "text": "接地"
      },
      {
        "letter": "C",
        "text": "电阻"
      },
      {
        "letter": "D",
        "text": "二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1060",
    "image": "LK0498.jpg"
  },
  {
    "id": "Q968",
    "originalId": "LK0499",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "熔断器"
      },
      {
        "letter": "B",
        "text": "电容"
      },
      {
        "letter": "C",
        "text": "电阻"
      },
      {
        "letter": "D",
        "text": "二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1061",
    "image": "LK0499.jpg"
  },
  {
    "id": "Q969",
    "originalId": "LK0500",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "电容器"
      },
      {
        "letter": "B",
        "text": "熔断器"
      },
      {
        "letter": "C",
        "text": "电阻"
      },
      {
        "letter": "D",
        "text": "二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1062",
    "image": "LK0500.jpg"
  },
  {
    "id": "Q970",
    "originalId": "LK0501",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "电阻"
      },
      {
        "letter": "B",
        "text": "电容器"
      },
      {
        "letter": "C",
        "text": "熔断器"
      },
      {
        "letter": "D",
        "text": "压电晶体"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1063",
    "image": "LK0501.jpg"
  },
  {
    "id": "Q971",
    "originalId": "LK0502",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "二极管"
      },
      {
        "letter": "B",
        "text": "电容器"
      },
      {
        "letter": "C",
        "text": "线圈"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1064",
    "image": "LK0502.jpg"
  },
  {
    "id": "Q972",
    "originalId": "LK0503",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "线圈"
      },
      {
        "letter": "B",
        "text": "二极管"
      },
      {
        "letter": "C",
        "text": "电容器"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1065",
    "image": "LK0503.jpg"
  },
  {
    "id": "Q973",
    "originalId": "LK0504",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "电池"
      },
      {
        "letter": "B",
        "text": "二极管"
      },
      {
        "letter": "C",
        "text": "线圈"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1066",
    "image": "LK0504.jpg"
  },
  {
    "id": "Q974",
    "originalId": "LK0505",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "压电晶体"
      },
      {
        "letter": "B",
        "text": "电池"
      },
      {
        "letter": "C",
        "text": "二极管"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1067",
    "image": "LK0505.jpg"
  },
  {
    "id": "Q975",
    "originalId": "LK0506",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "稳压二极管"
      },
      {
        "letter": "B",
        "text": "压电晶体"
      },
      {
        "letter": "C",
        "text": "发光二极管"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1068",
    "image": "LK0506.jpg"
  },
  {
    "id": "Q976",
    "originalId": "LK0507",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "发光二极管"
      },
      {
        "letter": "B",
        "text": "稳压二极管"
      },
      {
        "letter": "C",
        "text": "压电晶体"
      },
      {
        "letter": "D",
        "text": "电阻"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1069",
    "image": "LK0507.jpg"
  },
  {
    "id": "Q977",
    "originalId": "LK0508",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "PNP 双极型晶体管"
      },
      {
        "letter": "B",
        "text": "NPN 双极型晶体管"
      },
      {
        "letter": "C",
        "text": "结型场效应晶体管"
      },
      {
        "letter": "D",
        "text": "绝缘栅场效应晶体管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1070",
    "image": "LK0508.jpg"
  },
  {
    "id": "Q978",
    "originalId": "LK0509",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "NPN 双极型晶体管"
      },
      {
        "letter": "B",
        "text": "PNP 双极型晶体管"
      },
      {
        "letter": "C",
        "text": "结型场效应晶体管"
      },
      {
        "letter": "D",
        "text": "绝缘栅场效应晶体管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1071",
    "image": "LK0509.jpg"
  },
  {
    "id": "Q979",
    "originalId": "LK0510",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "结型场效应晶体管"
      },
      {
        "letter": "B",
        "text": "PNP 双极型晶体管"
      },
      {
        "letter": "C",
        "text": "NPN 双极型晶体管"
      },
      {
        "letter": "D",
        "text": "绝缘栅场效应晶体管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1072",
    "image": "LK0510.jpg"
  },
  {
    "id": "Q980",
    "originalId": "LK0511",
    "text": "附图中的电路元器件符号代表：",
    "options": [
      {
        "letter": "A",
        "text": "绝缘栅场效应晶体管"
      },
      {
        "letter": "B",
        "text": "结型场效应晶体管"
      },
      {
        "letter": "C",
        "text": "PNP 双极型晶体管"
      },
      {
        "letter": "D",
        "text": "NPN 双极型晶体管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.1",
    "type": "MC1-1073",
    "image": "LK0511.jpg"
  },
  {
    "id": "Q981",
    "originalId": "LX",
    "text": "按制造材料细分，常见的电阻有：",
    "options": [
      {
        "letter": "A",
        "text": "碳膜电阻"
      },
      {
        "letter": "B",
        "text": "金属膜电阻"
      },
      {
        "letter": "C",
        "text": "线绕电阻"
      },
      {
        "letter": "D",
        "text": "阻尼电阻"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1074",
    "image": ""
  },
  {
    "id": "Q982",
    "originalId": "LK0590",
    "text": "在组装业余收发信机所用的元器件中，标有额定耗散功率的通常是：",
    "options": [
      {
        "letter": "A",
        "text": "线绕电阻"
      },
      {
        "letter": "B",
        "text": "薄膜电容"
      },
      {
        "letter": "C",
        "text": "晶体管"
      },
      {
        "letter": "D",
        "text": "集成电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1075",
    "image": ""
  },
  {
    "id": "Q983",
    "originalId": "LK0577",
    "text": "电阻的“额定功率”是指：",
    "options": [
      {
        "letter": "A",
        "text": "该电阻正常工作所能承受的最大功率"
      },
      {
        "letter": "B",
        "text": "维持该电阻正常工作所需的最小功率"
      },
      {
        "letter": "C",
        "text": "该电阻接入电路必然消耗的功率"
      },
      {
        "letter": "D",
        "text": "该电阻可为电路提供的最大功率"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1076",
    "image": ""
  },
  {
    "id": "Q984",
    "originalId": "LK0587",
    "text": "表面贴装元器件（surface-mount devices）广泛应用于业余无线电作品。其规格参数 0402、0603、0805、1206 等是指：",
    "options": [
      {
        "letter": "A",
        "text": "元器件的长和宽（单位：毫米或 0.1 英寸）"
      },
      {
        "letter": "B",
        "text": "容量值（单位：微法）"
      },
      {
        "letter": "C",
        "text": "电阻值（单位：千欧）"
      },
      {
        "letter": "D",
        "text": "电感值（单位：微亨）"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1077",
    "image": ""
  },
  {
    "id": "Q985",
    "originalId": "LK0578",
    "text": "某电阻上的色环依次为棕、橙、橙、黑。其阻值为：",
    "options": [
      {
        "letter": "A",
        "text": "13 千欧"
      },
      {
        "letter": "B",
        "text": "3.7 千欧 238"
      },
      {
        "letter": "C",
        "text": "4.7 兆欧"
      },
      {
        "letter": "D",
        "text": "250 欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1078",
    "image": ""
  },
  {
    "id": "Q986",
    "originalId": "LK0579",
    "text": "某电阻上的色环依次为黄、白、红、银。其阻值为：",
    "options": [
      {
        "letter": "A",
        "text": "4.9 千欧"
      },
      {
        "letter": "B",
        "text": "49.2 欧"
      },
      {
        "letter": "C",
        "text": "4.7 兆欧"
      },
      {
        "letter": "D",
        "text": "390 千欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1079",
    "image": ""
  },
  {
    "id": "Q987",
    "originalId": "LK0580",
    "text": "某电阻上的色环依次为银、黑、橙、橙、棕。其阻值为：",
    "options": [
      {
        "letter": "A",
        "text": "133 欧"
      },
      {
        "letter": "B",
        "text": "13 千欧"
      },
      {
        "letter": "C",
        "text": "4.7 兆欧"
      },
      {
        "letter": "D",
        "text": "130 千欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1080",
    "image": ""
  },
  {
    "id": "Q988",
    "originalId": "LK0581",
    "text": "某贴片电阻上的印字为 2R7。其阻值为：",
    "options": [
      {
        "letter": "A",
        "text": "2.7 欧"
      },
      {
        "letter": "B",
        "text": "27 欧"
      },
      {
        "letter": "C",
        "text": "0.27 欧"
      },
      {
        "letter": "D",
        "text": "7 欧网络电阻，两支装"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1081",
    "image": ""
  },
  {
    "id": "Q989",
    "originalId": "LK0582",
    "text": "某贴片电阻上的印字为 3802。其阻值为：",
    "options": [
      {
        "letter": "A",
        "text": "38.0 千欧"
      },
      {
        "letter": "B",
        "text": "208 千欧"
      },
      {
        "letter": "C",
        "text": "3.8 千欧"
      },
      {
        "letter": "D",
        "text": "3.802 千欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1082",
    "image": ""
  },
  {
    "id": "Q990",
    "originalId": "LK0582",
    "text": "制作工作电压较高的电路应当关注元器件的耐压。这可以提高电路的安全性。要确保所用电阻的耐压，可供借鉴的经验有：",
    "options": [
      {
        "letter": "A",
        "text": "咨询厂商，选用额定耐压较高的产品；或，尝试选用封装尺寸较大一些的"
      },
      {
        "letter": "B",
        "text": "如果所选产品不能满足设计要求，可将多支电阻串联使用"
      },
      {
        "letter": "C",
        "text": "尽量选用比较高级的产品，例如金属膜电阻就比碳膜的好"
      },
      {
        "letter": "D",
        "text": "当所选产品不满足设计要求时，可将多支电阻并联起来用"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.2",
    "type": "MC2-1083",
    "image": ""
  },
  {
    "id": "Q991",
    "originalId": "LK1149",
    "text": "电位器是一种触点端与电阻体滑动接触的三端电阻元件。其在电路中可以用作：",
    "options": [
      {
        "letter": "A",
        "text": "可调分压器"
      },
      {
        "letter": "B",
        "text": "可变电阻"
      },
      {
        "letter": "C",
        "text": "可调变压器"
      },
      {
        "letter": "D",
        "text": "可变电纳"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.2",
    "type": "MC2-1084",
    "image": ""
  },
  {
    "id": "Q992",
    "originalId": "LK1150",
    "text": "以下哪种元件可以用来实现音量调节功能？",
    "options": [
      {
        "letter": "A",
        "text": "电位器"
      },
      {
        "letter": "B",
        "text": "变压器"
      },
      {
        "letter": "C",
        "text": "调制器"
      },
      {
        "letter": "D",
        "text": "解调器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1085",
    "image": ""
  },
  {
    "id": "Q993",
    "originalId": "LK1151",
    "text": "电容器由彼此绝缘的两个电极构成。若按制造材料细分，常见电容器包括：",
    "options": [
      {
        "letter": "A",
        "text": "陶瓷电容"
      },
      {
        "letter": "B",
        "text": "电解电容"
      },
      {
        "letter": "C",
        "text": "有机薄膜电容"
      },
      {
        "letter": "D",
        "text": "线间电容"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1086",
    "image": ""
  },
  {
    "id": "Q994",
    "originalId": "LX",
    "text": "我们经常使用的独石电容是一种：",
    "options": [
      {
        "letter": "A",
        "text": "多层陶瓷电容"
      },
      {
        "letter": "B",
        "text": "镀银云母电容"
      },
      {
        "letter": "C",
        "text": "卷绕涤纶电容"
      },
      {
        "letter": "D",
        "text": "高频瓷介电容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1087",
    "image": ""
  },
  {
    "id": "Q995",
    "originalId": "LK0589",
    "text": "在组装业余收发信机所用的元器件中，标有额定耐压的通常是：",
    "options": [
      {
        "letter": "A",
        "text": "电解电容"
      },
      {
        "letter": "B",
        "text": "钽电容"
      },
      {
        "letter": "C",
        "text": "熔丝"
      },
      {
        "letter": "D",
        "text": "电感线圈"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1088",
    "image": ""
  },
  {
    "id": "Q996",
    "originalId": "LX",
    "text": "在自制电路作品时，爱好者们经常将容量约为 1-100μF 的电解电容替换为同等容量的贴片陶瓷电容。后者的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "体积更小"
      },
      {
        "letter": "B",
        "text": "频率特性更好"
      },
      {
        "letter": "C",
        "text": "没有极性"
      },
      {
        "letter": "D",
        "text": "故障率更低"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.3.2",
    "type": "MC4-1089",
    "image": ""
  },
  {
    "id": "Q997",
    "originalId": "LK0640",
    "text": "电路图中，若电解电容器的容量未标注单位，则默认为：",
    "options": [
      {
        "letter": "A",
        "text": "法拉"
      },
      {
        "letter": "B",
        "text": "毫法拉"
      },
      {
        "letter": "C",
        "text": "皮法拉"
      },
      {
        "letter": "D",
        "text": "微法拉"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1090",
    "image": ""
  },
  {
    "id": "Q998",
    "originalId": "LK0641",
    "text": "电路图中，若用大于 1 的整数或小数标注非电解电容器的容量，则单位缺省为：",
    "options": [
      {
        "letter": "A",
        "text": "皮法拉"
      },
      {
        "letter": "B",
        "text": "微法拉"
      },
      {
        "letter": "C",
        "text": "法拉"
      },
      {
        "letter": "D",
        "text": "毫法拉"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1091",
    "image": ""
  },
  {
    "id": "Q999",
    "originalId": "LK0642",
    "text": "如果在电路图中或实际元件上看到用 3 位数字标明的非电解电容器的容量时应读为：",
    "options": [
      {
        "letter": "A",
        "text": "前两位表示容量基数，后一位表示基数后面应加上几个 0，单位为皮法拉"
      },
      {
        "letter": "B",
        "text": "实际容量为该三位数字乘以 1000，单位为皮法拉"
      },
      {
        "letter": "C",
        "text": "实际容量为该三位数字除以 1000，单位为法拉"
      },
      {
        "letter": "D",
        "text": "前一位表示容量基数，第二位表示基数后面应加上几个 0，第三位表示误差等级，容量的单位为皮法拉"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1092",
    "image": ""
  },
  {
    "id": "Q1000",
    "originalId": "LK0643",
    "text": "如果在电路图中或实际元件上看到用 3 位数字标明的阻值时应读为：",
    "options": [
      {
        "letter": "A",
        "text": "前两位表示阻值基数，后一位表示基数后面应加上几个 0，单位为欧姆"
      },
      {
        "letter": "B",
        "text": "实际阻值为该三位数字乘以 100，单位欧姆"
      },
      {
        "letter": "C",
        "text": "实际阻值为该三位数字除以 100，单位欧姆"
      },
      {
        "letter": "D",
        "text": "前一位表示阻值基数，第二位表示基数后面应加上几个 0，第三位表示误差等级，阻值的单位为千欧姆"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1093",
    "image": ""
  },
  {
    "id": "Q1001",
    "originalId": "LK0644",
    "text": "如果在电路图中或实际元件上看到用 2 至 3 位数字和一个字母（例如 8R2、2K7、1M5）标明的阻值时应读为：",
    "options": [
      {
        "letter": "A",
        "text": "将字母用作小数点，与数字一起读作阻值的基数。字母 R、K 或 M 表明阻值的单位为欧姆、千欧或兆欧"
      },
      {
        "letter": "B",
        "text": "把所有数字挑出来连在一起乘以 100，单位为欧姆"
      },
      {
        "letter": "C",
        "text": "把所有数字挑出来连在一起，再根据字母 R、K 或 M 来认定单位为欧姆、千欧或兆欧"
      },
      {
        "letter": "D",
        "text": "字母前的数字表示阻值基数，字母后的数字表示误差等级，字母 R、K 或 M 表示单位为欧姆、千欧或兆欧"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1094",
    "image": ""
  },
  {
    "id": "Q1002",
    "originalId": "LK0645",
    "text": "电路图中，若用小于 1 的小数标注非电解电容器的容量，则单位缺省为",
    "options": [
      {
        "letter": "A",
        "text": "微法拉"
      },
      {
        "letter": "B",
        "text": "皮法拉"
      },
      {
        "letter": "C",
        "text": "法拉"
      },
      {
        "letter": "D",
        "text": "毫法拉"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1095",
    "image": ""
  },
  {
    "id": "Q1003",
    "originalId": "LK0592",
    "text": "在业余收发信机中用来阻断直流或者为交流信号提供旁路的元件是：",
    "options": [
      {
        "letter": "A",
        "text": "电容"
      },
      {
        "letter": "B",
        "text": "电阻"
      },
      {
        "letter": "C",
        "text": "电感"
      },
      {
        "letter": "D",
        "text": "二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1096",
    "image": ""
  },
  {
    "id": "Q1004",
    "originalId": "LK1038",
    "text": "业余自制电路作品时，爱好者们常将一个大容量电容与一个或若干个小容量电容相并联，共同用作放大器的旁路电容或是供电线路中的滤波电容。这样做主要考虑的是：",
    "options": [
      {
        "letter": "A",
        "text": "在工作频率较低时，大容量电容起主要作用。随着频率升高，大容量电容的损耗变得不可忽略，而此时小容量电容开始发挥作用。这可以拓展电路的工作带宽"
      },
      {
        "letter": "B",
        "text": "防止大容量电容因日久漏液而逐渐损失容量。事先加个小容量电容可以提升保险系数"
      },
      {
        "letter": "C",
        "text": "利用电容器并联则容量相加的原理获取更为准确的容量值，以利精准旁路，精确滤波"
      },
      {
        "letter": "D",
        "text": "利用电容器并联则耐压相加的原理，整体提高电路，特别是车载电路的过压耐受能力"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1097",
    "image": ""
  },
  {
    "id": "Q1005",
    "originalId": "LK0584",
    "text": "设将一个电容量为 1000 微法的电容器跨接在电路上，不会严重影响该电路工作或不至引发安全风险的做法为：",
    "options": [
      {
        "letter": "A",
        "text": "跨接在 13.8 伏直流电源的输出端上"
      },
      {
        "letter": "B",
        "text": "跨接在 HF 收发信机的天线插座两端"
      },
      {
        "letter": "C",
        "text": "跨接在阻抗为 8 欧姆的扬声器两端"
      },
      {
        "letter": "D",
        "text": "跨接在 220 伏交流电源的插座两端"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1098",
    "image": ""
  },
  {
    "id": "Q1006",
    "originalId": "LX",
    "text": "哪种元件由线圈制成？",
    "options": [
      {
        "letter": "A",
        "text": "电感器"
      },
      {
        "letter": "B",
        "text": "电抗器"
      },
      {
        "letter": "C",
        "text": "电容器"
      },
      {
        "letter": "D",
        "text": "电阻器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.2",
    "type": "MC2-1099",
    "image": ""
  },
  {
    "id": "Q1007",
    "originalId": "LK1152",
    "text": "电感的种类繁多。在射频电路中常见的有：",
    "options": [
      {
        "letter": "A",
        "text": "空芯电感"
      },
      {
        "letter": "B",
        "text": "磁芯电感"
      },
      {
        "letter": "C",
        "text": "分布电感"
      },
      {
        "letter": "D",
        "text": "寄生电感"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.2",
    "type": "MC2-1100",
    "image": ""
  },
  {
    "id": "Q1008",
    "originalId": "LX",
    "text": "电感的品质因数 Q 是电感量与损耗电阻之比。关于 Q 值，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "电感的 Q 值过低带来功率损失并会影响电路的其他相关特性"
      },
      {
        "letter": "B",
        "text": "电感的 Q 值过低影响射频功率，但是不影响电路的其他特性"
      },
      {
        "letter": "C",
        "text": "电感的 Q 值与 LC 谐振回路的 Q 值无关。后者才是真正的 Q"
      },
      {
        "letter": "D",
        "text": "电感量确定，则 Q 值已笃定。二者为正比关系"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1101",
    "image": ""
  },
  {
    "id": "Q1009",
    "originalId": "LK0670",
    "text": "用适当磁性材料制作的磁芯电感，损耗小于同等电感量的空心电感。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "加入磁芯后可用较短的导线达成所需的电感量，减少导线电阻引致的发热损耗"
      },
      {
        "letter": "B",
        "text": "磁芯比空气更容易散热，电感的发热损耗由此降低"
      },
      {
        "letter": "C",
        "text": "磁芯可将原来损耗的能量反射回导线"
      },
      {
        "letter": "D",
        "text": "加入磁芯可改善导线趋肤效应引致的局部电流密度增大问题，从而降低热损耗"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1102",
    "image": ""
  },
  {
    "id": "Q1010",
    "originalId": "LK0583",
    "text": "设将一个电感值为 100 微亨的线圈跨接在电路上，不会严重影响该电路工作或不至引发安全风险的做法为：",
    "options": [
      {
        "letter": "A",
        "text": "跨接在 HF 收发信机的天线插座两端"
      },
      {
        "letter": "B",
        "text": "跨接在 220 伏交流电源的插座两端"
      },
      {
        "letter": "C",
        "text": "跨接在 13.8 伏直流电源的输出端上"
      },
      {
        "letter": "D",
        "text": "跨接在阻抗为 8 欧姆的扬声器两端"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1103",
    "image": ""
  },
  {
    "id": "Q1011",
    "originalId": "LK0638",
    "text": "小明用电压为 4.2 伏的低电压电池和几个无源元件做电路实验。在连接电路时，他感觉双手被意外出现的高电压击了一下。如果元件如下，则可能产生高电压的有：",
    "options": [
      {
        "letter": "A",
        "text": "电源变压器的绕组"
      },
      {
        "letter": "B",
        "text": "继电器的衔铁线圈"
      },
      {
        "letter": "C",
        "text": "大容量电解电容器"
      },
      {
        "letter": "D",
        "text": "碳化硅高压二极管"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.2",
    "type": "MC2-1104",
    "image": ""
  },
  {
    "id": "Q1012",
    "originalId": "LK1153",
    "text": "开关是利用通、断两种状态对电路实施控制的一种电子零件。下列可用作开关的有：",
    "options": [
      {
        "letter": "A",
        "text": "按钮开关"
      },
      {
        "letter": "B",
        "text": "继电器"
      },
      {
        "letter": "C",
        "text": "晶体管"
      },
      {
        "letter": "D",
        "text": "电位器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1105",
    "image": ""
  },
  {
    "id": "Q1013",
    "originalId": "LX",
    "text": "单刀双掷（SPDT）开关是我们常用的一种开关元件。“单刀双掷”是指什么？",
    "options": [
      {
        "letter": "A",
        "text": "将某个电路选择接入另外两个电路中的一个"
      },
      {
        "letter": "B",
        "text": "很明显，就是接通或断开一个电路"
      },
      {
        "letter": "C",
        "text": "很明显，就是接通或断开两个电路"
      },
      {
        "letter": "D",
        "text": "将两个电路选择接入其分别对应的另外两个电路中的一个"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1106",
    "image": ""
  },
  {
    "id": "Q1014",
    "originalId": "LX",
    "text": "以下哪种元件可以保护电路中的其他元件免受过电流的冲击？",
    "options": [
      {
        "letter": "A",
        "text": "熔断器"
      },
      {
        "letter": "B",
        "text": "MOS 管"
      },
      {
        "letter": "C",
        "text": "电子管"
      },
      {
        "letter": "D",
        "text": "电容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1107",
    "image": ""
  },
  {
    "id": "Q1015",
    "originalId": "LK0591",
    "text": "在组装业余收发信机所用的元器件中，标有额定电流的通常是：",
    "options": [
      {
        "letter": "A",
        "text": "熔断器"
      },
      {
        "letter": "B",
        "text": "开关"
      },
      {
        "letter": "C",
        "text": "继电器"
      },
      {
        "letter": "D",
        "text": "压电晶体"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1108",
    "image": ""
  },
  {
    "id": "Q1016",
    "originalId": "LK1154",
    "text": "业余无线电作品中的熔断器常为玻璃或陶瓷封装的保险丝管，是用来增强电路安全性的。关于这类熔断器的使用，可供借鉴的经验有：",
    "options": [
      {
        "letter": "A",
        "text": "选用保险丝管应当关注额定工作电压、额定工作电流和熔断速度"
      },
      {
        "letter": "B",
        "text": "将大电流保险丝管装于管座内，以防熔断时爆裂，损伤周边元件"
      },
      {
        "letter": "C",
        "text": "尽量将供电线路保险丝的管座固定于机箱背板，以简化维修工作"
      },
      {
        "letter": "D",
        "text": "为熔断器安装射频滤波器，以防熔断时打火，干扰周边业余电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1109",
    "image": ""
  },
  {
    "id": "Q1017",
    "originalId": "LK1155",
    "text": "继电器是一种具有电气隔离能力的开关，常用来以小功率低压电控制大功率电路或高压电路。在业余无线电作品中，继电器也用来控制射频电路的通断或切换信号路径。关于继电器的应用，可供借鉴的经验有：",
    "options": [
      {
        "letter": "A",
        "text": "选用继电器时应关注触点的额定耐压和额定工作电流"
      },
      {
        "letter": "B",
        "text": "用继电器控制收发转换，应在发射机待机后再行切换"
      },
      {
        "letter": "C",
        "text": "选用切换信号的继电器，应关注其导通小信号的能力"
      },
      {
        "letter": "D",
        "text": "自制 HF 或 VHF 设备时，应尽量选用微波射频继电器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1110",
    "image": ""
  },
  {
    "id": "Q1018",
    "originalId": "LK0636",
    "text": "如果利用开关器件来控制继电器的衔铁线圈通电与否，例如是将线圈接在三极管的集电极电路中，则可能发生的情况是：",
    "options": [
      {
        "letter": "A",
        "text": "在三极管关断的瞬间，集电极可能承受远高于电源电压的高电压冲击"
      },
      {
        "letter": "B",
        "text": "在三极管导通的瞬间，集电极可能承受远高于电源电压的高电压冲击"
      },
      {
        "letter": "C",
        "text": "在三极管关断的瞬间，集电极可能承受远大于导通电流的大电流冲击"
      },
      {
        "letter": "D",
        "text": "在三极管导通的瞬间，集电极可能承受远大于导通电流的大电流冲击"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1111",
    "image": ""
  },
  {
    "id": "Q1019",
    "originalId": "LK0637",
    "text": "如果利用开关器件来控制继电器的衔铁线圈通电与否，则线圈的两端需要并联一个小容量电容器或是一个反向偏置的二极管。其作用是：",
    "options": [
      {
        "letter": "A",
        "text": "吸收继电器线圈在电路关断瞬间感应出的反向电动势以保护开关器件"
      },
      {
        "letter": "B",
        "text": "消除继电器触点通断时产生的火花干扰"
      },
      {
        "letter": "C",
        "text": "减少通过开关器件的工作电流"
      },
      {
        "letter": "D",
        "text": "减少继电器的磨损"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1112",
    "image": ""
  },
  {
    "id": "Q1020",
    "originalId": "LK0639",
    "text": "若用继电器控制直流负载，我们有时需要在继电器的触点两端并联一个小容量电容。其作用是：",
    "options": [
      {
        "letter": "A",
        "text": "消除继电器触点通断时因拉弧而产生的电磁干扰"
      },
      {
        "letter": "B",
        "text": "吸收继电器线圈在电路关断瞬间感应出的反向电动势以保护开关器件"
      },
      {
        "letter": "C",
        "text": "减少通过开关器件的工作电流"
      },
      {
        "letter": "D",
        "text": "减少继电器的磨损"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1113",
    "image": ""
  },
  {
    "id": "Q1021",
    "originalId": "LK0646",
    "text": "电磁感应现象是指置于变化磁场中的导体产生感应电动势的现象。应用场景包括：",
    "options": [
      {
        "letter": "A",
        "text": "变压器"
      },
      {
        "letter": "B",
        "text": "发电机"
      },
      {
        "letter": "C",
        "text": "交流异步电动机"
      },
      {
        "letter": "D",
        "text": "无线电通信"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.3.2",
    "type": "MC4-1114",
    "image": ""
  },
  {
    "id": "Q1022",
    "originalId": "LK0647",
    "text": "电磁学术语“互感现象”是指：",
    "options": [
      {
        "letter": "A",
        "text": "两个回路电流变化，通过磁场耦合而相互产生感应电动势的现象"
      },
      {
        "letter": "B",
        "text": "连接在一起的两个元器件的阻抗相互阻碍流过对方的电流的现象"
      },
      {
        "letter": "C",
        "text": "两个带电部件的电场相互叠加的现象"
      },
      {
        "letter": "D",
        "text": "两个不同频率的电磁波在空气中叠加，相互混频产生干扰的现象"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1115",
    "image": ""
  },
  {
    "id": "Q1023",
    "originalId": "LK0666",
    "text": "为什么变压器中的铁芯要由截面积大，导磁率高的多片矽钢片堆叠构成，而不像继电器中的衔铁那样使用整体铁芯？",
    "options": [
      {
        "letter": "A",
        "text": "堆叠的矽钢片彼此绝缘，可降低涡流损耗"
      },
      {
        "letter": "B",
        "text": "将矽钢片堆叠可降低变压器的非线性失真"
      },
      {
        "letter": "C",
        "text": "矽钢片堆叠工艺可简化变压器的组装难度"
      },
      {
        "letter": "D",
        "text": "整体铁芯制成的变压器易松动，会有震动"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1116",
    "image": ""
  },
  {
    "id": "Q1024",
    "originalId": "LX",
    "text": "理想变压器初、次级绕组的匝数比决定变压器的电压变比。假设一个理想变压器的初级和次级绕组分别为 1100 匝和 110 匝，将初级接入电压为 220V 的交流电源并在次级并联一个 22 欧的电阻，则以下结论正确的是：（电压和电流均为有效值）",
    "options": [
      {
        "letter": "A",
        "text": "次级电压为 22 伏"
      },
      {
        "letter": "B",
        "text": "次级电流为 1 安"
      },
      {
        "letter": "C",
        "text": "初级阻抗为 2.2 千欧"
      },
      {
        "letter": "D",
        "text": "变压器功耗为 22 瓦"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1117",
    "image": ""
  },
  {
    "id": "Q1025",
    "originalId": "LX",
    "text": "理想变压器初、次级绕组的匝数比决定变压器的电压变比。假设一个理想变压器的初级和次级绕组分别为 120 匝和 1800 匝，将初级接入电压为 220V 的交流电源并在次级并联一个 4.5 千欧的电阻，则以下结论正确的是：（电压和电流均为有效值）",
    "options": [
      {
        "letter": "A",
        "text": "次级电压为 3300 伏"
      },
      {
        "letter": "B",
        "text": "初级电流为 11 安"
      },
      {
        "letter": "C",
        "text": "初级阻抗为 20 欧"
      },
      {
        "letter": "D",
        "text": "变压器功耗为 2.42 千伏安"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1118",
    "image": ""
  },
  {
    "id": "Q1026",
    "originalId": "LX",
    "text": "在射频电路中，变压器的用途之一是完成阻抗变换。某个绕制于铁氧体磁环上的高频变压器，初、次级绕组的匝数分别为 3 匝和 6 匝。在该变压器的设计工作频率和负载阻抗范围内，以下结论正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "该变压器可用作 1:4 或 4:1 阻抗变换器。用作后者时需将初次级互换"
      },
      {
        "letter": "B",
        "text": "该变压器可用作 1:2 或 2:1 电压变换器。用作后者时需将初次级互换"
      },
      {
        "letter": "C",
        "text": "该变压器可用作带阻抗变换功能的倒相器。用法是调换初级或者次级的线序"
      },
      {
        "letter": "D",
        "text": "该变压器可用来匹配天线，可将天线阻抗中的电抗成分按比例变为电阻成分"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1119",
    "image": ""
  },
  {
    "id": "Q1027",
    "originalId": "LX",
    "text": "如果一副天线的阻抗为 450 欧，我们要用怎样匝数比的变压器才能将之变换为 50 欧？",
    "options": [
      {
        "letter": "A",
        "text": "3 比 1"
      },
      {
        "letter": "B",
        "text": "9 比 1"
      },
      {
        "letter": "C",
        "text": "450 比 1"
      },
      {
        "letter": "D",
        "text": "50 比 1"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.2",
    "type": "MC1-1120",
    "image": ""
  },
  {
    "id": "Q1028",
    "originalId": "LX",
    "text": "传输线变压器是结合传输线理论设计制作的一种射频变压器，已广泛应用于业余无线电作品。例如，用双绞线在磁环上穿绕数匝即可制成 1:4 阻抗变换器。这种变压器的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "可在很宽频带内实现阻抗匹配"
      },
      {
        "letter": "B",
        "text": "可制成平衡-不平衡转换器"
      },
      {
        "letter": "C",
        "text": "可制成功率合成与分配网络"
      },
      {
        "letter": "D",
        "text": "可实现整数倍率的倍频与分频"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.3.2",
    "type": "MC3-1121",
    "image": ""
  },
  {
    "id": "Q1029",
    "originalId": "LK0668",
    "text": "在频率为数十兆赫的射频电路中用实心导线作连线会有下列现象：",
    "options": [
      {
        "letter": "A",
        "text": "电流集中在导线表层，导线内部没有电流"
      },
      {
        "letter": "B",
        "text": "导线截面各处的电流密度均匀分布"
      },
      {
        "letter": "C",
        "text": "导线外层和内层都有电流，但两者方向相反"
      },
      {
        "letter": "D",
        "text": "表层的电流沿导线方向流动，内层电流形成螺旋状涡流"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.3",
    "type": "MC1-1122",
    "image": ""
  },
  {
    "id": "Q1030",
    "originalId": "LK0667",
    "text": "同样材料、同样直径、同样长度的实心铜线和空心铜管，在交流电路中的发热损耗情况为：",
    "options": [
      {
        "letter": "A",
        "text": "在低频率下实心铜线损耗较小，在高频率下两者损耗一样"
      },
      {
        "letter": "B",
        "text": "在低频率下实心铜线损耗较大，在高频率下两者损耗一样"
      },
      {
        "letter": "C",
        "text": "不同频率下两者的发热损耗不便比较，具体取决于散热条件"
      },
      {
        "letter": "D",
        "text": "在任何频率下两者的损耗都一样"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.3",
    "type": "MC1-1123",
    "image": ""
  },
  {
    "id": "Q1031",
    "originalId": "LK0634",
    "text": "一个电容器，在 50Hz 频率下测得容抗为 100 欧姆。推断其在 5MHz 下的容抗应为 0.001欧姆，但实测值却显著偏大。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "随着频率升高，电容器引线的感抗变得不可忽略"
      },
      {
        "letter": "B",
        "text": "随着频率升高，电容器的介质损耗逐渐增加"
      },
      {
        "letter": "C",
        "text": "所用仪器的频率特性欠佳"
      },
      {
        "letter": "D",
        "text": "计算容抗的公式在高频率下不再适用"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.3",
    "type": "MC2-1124",
    "image": ""
  },
  {
    "id": "Q1032",
    "originalId": "LK0635",
    "text": "一个电感线圈，在 50Hz 频率下测得感抗为 10 欧姆。推断其在 5MHz 下的感抗应为 1 兆欧，但实测值却显著偏小。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "随着频率升高，线圈的匝间分布电容变得不可忽略"
      },
      {
        "letter": "B",
        "text": "所用仪器的频率特性欠佳"
      },
      {
        "letter": "C",
        "text": "计算感抗的公式在高频率下不再适用"
      },
      {
        "letter": "D",
        "text": "电感线圈导线损耗导致非线性失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.3",
    "type": "MC1-1125",
    "image": ""
  },
  {
    "id": "Q1033",
    "originalId": "LK0585",
    "text": "下列哪些属于有源器件？",
    "options": [
      {
        "letter": "A",
        "text": "硅整流二极管"
      },
      {
        "letter": "B",
        "text": "肖特基二极管"
      },
      {
        "letter": "C",
        "text": "场效应三极管"
      },
      {
        "letter": "D",
        "text": "双极型三极管"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.3.4",
    "type": "MC4-1126",
    "image": ""
  },
  {
    "id": "Q1034",
    "originalId": "LK1159",
    "text": "以下哪种元器件只允许单方向的电流流动？",
    "options": [
      {
        "letter": "A",
        "text": "二极管"
      },
      {
        "letter": "B",
        "text": "蓄电池"
      },
      {
        "letter": "C",
        "text": "变压器"
      },
      {
        "letter": "D",
        "text": "继电器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1127",
    "image": ""
  },
  {
    "id": "Q1035",
    "originalId": "LK1164",
    "text": "二极管的两个电极分别叫什么？",
    "options": [
      {
        "letter": "A",
        "text": "分别叫正极和负极，有时亦称阳极和阴极"
      },
      {
        "letter": "B",
        "text": "分别叫源极和漏极，有时亦称注入极和释出极"
      },
      {
        "letter": "C",
        "text": "分别叫阴极和屏极，有时亦称发射极和接收极"
      },
      {
        "letter": "D",
        "text": "分别叫门极和基极，有时亦称触发极和控制极"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1128",
    "image": ""
  },
  {
    "id": "Q1036",
    "originalId": "LK1163",
    "text": "如何根据外观识别半导体二极管的负极？",
    "options": [
      {
        "letter": "A",
        "text": "器件封装上靠近负极的位置通常印有环或线标记"
      },
      {
        "letter": "B",
        "text": "器件负极上通常标有“负极”或“Cathode”字样"
      },
      {
        "letter": "C",
        "text": "器件负极的引脚通常较正极引脚长 20%左右"
      },
      {
        "letter": "D",
        "text": "器件负极通常靠近键标，并与相邻引脚连有灯丝"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1129",
    "image": ""
  },
  {
    "id": "Q1037",
    "originalId": "LK1165",
    "text": "LED 是哪种器件的缩写？",
    "options": [
      {
        "letter": "A",
        "text": "发光二极管"
      },
      {
        "letter": "B",
        "text": "液晶显示器"
      },
      {
        "letter": "C",
        "text": "阴极射线管"
      },
      {
        "letter": "D",
        "text": "束射四极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1130",
    "image": ""
  },
  {
    "id": "Q1038",
    "originalId": "LK1170",
    "text": "在下列器件中，能够用作指示灯的是：",
    "options": [
      {
        "letter": "A",
        "text": "LED"
      },
      {
        "letter": "B",
        "text": "BJT"
      },
      {
        "letter": "C",
        "text": "TVS"
      },
      {
        "letter": "D",
        "text": "SCR"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1131",
    "image": ""
  },
  {
    "id": "Q1039",
    "originalId": "LK0723",
    "text": "将发光二极管接到直流电源上需要注意什么？",
    "options": [
      {
        "letter": "A",
        "text": "正向连接并串联限流电阻"
      },
      {
        "letter": "B",
        "text": "反向连接并串联限流电阻"
      },
      {
        "letter": "C",
        "text": "正反向无所谓，但是都须并联限流电阻"
      },
      {
        "letter": "D",
        "text": "应当正向直接连接到直流电源上"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1132",
    "image": ""
  },
  {
    "id": "Q1040",
    "originalId": "LK1168",
    "text": "下列哪种部件可以把交变电变成脉动直流电？",
    "options": [
      {
        "letter": "A",
        "text": "二极管整流器"
      },
      {
        "letter": "B",
        "text": "电源变压器"
      },
      {
        "letter": "C",
        "text": "比较放大器"
      },
      {
        "letter": "D",
        "text": "射极输出器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1133",
    "image": ""
  },
  {
    "id": "Q1041",
    "originalId": "LX",
    "text": "硅整流二极管的正向导通压降大约为：",
    "options": [
      {
        "letter": "A",
        "text": "0.7 伏"
      },
      {
        "letter": "B",
        "text": "0.3 伏"
      },
      {
        "letter": "C",
        "text": "数十毫伏"
      },
      {
        "letter": "D",
        "text": "1000 伏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1134",
    "image": ""
  },
  {
    "id": "Q1042",
    "originalId": "LK0338",
    "text": "阅读电路图或运行计算机电路仿真时，如果看到符号“BJT”，则为：",
    "options": [
      {
        "letter": "A",
        "text": "双极型三极管"
      },
      {
        "letter": "B",
        "text": "双栅场效应三极管"
      },
      {
        "letter": "C",
        "text": "结型场效应三极管"
      },
      {
        "letter": "D",
        "text": "双基极二极管"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1135",
    "image": ""
  },
  {
    "id": "Q1043",
    "originalId": "LK0415",
    "text": "场效应晶体管的三个基本电极是：",
    "options": [
      {
        "letter": "A",
        "text": "源极、栅极、漏极"
      },
      {
        "letter": "B",
        "text": "阴极、栅极、屏极（板极）"
      },
      {
        "letter": "C",
        "text": "发射极、基极、集电极"
      },
      {
        "letter": "D",
        "text": "阴极、门极、阳极"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1136",
    "image": ""
  },
  {
    "id": "Q1044",
    "originalId": "LK0414",
    "text": "双极型三极管的三个基本电极是：",
    "options": [
      {
        "letter": "A",
        "text": "发射极、基极、集电极"
      },
      {
        "letter": "B",
        "text": "阴极、栅极、屏极（板极）"
      },
      {
        "letter": "C",
        "text": "源极、栅极、漏极"
      },
      {
        "letter": "D",
        "text": "阴极、门极、阳极"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1137",
    "image": ""
  },
  {
    "id": "Q1045",
    "originalId": "LK0413",
    "text": "电子三极管的三个基本电极是：",
    "options": [
      {
        "letter": "A",
        "text": "阴极、栅极、屏极（板极）"
      },
      {
        "letter": "B",
        "text": "发射极、基极、集电极"
      },
      {
        "letter": "C",
        "text": "源极、栅极、漏极"
      },
      {
        "letter": "D",
        "text": "阴极、门极、阳极"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1138",
    "image": ""
  },
  {
    "id": "Q1046",
    "originalId": "LK0724",
    "text": "电子三极管至少应有几个引脚？",
    "options": [
      {
        "letter": "A",
        "text": "4 个"
      },
      {
        "letter": "B",
        "text": "2 个"
      },
      {
        "letter": "C",
        "text": "3 个"
      },
      {
        "letter": "D",
        "text": "5 个"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1139",
    "image": ""
  },
  {
    "id": "Q1047",
    "originalId": "LK0729",
    "text": "描述场效应晶体管放大能力的最常用参数、单位及符号是：",
    "options": [
      {
        "letter": "A",
        "text": "互导（跨导）；单位为毫安/伏；符号为“gm”"
      },
      {
        "letter": "B",
        "text": "电流放大倍数；没有单位；符号为“β”"
      },
      {
        "letter": "C",
        "text": "互导（跨导）；单位为“倍”；符号为“A”"
      },
      {
        "letter": "D",
        "text": "电压放大倍数；没有单位；符号为“k”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1140",
    "image": ""
  },
  {
    "id": "Q1048",
    "originalId": "LK0730",
    "text": "描述双极型晶体管放大能力的最常用参数、单位及符号是：",
    "options": [
      {
        "letter": "A",
        "text": "电流放大倍数；没有单位；符号为“β”"
      },
      {
        "letter": "B",
        "text": "互导（跨导）；单位为毫安/伏；符号为“gm”"
      },
      {
        "letter": "C",
        "text": "互导（跨导）；单位为“倍”；符号为“A”"
      },
      {
        "letter": "D",
        "text": "电压放大倍数；没有单位；符号为“k”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1141",
    "image": ""
  },
  {
    "id": "Q1049",
    "originalId": "LK0728",
    "text": "描述电子三极管放大能力的最常用参数、单位及符号是：",
    "options": [
      {
        "letter": "A",
        "text": "互导（跨导）； 单位为毫安/伏；符号为“gm”"
      },
      {
        "letter": "B",
        "text": "电流放大倍数；没有单位；符号为“β”"
      },
      {
        "letter": "C",
        "text": "互导（跨导）；单位为“倍”；符号为“A”"
      },
      {
        "letter": "D",
        "text": "电压放大倍数；没有单位；符号为“k”"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1142",
    "image": ""
  },
  {
    "id": "Q1050",
    "originalId": "LK0731",
    "text": "若将器件上起控制作用的电极按输入阻抗由低到高排列，则可以是：",
    "options": [
      {
        "letter": "A",
        "text": "双极型晶体管的基极、结型场效应管的栅极、绝缘栅场效应管的栅极"
      },
      {
        "letter": "B",
        "text": "双极型晶体管的基极、绝缘栅场效应管的栅极、结型场效应管的栅极"
      },
      {
        "letter": "C",
        "text": "绝缘栅场效应管的栅极、双极型晶体管的基极、结型场效应管的栅极"
      },
      {
        "letter": "D",
        "text": "结型场效应管的栅极、双极型晶体管的基极、绝缘栅场效应管的栅极"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1143",
    "image": ""
  },
  {
    "id": "Q1051",
    "originalId": "LK1158",
    "text": "下列哪种元器件可用来实现以较小的电流控制较大电流的功能？",
    "options": [
      {
        "letter": "A",
        "text": "晶体管"
      },
      {
        "letter": "B",
        "text": "继电器"
      },
      {
        "letter": "C",
        "text": "电阻"
      },
      {
        "letter": "D",
        "text": "电池"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.4",
    "type": "MC2-1144",
    "image": ""
  },
  {
    "id": "Q1052",
    "originalId": "LK1160",
    "text": "下列哪种元器件既可以用作电子开关又可以制成放大器来使用？",
    "options": [
      {
        "letter": "A",
        "text": "晶体管"
      },
      {
        "letter": "B",
        "text": "电位器"
      },
      {
        "letter": "C",
        "text": "单刀双掷开关"
      },
      {
        "letter": "D",
        "text": "电压表"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1145",
    "image": ""
  },
  {
    "id": "Q1053",
    "originalId": "LK1172",
    "text": "集成电路是指：",
    "options": [
      {
        "letter": "A",
        "text": "将一个电路的大量元器件集成于单个晶片上制成的器件"
      },
      {
        "letter": "B",
        "text": "由多个继电器组合而成的具有逻辑运算能力的电路"
      },
      {
        "letter": "C",
        "text": "由多个电阻或电容组合而成的具有微分或积分功能的电路"
      },
      {
        "letter": "D",
        "text": "由多个绕组构成的基于变压器原理的功率合成电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1146",
    "image": ""
  },
  {
    "id": "Q1054",
    "originalId": "LK1016",
    "text": "理想运算放大器的基本概念是：",
    "options": [
      {
        "letter": "A",
        "text": "在不加负反馈的情况下，也就是开环工作时，其放大倍数为无穷大"
      },
      {
        "letter": "B",
        "text": "这种放大器具有正、负两种极性的输入端，并且输入阻抗为无穷大"
      },
      {
        "letter": "C",
        "text": "所谓理想，其实就是是指内部噪声等于零的共发射极晶体管放大器"
      },
      {
        "letter": "D",
        "text": "所谓理想，其实就是是指输出电压幅度不设上限的场效应管放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.3.4",
    "type": "MC2-1147",
    "image": ""
  },
  {
    "id": "Q1055",
    "originalId": "LX",
    "text": "集成运算放大器属于什么类型的集成电路？",
    "options": [
      {
        "letter": "A",
        "text": "模拟集成电路"
      },
      {
        "letter": "B",
        "text": "单片微波集成电路"
      },
      {
        "letter": "C",
        "text": "数字集成电路"
      },
      {
        "letter": "D",
        "text": "可编程数字逻辑阵列"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1148",
    "image": ""
  },
  {
    "id": "Q1056",
    "originalId": "LK0588",
    "text": "业余无线电作品中常见的一些集成电路，例如运算放大器和微处理器等，有时会在所标型号之后附加字母尾缀，例如 SIP、DIP、SOT、SOP、SSOP、QFP 等。它们用来说明：",
    "options": [
      {
        "letter": "A",
        "text": "器件的封装形式"
      },
      {
        "letter": "B",
        "text": "器件的工作温度范围"
      },
      {
        "letter": "C",
        "text": "器件的输入输出电平范围"
      },
      {
        "letter": "D",
        "text": "器件的工作频率范围"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.3.4",
    "type": "MC1-1149",
    "image": ""
  },
  {
    "id": "Q1057",
    "originalId": "LK0734",
    "text": "图中的电路为：",
    "options": [
      {
        "letter": "A",
        "text": "共基极放大器"
      },
      {
        "letter": "B",
        "text": "共发射极放大器"
      },
      {
        "letter": "C",
        "text": "共集电极放大器"
      },
      {
        "letter": "D",
        "text": "共栅极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1150",
    "image": "LK0734.jpg"
  },
  {
    "id": "Q1058",
    "originalId": "LK0735",
    "text": "图中的电路为：",
    "options": [
      {
        "letter": "A",
        "text": "共发射极放大器"
      },
      {
        "letter": "B",
        "text": "共集电极放大器"
      },
      {
        "letter": "C",
        "text": "共基极放大器"
      },
      {
        "letter": "D",
        "text": "共源极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1151",
    "image": "LK0735.jpg"
  },
  {
    "id": "Q1059",
    "originalId": "LK0736",
    "text": "图中的电路为：",
    "options": [
      {
        "letter": "A",
        "text": "共集电极放大器"
      },
      {
        "letter": "B",
        "text": "共发射极放大器"
      },
      {
        "letter": "C",
        "text": "共基极放大器"
      },
      {
        "letter": "D",
        "text": "共漏极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1152",
    "image": "LK0736.jpg"
  },
  {
    "id": "Q1060",
    "originalId": "LK0740",
    "text": "在下面的三极管放大电路中，Rc 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "负载电阻；将集电极电流转换为输出的信号电压"
      },
      {
        "letter": "B",
        "text": "发射极负反馈电阻；稳定直流工作点"
      },
      {
        "letter": "C",
        "text": "偏流电阻；为晶体管提供偏置电流以使电路获得适当的工作点"
      },
      {
        "letter": "D",
        "text": "集电极负反馈电阻；提供负反馈，减少信号失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1153",
    "image": "LK0740.jpg"
  },
  {
    "id": "Q1061",
    "originalId": "LK0741",
    "text": "在下面的三极管放大电路中，Re 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "发射极负反馈电阻；稳定直流工作点"
      },
      {
        "letter": "B",
        "text": "负载电阻；将集电极电流转换为输出的信号电压"
      },
      {
        "letter": "C",
        "text": "集电极负反馈电阻；提供负反馈，减少信号失真"
      },
      {
        "letter": "D",
        "text": "偏流电阻；为晶体管提供偏置电流以使电路获得适当的工作点"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1154",
    "image": "LK0741.jpg"
  },
  {
    "id": "Q1062",
    "originalId": "LK0742",
    "text": "在下面的三极管放大电路中，Rb1 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "偏流电阻；为晶体管提供偏置电流以使电路获得适当的工作点"
      },
      {
        "letter": "B",
        "text": "负载电阻；将集电极电流转换为输出的信号电压"
      },
      {
        "letter": "C",
        "text": "发射极负反馈电阻；稳定直流工作点"
      },
      {
        "letter": "D",
        "text": "基极负反馈电阻；提供负反馈，减少信号失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1155",
    "image": "LK0742.jpg"
  },
  {
    "id": "Q1063",
    "originalId": "LK0743",
    "text": "在下面的三极管放大电路中，Cb 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "输入耦合（或隔直流）电容；使输入交流信号进入放大器但隔断直流分量"
      },
      {
        "letter": "B",
        "text": "输出耦合（或隔直流）电容；使输出交流信号顺利输出但隔断直流分量"
      },
      {
        "letter": "C",
        "text": "旁路电容；使发射极交流信号顺利通过，避免在 Re 造成压降，形成负反馈"
      },
      {
        "letter": "D",
        "text": "负反馈电容；提供负反馈，减少信号失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1156",
    "image": "LK0743.jpg"
  },
  {
    "id": "Q1064",
    "originalId": "LK0744",
    "text": "在下面的三极管放大电路中，Ce 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "旁路电容；使发射极交流信号顺利通过，避免在 Re 造成压降，形成负反馈"
      },
      {
        "letter": "B",
        "text": "输入耦合（或隔直流）电容；使输入交流信号进入放大器但隔断直流分量"
      },
      {
        "letter": "C",
        "text": "输出耦合（或隔直流）电容；使输出交流信号顺利输出但隔断直流分量"
      },
      {
        "letter": "D",
        "text": "负反馈电容；提供负反馈，减少信号失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1157",
    "image": "LK0744.jpg"
  },
  {
    "id": "Q1065",
    "originalId": "LK0745",
    "text": "在下面的三极管放大电路中，Cc 的常用名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "输出耦合（或隔直流）电容；使输出交流信号顺利输出但隔断直流分量"
      },
      {
        "letter": "B",
        "text": "输入耦合（或隔直流）电容；使输入交流信号进入放大器但隔断直流分量"
      },
      {
        "letter": "C",
        "text": "旁路电容；使发射极交流信号顺利通过，避免在 Re 造成压降，形成负反馈"
      },
      {
        "letter": "D",
        "text": "负反馈电容；提供负反馈，减少信号失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1158",
    "image": "LK0745.jpg"
  },
  {
    "id": "Q1066",
    "originalId": "LK0594",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "低通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "高通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1159",
    "image": "LK0594.jpg"
  },
  {
    "id": "Q1067",
    "originalId": "LK0595",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "低通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "高通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1160",
    "image": "LK0595.jpg"
  },
  {
    "id": "Q1068",
    "originalId": "LK0596",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "低通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "高通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1161",
    "image": "LK0596.jpg"
  },
  {
    "id": "Q1069",
    "originalId": "LK0597",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "低通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "高通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1162",
    "image": "LK0597.jpg"
  },
  {
    "id": "Q1070",
    "originalId": "LK0598",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "低通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "高通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1163",
    "image": "LK0598.jpg"
  },
  {
    "id": "Q1071",
    "originalId": "LK0599",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "高通滤波"
      },
      {
        "letter": "B",
        "text": "低通滤波"
      },
      {
        "letter": "C",
        "text": "带通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1164",
    "image": "LK0599.jpg"
  },
  {
    "id": "Q1072",
    "originalId": "LK0600",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "高通滤波"
      },
      {
        "letter": "B",
        "text": "低通滤波"
      },
      {
        "letter": "C",
        "text": "带通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1165",
    "image": "LK0600.jpg"
  },
  {
    "id": "Q1073",
    "originalId": "LK0601",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "高通滤波"
      },
      {
        "letter": "B",
        "text": "低通滤波"
      },
      {
        "letter": "C",
        "text": "带通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1166",
    "image": "LK0601.jpg"
  },
  {
    "id": "Q1074",
    "originalId": "LK0602",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "高通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "低通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1167",
    "image": "LK0602.jpg"
  },
  {
    "id": "Q1075",
    "originalId": "LK0603",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "高通滤波"
      },
      {
        "letter": "B",
        "text": "带通滤波"
      },
      {
        "letter": "C",
        "text": "低通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1168",
    "image": "LK0603.jpg"
  },
  {
    "id": "Q1076",
    "originalId": "LK0604",
    "text": "下列电路具备的功能是：",
    "options": [
      {
        "letter": "A",
        "text": "带通滤波"
      },
      {
        "letter": "B",
        "text": "高通滤波"
      },
      {
        "letter": "C",
        "text": "低通滤波"
      },
      {
        "letter": "D",
        "text": "过流保护"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1169",
    "image": "LK0604.jpg"
  },
  {
    "id": "Q1077",
    "originalId": "LK0605",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "电感耦合式振荡器"
      },
      {
        "letter": "B",
        "text": "电容三点式振荡器"
      },
      {
        "letter": "C",
        "text": "电感三点式振荡器"
      },
      {
        "letter": "D",
        "text": "RC 反馈式振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1170",
    "image": "LK0605.jpg"
  },
  {
    "id": "Q1078",
    "originalId": "LK0606",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "电感三点式振荡器"
      },
      {
        "letter": "B",
        "text": "电容三点式振荡器"
      },
      {
        "letter": "C",
        "text": "电感反馈式振荡器"
      },
      {
        "letter": "D",
        "text": "RC 反馈式振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1171",
    "image": "LK0606.jpg"
  },
  {
    "id": "Q1079",
    "originalId": "LK0607",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "电容三点式振荡器"
      },
      {
        "letter": "B",
        "text": "RC 反馈式振荡器"
      },
      {
        "letter": "C",
        "text": "电感三点式振荡器"
      },
      {
        "letter": "D",
        "text": "电感反馈式振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1172",
    "image": "LK0607.jpg"
  },
  {
    "id": "Q1080",
    "originalId": "LK0608",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "RC 反馈式振荡器"
      },
      {
        "letter": "B",
        "text": "电容三点式振荡器"
      },
      {
        "letter": "C",
        "text": "电感三点式振荡器"
      },
      {
        "letter": "D",
        "text": "电感反馈式振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1173",
    "image": "LK0608.jpg"
  },
  {
    "id": "Q1081",
    "originalId": "LK0609",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "电容三点式振荡器"
      },
      {
        "letter": "B",
        "text": "电感反馈式振荡器"
      },
      {
        "letter": "C",
        "text": "电感三点式振荡器"
      },
      {
        "letter": "D",
        "text": "RC 反馈式振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1174",
    "image": "LK0609.jpg"
  },
  {
    "id": "Q1082",
    "originalId": "LK0610",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "二极管半波整流器"
      },
      {
        "letter": "B",
        "text": "二极管全波整流器"
      },
      {
        "letter": "C",
        "text": "二极管桥式整流器"
      },
      {
        "letter": "D",
        "text": "二极管环形调制器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1175",
    "image": "LK0610.jpg"
  },
  {
    "id": "Q1083",
    "originalId": "LK0611",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "二极管桥式整流器"
      },
      {
        "letter": "B",
        "text": "二极管全波整流器"
      },
      {
        "letter": "C",
        "text": "二极管半波整流器"
      },
      {
        "letter": "D",
        "text": "二极管环形调制器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1176",
    "image": "LK0611.jpg"
  },
  {
    "id": "Q1084",
    "originalId": "LK0612",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "二极管全波整流器"
      },
      {
        "letter": "B",
        "text": "二极管半波整流器"
      },
      {
        "letter": "C",
        "text": "二极管桥式整流器"
      },
      {
        "letter": "D",
        "text": "二极管环形调制器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1177",
    "image": "LK0612.jpg"
  },
  {
    "id": "Q1085",
    "originalId": "LK0613",
    "text": "下列电路是一个：",
    "options": [
      {
        "letter": "A",
        "text": "二极管环形调制器"
      },
      {
        "letter": "B",
        "text": "二极管全波整流器"
      },
      {
        "letter": "C",
        "text": "二极管桥式整流器"
      },
      {
        "letter": "D",
        "text": "二极管半波整流器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.1",
    "type": "MC1-1178",
    "image": "LK0613.jpg"
  },
  {
    "id": "Q1086",
    "originalId": "LK1167",
    "text": "金属氧化物绝缘栅场效应管（MOSFET）经常用来实现只有开与关两个状态的电路。在这种电路中，术语“截止”与”饱和”是指晶体管的什么工作状态？",
    "options": [
      {
        "letter": "A",
        "text": "所加偏压不足以使该管导通，则该管处于截止状态；所加偏压使该管充分导通，继续强化偏压而导通电阻几乎不再减小的状态为饱和状态"
      },
      {
        "letter": "B",
        "text": "所加偏压不足以使该管导通，则该管处于截止状态；所加偏压使该管开始导通，继续强化偏压则导通电阻随之逐渐减小的状态为饱和状态"
      },
      {
        "letter": "C",
        "text": "加上偏压使该管导通，则该管进入饱和状态；将偏压归零，则该管处于截止状态"
      },
      {
        "letter": "D",
        "text": "偏压快速变化，以至于该管导通时的损耗大增就是所谓的饱和；反之即是截止了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1179",
    "image": ""
  },
  {
    "id": "Q1087",
    "originalId": "LK0726",
    "text": "关于场效应晶体管放大器的放大作用，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "共源极形式：栅极电压的微小变化可以引起漏极电压和电流的较大变化"
      },
      {
        "letter": "B",
        "text": "共栅极形式：源极电流的微小变化可以引起漏极电压的较大变化"
      },
      {
        "letter": "C",
        "text": "共漏极形式：栅极电压的微小变化可以引起源极电流的较大变化"
      },
      {
        "letter": "D",
        "text": "无论哪种电路形式，放大器均在输入信号足够大时自动转变为功率放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1180",
    "image": ""
  },
  {
    "id": "Q1088",
    "originalId": "LK0727",
    "text": "关于双极型晶体管放大器的放大作用，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "共发射极形式：基极电流的微小变化可以引起集电极电压和电流的较大变化"
      },
      {
        "letter": "B",
        "text": "共基极形式：发射极电流的微小变化可以引起集电极电压的较大变化"
      },
      {
        "letter": "C",
        "text": "共集电极形式：基极电流的微小变化可以引起发射极电流的较大变化"
      },
      {
        "letter": "D",
        "text": "无论哪种电路形式，放大器均在输入信号足够大时自动转变为功率放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1181",
    "image": ""
  },
  {
    "id": "Q1089",
    "originalId": "LK0737",
    "text": "对于双极型晶体管放大器，按输入阻抗由低到高可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "共基极放大器、共发射极放大器、共集电极放大器"
      },
      {
        "letter": "B",
        "text": "共发射极放大器、共集电极放大器、共基极放大器"
      },
      {
        "letter": "C",
        "text": "共集电极放大器、共发射极放大器、共基极放大器"
      },
      {
        "letter": "D",
        "text": "共集电极放大器、共基极放大器、共发射极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1182",
    "image": ""
  },
  {
    "id": "Q1090",
    "originalId": "LK0738",
    "text": "对于双极型晶体管放大器，按电流增益由低到高可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "共基极放大器、共发射极放大器、共集电极放大器"
      },
      {
        "letter": "B",
        "text": "共集电极放大器、共发射极放大器、共基极放大器"
      },
      {
        "letter": "C",
        "text": "共发射极放大器、共集电极放大器、共基极放大器"
      },
      {
        "letter": "D",
        "text": "共集电极放大器、共基极放大器、共发射极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1183",
    "image": ""
  },
  {
    "id": "Q1091",
    "originalId": "LK1017",
    "text": "对于双极型晶体管放大器，电压增益由低到高可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "共集电极放大器、共基极放大器、共发射极放大器"
      },
      {
        "letter": "B",
        "text": "共基极放大器、共发射极放大器、共集电极放大器"
      },
      {
        "letter": "C",
        "text": "共集电极放大器、共发射极放大器、共基极放大器"
      },
      {
        "letter": "D",
        "text": "共发射极放大器、共集电极放大器、共基极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1184",
    "image": ""
  },
  {
    "id": "Q1092",
    "originalId": "LK1018",
    "text": "对于双极型晶体管放大器，输出阻抗由低到高可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "共集电极放大器、共发射极放大器、共基极放大器"
      },
      {
        "letter": "B",
        "text": "共集电极放大器、共基极放大器、共发射极放大器"
      },
      {
        "letter": "C",
        "text": "共基极放大器、共发射极放大器、共集电极放大器"
      },
      {
        "letter": "D",
        "text": "共发射极放大器、共集电极放大器、共基极放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1185",
    "image": ""
  },
  {
    "id": "Q1093",
    "originalId": "LK1019",
    "text": "在双极型晶体管放大电路中，常被称为射极跟随器的是：",
    "options": [
      {
        "letter": "A",
        "text": "共集电极放大电路"
      },
      {
        "letter": "B",
        "text": "共发射极放大电路"
      },
      {
        "letter": "C",
        "text": "共基极放大电路"
      },
      {
        "letter": "D",
        "text": "带有正反馈的共发射极放大电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1186",
    "image": ""
  },
  {
    "id": "Q1094",
    "originalId": "LK0725",
    "text": "关于电子三极管放大器的放大作用，以下说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "共阴极形式：栅极电压的微小变化可以引起屏极电压和电流的较大变化"
      },
      {
        "letter": "B",
        "text": "共栅极形式：阴极电流的微小变化可以引起屏极电压的较大变化"
      },
      {
        "letter": "C",
        "text": "共屏极形式：栅极电压的微小变化可以引起阴极电流的较大变化"
      },
      {
        "letter": "D",
        "text": "无论哪种电路形式，放大器均在输入信号足够大时自动转变为功率放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1187",
    "image": ""
  },
  {
    "id": "Q1095",
    "originalId": "LK0732",
    "text": "小信号放大器是指：",
    "options": [
      {
        "letter": "A",
        "text": "工作点始终处于线性工作区的放大器"
      },
      {
        "letter": "B",
        "text": "输出信号的峰-峰值始终小于 10 伏的放大器"
      },
      {
        "letter": "C",
        "text": "输入信号的峰-峰值始终小于 10 毫伏的放大器"
      },
      {
        "letter": "D",
        "text": "增益不超过 30dB 的放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1188",
    "image": ""
  },
  {
    "id": "Q1096",
    "originalId": "LK0733",
    "text": "大信号放大器是指：",
    "options": [
      {
        "letter": "A",
        "text": "工作点可以超出线性工作区的放大器"
      },
      {
        "letter": "B",
        "text": "输出信号的峰-峰值大于 10 伏的放大器"
      },
      {
        "letter": "C",
        "text": "输入信号的峰-峰值大于 10 毫伏的放大器"
      },
      {
        "letter": "D",
        "text": "增益超过 30dB 的放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1189",
    "image": ""
  },
  {
    "id": "Q1097",
    "originalId": "LK1020",
    "text": "下列放大器中，电源效率最低的是：",
    "options": [
      {
        "letter": "A",
        "text": "甲类放大器"
      },
      {
        "letter": "B",
        "text": "乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "甲乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1190",
    "image": ""
  },
  {
    "id": "Q1098",
    "originalId": "LK1021",
    "text": "下列放大器中，电源效率最高的是：",
    "options": [
      {
        "letter": "A",
        "text": "丙类放大器"
      },
      {
        "letter": "B",
        "text": "甲类放大器"
      },
      {
        "letter": "C",
        "text": "乙类放大器"
      },
      {
        "letter": "D",
        "text": "甲乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1191",
    "image": ""
  },
  {
    "id": "Q1099",
    "originalId": "LK1022",
    "text": "下列放大器中，波形失真最小的是：",
    "options": [
      {
        "letter": "A",
        "text": "甲类放大器"
      },
      {
        "letter": "B",
        "text": "乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "甲乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1192",
    "image": ""
  },
  {
    "id": "Q1100",
    "originalId": "LK1023",
    "text": "下列放大器中，波形失真最大的是：",
    "options": [
      {
        "letter": "A",
        "text": "丙类放大器"
      },
      {
        "letter": "B",
        "text": "甲类放大器"
      },
      {
        "letter": "C",
        "text": "乙类放大器"
      },
      {
        "letter": "D",
        "text": "甲乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1193",
    "image": ""
  },
  {
    "id": "Q1101",
    "originalId": "LK1024",
    "text": "下列放大器中，适宜用作音频功率放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "甲乙类放大器"
      },
      {
        "letter": "B",
        "text": "丙类放大器"
      },
      {
        "letter": "C",
        "text": "甲类放大器"
      },
      {
        "letter": "D",
        "text": "乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1194",
    "image": ""
  },
  {
    "id": "Q1102",
    "originalId": "LK1025",
    "text": "下列放大器中，适宜用作音频小信号放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "甲类放大器"
      },
      {
        "letter": "B",
        "text": "甲乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "乙类放大器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1195",
    "image": ""
  },
  {
    "id": "Q1103",
    "originalId": "LK1026",
    "text": "下列放大器中，适宜用作 CW 射频功率放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "接近乙类偏置的甲乙类放大器"
      },
      {
        "letter": "B",
        "text": "接近甲类偏置的甲乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "丁类放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1196",
    "image": ""
  },
  {
    "id": "Q1104",
    "originalId": "LK1027",
    "text": "下列放大器中，适宜用作 FM 射频功率放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "接近乙类的甲乙类放大器"
      },
      {
        "letter": "B",
        "text": "接近甲类的甲乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "甲类放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1197",
    "image": ""
  },
  {
    "id": "Q1105",
    "originalId": "LK1028",
    "text": "下列放大器电路中，适宜用作 SSB 射频功率放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "接近乙类偏置的甲乙类放大器"
      },
      {
        "letter": "B",
        "text": "接近甲类偏置的甲乙类放大器"
      },
      {
        "letter": "C",
        "text": "丙类放大器"
      },
      {
        "letter": "D",
        "text": "丁类放大器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1198",
    "image": ""
  },
  {
    "id": "Q1106",
    "originalId": "LK0748",
    "text": "业余无线电爱好者常把放大器分为 A、B、C、D 等类别。在电路理论中，这些序号对应甲、乙、丙、丁四类放大器。放大器的分类与电路中有源器件在输入信号一个完整周期内的导通角度和导通程度有关，具体为：",
    "options": [
      {
        "letter": "A",
        "text": "对于 A 类放大器，器件在整个信号周期内导通，既不截止，也不饱和"
      },
      {
        "letter": "B",
        "text": "对于 B 类放大器，器件恰好在半个信号周期内导通，但是永不饱和"
      },
      {
        "letter": "C",
        "text": "对于 C 类放大器，器件的导通角度小于半个信号周期，并且器件在信号峰值时饱和工作"
      },
      {
        "letter": "D",
        "text": "对于 D 类放大器，器件的导通角度至多半个信号周期，并且器件始终线性工作"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1199",
    "image": ""
  },
  {
    "id": "Q1107",
    "originalId": "LK0749",
    "text": "A、B、C、D 四类放大器中的某些类型可用来线性放大音频信号。以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "对于 A 类放大器，使用一支晶体管即可完整放大信号的正、负半周"
      },
      {
        "letter": "B",
        "text": "对于 B 类放大器，使用二支晶体管推挽工作就可以分别放大信号的正、负半周"
      },
      {
        "letter": "C",
        "text": "对于 C 类放大器，可用一支晶体管放大信号的部分周期，之后再找回丢失的信息"
      },
      {
        "letter": "D",
        "text": "对于 D 类放大器，可用二支晶体管组成图腾柱，线性放大信号的正、负半周"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1200",
    "image": ""
  },
  {
    "id": "Q1108",
    "originalId": "LK0750",
    "text": "A、B、C、D 四类放大器都可以用来放大射频信号。关于此结论，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "A 类和 B 类放大器可以线性放大输入信号，所以适合放大所有类型的射频信号"
      },
      {
        "letter": "B",
        "text": "C 类和 D 类放大器损失信号的幅度信息，所以仅适合放大振幅不变的射频信号"
      },
      {
        "letter": "C",
        "text": "A 类和 B 类放大器只能放大线性信号，不能放大通过非线性电路产生的信号"
      },
      {
        "letter": "D",
        "text": "C 类和 D 类放大器只能放大非线性信号，不能放大通过线性电路生成的信号"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1201",
    "image": ""
  },
  {
    "id": "Q1109",
    "originalId": "LK0751",
    "text": "业余无线电爱好者经常将 AB 类放大器用作射频功率放大器。其特点是：",
    "options": [
      {
        "letter": "A",
        "text": "这种放大器稍有静态偏置电流，器件的导通角度也略大于半个信号周期"
      },
      {
        "letter": "B",
        "text": "AB 类放大器是对 B 类的改进。实际应用时失真低于 B 类，效率优于 A 类"
      },
      {
        "letter": "C",
        "text": "尽管这种放大器存在一定的静态偏置电流，但是器件的通角仍然维持 180°"
      },
      {
        "letter": "D",
        "text": "这种放大器不能用于 FM，其导致信号出现多对边带，载波还会时而消失"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1202",
    "image": ""
  },
  {
    "id": "Q1110",
    "originalId": "LK0752",
    "text": "尽管单管工作的 B 类或 AB 类放大器存在波形失真，会产生谐波，甚至存在一定程度的高阶互调，却可以用作发射机的末级放大器。我们对该问题的理解是：",
    "options": [
      {
        "letter": "A",
        "text": "放大器产生的谐波须经选频网络滤除，以确保谐波抑制满足法规要求"
      },
      {
        "letter": "B",
        "text": "放大器的高阶互调导致工作频率周边的杂散。若有，需用负反馈解决"
      },
      {
        "letter": "C",
        "text": "射频放大器的谐波可用发射天线滤除，无需特别关注"
      },
      {
        "letter": "D",
        "text": "射频放大器的高阶互调，如不严重也可以打个马虎眼"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1203",
    "image": ""
  },
  {
    "id": "Q1111",
    "originalId": "LK0753",
    "text": "若将 A、B、C、D 四类放大器输出波形的失真程度由小到大排列，则以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "A、B、C、D"
      },
      {
        "letter": "B",
        "text": "D、C、B、A"
      },
      {
        "letter": "C",
        "text": "A、C、B、D"
      },
      {
        "letter": "D",
        "text": "B、A、D、C"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1204",
    "image": ""
  },
  {
    "id": "Q1112",
    "originalId": "LK0754",
    "text": "若将 A、B、C、D 四类放大器用作射频功率放大，则按电源效率由高到低可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "D、C、B、A"
      },
      {
        "letter": "B",
        "text": "A、B、C、D"
      },
      {
        "letter": "C",
        "text": "D、C、A、B"
      },
      {
        "letter": "D",
        "text": "B、A、D、C"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1205",
    "image": ""
  },
  {
    "id": "Q1113",
    "originalId": "LK0755",
    "text": "为什么 B 类或 AB 类音频放大器需要推挽工作，而相同类别的线性射频放大器却可以单管工作？",
    "options": [
      {
        "letter": "A",
        "text": "常见射频信号的相对带宽显著小于 100%，波形中的缺失部分可用选频网络还原"
      },
      {
        "letter": "B",
        "text": "如果待放大音频信号是窄带的，比如 1kHz±100Hz，带选频的单管放大同样可行"
      },
      {
        "letter": "C",
        "text": "射频信号不在意失真与否，功率够劲就好。音频信号如有失真，那是不可接受的"
      },
      {
        "letter": "D",
        "text": "这显然是误解了放大器的类型。单管射频放大器必是甲类偏置的，否则肯定失真"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1206",
    "image": ""
  },
  {
    "id": "Q1114",
    "originalId": "LK0756",
    "text": "在 A、B、C、D 四类放大器中，可以用作 10kHz 至 60MHz 宽带射频信号单管线性功率放大器的类别有：（不考虑电源效率）",
    "options": [
      {
        "letter": "A",
        "text": "A"
      },
      {
        "letter": "B",
        "text": "B"
      },
      {
        "letter": "C",
        "text": "C"
      },
      {
        "letter": "D",
        "text": "D"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1207",
    "image": ""
  },
  {
    "id": "Q1115",
    "originalId": "LK0757",
    "text": "在 A、B、C、D 四类放大器中，可以用作对讲机的 FM 射频功率放大器的全部类别有：（不考虑电源效率）",
    "options": [
      {
        "letter": "A",
        "text": "A、B、C、D"
      },
      {
        "letter": "B",
        "text": "A、B、C"
      },
      {
        "letter": "C",
        "text": "A、B、D"
      },
      {
        "letter": "D",
        "text": "A"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1208",
    "image": ""
  },
  {
    "id": "Q1116",
    "originalId": "LK0758",
    "text": "在 A、B、C、D 四类放大器中，可以用作 CW 射频功率放大器的全部类别有：（不考虑电源效率；假定以 K=5 来确定 CW 信号的必要带宽）",
    "options": [
      {
        "letter": "A",
        "text": "A、B"
      },
      {
        "letter": "B",
        "text": "A、B、C"
      },
      {
        "letter": "C",
        "text": "A、B、D"
      },
      {
        "letter": "D",
        "text": "A、B、C、D"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1209",
    "image": ""
  },
  {
    "id": "Q1117",
    "originalId": "LK0759",
    "text": "在 A、B、C、D 四类放大器中，适宜用作小信号放大器的是：",
    "options": [
      {
        "letter": "A",
        "text": "A"
      },
      {
        "letter": "B",
        "text": "B"
      },
      {
        "letter": "C",
        "text": "C"
      },
      {
        "letter": "D",
        "text": "D"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1210",
    "image": ""
  },
  {
    "id": "Q1118",
    "originalId": "LK0760",
    "text": "在 A、B、C、D 四类放大器中，属于大信号放大器的全部类别有：",
    "options": [
      {
        "letter": "A",
        "text": "B、C、D"
      },
      {
        "letter": "B",
        "text": "A、B、C、D"
      },
      {
        "letter": "C",
        "text": "A、C、D"
      },
      {
        "letter": "D",
        "text": "C、D"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1211",
    "image": ""
  },
  {
    "id": "Q1119",
    "originalId": "LK0762",
    "text": "很多业余无线电设备中的音频功率放大电路采用两个串联的输出功率管，分别负责音频信号正、负半周的放大。这种电路的典型名称和作用是：",
    "options": [
      {
        "letter": "A",
        "text": "推挽放大电路，实现极小静态偏置电流的高电源效率的线性功率放大"
      },
      {
        "letter": "B",
        "text": "双管串联电路，得到双倍的输出电流和输出功率"
      },
      {
        "letter": "C",
        "text": "双管串联电路，得到较高的输出阻抗以改善其与负载之间的阻抗匹配"
      },
      {
        "letter": "D",
        "text": "双管串联电路，得到较高的输入阻抗以改善其与前级之间的阻抗匹配"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1212",
    "image": ""
  },
  {
    "id": "Q1120",
    "originalId": "LK0739",
    "text": "工作在 HF 频段的电子管线性放大器多采用共栅极电路形式。这种电路的优点是：",
    "options": [
      {
        "letter": "A",
        "text": "输入阻抗低，易于与上级电路相匹配。输入匹配网络因此得到简化或宽带化"
      },
      {
        "letter": "B",
        "text": "栅极接地阻断了屏极与阴极间的电容耦合。放大器工作更为稳定，不易自激"
      },
      {
        "letter": "C",
        "text": "共栅极放大形式使电路的电压放大倍数最大化"
      },
      {
        "letter": "D",
        "text": "共栅极放大形式使电路的非线性失真最小化"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1213",
    "image": ""
  },
  {
    "id": "Q1121",
    "originalId": "LK0761",
    "text": "有时，业余无线电爱好者使用两支并联的功率管制作射频线性放大器的末级或末前级电路。这是为了：",
    "options": [
      {
        "letter": "A",
        "text": "双管并联，获得双倍的输出电流和输出功率"
      },
      {
        "letter": "B",
        "text": "构成推挽电路，减小输出波形的失真"
      },
      {
        "letter": "C",
        "text": "双管并联，得到双倍的器件耐压，减小损坏几率"
      },
      {
        "letter": "D",
        "text": "双管并联，使各功率管的失真互相抵消，降低杂散发射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1214",
    "image": ""
  },
  {
    "id": "Q1122",
    "originalId": "LK0763",
    "text": "放大器的负反馈是指这样的电路：",
    "options": [
      {
        "letter": "A",
        "text": "将放大器输出信号的一部分回输到放大器的输入端，起到抵消输入信号的作用"
      },
      {
        "letter": "B",
        "text": "将放大器输出信号的一部分回输到放大器的输入端，起到加强输入信号的作用"
      },
      {
        "letter": "C",
        "text": "将放大器输入信号的一部分直通到放大器的输出端，起到抵消输出信号的作用"
      },
      {
        "letter": "D",
        "text": "将放大器输入信号的一部分直通到放大器的输出端，起到加强输出信号的作用"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1215",
    "image": ""
  },
  {
    "id": "Q1123",
    "originalId": "LK0764",
    "text": "业余无线电设备的放大器设计大量采用负反馈技术。负反馈放大器的特点是：",
    "options": [
      {
        "letter": "A",
        "text": "失真小，工作稳定，但增益也有所减小"
      },
      {
        "letter": "B",
        "text": "输入、输出阻抗易于控制，与源和负载更易匹配"
      },
      {
        "letter": "C",
        "text": "工作带宽得以扩展，更利于实现宽带放大"
      },
      {
        "letter": "D",
        "text": "偶次谐波等元素增加，更加适合音频放大"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.2",
    "type": "MC3-1216",
    "image": ""
  },
  {
    "id": "Q1124",
    "originalId": "LK0538",
    "text": "从能量转换的观点看，电路与负载之间的“匹配”具有如下含义：",
    "options": [
      {
        "letter": "A",
        "text": "电路和负载的电抗相互抵消"
      },
      {
        "letter": "B",
        "text": "负载的电阻大小与电路所需的最优负载值一致"
      },
      {
        "letter": "C",
        "text": "使得电路工作在恒流状态下"
      },
      {
        "letter": "D",
        "text": "使得电路工作在恒定电压下"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.2",
    "type": "MC2-1217",
    "image": ""
  },
  {
    "id": "Q1125",
    "originalId": "LK0539",
    "text": "具有恒定内阻的信号源与负载达成阻抗“匹配”时，信号源内阻所消耗的功率：",
    "options": [
      {
        "letter": "A",
        "text": "与负载所得到的输出功率相等"
      },
      {
        "letter": "B",
        "text": "是负载所得的输出功率的一半"
      },
      {
        "letter": "C",
        "text": "对于优质信号源，这样的损耗实际为零"
      },
      {
        "letter": "D",
        "text": "这个命题仅适用于直流电路，不适用于交流输出的信号源"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.2",
    "type": "MC1-1218",
    "image": ""
  },
  {
    "id": "Q1126",
    "originalId": "LK0570",
    "text": "电路的“非线性失真”是指该电路的输出信号与输入信号相比发生了下列改变：",
    "options": [
      {
        "letter": "A",
        "text": "产生了新的频率分量"
      },
      {
        "letter": "B",
        "text": "各频率分量的比例发生了改变"
      },
      {
        "letter": "C",
        "text": "信号的幅度发生了改变"
      },
      {
        "letter": "D",
        "text": "不同频率分量的相位延迟发生了改变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1219",
    "image": ""
  },
  {
    "id": "Q1127",
    "originalId": "LK0586",
    "text": "有源器件可将输入的单频信号变换为波形偏离正弦或余弦形状的复杂周期信号，从而生成谐波等全新频率成分。这是一种非线性变换。下面哪些场景包含这种变换？",
    "options": [
      {
        "letter": "A",
        "text": "二极管检波电路输出信号的大小正比于输入射频信号的幅度"
      },
      {
        "letter": "B",
        "text": "二极管环形调制器利用输入音频信号线性改变本振信号的振幅"
      },
      {
        "letter": "C",
        "text": "二极管整流电路将输入交流电转换为与之相应的脉动直流电"
      },
      {
        "letter": "D",
        "text": "流过发光二极管（LED）的正向电流与限流电阻的阻值成反比"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.3",
    "type": "MC3-1220",
    "image": ""
  },
  {
    "id": "Q1128",
    "originalId": "LK0533",
    "text": "频率为 f 的正弦或余弦信号与频率为 f 的复杂周期信号在频谱上有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "前者为频率为 f 的单一频率分量；后者为频率为 f 整数倍的多个频率分量"
      },
      {
        "letter": "B",
        "text": "前者为频率为 f 的单一频率分量；后者为频率为 f 分数倍的多个频率分量"
      },
      {
        "letter": "C",
        "text": "前者为频率为 f 奇数倍的多个频率分量；后者为频率为 f 偶数倍的多个频率分量"
      },
      {
        "letter": "D",
        "text": "前者为连续频率分量；后者为离散频率分量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1221",
    "image": ""
  },
  {
    "id": "Q1129",
    "originalId": "LK0534",
    "text": "单个无限窄脉冲的频谱特征是：",
    "options": [
      {
        "letter": "A",
        "text": "均匀分布的连续频率分量"
      },
      {
        "letter": "B",
        "text": "梳状分布的离散频率分量"
      },
      {
        "letter": "C",
        "text": "单一的减幅振荡波形"
      },
      {
        "letter": "D",
        "text": "幅度非零的直流分量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1222",
    "image": ""
  },
  {
    "id": "Q1130",
    "originalId": "LK0535",
    "text": "只包含一个频率分量的信号是：",
    "options": [
      {
        "letter": "A",
        "text": "该频率的简谐信号"
      },
      {
        "letter": "B",
        "text": "该频率的对称方波"
      },
      {
        "letter": "C",
        "text": "该频率的减幅振荡脉冲"
      },
      {
        "letter": "D",
        "text": "该频率的无限窄脉冲串"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1223",
    "image": ""
  },
  {
    "id": "Q1131",
    "originalId": "LK0536",
    "text": "在整个频谱空间中具有均匀分布的连续频率分量的信号是：",
    "options": [
      {
        "letter": "A",
        "text": "单个无限窄脉冲"
      },
      {
        "letter": "B",
        "text": "任意频率的正弦或余弦信号"
      },
      {
        "letter": "C",
        "text": "任意频率的对称方波"
      },
      {
        "letter": "D",
        "text": "任意频率的减幅振荡脉冲"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1224",
    "image": ""
  },
  {
    "id": "Q1132",
    "originalId": "LK0654",
    "text": "某业余电台在发射单边带语音信号时，设备近旁连接至某电路的一副耳机传出了模糊不清的语音。这个电路具备哪种功能？",
    "options": [
      {
        "letter": "A",
        "text": "检波"
      },
      {
        "letter": "B",
        "text": "差拍"
      },
      {
        "letter": "C",
        "text": "变频"
      },
      {
        "letter": "D",
        "text": "振荡"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1225",
    "image": ""
  },
  {
    "id": "Q1133",
    "originalId": "LK0655",
    "text": "某业余电台发射等辐电报时，设备近旁连接至某电路的一副耳机传出了“嘟嘟”的音频电码声。这个电路具备哪种功能？",
    "options": [
      {
        "letter": "A",
        "text": "差拍"
      },
      {
        "letter": "B",
        "text": "检波"
      },
      {
        "letter": "C",
        "text": "变频"
      },
      {
        "letter": "D",
        "text": "振荡"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1226",
    "image": ""
  },
  {
    "id": "Q1134",
    "originalId": "LK0656",
    "text": "爱好者小强实验某个电路。接通电源时，近旁的收信机收到了类似鸟鸣的声音。断开电源，鸟鸣消失。小强的电路具备哪种功能？",
    "options": [
      {
        "letter": "A",
        "text": "振荡"
      },
      {
        "letter": "B",
        "text": "差拍"
      },
      {
        "letter": "C",
        "text": "检波"
      },
      {
        "letter": "D",
        "text": "变频"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1227",
    "image": ""
  },
  {
    "id": "Q1135",
    "originalId": "LK0705",
    "text": "频率为 f1、f2 的两个信号流经同一个非线性元件会彼此互调，其中的三阶互调产物可能成为收信机中的假信号或发信机输出的一种杂散。三阶互调产物的频率可以计算为：",
    "options": [
      {
        "letter": "A",
        "text": "2f1±f2、2f2±f1"
      },
      {
        "letter": "B",
        "text": "2f1、3f1、2f2、3f2"
      },
      {
        "letter": "C",
        "text": "f1±f2、2f1±2f2、3f1±3f2"
      },
      {
        "letter": "D",
        "text": "4f1±f2、5f1±2f2、6f1±3f2……"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1228",
    "image": ""
  },
  {
    "id": "Q1136",
    "originalId": "LK0706",
    "text": "术语“差拍”是指一种现象：",
    "options": [
      {
        "letter": "A",
        "text": "两个不同频率的信号通过非线性电路之后得到频率为两者之差的一个新信号"
      },
      {
        "letter": "B",
        "text": "差拍、混频和二阶互调均指这一现象。称谓分开是因为应用场景不同"
      },
      {
        "letter": "C",
        "text": "凡是接收机收到的连续音频叫声都是“差拍”"
      },
      {
        "letter": "D",
        "text": "一个单频信号经过非线性电路得到一系列谐波信号，相邻信号的频率间隔等于单频信号的频率。这样的一簇谐波总称“差拍”"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.3",
    "type": "MC2-1229",
    "image": ""
  },
  {
    "id": "Q1137",
    "originalId": "LK0707",
    "text": "业余无线电爱好者常用倍频器获取输入信号整倍频率的输出信号。倍频器的工作原理为：",
    "options": [
      {
        "letter": "A",
        "text": "利用有源器件的非线性使输入信号产生谐波，再用谐振电路选出所需倍频分量"
      },
      {
        "letter": "B",
        "text": "利用线性放大器产生输入信号的系列谐波，再用谐振电路选出所需的某次倍频"
      },
      {
        "letter": "C",
        "text": "将 LC 谐振电路调谐到输入信号的某个谐波频率上，所得输出既为倍频信号"
      },
      {
        "letter": "D",
        "text": "利用标称频率等于倍频的石英晶体谐振器组成振荡器，所得输出就是倍频信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1230",
    "image": ""
  },
  {
    "id": "Q1138",
    "originalId": "LK1015",
    "text": "正弦交流信号通过下列哪些电路时会产生高次谐波？",
    "options": [
      {
        "letter": "A",
        "text": "二极管整流器"
      },
      {
        "letter": "B",
        "text": "二极管检波器"
      },
      {
        "letter": "C",
        "text": "二极管环形调制器"
      },
      {
        "letter": "D",
        "text": "调谐在信号整倍频率上的选频网络"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.3",
    "type": "MC3-1231",
    "image": ""
  },
  {
    "id": "Q1139",
    "originalId": "LK1050",
    "text": "在下列调制方式中，已调信号的振幅恒定不变的是：",
    "options": [
      {
        "letter": "A",
        "text": "频移键控 FSK"
      },
      {
        "letter": "B",
        "text": "频率调制 FM"
      },
      {
        "letter": "C",
        "text": "相位调制 PM"
      },
      {
        "letter": "D",
        "text": "相移键控 PSK"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.4.3",
    "type": "MC4-1232",
    "image": ""
  },
  {
    "id": "Q1140",
    "originalId": "LK1052",
    "text": "在下列调制方式中，施加特定频率和特定幅度的调制信号可使载波分量消失的是：",
    "options": [
      {
        "letter": "A",
        "text": "频率调制 FM"
      },
      {
        "letter": "B",
        "text": "相位调制 PM"
      },
      {
        "letter": "C",
        "text": "抑制载波单边带幅度调制 SSB"
      },
      {
        "letter": "D",
        "text": "开关键控 OOK"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.3",
    "type": "MC2-1233",
    "image": ""
  },
  {
    "id": "Q1141",
    "originalId": "LK1053",
    "text": "在下列调制方式中，施加特定频率和特定幅度的调制信号可使某一对边带消失的是：",
    "options": [
      {
        "letter": "A",
        "text": "频率调制 FM"
      },
      {
        "letter": "B",
        "text": "相位调制 PM"
      },
      {
        "letter": "C",
        "text": "幅度调制 AM"
      },
      {
        "letter": "D",
        "text": "抑制载波双边带幅度调制 DSB"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.3",
    "type": "MC2-1234",
    "image": ""
  },
  {
    "id": "Q1142",
    "originalId": "LK1054",
    "text": "在下列调制方式中，已调信号的载波相位恒定不变的是：",
    "options": [
      {
        "letter": "A",
        "text": "幅度调制 AM"
      },
      {
        "letter": "B",
        "text": "频率调制 FM"
      },
      {
        "letter": "C",
        "text": "相移键控 PSK"
      },
      {
        "letter": "D",
        "text": "频移键控 FSK"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1235",
    "image": ""
  },
  {
    "id": "Q1143",
    "originalId": "LK1055",
    "text": "在下列调制方式中，已调信号的载波分量恒定不变的是：",
    "options": [
      {
        "letter": "A",
        "text": "幅度调制 AM"
      },
      {
        "letter": "B",
        "text": "频率调制 FM"
      },
      {
        "letter": "C",
        "text": "相移键控 PSK"
      },
      {
        "letter": "D",
        "text": "频移键控 FSK"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1236",
    "image": ""
  },
  {
    "id": "Q1144",
    "originalId": "LK1056",
    "text": "在下列调制方式中，已调信号中仅包含一组与调制信号的信息相对应的边带的是：",
    "options": [
      {
        "letter": "A",
        "text": "抑制载波单边带幅度调制 SSB"
      },
      {
        "letter": "B",
        "text": "幅度调制 AM"
      },
      {
        "letter": "C",
        "text": "等幅电报 CW"
      },
      {
        "letter": "D",
        "text": "抑制载波双边带幅度调制 DSB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1237",
    "image": ""
  },
  {
    "id": "Q1145",
    "originalId": "LK1174",
    "text": "二极管环形调制器可以用来制作乘积检波器。这种检波器的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "用来给 CW 或 SSB 信号检波"
      },
      {
        "letter": "B",
        "text": "用来给 FM 信号检波"
      },
      {
        "letter": "C",
        "text": "用来给调相信号检波"
      },
      {
        "letter": "D",
        "text": "用来将话音从背景噪声中提取出来"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1238",
    "image": ""
  },
  {
    "id": "Q1146",
    "originalId": "LK1175",
    "text": "二极管环形调制器可以用来制作超外差式接收机的混频器。这种混频器的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "将接收到的射频信号转换为中频信号"
      },
      {
        "letter": "B",
        "text": "将几个电台的信号混合在一起"
      },
      {
        "letter": "C",
        "text": "阻止中频通带以外的不必要信号"
      },
      {
        "letter": "D",
        "text": "从一些辅助设备获取电台输入，如 TNC"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1239",
    "image": ""
  },
  {
    "id": "Q1147",
    "originalId": "LX",
    "text": "二极管环形调制器可以用来制作外差式发射机的混频器。这种混频器的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "将已调中频信号转换为射频信号"
      },
      {
        "letter": "B",
        "text": "将音频基带和数字基带信号混合在一起"
      },
      {
        "letter": "C",
        "text": "阻止通带以外不必要的信号"
      },
      {
        "letter": "D",
        "text": "向一些辅助设备输出电台信号，如 TNC"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1240",
    "image": ""
  },
  {
    "id": "Q1148",
    "originalId": "LX",
    "text": "二极管环形调制器可以用来产生双边带抑制载波调幅信号。其工作原理是：",
    "options": [
      {
        "letter": "A",
        "text": "利用这种调制器的乘法性质，将载波与音频基带相乘，获得 DSB 输出"
      },
      {
        "letter": "B",
        "text": "利用这种调制器的加法性质，将载波与音频基带相叠加，获得 DSB 输出"
      },
      {
        "letter": "C",
        "text": "利用这种调制器的均方根性质，去除音频基带的极性，获得 DSB 输出"
      },
      {
        "letter": "D",
        "text": "利用这种调制器的高通滤波作用，去除音频，获得射频载波和 DSB 输出"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1241",
    "image": ""
  },
  {
    "id": "Q1149",
    "originalId": "LX",
    "text": "二极管环形调制器可以用来产生载波不受抑制的普通 AM 信号。其工作原理是：",
    "options": [
      {
        "letter": "A",
        "text": "只需为输入基带适当叠加直流分量，使基带极性不发生反转，即可获得 AM 输出"
      },
      {
        "letter": "B",
        "text": "只需在输入基带上适当叠加导频分量，使载波极性不停反转，即可获得 AM 输出"
      },
      {
        "letter": "C",
        "text": "只需增加载波的输入功率，迫使调制器的输出出现载波泄漏，即可获得 AM 输出"
      },
      {
        "letter": "D",
        "text": "只需调转调制器的输入和输出端口，即可获得 AM 输出"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1242",
    "image": ""
  },
  {
    "id": "Q1150",
    "originalId": "LK0697",
    "text": "构成振荡器的必备元素是：",
    "options": [
      {
        "letter": "A",
        "text": "放大倍数大于 1 的放大器、正反馈电路"
      },
      {
        "letter": "B",
        "text": "放大倍数大于 1 的放大器、负反馈电路"
      },
      {
        "letter": "C",
        "text": "LC 或晶体谐振电路、正反馈电路"
      },
      {
        "letter": "D",
        "text": "任意放大器、LC 或晶体谐振电路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1243",
    "image": ""
  },
  {
    "id": "Q1151",
    "originalId": "LK0687",
    "text": "在 SSB 接收机的天线端口插入一段导线，导线的另一端靠近一个晶体管 LC 振荡电路去尝试接收。振荡器通电后，所收信号的音调会从低到高或从高到低持续变化。主要原因是：",
    "options": [
      {
        "letter": "A",
        "text": "元器件通电发热使电路整体的 LC 参数不断变化，导致频率漂移"
      },
      {
        "letter": "B",
        "text": "晶体管正处在老化过程中。这种电路越用越稳定"
      },
      {
        "letter": "C",
        "text": "接收机将收到的声音回馈至电路板，为振荡器额外增添了能量"
      },
      {
        "letter": "D",
        "text": "射频能量不断对外辐射，致使电路的输出功率不断下降"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1244",
    "image": ""
  },
  {
    "id": "Q1152",
    "originalId": "LK0686",
    "text": "计量术语“ppm”经常出现在发射设备参数规格书或是业余无线电文献中。其涵义为：",
    "options": [
      {
        "letter": "A",
        "text": "“百万分之几”，描述电台设备的频率容限"
      },
      {
        "letter": "B",
        "text": "“每分钟脉冲数”，描述随机过程的观察结果"
      },
      {
        "letter": "C",
        "text": "“每分钟点数”，描述太阳黑子的发生频度"
      },
      {
        "letter": "D",
        "text": "“预防性计划维护”，描述电台设备的维护策略"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1245",
    "image": ""
  },
  {
    "id": "Q1153",
    "originalId": "LK0693",
    "text": "有时，我们会在业余收发信机的面板上或功能菜单中看到缩写为 VFO 的功能。它代表：",
    "options": [
      {
        "letter": "A",
        "text": "可变频率振荡器"
      },
      {
        "letter": "B",
        "text": "收发信机的主载波频率可以通过旋钮自由调谐"
      },
      {
        "letter": "C",
        "text": "石英晶体振荡器"
      },
      {
        "letter": "D",
        "text": "可变频率石英晶体振荡器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.3",
    "type": "MC2-1246",
    "image": ""
  },
  {
    "id": "Q1154",
    "originalId": "LK0694",
    "text": "有时，我们会在业余自制的收发信机或其电路图中看到缩写为 VXO 的功能或电路组件。它代表：",
    "options": [
      {
        "letter": "A",
        "text": "可变频率石英晶体振荡器"
      },
      {
        "letter": "B",
        "text": "可变频率振荡器"
      },
      {
        "letter": "C",
        "text": "石英晶体振荡器"
      },
      {
        "letter": "D",
        "text": "压控振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1247",
    "image": ""
  },
  {
    "id": "Q1155",
    "originalId": "LK0695",
    "text": "有时，我们会在业余无线电文献或某设备的电路图中看到缩写为 VCO 的电路。它代表：",
    "options": [
      {
        "letter": "A",
        "text": "压控振荡器"
      },
      {
        "letter": "B",
        "text": "可变频率石英晶体振荡器"
      },
      {
        "letter": "C",
        "text": "可变频率振荡器"
      },
      {
        "letter": "D",
        "text": "石英晶体振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1248",
    "image": ""
  },
  {
    "id": "Q1156",
    "originalId": "LK0696",
    "text": "有时，我们会在业余无线电文献或某设备的电路图中看到缩写为 XTAL 的元件。它代表：",
    "options": [
      {
        "letter": "A",
        "text": "石英晶体谐振器"
      },
      {
        "letter": "B",
        "text": "可变频率振荡器"
      },
      {
        "letter": "C",
        "text": "石英晶体振荡器"
      },
      {
        "letter": "D",
        "text": "压控振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1249",
    "image": ""
  },
  {
    "id": "Q1157",
    "originalId": "LK0688",
    "text": "为提升无线电设备的频率稳定度，人们研制了多种高 Q 值压电谐振元件。考虑这类元件多可做成振荡器，则下列常见振荡器按频率稳定度由低到高可以排列为：",
    "options": [
      {
        "letter": "A",
        "text": "RC 振荡器，LC 振荡器，陶瓷振子振荡器，石英声表面波振荡器，石英晶体振荡器"
      },
      {
        "letter": "B",
        "text": "LC 振荡器，RC 振荡器，陶瓷振子振荡器，石英声表面波振荡器，石英晶体振荡器"
      },
      {
        "letter": "C",
        "text": "RC 振荡器，LC 振荡器，石英声表面波振荡器，石英晶体振荡器，陶瓷振子振荡器"
      },
      {
        "letter": "D",
        "text": "RC 振荡器，陶瓷振子振荡器，LC 振荡器，石英晶体振荡器，石英声表面波振荡器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.3",
    "type": "MC1-1250",
    "image": ""
  },
  {
    "id": "Q1158",
    "originalId": "LK0692",
    "text": "关于高配置无线电通信设备的说明书中提到的 TCXO 或 OCXO，以下描述正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "TCXO 指温度补偿式晶体振荡器；OCXO 指恒温控制式晶体振荡器"
      },
      {
        "letter": "B",
        "text": "OCXO 的频率稳定度优于 TCXO"
      },
      {
        "letter": "C",
        "text": "TCXO 指中频数字信号处理部件；OCXO 指音频数字信号处理部件"
      },
      {
        "letter": "D",
        "text": "TCXO 和 OCXO 所处理的都是以复数表示的同相/正交样本序列"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.3",
    "type": "MC2-1251",
    "image": ""
  },
  {
    "id": "Q1159",
    "originalId": "LK0572",
    "text": "虽然电路中的非线性失真主要来自有源器件，但是无源滤波器中的电感或变压器在其磁芯趋于饱和时也会产生同样的失真。此外，包含多个频率分量的信号通过滤波器后还会发生线性失真。这种失真可能包括：",
    "options": [
      {
        "letter": "A",
        "text": "频率失真"
      },
      {
        "letter": "B",
        "text": "相位失真"
      },
      {
        "letter": "C",
        "text": "偶次谐波"
      },
      {
        "letter": "D",
        "text": "奇次谐波"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.4",
    "type": "MC2-1252",
    "image": ""
  },
  {
    "id": "Q1160",
    "originalId": "LK0571",
    "text": "电路的“相位失真”是指该电路的输出信号与输入信号相比发生了下列改变：",
    "options": [
      {
        "letter": "A",
        "text": "不同频率分量的相位延迟发生了改变"
      },
      {
        "letter": "B",
        "text": "产生了新的频率分量"
      },
      {
        "letter": "C",
        "text": "各频率分量的比例发生了变化"
      },
      {
        "letter": "D",
        "text": "信号的幅度发生了改变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1253",
    "image": ""
  },
  {
    "id": "Q1161",
    "originalId": "LK0569",
    "text": "电路的“频率失真”是指该电路的输出信号波形与输入信号相比发生了如下变化：",
    "options": [
      {
        "letter": "A",
        "text": "各频率分量的比例发生了变化"
      },
      {
        "letter": "B",
        "text": "信号的幅度发生了改变"
      },
      {
        "letter": "C",
        "text": "产生了新的频率分量"
      },
      {
        "letter": "D",
        "text": "不同频率分量的相位延迟发生了改变"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1254",
    "image": ""
  },
  {
    "id": "Q1162",
    "originalId": "LK0593",
    "text": "组装业余收发信机时，爱好者常用谐振回路来筛选特定频率的信号。组成谐振回路的主要元件包括：",
    "options": [
      {
        "letter": "A",
        "text": "电容和电感的组合"
      },
      {
        "letter": "B",
        "text": "电阻和电容的组合"
      },
      {
        "letter": "C",
        "text": "电感和电阻的组合"
      },
      {
        "letter": "D",
        "text": "半导体三极管和电阻的组合"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1255",
    "image": ""
  },
  {
    "id": "Q1163",
    "originalId": "LK1014",
    "text": "制作倍频器会用到高性能带通滤波器或是某种选择性优良的 LC 谐振回路。下列 LC 回路中，选择性最佳的是：",
    "options": [
      {
        "letter": "A",
        "text": "松耦合的高 Q 单调谐或同频双调谐回路"
      },
      {
        "letter": "B",
        "text": "紧耦合高 Q 同频双调谐回路"
      },
      {
        "letter": "C",
        "text": "松耦合低 Q 同频双调谐回路"
      },
      {
        "letter": "D",
        "text": "松耦合高 Q 参差调谐回路"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1256",
    "image": ""
  },
  {
    "id": "Q1164",
    "originalId": "LK0678",
    "text": "低通滤波器的“截止频率”是指：",
    "options": [
      {
        "letter": "A",
        "text": "滤波器的频率响应从相对于通带的 0dB 下降 3dB 时的频率"
      },
      {
        "letter": "B",
        "text": "高于该频率的信号将被滤波器完全切除"
      },
      {
        "letter": "C",
        "text": "低于该频率的信号将被滤波器完全切除"
      },
      {
        "letter": "D",
        "text": "高于该频率的信号会在滤波器中发生非线性失真"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1257",
    "image": ""
  },
  {
    "id": "Q1165",
    "originalId": "LK0679",
    "text": "带通滤波器的“3dB 带宽”是指：",
    "options": [
      {
        "letter": "A",
        "text": "在通带中心频率的两侧，通带响应下降 3dB 时两个频率之间的间隔"
      },
      {
        "letter": "B",
        "text": "输出信号相对于输入信号衰减 3dB 以上（含 3dB）时的频带宽度"
      },
      {
        "letter": "C",
        "text": "输出信号相对于输入信号衰减 3dB 以下（含 3dB）时的频带宽度"
      },
      {
        "letter": "D",
        "text": "滤波器维持 3dB 增益时的频带宽度"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1258",
    "image": ""
  },
  {
    "id": "Q1166",
    "originalId": "LK0680",
    "text": "滤波器有一个称为“通带波动”的参数，是指：",
    "options": [
      {
        "letter": "A",
        "text": "滤波器在通带范围内的衰减特性变化幅度"
      },
      {
        "letter": "B",
        "text": "滤波器频率特性在整个频谱范围内的变化趋势"
      },
      {
        "letter": "C",
        "text": "CW 信号通过滤波器时键控边沿附近的信号幅度发生抖动的现象"
      },
      {
        "letter": "D",
        "text": "滤波器因元器件不稳定等随机因素而使输出信号增益波动的现象"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1259",
    "image": ""
  },
  {
    "id": "Q1167",
    "originalId": "LK0684",
    "text": "在描述收信机的波段预选滤波电路和发信机的输出滤波电路时，有些技术文档（比如：服务手册）会提及 LC 滤波器的“阶数”或“极点数”。确定 LC 滤波器阶数的简单方法是：",
    "options": [
      {
        "letter": "A",
        "text": "先合并化简串、并联的电容和电感元件，再将串、并联的 LC 谐振电路视为单一组件，这样得到的电容、电感或 LC 谐振组件的总数即为阶数。例如，某 3 阶低通滤波器包含两个电容和一个电感；某 3 阶带通滤波器包含两个并联谐振电路和一个串联谐振电路。"
      },
      {
        "letter": "B",
        "text": "滤波电路中分叉节的数量即为阶数"
      },
      {
        "letter": "C",
        "text": "滤波电路中分叉节的数量减 1 即为阶数"
      },
      {
        "letter": "D",
        "text": "滤波电路中电感元件的总数减去电容元件的总数即得阶数"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.4",
    "type": "MC2-1260",
    "image": ""
  },
  {
    "id": "Q1168",
    "originalId": "LK0574",
    "text": "假设业余中继台的收、发信机共用一副天线，上行和下行频率分别为 F1 和 F2。在架设该台时，为了防止发信机的射频输出阻塞收信机的正常接收，可用措施为：",
    "options": [
      {
        "letter": "A",
        "text": "在发信机与天线间串联中心频率为 F1 的带阻滤波器，在收信机与天线间串接中心频率为F2 的带阻滤波器"
      },
      {
        "letter": "B",
        "text": "在发信机与天线间串联中心频率为 F1 的带通滤波器，在收信机与天线间串接中心频率为F2 的带通滤波器"
      },
      {
        "letter": "C",
        "text": "在发信机与天线间串联中心频率为 F2 的带阻滤波器，在收信机与天线间串接中心频率为F2 的带阻滤波器"
      },
      {
        "letter": "D",
        "text": "在发信机与天线间串联中心频率为 F1 的带阻滤波器，在收信机与天线间串接中心频率为F1 的带阻滤波器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1261",
    "image": ""
  },
  {
    "id": "Q1169",
    "originalId": "LK0575",
    "text": "要防止 HF 业余电台发出的射频能量干扰布放在天线附近的电话机，可在电话机与电话线之间串联：",
    "options": [
      {
        "letter": "A",
        "text": "截止频率不高于 1MHz 的低通滤波器"
      },
      {
        "letter": "B",
        "text": "截止频率约为 3kHz 的高通滤波器"
      },
      {
        "letter": "C",
        "text": "截止频率约为 3kHz 的带阻滤波器"
      },
      {
        "letter": "D",
        "text": "中心频率约为 3kHz 的带通滤波器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1262",
    "image": ""
  },
  {
    "id": "Q1170",
    "originalId": "LK0573",
    "text": "如果 HF 业余电台的正常发射干扰天线附近的 VHF 电视机，可能的解决方案是：",
    "options": [
      {
        "letter": "A",
        "text": "在电视机的天线输入端安装截止频率不低于 30MHz 的高通滤波器"
      },
      {
        "letter": "B",
        "text": "在业余电台的发射机输出端安装截止频率不低于 30MHz 的高通滤波器"
      },
      {
        "letter": "C",
        "text": "在电视机的天线输入端安装截止频率不高于 300MHz 的低通滤波器"
      },
      {
        "letter": "D",
        "text": "在业余电台的发射机输出端安装截止频率不低于 30MHz 的低通滤波器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.4",
    "type": "MC1-1263",
    "image": ""
  },
  {
    "id": "Q1171",
    "originalId": "LX",
    "text": "如果 50Hz 交流电通过全波整流器加到电阻负载上，负载两端的波形为？",
    "options": [
      {
        "letter": "A",
        "text": "频率为 100Hz 的脉动直流电"
      },
      {
        "letter": "B",
        "text": "频率为 50Hz 的脉动直流电"
      },
      {
        "letter": "C",
        "text": "稳定的直流电压"
      },
      {
        "letter": "D",
        "text": "纯正的 50Hz 正弦波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.5",
    "type": "MC1-1264",
    "image": ""
  },
  {
    "id": "Q1172",
    "originalId": "LK0582",
    "text": "在整流滤波电路中，泄放电阻的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "关机后泄放滤波电容两端的电压"
      },
      {
        "letter": "B",
        "text": "关机后泄放变压器绕组反激电压"
      },
      {
        "letter": "C",
        "text": "为电源提供负载，稳定工作效率"
      },
      {
        "letter": "D",
        "text": "过压时迅速熔断，保护滤波电容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.5",
    "type": "MC1-1265",
    "image": ""
  },
  {
    "id": "Q1173",
    "originalId": "LK1162",
    "text": "制作开关电源或是驱动继电器的电路，甚至是在制作驱动指示灯的电路时，我们都期望电路中起控制作用的晶体管工作于开关状态。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "晶体管工作于开关状态时具有导通电阻小，功率损耗低的优点"
      },
      {
        "letter": "B",
        "text": "晶体管工作于开关状态时具有工作速度快，射频干扰小的优点"
      },
      {
        "letter": "C",
        "text": "晶体管工作于开关状态时具有电路线性好，互调杂散少的优点"
      },
      {
        "letter": "D",
        "text": "晶体管工作于开关状态时具有驱动电压低，容性电流小的优点"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.5",
    "type": "MC1-1266",
    "image": ""
  },
  {
    "id": "Q1174",
    "originalId": "LK0689",
    "text": "在给业余收发信机供电的电源装置中，开关电源可以比变压器降压的线性电源更为轻巧。原因是：",
    "options": [
      {
        "letter": "A",
        "text": "开关电源中的隔离变压器工作频率远高于工频，磁芯截面积因此减小，绕组匝数变少"
      },
      {
        "letter": "B",
        "text": "开关电源中的半导体器件工作于开关状态，工作效率高，散热装置因此变得轻巧"
      },
      {
        "letter": "C",
        "text": "开关电源的工作原理比线性电源简单得多，设备中的元件数量因此大幅减少"
      },
      {
        "letter": "D",
        "text": "开关电源所用的 PWM 技术工作安静无噪声，无需 EMC 措施，设备体积因此减小"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.4.5",
    "type": "MC2-1267",
    "image": ""
  },
  {
    "id": "Q1175",
    "originalId": "LK0690",
    "text": "将 220V 交流输入变换为 13.8V 直流输出的通信开关电源的一般工作过程是：",
    "options": [
      {
        "letter": "A",
        "text": "将交流输入整流滤波为高压直流，由半导体开关电路变成高压脉冲电流，由变压器变成低压脉冲，再整流滤波成为输出的低压直流"
      },
      {
        "letter": "B",
        "text": "将交流输入整流滤波为高压直流，由变压器变成低压脉冲，由半导体开关电路变成低压直流，滤波后输出"
      },
      {
        "letter": "C",
        "text": "由变压器将交流输入变为低压交流，由半导体开关电路变成超音频脉冲电流，经整流滤波为低压直流"
      },
      {
        "letter": "D",
        "text": "由大功率半导体三极管将交流输入变为高压直流，由专用集成电路变成超音频脉冲电流，再经整流滤波成为输出的低压直流"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.5",
    "type": "MC1-1268",
    "image": ""
  },
  {
    "id": "Q1176",
    "originalId": "LK0780",
    "text": "有时，使用锁相环频率合成器的本机振荡器（LO）会为混频之后的信号增添相位噪声。可能的原因是：",
    "options": [
      {
        "letter": "A",
        "text": "从鉴相检测 LO 的频率漂移到滤波产生环路的校正电压需要一定时间。该时延造成本振信号中的宽带相位噪声不能得到充分抑制"
      },
      {
        "letter": "B",
        "text": "锁相环路中的压控振荡器（VCO）多为宽带可调谐 LC 振荡器。相比石英晶体振荡器等窄带振荡器，其输出相位噪声会在本质上更大一些"
      },
      {
        "letter": "C",
        "text": "有些频率合成器采用多次混频方案，多个 VCO 的相位噪声的叠加使输出信噪比下降"
      },
      {
        "letter": "D",
        "text": "频率合成器中的数字分频电路在信号电平跳变时会产生谐波，并因此产生相位噪声"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.5",
    "type": "MC3-1269",
    "image": ""
  },
  {
    "id": "Q1177",
    "originalId": "LK0781",
    "text": "很多业余无线电收发信机都在本机振荡电路中使用了直接数字频率合成器（DDS）。它的主要特点是：",
    "options": [
      {
        "letter": "A",
        "text": "电路结构简洁，无锁相捕捉范围限制，相位噪声低，跳换频率速度快"
      },
      {
        "letter": "B",
        "text": "采用同样等级的参考振荡器时频率稳定度优于锁相环频率合成器"
      },
      {
        "letter": "C",
        "text": "与锁相环频率合成器相比，可以使用速度较低的数字逻辑器件"
      },
      {
        "letter": "D",
        "text": "直接产生纯净的正弦波信号，无需任何形式的滤波"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.5",
    "type": "MC1-1270",
    "image": ""
  },
  {
    "id": "Q1178",
    "originalId": "LX",
    "text": "电阻是无源元件，为什么也会产生噪声？",
    "options": [
      {
        "letter": "A",
        "text": "电路元件都会产生热噪声，大小与其阻值和温度高低有关"
      },
      {
        "letter": "B",
        "text": "电阻的制造工艺不过关"
      },
      {
        "letter": "C",
        "text": "金属膜电阻绝无噪声"
      },
      {
        "letter": "D",
        "text": "音频电路中的电阻噪声最小，尤其是在贴近直流的频段中"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.6",
    "type": "MC1-1271",
    "image": ""
  },
  {
    "id": "Q1179",
    "originalId": "LX",
    "text": "有源器件的噪声主要包括：",
    "options": [
      {
        "letter": "A",
        "text": "散粒噪声"
      },
      {
        "letter": "B",
        "text": "闪烁噪声"
      },
      {
        "letter": "C",
        "text": "热噪声"
      },
      {
        "letter": "D",
        "text": "开关噪声"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.4.6",
    "type": "MC3-1272",
    "image": ""
  },
  {
    "id": "Q1180",
    "originalId": "LX",
    "text": "为什么过长的同轴电缆或是 VSWR 过高的同轴电缆都为收信机增添噪声？",
    "options": [
      {
        "letter": "A",
        "text": "电缆过长或 VSWR 过高均增加欧姆损耗，增添热噪声"
      },
      {
        "letter": "B",
        "text": "电缆过长易感生静电，产生 QRN"
      },
      {
        "letter": "C",
        "text": "VSWR 过高则电缆外皮带电，干扰周边设备引发噪声"
      },
      {
        "letter": "D",
        "text": "此命题不成立。VSWR 与损耗不相干"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.6",
    "type": "MC1-1273",
    "image": ""
  },
  {
    "id": "Q1181",
    "originalId": "LX",
    "text": "为什么大气也有噪声？",
    "options": [
      {
        "letter": "A",
        "text": "大气噪声与大气放电有关，亦称天电噪声，简称 QRN"
      },
      {
        "letter": "B",
        "text": "QRN 的一般分布是随着频率的升高而逐渐增强的"
      },
      {
        "letter": "C",
        "text": "大气将无线电波相互混频，继而产生 QRM 和啁啾声"
      },
      {
        "letter": "D",
        "text": "大气是一种等离子体，是有热噪声的"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.6",
    "type": "MC1-1274",
    "image": ""
  },
  {
    "id": "Q1182",
    "originalId": "LX",
    "text": "劣质开关电源会为无线电接收机增添电磁噪声。源头主要是：",
    "options": [
      {
        "letter": "A",
        "text": "开关电源中的开关电路的谐波辐射"
      },
      {
        "letter": "B",
        "text": "工频电源变压器的漏磁感应"
      },
      {
        "letter": "C",
        "text": "开关电源中的整流电路的滤波电容容量不足"
      },
      {
        "letter": "D",
        "text": "元器件的安装过于粗糙，打火、拉弧带来电磁干扰"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.4.6",
    "type": "MC1-1275",
    "image": ""
  },
  {
    "id": "Q1183",
    "originalId": "LK0770",
    "text": "具有两个输入端的与门（AND）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "0、0、0、1"
      },
      {
        "letter": "B",
        "text": "0、1、1、1"
      },
      {
        "letter": "C",
        "text": "0、1、0、1"
      },
      {
        "letter": "D",
        "text": "1、0、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1276",
    "image": ""
  },
  {
    "id": "Q1184",
    "originalId": "LK0771",
    "text": "具有两个输入端的或门（OR）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "0、1、1、1"
      },
      {
        "letter": "B",
        "text": "0、1、1、0"
      },
      {
        "letter": "C",
        "text": "0、1、0、1"
      },
      {
        "letter": "D",
        "text": "1、0、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1277",
    "image": ""
  },
  {
    "id": "Q1185",
    "originalId": "LK0772",
    "text": "具有两个输入端的异或门（XOR）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "0、1、1、0"
      },
      {
        "letter": "B",
        "text": "0、1、0、1"
      },
      {
        "letter": "C",
        "text": "0、1、1、1"
      },
      {
        "letter": "D",
        "text": "1、0、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1278",
    "image": ""
  },
  {
    "id": "Q1186",
    "originalId": "LK0773",
    "text": "具有两个输入端的与非门（NAND）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "1、1、1、0"
      },
      {
        "letter": "B",
        "text": "0、1、1、1"
      },
      {
        "letter": "C",
        "text": "0、1、0、1"
      },
      {
        "letter": "D",
        "text": "1、0、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1279",
    "image": ""
  },
  {
    "id": "Q1187",
    "originalId": "LK0774",
    "text": "具有两个输入端的或非门（NOR）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "1、0、0、0"
      },
      {
        "letter": "B",
        "text": "0、1、1、1"
      },
      {
        "letter": "C",
        "text": "0、1、0、1"
      },
      {
        "letter": "D",
        "text": "1、0、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1280",
    "image": ""
  },
  {
    "id": "Q1188",
    "originalId": "LK0775",
    "text": "具有两个输入端的异或非门（NXOR）是最简单的数字逻辑电路之一。如果这两个输入的组合分别为 00、01、10、11，则对应的输出为：",
    "options": [
      {
        "letter": "A",
        "text": "1、0、0、1"
      },
      {
        "letter": "B",
        "text": "0、1、1、1"
      },
      {
        "letter": "C",
        "text": "1、1、0、0"
      },
      {
        "letter": "D",
        "text": "0、1、1、0"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1281",
    "image": ""
  },
  {
    "id": "Q1189",
    "originalId": "LX",
    "text": "D 触发器是一种时序逻辑电路，具有数据输入端 D、时钟输入端 CK 和数据输出端 Q。假设 D 触发器由 CK 的上升沿触发，则其工作情况为：",
    "options": [
      {
        "letter": "A",
        "text": "每次 CK 上升沿到来时，Q 端都变得与 D 端一致"
      },
      {
        "letter": "B",
        "text": "每次 CK 上升沿到来时，Q 端都与 D 端反相"
      },
      {
        "letter": "C",
        "text": "每次 CK 下降沿到来时，Q 端都与 D 端反相"
      },
      {
        "letter": "D",
        "text": "每次 CK 下降沿到来时，Q 端都变得与 D 端一致"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1282",
    "image": ""
  },
  {
    "id": "Q1190",
    "originalId": "LX",
    "text": "D 触发器是一种时序逻辑电路，具有数据输入端 D、时钟输入端 CK 和数据输出端 Q。若将 D 触发器的 Q 端反相之后连到 D 端，则在每次 CK 上升沿到来时会发生什么？",
    "options": [
      {
        "letter": "A",
        "text": "2 分频；若 CK 的频率为 f，则 Q 端输出信号的频率为 f/2"
      },
      {
        "letter": "B",
        "text": "2 倍频；若 CK 的频率为 f，则 Q 端输出信号的频率为 2f"
      },
      {
        "letter": "C",
        "text": "移相：Q 端输出信号与 CK 相差 90°"
      },
      {
        "letter": "D",
        "text": "反相：Q 端输出信号与 CK 相差 180°"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.1",
    "type": "MC1-1283",
    "image": ""
  },
  {
    "id": "Q1191",
    "originalId": "LX",
    "text": "制作 SDR 作品，特别是在制作直接射频采样的数字收发信机时， 我们会使用一种叫做 FPGA的现场可编程数字逻辑器件。FPGA 在 SDR 系统中可以用来：",
    "options": [
      {
        "letter": "A",
        "text": "实现宽带数字混频、数字滤波、信道化样本抽取或采样率变换"
      },
      {
        "letter": "B",
        "text": "在器件内创建 CPU，或利用器件的内置 CPU 完整实现 SDR 系统"
      },
      {
        "letter": "C",
        "text": "提供并行运算功能，辅助提升外部计算机系统的信号处理能力"
      },
      {
        "letter": "D",
        "text": "充当固态硬盘，帮助外部计算机系统保存电台日志和比赛录音"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.5.1",
    "type": "MC3-1284",
    "image": ""
  },
  {
    "id": "Q1192",
    "originalId": "LK0765",
    "text": "实现数字信号处理（DSP）的第一步是将模拟信号转换为数字信号。为确保模拟信号的各频率成分不会在采集的样本中发生混叠，模数转换器（ADC）的采样率必须高于：",
    "options": [
      {
        "letter": "A",
        "text": "输入信号中的最高频率分量的 2 倍"
      },
      {
        "letter": "B",
        "text": "输入信号的波形复杂程度"
      },
      {
        "letter": "C",
        "text": "输入信号中的最低频率分量的 1/2"
      },
      {
        "letter": "D",
        "text": "输入信号的噪声相对带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.2",
    "type": "MC1-1285",
    "image": ""
  },
  {
    "id": "Q1193",
    "originalId": "LK0766",
    "text": "实现数字信号处理 (DSP) 的第一步是将模拟信号转换为数字信号。所用模数转换器（ADC）的量化精度取决于：",
    "options": [
      {
        "letter": "A",
        "text": "输入信号的波形复杂程度"
      },
      {
        "letter": "B",
        "text": "输入信号中的最高频率分量的 2 倍"
      },
      {
        "letter": "C",
        "text": "输入信号中的最低频率分量的 1/2"
      },
      {
        "letter": "D",
        "text": "输入信号的噪声相对带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.2",
    "type": "MC1-1286",
    "image": ""
  },
  {
    "id": "Q1194",
    "originalId": "LK0767",
    "text": "进行数模转换时，为了将模拟信号正确还原出来，数模转换器（DAC）的采样率应当至少等于输入样本率。但是如果在数模转换时通过插值获得了一个更高的采样率，则：",
    "options": [
      {
        "letter": "A",
        "text": "数模转换的频率响应将变得更为平坦"
      },
      {
        "letter": "B",
        "text": "数模转换之后残存的杂散更容易滤除"
      },
      {
        "letter": "C",
        "text": "采样时丢失的波形细节会得以再现"
      },
      {
        "letter": "D",
        "text": "因采样不完美而残存的混叠会复原为频率正确的有用信号"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.5.2",
    "type": "MC2-1287",
    "image": ""
  },
  {
    "id": "Q1195",
    "originalId": "LK0768",
    "text": "将频率为 f 且最大电压为 U 的模拟信号转换为数字信号。如果数字信号需要反映相当于0.1%U 的信号幅度细节和相当于 f 的 8 次谐波的时间细节，则模数转换器应满足要求：",
    "options": [
      {
        "letter": "A",
        "text": "采样率大于 16f，量化精度不低于 10 位"
      },
      {
        "letter": "B",
        "text": "采样率大于 8f，量化精度不低于 10 位"
      },
      {
        "letter": "C",
        "text": "采样率大于 4f，量化精度不低于 8 位"
      },
      {
        "letter": "D",
        "text": "采样率大于 10f，量化精度不低于 9 位"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.2",
    "type": "MC1-1288",
    "image": ""
  },
  {
    "id": "Q1196",
    "originalId": "LX",
    "text": "编写 SDR 软件时，爱好者们经常使用一种中心频率为 0Hz 的 I/Q 序列，利用正、负两个频率区域来完整表达信号的基带信息。这种形式的数字信号也叫“复信号”，其优点是：",
    "options": [
      {
        "letter": "A",
        "text": "将序列的样本率降至最低，节省信号处理的资源开销"
      },
      {
        "letter": "B",
        "text": "简化信号的幅度和相位运算，降低软件的复杂性"
      },
      {
        "letter": "C",
        "text": "便于实现复杂数字调制和常见模拟调制"
      },
      {
        "letter": "D",
        "text": "获取射频输入或还原射频输出仅需一个 ADC 或 DAC"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.5.3",
    "type": "MC3-1289",
    "image": ""
  },
  {
    "id": "Q1197",
    "originalId": "LX",
    "text": "SDR 收发信机的主要功能均由数字信号处理算法实现，包括：",
    "options": [
      {
        "letter": "A",
        "text": "混频"
      },
      {
        "letter": "B",
        "text": "滤波"
      },
      {
        "letter": "C",
        "text": "调制"
      },
      {
        "letter": "D",
        "text": "解调"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.5.3",
    "type": "MC4-1290",
    "image": ""
  },
  {
    "id": "Q1198",
    "originalId": "LX",
    "text": "既然模拟滤波器早已支持业余无线电通信成功运作，我们为什么还要研发使用数字滤波器？",
    "options": [
      {
        "letter": "A",
        "text": "数字滤波器最灵活，可以定制出各种通带形状并保持最优性能"
      },
      {
        "letter": "B",
        "text": "数字滤波器可用作高级接收机的高性能波段预选器"
      },
      {
        "letter": "C",
        "text": "数字滤波器不存在电容击穿或电感过热问题，功率耐受能力强"
      },
      {
        "letter": "D",
        "text": "数字滤波器无需数学运算单元的支持，运作成本低"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.3",
    "type": "MC1-1291",
    "image": ""
  },
  {
    "id": "Q1199",
    "originalId": "LX",
    "text": "在 SDR 系统中，对 I/Q 信号进行混频可使用算法：",
    "options": [
      {
        "letter": "A",
        "text": "复数乘法"
      },
      {
        "letter": "B",
        "text": "复数加法"
      },
      {
        "letter": "C",
        "text": "复数减法"
      },
      {
        "letter": "D",
        "text": "复数开方"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.4",
    "type": "MC1-1292",
    "image": ""
  },
  {
    "id": "Q1200",
    "originalId": "LX",
    "text": "在 SDR 系统中，解调 AM 复信号可使用算法：",
    "options": [
      {
        "letter": "A",
        "text": "求复数的模值"
      },
      {
        "letter": "B",
        "text": "求复数的辐角"
      },
      {
        "letter": "C",
        "text": "求复数的余弦"
      },
      {
        "letter": "D",
        "text": "求复数的指数"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.5.4",
    "type": "MC1-1293",
    "image": ""
  },
  {
    "id": "Q1201",
    "originalId": "LX",
    "text": "SDR 系统中的数字滤波器具有多种类型。常见的有：",
    "options": [
      {
        "letter": "A",
        "text": "有限冲激响应（FIR）滤波器"
      },
      {
        "letter": "B",
        "text": "无限冲激响应（IIR）滤波器"
      },
      {
        "letter": "C",
        "text": "萨伦-基滤波器"
      },
      {
        "letter": "D",
        "text": "状态变量滤波器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.5.4",
    "type": "MC2-1294",
    "image": ""
  },
  {
    "id": "Q1202",
    "originalId": "LX",
    "text": "制作 SDR 发信机时，生成 SSB 信号的算法可以是：",
    "options": [
      {
        "letter": "A",
        "text": "滤波法"
      },
      {
        "letter": "B",
        "text": "移相法"
      },
      {
        "letter": "C",
        "text": "维弗法"
      },
      {
        "letter": "D",
        "text": "限幅法"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.5.4",
    "type": "MC3-1295",
    "image": ""
  },
  {
    "id": "Q1203",
    "originalId": "LX",
    "text": "在 SDR 系统中，快速傅里叶变换（FFT）可以用来：",
    "options": [
      {
        "letter": "A",
        "text": "分析信号的频率成分"
      },
      {
        "letter": "B",
        "text": "生成 FIR 滤波器系数"
      },
      {
        "letter": "C",
        "text": "实现调制和解调功能"
      },
      {
        "letter": "D",
        "text": "实现快速卷积运算"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "chapter": "4.5.4",
    "type": "MC4-1296",
    "image": ""
  },
  {
    "id": "Q1204",
    "originalId": "LX",
    "text": "使用 SDR 收发信机时，我们常在系统设置中看到与频谱显示有关的窗函数选项，例如汉明、升余弦或布莱克曼等。这些主要用来：",
    "options": [
      {
        "letter": "A",
        "text": "降低 FFT 分析的谱泄漏，呈现信号功率谱的原本特征"
      },
      {
        "letter": "B",
        "text": "提高 FFT 分析的幅度或频率精度，从而提升观测精度"
      },
      {
        "letter": "C",
        "text": "防止 FFT 运算的结果超出屏幕上频谱显示窗口的宽度"
      },
      {
        "letter": "D",
        "text": "提升 CW 或 RTTY 等幅度或频率键控信号的观测精度"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.5.4",
    "type": "MC2-1297",
    "image": ""
  },
  {
    "id": "Q1205",
    "originalId": "LK0479",
    "text": "用万用表的直流电压档测量正负对称的方波电压（占空比为 1:1）。所得读数为：",
    "options": [
      {
        "letter": "A",
        "text": "零值"
      },
      {
        "letter": "B",
        "text": "该电压的最大值"
      },
      {
        "letter": "C",
        "text": "该电压最大值的 1/2"
      },
      {
        "letter": "D",
        "text": "该电压最大值的 2 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1298",
    "image": ""
  },
  {
    "id": "Q1206",
    "originalId": "LK0480",
    "text": "如果用磁电式万用表的交流电压档测量正负对称的方波电压（占空比为 1:1），其指针所示的电压读数：",
    "options": [
      {
        "letter": "A",
        "text": "大于该电压的峰值"
      },
      {
        "letter": "B",
        "text": "为该电压的峰值"
      },
      {
        "letter": "C",
        "text": "为该电压的峰-峰值"
      },
      {
        "letter": "D",
        "text": "为该电压的平均值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1299",
    "image": ""
  },
  {
    "id": "Q1207",
    "originalId": "LK0481",
    "text": "用指针式万用表的直流电压档测量最小值为 0 的方波电压（占空比为 1:1），得到的读数是该电压的：",
    "options": [
      {
        "letter": "A",
        "text": "峰值的 1/2，亦为有效值"
      },
      {
        "letter": "B",
        "text": "零值"
      },
      {
        "letter": "C",
        "text": "峰值"
      },
      {
        "letter": "D",
        "text": "峰-峰值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1300",
    "image": ""
  },
  {
    "id": "Q1208",
    "originalId": "LK1198",
    "text": "用万用表的电阻档测量一个电路。最开始，电表指示电路的阻值很小。但是随着测量时间的延长，测量值却变得越来越大。这是因为：",
    "options": [
      {
        "letter": "A",
        "text": "这个电路两端可能存在一个很大的电容"
      },
      {
        "letter": "B",
        "text": "万用表出了故障"
      },
      {
        "letter": "C",
        "text": "这个电路两端可能存在一个很大的电感"
      },
      {
        "letter": "D",
        "text": "这个电路中存在一个周期性的交流电压"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1301",
    "image": ""
  },
  {
    "id": "Q1209",
    "originalId": "LK0484",
    "text": "测量一个电解电容器是否完好应当使用：",
    "options": [
      {
        "letter": "A",
        "text": "指针式万用表的电阻档"
      },
      {
        "letter": "B",
        "text": "数字万用表的电容测试档（如果仪表具备该功能）"
      },
      {
        "letter": "C",
        "text": "任意一种万用表的电流档"
      },
      {
        "letter": "D",
        "text": "蓄电池充电器并配合进行短路放电实验"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.6.1",
    "type": "MC2-1302",
    "image": ""
  },
  {
    "id": "Q1210",
    "originalId": "LK0491",
    "text": "用指针式万用电表的电阻档测量一个常用元件，表笔第一次连接时表针挥动了一下，但很快回到零点。断开表笔重新连接，表针却不再有任何指示。正确的推论是：",
    "options": [
      {
        "letter": "A",
        "text": "该元件可能是一个电解电容器"
      },
      {
        "letter": "B",
        "text": "该元件肯定是一支损坏了的电阻"
      },
      {
        "letter": "C",
        "text": "万用表的准确度肯定有问题"
      },
      {
        "letter": "D",
        "text": "万用表的电池肯定电量不足了"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1303",
    "image": ""
  },
  {
    "id": "Q1211",
    "originalId": "LK0492",
    "text": "指针式万用表的电压档有个“欧姆/伏（每伏欧姆）”指标。越大的每伏欧姆数越说明：",
    "options": [
      {
        "letter": "A",
        "text": "测量电压时电表对电路工作状态的影响小"
      },
      {
        "letter": "B",
        "text": "测量电压时电表对电路工作状态的影响大"
      },
      {
        "letter": "C",
        "text": "可以耐受的电压过载能力强"
      },
      {
        "letter": "D",
        "text": "可以耐受的电压过载能力弱"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1304",
    "image": ""
  },
  {
    "id": "Q1212",
    "originalId": "LK0493",
    "text": "用数字万用表的直流电压档测量电路两点间某个等幅音频信号的电压，发现读数不为零。交换两支表笔之后再测，所得读数的极性反转。正确的推论是：",
    "options": [
      {
        "letter": "A",
        "text": "音频信号上叠加有直流成分"
      },
      {
        "letter": "B",
        "text": "音频信号含有丰富的谐波"
      },
      {
        "letter": "C",
        "text": "万用表的频率响应太差"
      },
      {
        "letter": "D",
        "text": "表笔导线间的分布电容影响了测量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.1",
    "type": "MC1-1305",
    "image": ""
  },
  {
    "id": "Q1213",
    "originalId": "LK0494",
    "text": "用示波器的交流耦合档测得电路中某个等幅音频信号的电压波形是正负对称的。现将输入耦合切换到直流档位，所得波形在垂直方向上发生了显著偏移。正确的推论是：",
    "options": [
      {
        "letter": "A",
        "text": "音频信号上叠加有直流成分"
      },
      {
        "letter": "B",
        "text": "音频信号被示波器施加了直流偏置"
      },
      {
        "letter": "C",
        "text": "示波器的频率响应太差"
      },
      {
        "letter": "D",
        "text": "探头与地线间的分布电容影响了测量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1306",
    "image": ""
  },
  {
    "id": "Q1214",
    "originalId": "LK0715",
    "text": "下列几种图表中，最容易用来表达和解释 PSK 调制原理的是：",
    "options": [
      {
        "letter": "A",
        "text": "相位矢量图"
      },
      {
        "letter": "B",
        "text": "波形图"
      },
      {
        "letter": "C",
        "text": "频谱图"
      },
      {
        "letter": "D",
        "text": "频谱瀑布图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1307",
    "image": ""
  },
  {
    "id": "Q1215",
    "originalId": "LK0716",
    "text": "下列几种图表中，最容易用来表达和解释模拟 FM 调制原理的是：",
    "options": [
      {
        "letter": "A",
        "text": "频谱图"
      },
      {
        "letter": "B",
        "text": "波形图"
      },
      {
        "letter": "C",
        "text": "相位矢量图"
      },
      {
        "letter": "D",
        "text": "星座图和眼图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1308",
    "image": ""
  },
  {
    "id": "Q1216",
    "originalId": "LK0717",
    "text": "下列几种图表中，最容易用来表达和解释 SSB 调制原理的是：",
    "options": [
      {
        "letter": "A",
        "text": "频谱图"
      },
      {
        "letter": "B",
        "text": "波形图"
      },
      {
        "letter": "C",
        "text": "相位矢量图"
      },
      {
        "letter": "D",
        "text": "频谱瀑布图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1309",
    "image": ""
  },
  {
    "id": "Q1217",
    "originalId": "LK0718",
    "text": "下列几种图表中，最容易用来表达和解释 RTTY 调制原理的是：",
    "options": [
      {
        "letter": "A",
        "text": "频率-时间曲线"
      },
      {
        "letter": "B",
        "text": "功率-时间曲线"
      },
      {
        "letter": "C",
        "text": "波形图"
      },
      {
        "letter": "D",
        "text": "相位矢量图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1310",
    "image": ""
  },
  {
    "id": "Q1218",
    "originalId": "LK0719",
    "text": "下列几种图表中，最容易用来表达和解释 SSTV 调制原理的是：",
    "options": [
      {
        "letter": "A",
        "text": "频率-时间曲线"
      },
      {
        "letter": "B",
        "text": "功率-时间曲线"
      },
      {
        "letter": "C",
        "text": "波形图"
      },
      {
        "letter": "D",
        "text": "相位矢量图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1311",
    "image": ""
  },
  {
    "id": "Q1219",
    "originalId": "LK0720",
    "text": "下列几种图表中，最容易用来表达和解释 A、B、C 类放大器工作点的差别的是：",
    "options": [
      {
        "letter": "A",
        "text": "波形图"
      },
      {
        "letter": "B",
        "text": "频谱图"
      },
      {
        "letter": "C",
        "text": "相位矢量图"
      },
      {
        "letter": "D",
        "text": "频谱瀑布图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1312",
    "image": ""
  },
  {
    "id": "Q1220",
    "originalId": "LK0722",
    "text": "下列几种图表中，最容易用来表达和解释 LC 振荡器温度漂移程度的是：",
    "options": [
      {
        "letter": "A",
        "text": "频谱瀑布图"
      },
      {
        "letter": "B",
        "text": "频谱图"
      },
      {
        "letter": "C",
        "text": "相位矢量图"
      },
      {
        "letter": "D",
        "text": "波形图"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.2",
    "type": "MC1-1313",
    "image": ""
  },
  {
    "id": "Q1221",
    "originalId": "LK0614",
    "text": "图示电路为业余无线电爱好者常用的简易场强表。各部件的作用分别为：",
    "options": [
      {
        "letter": "A",
        "text": "A-接收电波，C1、C2、L-谐振选频，VD-检波，C3-旁路滤波，M-指示"
      },
      {
        "letter": "B",
        "text": "A-接收电波，C1、C2 旁路滤波，L-升压，VD-放大，C3-隔直流，M-指示"
      },
      {
        "letter": "C",
        "text": "A-整流，C1、C2-隔直流，L-放大，VD-滤波，C3-谐振，M-指示"
      },
      {
        "letter": "D",
        "text": "A-接收电波，C1、C2 高频旁路，L-放大，VD-开关，C3-耦合，M-指示"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.3",
    "type": "MC1-1314",
    "image": "LK0614.jpg"
  },
  {
    "id": "Q1222",
    "originalId": "LK0700",
    "text": "用一副臂长约 10cm 的小偶极天线并联一个晶体二极管和直流微安表，做一个简单的射频场强表。关于选用硅二极管还是锗二极管，正确的考虑应当是：",
    "options": [
      {
        "letter": "A",
        "text": "锗、硅二极管的起始导通电压分别为 0.3V 和 0.7V。选用锗二极管时场强表更为灵敏"
      },
      {
        "letter": "B",
        "text": "所有二极管都具有同样的单向导电特性。采用锗、硅二极管的效果完全相同"
      },
      {
        "letter": "C",
        "text": "硅二极管的反向击穿电压比较高。选用硅管可以延长仪表的使用寿命"
      },
      {
        "letter": "D",
        "text": "无关锗或硅二极管，这种电路过于简单，无法工作"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.3",
    "type": "MC1-1315",
    "image": ""
  },
  {
    "id": "Q1223",
    "originalId": "LK1184",
    "text": "在使用网络分析仪或天线分析仪测量电缆和天线的时候，需要使用校准件，包括：",
    "options": [
      {
        "letter": "A",
        "text": "50 欧姆假负载接头"
      },
      {
        "letter": "B",
        "text": "开路接头"
      },
      {
        "letter": "C",
        "text": "短路接头"
      },
      {
        "letter": "D",
        "text": "0dBm 参考振荡器"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.6.3",
    "type": "MC3-1316",
    "image": ""
  },
  {
    "id": "Q1224",
    "originalId": "LX",
    "text": "为自己的 FM 电台选择驻波比表应注意什么问题？",
    "options": [
      {
        "letter": "A",
        "text": "频率范围和功率量程"
      },
      {
        "letter": "B",
        "text": "最好可以在低于-40 摄氏度的环境里使用"
      },
      {
        "letter": "C",
        "text": "最好可以在高于 90 摄氏度的环境里使用"
      },
      {
        "letter": "D",
        "text": "适用于振幅恒定的 FM 信号"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.3",
    "type": "MC1-1317",
    "image": ""
  },
  {
    "id": "Q1225",
    "originalId": "LX",
    "text": "如果用驻波比表测量发射机的输出功率，你应将仪表装在哪里？",
    "options": [
      {
        "letter": "A",
        "text": "在发射机与馈线之间"
      },
      {
        "letter": "B",
        "text": "在 13.8V 电源输出端和电源线之间"
      },
      {
        "letter": "C",
        "text": "在电源线和电台的电源输入端之间"
      },
      {
        "letter": "D",
        "text": "在馈线和天线的馈电点之间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.3",
    "type": "MC1-1318",
    "image": ""
  },
  {
    "id": "Q1226",
    "originalId": "LK0540",
    "text": "一个放大器具有 20dB 的信号增益，其意义是：",
    "options": [
      {
        "letter": "A",
        "text": "放大器把相当于输入信号的 100 倍的能量从电源转移到了负载"
      },
      {
        "letter": "B",
        "text": "放大器产生了相当于输入信号的 100 倍的能量并将之传向负载"
      },
      {
        "letter": "C",
        "text": "放大器把输入信号的能量放大了 100 倍"
      },
      {
        "letter": "D",
        "text": "放大器把输入信号的能量放大了 99 倍"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1319",
    "image": ""
  },
  {
    "id": "Q1227",
    "originalId": "LK0541",
    "text": "射频信号通过某电路时产生了 20dB 的损耗。这部分被损耗的能量：",
    "options": [
      {
        "letter": "A",
        "text": "被电路转化为其他形式的能量，比如发热耗散或以无线电波的形式辐射到了其他地方"
      },
      {
        "letter": "B",
        "text": "在电路中消失了"
      },
      {
        "letter": "C",
        "text": "返回了信号源"
      },
      {
        "letter": "D",
        "text": "一部分在电路中消失了，另一部分返回了信号源"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1320",
    "image": ""
  },
  {
    "id": "Q1228",
    "originalId": "LK0542",
    "text": "某电路输出信号功率是输入信号功率的 100 倍。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "20dB"
      },
      {
        "letter": "B",
        "text": "10dB"
      },
      {
        "letter": "C",
        "text": "100dB"
      },
      {
        "letter": "D",
        "text": "1dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1321",
    "image": ""
  },
  {
    "id": "Q1229",
    "originalId": "LK0543",
    "text": "某电路输出信号功率是输入信号功率的 100 万倍。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "60dB"
      },
      {
        "letter": "B",
        "text": "100dB"
      },
      {
        "letter": "C",
        "text": "99 万 dB"
      },
      {
        "letter": "D",
        "text": "100 万 dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1322",
    "image": ""
  },
  {
    "id": "Q1230",
    "originalId": "LK0544",
    "text": "某电路输出信号功率是输入信号功率的 5 倍。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "7dB"
      },
      {
        "letter": "B",
        "text": "3.5dB"
      },
      {
        "letter": "C",
        "text": "5dB"
      },
      {
        "letter": "D",
        "text": "14dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1323",
    "image": ""
  },
  {
    "id": "Q1231",
    "originalId": "LK0545",
    "text": "某电路输入信号功率是输出信号功率的一半。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "3dB"
      },
      {
        "letter": "B",
        "text": "-3dB"
      },
      {
        "letter": "C",
        "text": "0.5dB"
      },
      {
        "letter": "D",
        "text": "-0.5dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1324",
    "image": ""
  },
  {
    "id": "Q1232",
    "originalId": "LK0546",
    "text": "某电路输出信号电压是输入信号电压的 100 倍。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "40dB"
      },
      {
        "letter": "B",
        "text": "10dB"
      },
      {
        "letter": "C",
        "text": "100dB"
      },
      {
        "letter": "D",
        "text": "20dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1325",
    "image": ""
  },
  {
    "id": "Q1233",
    "originalId": "LK0547",
    "text": "某电路输出信号电压是输入信号电压的 1 万倍。该电路的增益为：（“x＾m”表示“x 的 m次方”）",
    "options": [
      {
        "letter": "A",
        "text": "80dB"
      },
      {
        "letter": "B",
        "text": "10,000dB"
      },
      {
        "letter": "C",
        "text": "9,999dB"
      },
      {
        "letter": "D",
        "text": "10＾4dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1326",
    "image": ""
  },
  {
    "id": "Q1234",
    "originalId": "LK0548",
    "text": "某电路输出信号电压是输入信号电压的 10 倍。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "20dB"
      },
      {
        "letter": "B",
        "text": "7dB"
      },
      {
        "letter": "C",
        "text": "14dB"
      },
      {
        "letter": "D",
        "text": "15dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1327",
    "image": ""
  },
  {
    "id": "Q1235",
    "originalId": "LK0549",
    "text": "某电路输入信号电压是输出信号电压的一半。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "6dB"
      },
      {
        "letter": "B",
        "text": "-6dB"
      },
      {
        "letter": "C",
        "text": "-3dB"
      },
      {
        "letter": "D",
        "text": "3dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1328",
    "image": ""
  },
  {
    "id": "Q1236",
    "originalId": "LK0550",
    "text": "某电路输出信号功率是输入信号功率的 1/100。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "-20dB"
      },
      {
        "letter": "B",
        "text": "-10dB"
      },
      {
        "letter": "C",
        "text": "-100dB"
      },
      {
        "letter": "D",
        "text": "100dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1329",
    "image": ""
  },
  {
    "id": "Q1237",
    "originalId": "LK0551",
    "text": "某电路输出信号功率是输入信号功率的百万分之一。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "-60dB"
      },
      {
        "letter": "B",
        "text": "-100dB"
      },
      {
        "letter": "C",
        "text": "990,000dB"
      },
      {
        "letter": "D",
        "text": "-1,000,000dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1330",
    "image": ""
  },
  {
    "id": "Q1238",
    "originalId": "LK0552",
    "text": "某电路输出信号功率是输入信号功率的 1/5。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "-7dB"
      },
      {
        "letter": "B",
        "text": "3.5dB"
      },
      {
        "letter": "C",
        "text": "-5dB"
      },
      {
        "letter": "D",
        "text": "-14dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1331",
    "image": ""
  },
  {
    "id": "Q1239",
    "originalId": "LK0553",
    "text": "某电路输出信号功率是输入信号功率的一半。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "-3dB"
      },
      {
        "letter": "B",
        "text": "3dB"
      },
      {
        "letter": "C",
        "text": "0.5dB"
      },
      {
        "letter": "D",
        "text": "-0.5dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1332",
    "image": ""
  },
  {
    "id": "Q1240",
    "originalId": "LK0554",
    "text": "某电路输出信号电压是输入信号电压的 1/100。该电路的增益为：",
    "options": [
      {
        "letter": "A",
        "text": "-40dB"
      },
      {
        "letter": "B",
        "text": "-10dB"
      },
      {
        "letter": "C",
        "text": "-100dB"
      },
      {
        "letter": "D",
        "text": "-20dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1333",
    "image": ""
  },
  {
    "id": "Q1241",
    "originalId": "LK0555",
    "text": "某电路输出信号电压是输入信号电压的万分之一。该电路的增益为：（“x＾m”表示“x 的m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "-80dB"
      },
      {
        "letter": "B",
        "text": "-10,000dB"
      },
      {
        "letter": "C",
        "text": "1/10,000dB"
      },
      {
        "letter": "D",
        "text": "10＾-4dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1334",
    "image": ""
  },
  {
    "id": "Q1242",
    "originalId": "LK0556",
    "text": "某电路输出信号电压是输入信号电压的 1/10。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "-20dB"
      },
      {
        "letter": "B",
        "text": "-7dB"
      },
      {
        "letter": "C",
        "text": "-14dB"
      },
      {
        "letter": "D",
        "text": "0.143dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1335",
    "image": ""
  },
  {
    "id": "Q1243",
    "originalId": "LK0557",
    "text": "某电路输出信号电压是输入信号电压的一半。该电路的增益约为：",
    "options": [
      {
        "letter": "A",
        "text": "-6dB"
      },
      {
        "letter": "B",
        "text": "6dB"
      },
      {
        "letter": "C",
        "text": "3dB"
      },
      {
        "letter": "D",
        "text": "-3dB"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "4.6.4",
    "type": "MC1-1336",
    "image": ""
  },
  {
    "id": "Q1244",
    "originalId": "LK0558",
    "text": "若信号依次通过增益为 x dB、y dB 和 z dB 的三个电路，则总增益为：（“x＾m”表示“x的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "(x + y + z) dB"
      },
      {
        "letter": "B",
        "text": "10＾((x + y + z) / 10) 倍"
      },
      {
        "letter": "C",
        "text": "(x × y × z) dB"
      },
      {
        "letter": "D",
        "text": "10＾((x × y × z) / 10) 倍"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.6.4",
    "type": "MC2-1337",
    "image": ""
  },
  {
    "id": "Q1245",
    "originalId": "LK0559",
    "text": "若信号通过增益为 x dB 的电路之后被功率分配器等分为两路，则每路增益为：（“x＾m”表示“x 的 m 次方”）",
    "options": [
      {
        "letter": "A",
        "text": "(x - 3) dB"
      },
      {
        "letter": "B",
        "text": "10＾((x - 3) / 10) 倍"
      },
      {
        "letter": "C",
        "text": "(x / 2) dB"
      },
      {
        "letter": "D",
        "text": "10＾((x / 2) / 10) 倍"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.6.4",
    "type": "MC2-1338",
    "image": ""
  },
  {
    "id": "Q1246",
    "originalId": "LK0560",
    "text": "接收机的信号强度表（S 表）标有 1 至 9 的度盘分度，分度间隔为 6dB。某电台以 15W的功率发射时，S 表读数为 S9。现在，该电台减小功率并再次发射，S 表的读数降至 S4。该台的当前发射功率约为：",
    "options": [
      {
        "letter": "A",
        "text": "15mW"
      },
      {
        "letter": "B",
        "text": "-18.2dBW"
      },
      {
        "letter": "C",
        "text": "0.5W"
      },
      {
        "letter": "D",
        "text": "-3dBW"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.6.4",
    "type": "MC2-1339",
    "image": ""
  },
  {
    "id": "Q1247",
    "originalId": "LK0561",
    "text": "接收机的信号强度表（S 表）标有 1 至 9 的度盘分度，分度间隔为 6dB。某电台以 100W的功率发射时，S 表读数为 S8。现在，该电台减小功率并再次发射时 S 表的读数降至 S5。此时该台的发射功率约为：",
    "options": [
      {
        "letter": "A",
        "text": "1.58W"
      },
      {
        "letter": "B",
        "text": "2dBW"
      },
      {
        "letter": "C",
        "text": "5.56W"
      },
      {
        "letter": "D",
        "text": "7.45dBW"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "4.6.4",
    "type": "MC2-1340",
    "image": ""
  },
  {
    "id": "Q1248",
    "originalId": "LK0562",
    "text": "功率为 0dBm 的射频信号通过增益为 23dB 的电路后，输出功率为：",
    "options": [
      {
        "letter": "A",
        "text": "23dBm"
      },
      {
        "letter": "B",
        "text": "200mW"
      },
      {
        "letter": "C",
        "text": "-7dBW"
      },
      {
        "letter": "D",
        "text": "3.16V"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.6.4",
    "type": "MC3-1341",
    "image": ""
  },
  {
    "id": "Q1249",
    "originalId": "LK0563",
    "text": "功率为 0dBμ的射频信号通过增益为 36dB 的电路后，输出功率为：",
    "options": [
      {
        "letter": "A",
        "text": "6dBm"
      },
      {
        "letter": "B",
        "text": "4mW"
      },
      {
        "letter": "C",
        "text": "-24dBW"
      },
      {
        "letter": "D",
        "text": "447mV"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.6.4",
    "type": "MC3-1342",
    "image": ""
  },
  {
    "id": "Q1250",
    "originalId": "LK0564",
    "text": "功率为 0dBW 的射频信号通过增益为-36dB 的电路后，输出功率为：",
    "options": [
      {
        "letter": "A",
        "text": "-6dBm"
      },
      {
        "letter": "B",
        "text": "0.25mW"
      },
      {
        "letter": "C",
        "text": "24dBμ"
      },
      {
        "letter": "D",
        "text": "112mV"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.6.4",
    "type": "MC3-1343",
    "image": ""
  },
  {
    "id": "Q1251",
    "originalId": "LK0565",
    "text": "功率为-133dBm 的射频信号通过增益为 60dB 的电路后，输出功率为：",
    "options": [
      {
        "letter": "A",
        "text": "-73dBm"
      },
      {
        "letter": "B",
        "text": "-43dBμ"
      },
      {
        "letter": "C",
        "text": "-103dBW"
      },
      {
        "letter": "D",
        "text": "50μV"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "4.6.4",
    "type": "MC3-1344",
    "image": ""
  },
  {
    "id": "Q1252",
    "originalId": "LK0025",
    "text": "业余无线电发射设备的下列指标必须符合国家的相关规定：",
    "options": [
      {
        "letter": "A",
        "text": "频率容限和杂散域发射功率"
      },
      {
        "letter": "B",
        "text": "频率调制频偏和调制度"
      },
      {
        "letter": "C",
        "text": "频率容限和带外发射"
      },
      {
        "letter": "D",
        "text": "指配频段和必要带宽"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.1",
    "type": "MC1-1345",
    "image": ""
  },
  {
    "id": "Q1253",
    "originalId": "LK0116",
    "text": "业余电台的无线电发射设备应符国家规定的下列主要技术指标：",
    "options": [
      {
        "letter": "A",
        "text": "符合频率容限、符合杂散发射最大允许功率电平"
      },
      {
        "letter": "B",
        "text": "杂散发射不低于最大允许功率电平、电源电压及频率符合国家电网标准、采用标准天线阻抗"
      },
      {
        "letter": "C",
        "text": "杂散发射不低于最大允许功率电平、频率漂移不低于频率容限、电源利用效率满足节能要求"
      },
      {
        "letter": "D",
        "text": "工作频率范围足够宽、杂散发射不低于最大允许功率电平、带宽大于允许最低值"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.1",
    "type": "MC1-1346",
    "image": ""
  },
  {
    "id": "Q1254",
    "originalId": "LX",
    "text": "频率容限是指：",
    "options": [
      {
        "letter": "A",
        "text": "发射所占频段的中心频率偏离指配频率的最大容许偏差"
      },
      {
        "letter": "B",
        "text": "发射的特征频率偏离参考频率的最大容许偏差"
      },
      {
        "letter": "C",
        "text": "发射所占频段的中心频率偏离最高频率的最大容许偏差"
      },
      {
        "letter": "D",
        "text": "发射的特征频率偏离必要频率的最大容许偏差"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "5.1.1",
    "type": "MC2-1347",
    "image": ""
  },
  {
    "id": "Q1255",
    "originalId": "LY0117",
    "text": "频率容限是发射设备的重要指标，通常用下述单位来表示：",
    "options": [
      {
        "letter": "A",
        "text": "百万分之几"
      },
      {
        "letter": "B",
        "text": "赫兹"
      },
      {
        "letter": "C",
        "text": "百分之几"
      },
      {
        "letter": "D",
        "text": "兆赫"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "5.1.1",
    "type": "MC2-1348",
    "image": ""
  },
  {
    "id": "Q1256",
    "originalId": "LY0118",
    "text": "杂散域发射功率是发射设备的重要指标，通常用下述单位来表示：",
    "options": [
      {
        "letter": "A",
        "text": "绝对功率 dBm"
      },
      {
        "letter": "B",
        "text": "低于载波发射功率的分贝值 dBc"
      },
      {
        "letter": "C",
        "text": "低于 PEP 发射功率的相对值 dB"
      },
      {
        "letter": "D",
        "text": "绝对功率（瓦）"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "5.1.1",
    "type": "MC3-1349",
    "image": ""
  },
  {
    "id": "Q1257",
    "originalId": "LY0137",
    "text": "杂散发射是指：",
    "options": [
      {
        "letter": "A",
        "text": "必要带宽之外的一个或多个频率的发射，其发射电平可降低而不致影响相应信息的传输"
      },
      {
        "letter": "B",
        "text": "杂散发射包括谐波发射、寄生发射"
      },
      {
        "letter": "C",
        "text": "杂散发射包括互调产物、变频产物"
      },
      {
        "letter": "D",
        "text": "杂散发射包括谐波发射、带外发射"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "5.1.1",
    "type": "MC3-1350",
    "image": ""
  },
  {
    "id": "Q1258",
    "originalId": "LY0139",
    "text": "业余无线电专用发射设备必须满足的主要技术指标要求包括：",
    "options": [
      {
        "letter": "A",
        "text": "频率容限和杂散辐射不超过限值，发射频率不超出国家规定的业余业务和卫星业余业务频率"
      },
      {
        "letter": "B",
        "text": "频率容限不低于限值，杂散辐射不超过限值，发射频率不超出国家规定的业余业务和卫星业余业务频率"
      },
      {
        "letter": "C",
        "text": "频率容限和杂散辐射不超过限值，发射频率包括业余业务和卫星业余业务频率"
      },
      {
        "letter": "D",
        "text": "发射功率不低于功率限值，输出阻抗符合工业标准"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.1",
    "type": "MC1-1351",
    "image": ""
  },
  {
    "id": "Q1259",
    "originalId": "LK0186",
    "text": "下列情况会产生减幅波辐射：",
    "options": [
      {
        "letter": "A",
        "text": "电路接触点打火"
      },
      {
        "letter": "B",
        "text": "对讲机按键发射"
      },
      {
        "letter": "C",
        "text": "电视机本振泄漏"
      },
      {
        "letter": "D",
        "text": "医用高频加热器泄漏"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.1",
    "type": "MC1-1352",
    "image": ""
  },
  {
    "id": "Q1260",
    "originalId": "LY1003",
    "text": "按照国家标准 GB8702-2014《电磁环境控制限值》，从电磁环境保护管理角度，向没有屏蔽空间发射电磁场可以免于管理的有：",
    "options": [
      {
        "letter": "A",
        "text": "频率范围为 0.1-3MHz，等效辐射功率小于 300 瓦的无线电通信设施（设备）"
      },
      {
        "letter": "B",
        "text": "频率范围为 3MHz-300GHz，等效辐射功率小于 100 瓦的无线电通信设施（设备）"
      },
      {
        "letter": "C",
        "text": "发射频率在 30MHz 以下的所有业余电台"
      },
      {
        "letter": "D",
        "text": "发射频率在 30MHz 以上的所有业余电台"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B"
    ],
    "chapter": "5.1.2",
    "type": "MC2-1353",
    "image": ""
  },
  {
    "id": "Q1261",
    "originalId": "LX",
    "text": "根据国家标准 GB8702-2014《电磁环境控制限值》，公众曝露是指：",
    "options": [
      {
        "letter": "A",
        "text": "公众所受的全部电场、磁场、电磁场照射"
      },
      {
        "letter": "B",
        "text": "职业照射"
      },
      {
        "letter": "C",
        "text": "医疗照射"
      },
      {
        "letter": "D",
        "text": "医学诊断或治疗所受到的辐射照射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.2",
    "type": "MC1-1354",
    "image": ""
  },
  {
    "id": "Q1262",
    "originalId": "LY1236",
    "text": "为什么我国《电磁环境控制限值》标准中的照射限值伴随频率有所不同？",
    "options": [
      {
        "letter": "A",
        "text": "人体对某些特定波长的电磁波有更多的吸收"
      },
      {
        "letter": "B",
        "text": "较低频率的无线电波不会穿透人体"
      },
      {
        "letter": "C",
        "text": "因为自然界中频率较高电磁波并不常见"
      },
      {
        "letter": "D",
        "text": "较低频率的无线电波较更高频率的无线电波拥有更高的能量"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.2",
    "type": "MC1-1355",
    "image": ""
  },
  {
    "id": "Q1263",
    "originalId": "LX",
    "text": "关于自制、改装、拼装无线电发射设备，下列说法正确的是：",
    "options": [
      {
        "letter": "A",
        "text": "自制、改装、拼装的无线电发射设备，应符合《业余无线电设备射频技术要求及测试方法》（GB/T 32658-2016）所列技术要求"
      },
      {
        "letter": "B",
        "text": "自制、改装、拼装的无线电发射设备，应符合《短波单边带通信设备通用规范》（GB/T16946-2017）所列技术要求"
      },
      {
        "letter": "C",
        "text": "无线电管理机构可根据相关标准规范免费开展有关技术检测"
      },
      {
        "letter": "D",
        "text": "自制、改装、拼装无线电发射设备可不受无线电管理机构的监督管理"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "5.1.2",
    "type": "MC3-1356",
    "image": ""
  },
  {
    "id": "Q1264",
    "originalId": "LK1235",
    "text": "空中的 VHF 和 UHF 信号属于下面哪一类辐射？",
    "options": [
      {
        "letter": "A",
        "text": "非电离辐射"
      },
      {
        "letter": "B",
        "text": "电离辐射"
      },
      {
        "letter": "C",
        "text": "阿尔法辐射"
      },
      {
        "letter": "D",
        "text": "伽玛辐射"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.2",
    "type": "MC1-1357",
    "image": ""
  },
  {
    "id": "Q1265",
    "originalId": "LK0996",
    "text": "业余电台安装防雷装置是为了防止雷电危害。传统防雷装置的主要组成部分包括：",
    "options": [
      {
        "letter": "A",
        "text": "接闪器（避雷针）、引下线、接地体"
      },
      {
        "letter": "B",
        "text": "天线、断路器、地线"
      },
      {
        "letter": "C",
        "text": "避雷针、氖灯、自复保险丝"
      },
      {
        "letter": "D",
        "text": "避雷针、氧化锌过压保护器、断路器"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1358",
    "image": ""
  },
  {
    "id": "Q1266",
    "originalId": "LK0997",
    "text": "防雷接地的作用是：",
    "options": [
      {
        "letter": "A",
        "text": "把接闪器引入的雷击电流有效地泄入大地"
      },
      {
        "letter": "B",
        "text": "用接闪器感应到的雷电高压启动过压保护电路"
      },
      {
        "letter": "C",
        "text": "有效地阻断接闪器引入的雷击电流使其不致流入大地"
      },
      {
        "letter": "D",
        "text": "当接闪器引入雷击电流时迅速烧断熔丝，阻断其流动"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1359",
    "image": ""
  },
  {
    "id": "Q1267",
    "originalId": "LK0998",
    "text": "关于防雷装置的接地，最基本要求为：",
    "options": [
      {
        "letter": "A",
        "text": "要有单独的接地体，接地电阻要小，接闪器到接地体之间的引下线应尽量短而粗"
      },
      {
        "letter": "B",
        "text": "可以利用自来水管作为接地体，如果这种管线有相当长的一段是埋入地下的"
      },
      {
        "letter": "C",
        "text": "交流电网的“零线”在配电系统中已经接地。这可代替防雷接地体及其引下线"
      },
      {
        "letter": "D",
        "text": "接闪器到接地体之间的引下线平时没有电流流过，采用直径 0.5 毫米的导线足矣"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1360",
    "image": ""
  },
  {
    "id": "Q1268",
    "originalId": "LK0999",
    "text": "对于一般建筑物，单支避雷针的保护范围至多能有多大：",
    "options": [
      {
        "letter": "A",
        "text": "在避雷针顶点至地面之间，由 60 米半径滚球曲线所构成的空间"
      },
      {
        "letter": "B",
        "text": "在任何情况下，避雷针都可以保护其周边低于避雷针高度的空间"
      },
      {
        "letter": "C",
        "text": "在任何情况下，避雷针都可以保护其周边半径 30 米之内的物体"
      },
      {
        "letter": "D",
        "text": "从避雷针顶点起、以避雷针高度为半径所做半球体以内的空间"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1361",
    "image": ""
  },
  {
    "id": "Q1269",
    "originalId": "LK1125",
    "text": "下列哪种导电材料最适宜连接天线、塔架和入室馈线等处的各个接地部件？",
    "options": [
      {
        "letter": "A",
        "text": "镀银软铜丝编织扁带"
      },
      {
        "letter": "B",
        "text": "圆形铜包钢单股导线"
      },
      {
        "letter": "C",
        "text": "以太网双绞线"
      },
      {
        "letter": "D",
        "text": "50-3 同轴电缆"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1362",
    "image": ""
  },
  {
    "id": "Q1270",
    "originalId": "LK1228",
    "text": "在为同轴馈线安装避雷器时应当注意什么？",
    "options": [
      {
        "letter": "A",
        "text": "将所有避雷器的地线接到同一个金属条带上，然后将条带可靠连到室外的接地处"
      },
      {
        "letter": "B",
        "text": "在每个避雷器的地线连接处安装开关以在发信时断开，防止射频电流损伤避雷器"
      },
      {
        "letter": "C",
        "text": "将每个避雷器的接地连线都单独引出，然后将它们与电台的地线连在一起"
      },
      {
        "letter": "D",
        "text": "可用廉价的氖灯或气体放电管自制避雷器。这样的 DIY 可谓经济实用，效果卓著"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1363",
    "image": ""
  },
  {
    "id": "Q1271",
    "originalId": "LK1232",
    "text": "以下哪一项是天线铁塔防雷接地的有效措施？",
    "options": [
      {
        "letter": "A",
        "text": "接地连接要尽可能地短而直"
      },
      {
        "letter": "B",
        "text": "确保需要弯折的地线已做干净漂亮的直角弯"
      },
      {
        "letter": "C",
        "text": "为接地系统做好防水处理"
      },
      {
        "letter": "D",
        "text": "打入地下的接地装置应当尽量远离天线塔"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.3",
    "type": "MC1-1364",
    "image": ""
  },
  {
    "id": "Q1272",
    "originalId": "LK1000",
    "text": "考虑实际工作环境必然存在一定的湿度，则根据 GB/T 3805－2008《特低电压 ELV 限值》在潮湿条件下的限值，当人体握紧某个带电零件时，零件与人体间的电压不可高于：",
    "options": [
      {
        "letter": "A",
        "text": "交流 16V（r.m.s.），直流 33V"
      },
      {
        "letter": "B",
        "text": "交流 24V（r.m.s.），直流 36V"
      },
      {
        "letter": "C",
        "text": "交流 36V（r.m.s.），直流 24V"
      },
      {
        "letter": "D",
        "text": "交流 6.3V（r.m.s.），直流 13.8V"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1365",
    "image": ""
  },
  {
    "id": "Q1273",
    "originalId": "LK1001",
    "text": "假如接触电压相同，则触及带有射频电压（例如，频率不低于 LF）的裸露导线与触及带有直流或交流 50Hz 电压的裸露导线相比，人体所受的安全威胁有什么不同？",
    "options": [
      {
        "letter": "A",
        "text": "致死风险有所下降，但是灼伤皮肤或深层皮下组织的风险显著上升"
      },
      {
        "letter": "B",
        "text": "更容易导致神经系统损伤或使心肺功能紊乱，存在更高的致死风险"
      },
      {
        "letter": "C",
        "text": "射频交流电从不威胁人身安全，所以发射机的天线都可以随意触摸"
      },
      {
        "letter": "D",
        "text": "触及不同频率但电压相同的交流电，人体当然面临相同的安全威胁"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1366",
    "image": ""
  },
  {
    "id": "Q1274",
    "originalId": "LK1043",
    "text": "如果用两手分别接触电压有效值相同但频率不同的电路的两个端点，则所受安全威胁由大到小可以排序为：",
    "options": [
      {
        "letter": "A",
        "text": "工频交流电、HF 射频交流电、UHF 射频交流电"
      },
      {
        "letter": "B",
        "text": "UHF 射频交流电、HF 射频交流电、工频交流电"
      },
      {
        "letter": "C",
        "text": "HF 射频交流电、工频交流电、UHF 射频交流电"
      },
      {
        "letter": "D",
        "text": "HF 射频交流电、UHF 射频交流电、工频交流电"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1367",
    "image": ""
  },
  {
    "id": "Q1275",
    "originalId": "LK1040",
    "text": "如果不得已，必须带电检修由市电供电的无线电设备，则应做到：",
    "options": [
      {
        "letter": "A",
        "text": "双脚与地绝缘，单手操作，另一只手不触摸机壳等任何与电路或接地有关的金属件"
      },
      {
        "letter": "B",
        "text": "双脚与地绝缘，单手操作，另一只手通过触摸机壳或水管等接地物件探测是否有电"
      },
      {
        "letter": "C",
        "text": "只要设备外壳良好接地，双脚是否与地绝缘、双手是否同时操作都不存在安全风险"
      },
      {
        "letter": "D",
        "text": "只要设备外壳与地绝缘，双脚是否与地绝缘、双手是否同时操作都不存在安全关系"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1368",
    "image": ""
  },
  {
    "id": "Q1276",
    "originalId": "LK1227",
    "text": "设备的外壳带电可能危及人身安全。相关预防措施包括：",
    "options": [
      {
        "letter": "A",
        "text": "对于使用交流市电供电的设备，应将其金属机箱与某个可靠的公共地线相连"
      },
      {
        "letter": "B",
        "text": "应在供电线路中安装漏电保护器，以在发生漏电时迅速切断供电"
      },
      {
        "letter": "C",
        "text": "如果某设备使用了带有单独保护地线的三线插头，则必须确认接地是有效的"
      },
      {
        "letter": "D",
        "text": "公共地线应具有较低的接地电阻，与自来水管道相连是个一劳永逸的好主意"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "5.1.4",
    "type": "MC3-1369",
    "image": ""
  },
  {
    "id": "Q1277",
    "originalId": "LK1233",
    "text": "即使设备的电源线已经拔掉，检修时仍可能遇到什么安全风险？",
    "options": [
      {
        "letter": "A",
        "text": "充满高电压的电容器可能让维修者遭遇电击风险"
      },
      {
        "letter": "B",
        "text": "地磁活动可在变压器中激起高压，电到维修人员"
      },
      {
        "letter": "C",
        "text": "打开电源设备或电子管线性放大器的机箱，其内置保险丝就会烧断"
      },
      {
        "letter": "D",
        "text": "如果打开机箱，静电放电就可能损坏设备的接地系统"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1370",
    "image": ""
  },
  {
    "id": "Q1278",
    "originalId": "LK1234",
    "text": "自制由 220 伏交流市电供电的设备，安全措施应至少包括：",
    "options": [
      {
        "letter": "A",
        "text": "在交流电源入口的火线中串联一个保险丝"
      },
      {
        "letter": "B",
        "text": "在交流供电入口处并联一个交流电压表"
      },
      {
        "letter": "C",
        "text": "在交流供电入口处串联一个电感"
      },
      {
        "letter": "D",
        "text": "在交流供电入口处并联一个电容"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.4",
    "type": "MC1-1371",
    "image": ""
  },
  {
    "id": "Q1279",
    "originalId": "LX",
    "text": "如何确保自制的业余无线电作品具有较高的用电安全性？",
    "options": [
      {
        "letter": "A",
        "text": "使用三芯电源线和金属机箱，将机箱与市电插座的地线可靠连接"
      },
      {
        "letter": "B",
        "text": "如果设备内部含有高压整流装置，则为其滤波电容并联泄放电阻"
      },
      {
        "letter": "C",
        "text": "为业余自制的射频功率放大器安装断开市电供应的机箱联动开关"
      },
      {
        "letter": "D",
        "text": "为配电箱和天馈系统的配线柜安装喷淋装置，发现火警立即喷水"
      }
    ],
    "isMulti": true,
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chapter": "5.1.4",
    "type": "MC3-1372",
    "image": ""
  },
  {
    "id": "Q1280",
    "originalId": "LK1230",
    "text": "使用普通 12 伏铅酸蓄电池为电台供电存在什么潜在风险？",
    "options": [
      {
        "letter": "A",
        "text": "如果通风不良，会有爆炸性气体聚集"
      },
      {
        "letter": "B",
        "text": "有高电压，存在触电风险"
      },
      {
        "letter": "C",
        "text": "会释放臭氧，进而污染大气层"
      },
      {
        "letter": "D",
        "text": "若长时间闲置不用就可能自燃"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.5",
    "type": "MC1-1373",
    "image": ""
  },
  {
    "id": "Q1281",
    "originalId": "LK1231",
    "text": "如果铅酸蓄电池的充电或放电过程过快会有什么风险？",
    "options": [
      {
        "letter": "A",
        "text": "电池可能过热，甚至释放氢气，抬升爆炸风险"
      },
      {
        "letter": "B",
        "text": "电压会变为负值，导致电池报废。这就是所谓“反极”"
      },
      {
        "letter": "C",
        "text": "导致“记忆效应”，从而使电池的可用容量下降"
      },
      {
        "letter": "D",
        "text": "可能导致过高的电池电压，抬升触电风险"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.5",
    "type": "MC1-1374",
    "image": ""
  },
  {
    "id": "Q1282",
    "originalId": "LK1039",
    "text": "电台室如遇电气设备、电线电缆或者电源装置失火，正确的处置应当为：",
    "options": [
      {
        "letter": "A",
        "text": "立即切断所有供电，使用二氧化碳灭火器或干粉灭火器"
      },
      {
        "letter": "B",
        "text": "立即切断所有供电，使用泡沫灭火器灭火。不得已时可用干砂灭火"
      },
      {
        "letter": "C",
        "text": "立即切断所有供电，用水灭火"
      },
      {
        "letter": "D",
        "text": "迅速起身逃离火场"
      }
    ],
    "isMulti": false,
    "correctAnswers": [
      "A"
    ],
    "chapter": "5.1.5",
    "type": "MC1-1375",
    "image": ""
  }
];

/* 添加模拟题目（实际使用时替换为完整题库）
for (let i = 6; i <= 200; i++) {
  const multi = i % 4 === 0;
  questionBank.push({
    id: `Q${i}`,
    text: `第 ${i} 道模拟题目。这是${multi ? '多选题' : '单选题'}示例。`,
    options: [
      { letter: "A", text: "选项A" },
      { letter: "B", text: "选项B" },
      { letter: "C", text: "选项C" },
      { letter: "D", text: "选项D" }
    ],
    isMulti: multi,
    correctAnswers: multi ? ["A", "B"] : ["A"],
    chapter: "模拟",
    type: multi ? "MC2-模拟" : "MC1-模拟"
  });
}*/