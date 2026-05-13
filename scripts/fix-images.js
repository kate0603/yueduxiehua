const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/writing-data.js');
let content = fs.readFileSync(dataPath, 'utf-8');

const imageSize = 'square';

const replacements = {
  '/images/写景类/美丽的春天.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20spring%20garden%20with%20colorful%20flowers%20and%20butterflies%20for%20kids&image_size=${imageSize}`,
  '/images/写景类/炎热的夏天.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=summer%20swimming%20pool%20with%20happy%20children&image_size=${imageSize}`,
  '/images/写景类/金色的秋天.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=autumn%20golden%20leaves%20falling%20from%20trees&image_size=${imageSize}`,
  '/images/写景类/寒冷的冬天.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20snowing%20with%20snowflakes%20and%20snowman&image_size=${imageSize}`,
  '/images/写景类/下雨啦.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rainy%20day%20with%20children%20holding%20umbrellas&image_size=${imageSize}`,
  '/images/写景类/下雪天.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowy%20day%20children%20building%20snowman&image_size=${imageSize}`,
  '/images/写景类/美丽的公园.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20park%20with%20trees%20flowers%20and%20lake&image_size=${imageSize}`,
  '/images/写景类/快乐的春游.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20school%20trip%20happy%20children%20bus&image_size=${imageSize}`,
  '/images/写景类/迷人的郊外.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20countryside%20with%20river%20and%20grass&image_size=${imageSize}`,
  '/images/写景类/秋天的落叶.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=autumn%20fallen%20leaves%20colorful%20nature&image_size=${imageSize}`,
  '/images/生活记事类/帮妈妈做家务.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=boy%20helping%20mother%20cleaning%20house%20chores&image_size=${imageSize}`,
  '/images/生活记事类/给爷爷奶奶捶背.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=granddaughter%20massaging%20grandparents%20back%20loving&image_size=${imageSize}`,
  '/images/生活记事类/放学路上.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20walking%20home%20after%20school%20happy&image_size=${imageSize}`,
  '/images/生活记事类/课间十分钟.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=school%20playground%20children%20playing%20recess&image_size=${imageSize}`,
  '/images/生活记事类/打扫教室值日.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=students%20cleaning%20classroom%20together&image_size=${imageSize}`,
  '/images/生活记事类/运动会比赛.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=school%20sports%20meeting%20running%20race&image_size=${imageSize}`,
  '/images/生活记事类/节约用水.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=child%20turning%20off%20faucet%20save%20water&image_size=${imageSize}`,
  '/images/生活记事类/爱护花草树木.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=girl%20watering%20flowers%20in%20garden%20nature&image_size=${imageSize}`,
  '/images/生活记事类/助人为乐帮同学.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=boy%20helping%20classmate%20carry%20books&image_size=${imageSize}`,
  '/images/生活记事类/过六一儿童节.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20celebrating%20June%201%20festival%20balloons&image_size=${imageSize}`,
  '/images/生活记事类/快乐的周末.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20family%20picnic%20in%20park%20weekend&image_size=${imageSize}`,
  '/images/生活记事类/公交车上.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=boy%20giving%20seat%20to%20elderly%20on%20bus%20polite&image_size=${imageSize}`,
  '/images/动物童话类/小白兔采蘑菇.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20white%20rabbit%20picking%20mushrooms%20forest&image_size=${imageSize}`,
  '/images/动物童话类/小猫钓鱼.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cat%20fishing%20by%20river%20patient&image_size=${imageSize}`,
  '/images/动物童话类/小鸡捉虫子.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=baby%20chicks%20catching%20worms%20grass%20cute&image_size=${imageSize}`,
  '/images/动物童话类/小鸟筑巢.jpg': `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=birds%20building%20nest%20in%20tree%20spring&image_size=${imageSize}`
};

Object.keys(replacements).forEach(oldPath => {
  content = content.split(oldPath).join(replacements[oldPath]);
});

fs.writeFileSync(dataPath, content, 'utf-8');
console.log('Image paths updated successfully!');
