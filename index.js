const fs = require('fs')
const baseData = require('./test-metadata.json')

function getBackgroundScore(val) {
  if (val === 'void') {
    return 15000
  } else if (val === 'envy') {
    return 14000
  } else if (val === 'gluttony') {
    return 13000
  } else if (val === 'greed') {
    return 12000
  } else if (val === 'lust') {
    return 11000
  } else if (val === 'pride') {
    return 10000
  } else if (val === 'sloth') {
    return 9000
  } else if (val === 'wrath') {
    return 8000
  } else if (val === 'baby blue') {
    return 7000
  } else if (val === 'buttermilk') {
    return 6000
  } else if (val === 'cherry blossom') {
    return 5000
  } else if (val === 'cream gold') {
    return 4000
  } else if (val === 'soap') {
    return 3000
  } else if (val === 'yellow green') {
    return 2000
  } else {
    return 1000
  }
}

function getBodyScore(val) {
  if (val === 'white') {
    return 7000
  } else if (val === 'red') {
    return 5000
  } else {
    return 3118
  }
}

function getClothesScore(val) {
  if (val === 'black cape') {
    return 9495
  } else if (val === 'red cape') {
    return 9394
  } else if (val === 'devil') {
    return 9302
  } else if (val === 'angel') {
    return 9194
  } else if (val === 'kings robe') {
    return 9102
  } else if (val === 'flame cape') {
    return 9010
  } else if (val === 'snowman') {
    return 8885
  } else if (val === 'devil wings') {
    return 8666
  } else if (val === 'angel wings') {
    return 8524
  } else if (val === 'graduation suit') {
    return 8373
  } else if (val === 'white ninja') {
    return 8290
  } else if (val === 'general') {
    return 8198
  } else if (val === 'gold knight armor') {
    return 8073
  } else if (val === 'tiger') {
    return 7981
  } else if (val === 'black taekwondo') {
    return 7864
  } else if (val === 'angel robe') {
    return 7654
  } else if (val === 'devil armor') {
    return 7579
  } else if (val === 'astro') {
    return 7445
  } else if (val === 'zebra') {
    return 7353
  } else if (val === 'knight armor') {
    return 7211
  } else if (val === 'police') {
    return 7094
  } else if (val === 'hanbok') {
    return 6968
  } else if (val === 'cowboy') {
    return 6843
  } else if (val === 'ninja') {
    return 6751
  } else if (val === 'noblesse') {
    return 6651
  } else if (val === 'taekwondo') {
    return 6534
  } else if (val === 'm costume') {
    return 6433
  } else if (val === 'santa') {
    return 5623
  } else if (val === 'red muffler') {
    return 5618
  } else if (val === 'leather jacket') {
    return 5531
  } else if (val === 'brown muffler') {
    return 5468
  } else if (val === 'chef') {
    return 5406
  } else if (val === 'gray muffler') {
    return 5393
  } else if (val === 'black suit') {
    return 5344
  } else if (val === 'doctor') {
    return 5305
  } else if (val === 'pink suit') {
    return 5269
  } else if (val === 'painter') {
    return 5213
  } else if (val === 'overalls') {
    return 5138
  } else if (val === 'padded jacket') {
    return 5038
  } else if (val === 'shower robe') {
    return 4963
  } else if (val === 'varsity jacket') {
    return 4871
  } else if (val === 'platinum medal') {
    return 4515
  } else if (val === 'gold medal') {
    return 4365
  } else if (val === 'green basketball vest') {
    return 4132
  } else if (val === 'rainbow lei') {
    return 4081
  } else if (val === 'yellow hoodie') {
    return 4057
  } else if (val === 'blue hoodie') {
    return 3907
  } else if (val === 'yellow pajama') {
    return 3906
  } else if (val === 'red basketball vest') {
    return 3832
  } else if (val === 'red bow tie') {
    return 3804
  } else if (val === 'black bow tie') {
    return 3729
  } else if (val === 'orange basketball vest') {
    return 3682
  } else if (val === 'blue pajama') {
    return 3681
  } else if (val === 'pink hoodie') {
    return 3607
  } else if (val === 'red lei') {
    return 3331
  } else if (val === 'pink pajama') {
    return 3306
  } else if (val === 'apron') {
    return 3153
  } else if (val === 'sling bag shirt') {
    return 3053
  } else if (val === 'purple lei') {
    return 3031
  } else if (val === 'chain shirt') {
    return 2961
  } else if (val === 'purple hawaiian') {
    return 2940
  } else if (val === 'blue hawaiian') {
    return 2865
  } else if (val === 'blue sweatshirt') {
    return 2664
  } else if (val === 'silver medal') {
    return 2640
  } else if (val === 'green sweatshirt') {
    return 2589
  } else if (val === 'bronze medal') {
    return 2190
  } else {
    return 1767
  }
}

