const fs = require('fs')
const baseData = require('./test-metadata.json')

function getBackgroundScore(val) {
  if (val === 'cool gray') {
    return 1996
  } else if (val === 'compete') {
    return 1724
  } else if (val === 'hunger') {
    return 1724
  } else if (val === 'possessive') {
    return 1724
  } else if (val === 'fancy') {
    return 1724
  } else if (val === 'ego') {
    return 1724
  } else if (val === 'lazy') {
    return 1724
  } else if (val === 'anger') {
    return 1724
  } else if (val === 'baby blue') {
    return 1287
  } else if (val === 'buttermilk') {
    return 1287
  } else if (val === 'cherry blossom') {
    return 1287
  } else if (val === 'cream gold') {
    return 1287
  } else if (val === 'soap') {
    return 1287
  } else if (val === 'yellow green') {
    return 1287
  } else if (val === 'blue bell') {
    return 1287
  } else if (val === 'void') {
    return 14200
  } else if (val === 'pride') {
    return 14100
  } else if (val === 'lust') {
    return 14000
  } else if (val === 'sloth') {
    return 13900
  } else if (val === 'envy') {
    return 13800
  } else if (val === 'greed') {
    return 13700
  } else if (val === 'gluttony') {
    return 13600
  } else if (val === 'wrath') {
    return 13500
  } else if (val === 'zombie') {
    return 13400
  } else if (val === 'cyber') {
    return 13300
  } else if (val === 'alien') {
    return 13200
  } else if (val === 'invisible') {
    return 13100
  } else {
    return 0
  }
}

function getBodyScore(val) {
  if (val === 'white') {
    return 2000
  } else if (val === 'red') {
    return 1000
  } else if (val === 'origin') {
    return 118
  } else if (val === 'void') {
    return 14200
  } else if (val === 'pride') {
    return 14100
  } else if (val === 'lust') {
    return 14000
  } else if (val === 'sloth') {
    return 13900
  } else if (val === 'envy') {
    return 13800
  } else if (val === 'greed') {
    return 13700
  } else if (val === 'gluttony') {
    return 13600
  } else if (val === 'wrath') {
    return 13500
  } else if (val === 'zombie') {
    return 13400
  } else if (val === 'cyber') {
    return 13300
  } else if (val === 'alien') {
    return 13200
  } else if (val === 'invisible') {
    return 13100
  } else {
    return 0
  }
}

function getEyesScore(val) {
  if (val === 'void x') {
    return 19608
  } else if (val === 'futurism') {
    return 15873
  } else if (val === 'vr') {
    return 13333
  } else if (val === 'cats bitcoin') {
    return 12195
  } else if (val === 'thug life') {
    return 4926
  } else if (val === 'scouter green') {
    return 4673
  } else if (val === 'scouter pink') {
    return 4484
  } else if (val === 'bitcoin') {
    return 4310
  } else if (val === 'fire') {
    return 4255
  } else if (val === 'owl') {
    return 4202
  } else if (val === 'ethereum') {
    return 3378
  } else if (val === 'cat') {
    return 3344
  } else if (val === 'twinkle') {
    return 3289
  } else if (val === 'sunglasses') {
    return 3247
  } else if (val === 'wild') {
    return 3215
  } else if (val === 'wish') {
    return 3185
  } else if (val === 'knock out') {
    return 3155
  } else if (val === 'naughty') {
    return 3040
  } else if (val === 'side glance') {
    return 2740
  } else if (val === 'bored') {
    return 2710
  } else if (val === 'star candy') {
    return 2681
  } else if (val === 'bang') {
    return 2667
  } else if (val === 'blush') {
    return 2618
  } else if (val === 'sad') {
    return 2571
  } else if (val === 'sleepy') {
    return 2571
  } else if (val === 'closed') {
    return 2278
  } else if (val === 'foolish') {
    return 2247
  } else if (val === 'charming') {
    return 2203
  } else if (val === 'tired') {
    return 2179
  } else if (val === 'wink') {
    return 2151
  } else if (val === 'origin') {
    return 998
  } else if (val === 'void') {
    return 14300
  } else if (val === 'pride') {
    return 14200
  } else if (val === 'lust') {
    return 14100
  } else if (val === 'sloth') {
    return 14000
  } else if (val === 'envy') {
    return 13900
  } else if (val === 'greed') {
    return 13800
  } else if (val === 'gluttony') {
    return 13700
  } else if (val === 'wrath') {
    return 13600
  } else if (val === 'zombie') {
    return 13500
  } else if (val === 'cyber') {
    return 13400
  } else if (val === 'alien') {
    return 13300
  } else if (val === 'invisible') {
    return 13200
  } else {
    return 0
  }
}

