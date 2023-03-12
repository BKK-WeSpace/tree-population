# green-population
## Story
จำนวนต้นไม้ต่อประชากร 1 คน ควรอยู่ที่ 8 ต้นต่อ 1 คน ปัจจุบันไทยอยู่ที่ 3.3 ต้น/คน ขณะที่สิงคโปร์อยู่ราวๆ 40-50 ต้น/คน
อาจกล่าวได้ว่าเมืองที่ประสบความสำเร็จในการพัฒนาเมืองสีเขียว ส่วนหนึ่งเป็นเพราะประสบความสำเร็จในเรื่องของการปลูกต้นไม้

ไอเดีย green population เกิดจากมุมมองที่เรามอง ต้นไม้ เป็นเหมือน ประชากร หนึ่งคน ทุกต้นมีชื่อ มีหมายเลขและถูกดูแลเหมือนกับชีวิตผู้คนหนึ่งชีวิต

ความท้าทายของไอเดียนี้คือทำอย่างไรให้คนเมืองมาช่วยกัน contribute ภาพถ่ายหรือช่วยกันทำ green mapping
และเป็นประเด็นที่มีความจำเป็นเร่งด่วนมากๆ เพราะเกี่ยวข้องกับอากาศที่เราหายใจในปัจจุบัน

ณ ปัจจุบัน กทม.ได้มีโครงการปลูกต้นไม้ 1 ล้านต้น ซึ่งก็อาจจะยังไม่เพียงพอเมื่อเทียบกับผู้คนใช้พื้นที่ในกทม.ที่มีราวๆ 10 ล้านคน
เราอาจหา solution ที่ทำให้เป้าหมายร่วมกับกทมยั่งยืน หรือมีผลลัพธ์มากกว่าที่เขาตั้งไว้ได้

หากเราสามารถสร้างความใกล้ชิดของคนเมืองกับต้นไม้ได้ ในระยะยาวความตระหนักในเรื่องพื้นที่สีเขียวในภาคประชาชนจะมากขึ้น และส่งผลกระทบเชิงนโยบายอย่างยั่งยืนได้ (นักการเมืองก็ต้องตอบรับประชาชน ออกนโยบายที่สอดคล้อง) และเราก็จะมีเมืองที่ยั่งยืน (ใน 10-20 ปี)

## How to contributed
1. Fork
2. Development
3. Open Pull Request to `main` branch
4. Wait for approved
5. Done!


API Schema (ชั่วคราว อาจมีอัพเดท)

```ts
// /trees endpoint request
interface TreesRequest {
	location: [Location, Location, Location, Location];
}

// /trees endpoint response
interface TreesResponse {
	trees: Tree[];
}

// upload endpoint request 
interface UploadRequest {
	base64Image: string;
}

// upload endpoint response 
// void, just check http response


//////////////////////////////////////////////////

interface Tree {
	coord: Location;
	species: Species;
	carbonProfile: CarbonProfile;
	appearance?: Appearance;
	quote: Quote;
}

interface Quote {
	quote?: string;
	description?: string;
}

interface Appearance {
	// HEX
	color?: string;
	imgLink?: string;

}	

interface CarbonProfile {
	o2Emission: number;
	carbonAbsorbtion: number;
}


interface Location {
	long: number;
	lat: number;
}

interface Species {
	name: string;
	scientificName: string;
	species: string;

}
```