function getEyesScore(val) {
  if (val === 'void') {
    return 9491
  } else if (val === 'futurism') {
    return 9271
  } else if (val === 'vr') {
    return 9051
  } else if (val === 'cats bitcoin') {
    return 8882
  } else if (val === 'thug life') {
    return 7574
  } else if (val === 'scouter green') {
    return 7364
  } else if (val === 'scouter pink') {
    return 7174
  } else if (val === 'bitcoin') {
    return 6985
  } else if (val === 'fire') {
    return 6855
  } else if (val === 'owl') {
    return 6725
  } else if (val === 'ethereum') {
    return 6046
  } else if (val === 'cat') {
    return 5916
  } else if (val === 'twinkle') {
    return 5666
  } else if (val === 'sunglasses') {
    return 5426
  } else if (val === 'wild') {
    return 5196
  } else if (val === 'wish') {
    return 4966
  } else if (val === 'knock out') {
    return 4966
  } else if (val === 'naughty') {
    return 4417
  } else if (val === 'side glance') {
    return 3857
  } else if (val === 'bored') {
    return 3617
  } else if (val === 'star candy') {
    return 3377
  } else if (val === 'bang') {
    return 3157
  } else if (val === 'blush') {
    return 2888
  } else if (val === 'sad') {
    return 2618
  } else if (val === 'sleepy') {
    return 2418
  } else if (val === 'closed') {
    return 1719
  } else if (val === 'foolish') {
    return 1459
  } else if (val === 'charming') {
    return 1459
  } else if (val === 'tired') {
    return 919
  } else if (val === 'wink') {
    return 659
  } else {
    return 200
  }
}

function getHeadScore(val) {
  if (val === 'astro helmet') {
    return 9331
  } else if (val === 'kings crown') {
    return 9236
  } else if (val === 'rainbow afro') {
    return 9092
  } else if (val === 'halo') {
    return 8948
  } else if (val === 'devil horns') {
    return 8829
  } else if (val === 'gold knight helmet') {
    return 8717
  } else if (val === 'doge mask') {
    return 8435
  } else if (val === 'sorting hat') {
    return 8235
  } else if (val === 'gat') {
    return 8107
  } else if (val === 'pirate hat') {
    return 7988
  } else if (val === 'propeller cap') {
    return 7828
  } else if (val === 'police cap') {
    return 7676
  } else if (val === 'cowboy hat') {
    return 7540
  } else if (val === 'knight helmet') {
    return 7412
  } else if (val === 'gold crown') {
    return 7252
  } else if (val === 'afro') {
    return 7157
  } else if (val === 'm hat') {
    return 7030
  } else if (val === 'alpine hat') {
    return 6886
  } else if (val === 'chef hat') {
    return 6734
  } else if (val === 'santa') {
    return 6639
  } else if (val === 'graduation hat') {
    return 6511
  } else if (val === 'tiger bucket') {
    return 6400
  } else if (val === 'zebra bucket') {
    return 6313
  } else if (val === 'silver crown') {
    return 6185
  } else if (val === 'pajama hat') {
    return 5392
  } else if (val === 'red goblin horns') {
    return 5143
  } else if (val === 'blue cap') {
    return 5124
  } else if (val === 'claw machine') {
    return 5056
  } else if (val === 'banana') {
    return 4960
  } else if (val === 'green cap') {
    return 4950
  } else if (val === 'icecream') {
    return 4865
  } else if (val === 'pink cap') {
    return 4863
  } else if (val === 'red apple') {
    return 4828
  } else if (val === 'bulb') {
    return 4730
  } else if (val === 'siren') {
    return 4643
  } else if (val === 'green rocker') {
    return 4619
  } else if (val === 'pink rocker') {
    return 4532
  } else if (val === 'piercing watch') {
    return 4498
  } else if (val === 'painter hat') {
    return 4401
  } else if (val === 'pail') {
    return 4258
  } else if (val === 'blue beanie') {
    return 3471
  } else if (val === 'green beanie') {
    return 3384
  } else if (val === 'pink hair band') {
    return 3288
  } else if (val === 'blue apple') {
    return 3262
  } else if (val === 'yellow hair band') {
    return 3114
  } else if (val === 'blue hair band') {
    return 3027
  } else if (val === 'blue bucket') {
    return 3001
  } else if (val === 'pink beanie') {
    return 2949
  } else if (val === 'green apple') {
    return 2914
  } else if (val === 'mirpods') {
    return 2841
  } else if (val === 'green party hat') {
    return 2827
  } else if (val === 'yellow bucket') {
    return 2740
  } else if (val === 'tennis ball') {
    return 2679
  } else if (val === 'blue party hat') {
    return 2566
  } else if (val === 'baseball') {
    return 2418
  } else if (val === 'piercing') {
    return 2236
  } else {
    return 425
  }
}