function getClothesScore(val) {
  if (val === 'black cape') {
    return 16667
  } else if (val === 'red cape') {
    return 14493
  } else if (val === 'devil') {
    return 14085
  } else if (val === 'angel') {
    return 13333
  } else if (val === 'kings robe') {
    return 12987
  } else if (val === 'flame cape') {
    return 12658
  } else if (val === 'snowman') {
    return 11765
  } else if (val === 'devil wings') {
    return 9804
  } else if (val === 'angel wings') {
    return 9091
  } else if (val === 'graduation suit') {
    return 8403
  } else if (val === 'white ninja') {
    return 8333
  } else if (val === 'general') {
    return 8197
  } else if (val === 'gold knight armor') {
    return 7813
  } else if (val === 'tiger') {
    return 7692
  } else if (val === 'black taekwondo') {
    return 7407
  } else if (val === 'angel robe') {
    return 6623
  } else if (val === 'devil armor') {
    return 6623
  } else if (val === 'astro') {
    return 6329
  } else if (val === 'zebra') {
    return 6250
  } else if (val === 'knight armor') {
    return 5952
  } else if (val === 'police') {
    return 5780
  } else if (val === 'hanbok') {
    return 5587
  } else if (val === 'cowboy') {
    return 5405
  } else if (val === 'ninja') {
    return 5348
  } else if (val === 'noblesse') {
    return 5263
  } else if (val === 'taekwondo') {
    return 5128
  } else if (val === 'm costume') {
    return 5051
  } else if (val === 'santa') {
    return 4484
  } else if (val === 'red muffler') {
    return 4695
  } else if (val === 'leather jacket') {
    return 4444
  } else if (val === 'brown muffler') {
    return 3236
  } else if (val === 'chef') {
    return 4329
  } else if (val === 'gray muffler') {
    return 3236
  } else if (val === 'black suit') {
    return 4032
  } else if (val === 'doctor') {
    return 4274
  } else if (val === 'pink suit') {
    return 3333
  } else if (val === 'painter') {
    return 4237
  } else if (val === 'overalls') {
    return 4237
  } else if (val === 'padded jacket') {
    return 4184
  } else if (val === 'shower robe') {
    return 4184
  } else if (val === 'varsity jacket') {
    return 4149
  } else if (val === 'platinum medal') {
    return 3788
  } else if (val === 'gold medal') {
    return 2604
  } else if (val === 'green basketball vest') {
    return 3401
  } else if (val === 'rainbow lei') {
    return 3922
  } else if (val === 'yellow hoodie') {
    return 3401
  } else if (val === 'blue hoodie') {
    return 3236
  } else if (val === 'yellow pajama') {
    return 3300
  } else if (val === 'red basketball vest') {
    return 3236
  } else if (val === 'red bow tie') {
    return 4000
  } else if (val === 'black bow tie') {
    return 3937
  } else if (val === 'orange basketball vest') {
    return 3030
  } else if (val === 'blue pajama') {
    return 3145
  } else if (val === 'pink hoodie') {
    return 3030
  } else if (val === 'red lei') {
    return 2950
  } else if (val === 'pink pajama') {
    return 2950
  } else if (val === 'apron') {
    return 3876
  } else if (val === 'sling bag shirt') {
    return 3831
  } else if (val === 'purple lei') {
    return 2604
  } else if (val === 'chain shirt') {
    return 3802
  } else if (val === 'purple hawaiian') {
    return 3185
  } else if (val === 'blue hawaiian') {
    return 3086
  } else if (val === 'blue sweatshirt') {
    return 3067
  } else if (val === 'silver medal') {
    return 2232
  } else if (val === 'green sweatshirt') {
    return 2924
  } else if (val === 'bronze medal') {
    return 1748
  } else if (val === 'none') {
    return 2525
  } else if (val === 'void') {
    return 14300
  } else if (val === 'pride') {
    return 14200
  } else if (val === 'lust') {
    return 14100
  } else if (val === 'sloth') {
    return 14000
  } else if (val === 'envy') {
    return 13900
  } else if (val === 'greed') {
    return 13800
  } else if (val === 'gluttony') {
    return 13700
  } else if (val === 'wrath') {
    return 13600
  } else if (val === 'zombie') {
    return 13500
  } else if (val === 'cyber') {
    return 13400
  } else if (val === 'alien') {
    return 13300
  } else if (val === 'invisible') {
    return 13200
  } else {
    return 0
  }
}