function getMouthScore(val) {
  if (val === 'pipe') {
    return 9616
  } else if (val === 'pizza') {
    return 9252
  } else if (val === 'zipper') {
    return 8913
  } else if (val === 'ninja mask') {
    return 8138
  } else if (val === 'pink bubble gum') {
    return 7865
  } else if (val === 'blue bubble gum') {
    return 7612
  } else if (val === 'red party flute') {
    return 7339
  } else if (val === 'green party flute') {
    return 7133
  } else if (val === 'santa beard') {
    return 6542
  } else if (val === 'lollipop') {
    return 6276
  } else if (val === 'mustache') {
    return 5898
  } else if (val === 'dental mask') {
    return 5651
  } else if (val === 'whistle') {
    return 5352
  } else if (val === 'rose') {
    return 5106
  } else if (val === 'circle beard') {
    return 4721
  } else if (val === 'surprised') {
    return 4488
  } else if (val === 'drool') {
    return 4241
  } else if (val === 'chu') {
    return 4021
  } else if (val === 'hoo') {
    return 3775
  } else if (val === 'closed') {
    return 3192
  } else if (val === 'impish') {
    return 2701
  } else if (val === 'canine') {
    return 2487
  } else if (val === 'smile') {
    return 2221
  } else if (val === 'cute') {
    return 1968
  } else if (val === 'upset') {
    return 1755
  } else {
    return 200
  }
}

function getAccessoryScore(val) {
  if (val === 'headphone') {
    return 3010
  } else if (val === 'flute glass') {
    return 2746
  } else if (val === 'white spotlight') {
    return 2741
  } else if (val === 'yellow spotlight') {
    return 2602
  } else if (val === 'lamp') {
    return 2595
  } else if (val === 'mic') {
    return 2505
  } else if (val === 'rocket') {
    return 2498
  } else if (val === 'miphone') {
    return 2478
  } else if (val === 'cake') {
    return 2418
  } else if (val === 'chocolate') {
    return 2410
  } else if (val === 'cotton candy') {
    return 2408
  } else {
    return 100
  }
}

let scoreArr = []
let rankingArr = []
let duplicateArr = []

function score() {
  let scoreData = []
  for (let i = 0; i < baseData.length; i++) {
    let num =
      getBackgroundScore(baseData[i].background) +
      getBodyScore(baseData[i].body) +
      getClothesScore(baseData[i].clothes) +
      getEyesScore(baseData[i].eyes) +
      getHeadScore(baseData[i].head) +
      getMouthScore(baseData[i].mouth) +
      getAccessoryScore(baseData[i].accessory)
    scoreData.push(num)
  }
  fs.writeFileSync('scores.txt', scoreData.toString())
  scoreArr = scoreData
}

function ranking(n, arr) {
  let rankingData = []
  for (let i = 0; i < n; i++) {
    let rank = 1
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) rank++
    }
    rankingData.push(rank)
  }
  fs.writeFileSync('ranking.txt', rankingData.toString())
  rankingArr = rankingData
}

function duplication(rankingArr) {
  let data = []
  for (let i = 0; i < rankingArr.length; i++) {
    if (rankingArr.indexOf(rankingArr[i]) === rankingArr.lastIndexOf(rankingArr[i])) {
    } else {
      data.push(rankingArr[i])
    }
  }
  fs.writeFileSync('duplication.txt', data.toString())
  duplicateArr = data
}

score()
ranking(scoreArr.length, scoreArr)
duplication(rankingArr)
console.log(duplicateArr.length)