function getMouthScore(val) {
  if (val === 'pipe') {
    return 17241
  } else if (val === 'pizza') {
    return 10204
  } else if (val === 'zipper') {
    return 8403
  } else if (val === 'ninja mask') {
    return 4854
  } else if (val === 'pink bubble gum') {
    return 4608
  } else if (val === 'blue bubble gum') {
    return 4444
  } else if (val === 'red party flute') {
    return 4237
  } else if (val === 'green party flute') {
    return 4219
  } else if (val === 'santa beard') {
    return 3378
  } else if (val === 'lollipop') {
    return 3268
  } else if (val === 'mustache') {
    return 3003
  } else if (val === 'dental mask') {
    return 2941
  } else if (val === 'whistle') {
    return 2817
  } else if (val === 'rose') {
    return 2762
  } else if (val === 'circle beard') {
    return 2564
  } else if (val === 'surprised') {
    return 2532
  } else if (val === 'drool') {
    return 2488
  } else if (val === 'chu') {
    return 2469
  } else if (val === 'hoo') {
    return 2427
  } else if (val === 'closed') {
    return 2128
  } else if (val === 'impish') {
    return 1946
  } else if (val === 'canine') {
    return 1938
  } else if (val === 'smile') {
    return 1901
  } else if (val === 'cute') {
    return 1873
  } else if (val === 'upset') {
    return 1866
  } else if (val === 'origin') {
    return 661
  } else if (val === 'void') {
    return 14300
  } else if (val === 'pride') {
    return 14200
  } else if (val === 'lust') {
    return 14100
  } else if (val === 'sloth') {
    return 14000
  } else if (val === 'envy') {
    return 13900
  } else if (val === 'greed') {
    return 13800
  } else if (val === 'gluttony') {
    return 13700
  } else if (val === 'wrath') {
    return 13600
  } else if (val === 'zombie') {
    return 13500
  } else if (val === 'cyber') {
    return 13400
  } else if (val === 'alien') {
    return 13300
  } else if (val === 'invisible') {
    return 13200
  } else {
    return 0
  }
}

function getHeadScore(val) {
  if (val === 'astro helmet') {
    return 12658
  } else if (val === 'kings crown') {
    return 12500
  } else if (val === 'rainbow afro') {
    return 11494
  } else if (val === 'halo') {
    return 10638
  } else if (val === 'devil horns') {
    return 10204
  } else if (val === 'gold knight helmet') {
    return 9901
  } else if (val === 'doge mask') {
    return 8000
  } else if (val === 'sorting hat') {
    return 7194
  } else if (val === 'gat') {
    return 6944
  } else if (val === 'pirate hat') {
    return 6757
  } else if (val === 'propeller cap') {
    return 6369
  } else if (val === 'police cap') {
    return 6061
  } else if (val === 'cowboy hat') {
    return 5848
  } else if (val === 'knight helmet') {
    return 5682
  } else if (val === 'gold crown') {
    return 5405
  } else if (val === 'afro') {
    return 5376
  } else if (val === 'm hat') {
    return 5236
  } else if (val === 'alpine hat') {
    return 5051
  } else if (val === 'chef hat') {
    return 4854
  } else if (val === 'santa') {
    return 4831
  } else if (val === 'graduation hat') {
    return 4717
  } else if (val === 'tiger bucket') {
    return 4651
  } else if (val === 'zebra bucket') {
    return 4651
  } else if (val === 'silver crown') {
    return 4545
  } else if (val === 'pajama hat') {
    return 4310
  } else if (val === 'red goblin horns') {
    return 3968
  } else if (val === 'blue cap') {
    return 3333
  } else if (val === 'claw machine') {
    return 3968
  } else if (val === 'banana') {
    return 3953
  } else if (val === 'green cap') {
    return 3145
  } else if (val === 'icecream') {
    return 3937
  } else if (val === 'pink cap') {
    return 2976
  } else if (val === 'red apple') {
    return 3236
  } else if (val === 'bulb') {
    return 3846
  } else if (val === 'siren') {
    return 3846
  } else if (val === 'green rocker') {
    return 3125
  } else if (val === 'pink rocker') {
    return 3012
  } else if (val === 'piercing watch') {
    return 3401
  } else if (val === 'painter hat') {
    return 3584
  } else if (val === 'pail') {
    return 3497
  } else if (val === 'blue beanie') {
    return 3300
  } else if (val === 'green beanie') {
    return 3030
  } else if (val === 'pink hair band') {
    return 2950
  } else if (val === 'blue apple') {
    return 2924
  } else if (val === 'yellow hair band') {
    return 2849
  } else if (val === 'blue hair band') {
    return 2801
  } else if (val === 'blue bucket') {
    return 3165
  } else if (val === 'pink beanie') {
    return 2801
  } else if (val === 'green apple') {
    return 2667
  } else if (val === 'mirpods') {
    return 3460
  } else if (val === 'green party hat') {
    return 3086
  } else if (val === 'yellow bucket') {
    return 3049
  } else if (val === 'tennis ball') {
    return 3086
  } else if (val === 'blue party hat') {
    return 2941
  } else if (val === 'baseball') {
    return 2825
  } else if (val === 'piercing') {
    return 2463
  } else if (val === 'none') {
    return 1736
  } else if (val === 'void') {
    return 14300
  } else if (val === 'pride') {
    return 14200
  } else if (val === 'lust') {
    return 14100
  } else if (val === 'sloth') {
    return 14000
  } else if (val === 'envy') {
    return 13900
  } else if (val === 'greed') {
    return 13800
  } else if (val === 'gluttony') {
    return 13700
  } else if (val === 'wrath') {
    return 13600
  } else if (val === 'zombie') {
    return 13500
  } else if (val === 'cyber') {
    return 13400
  } else if (val === 'alien') {
    return 13300
  } else if (val === 'invisible') {
    return 13200
  } else {
    return 0
  }
}

function getAccessoryScore(val) {
  if (val === 'headphone') {
    return 10101
  } else if (val === 'flute glass') {
    return 7463
  } else if (val === 'white spotlight') {
    return 7407
  } else if (val === 'yellow spotlight') {
    return 6024
  } else if (val === 'lamp') {
    return 5952
  } else if (val === 'mic') {
    return 5051
  } else if (val === 'rocket') {
    return 4975
  } else if (val === 'miphone') {
    return 4785
  } else if (val === 'cake') {
    return 4184
  } else if (val === 'chocolate') {
    return 4098
  } else if (val === 'cotton candy') {
    return 4082
  } else if (val === 'none') {
    return 126
  } else if (val === 'void') {
    return 14300
  } else if (val === 'pride') {
    return 14200
  } else if (val === 'lust') {
    return 14100
  } else if (val === 'sloth') {
    return 14000
  } else if (val === 'envy') {
    return 13900
  } else if (val === 'greed') {
    return 13800
  } else if (val === 'gluttony') {
    return 13700
  } else if (val === 'wrath') {
    return 13600
  } else if (val === 'zombie') {
    return 13500
  } else if (val === 'cyber') {
    return 13400
  } else if (val === 'alien') {
    return 13300
  } else if (val === 'invisible') {
    return 13200
  } else {
    return 0
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
