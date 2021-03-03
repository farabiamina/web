import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() currentList: number;
  candles: Product[];
  notebooks: Product[];
  pencils: Product[];
  stickers: Product[];


  //
  //   {
  //     name: 'Diptyque Baies Candle',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/51fezGtGC2L._SX300_SY300_QL70_FMwebp_.jpg',
  //     description: '• The scent of a bouquet of roses sweetened with black currant Leaves\n' +
  //       '• The scent of a bouquet of roses sweetened with black currant Leaves',
  //     rating: 4.7,
  //     link: 'https://www.amazon.com/Diptyque-11046u-Baies-Candle-6-5-oz/dp/B00429KMH6/ref=sxin_11_hip-asp-01_980895a56449fae2fcd585db21604276f0c5a0c2?cv_ct_cx=candles&dchild=1&keywords=candles&pd_rd_i=B00429KMH6&pd_rd_r=9a034025-1e63-4e98-b565-06a37335cdd4&pd_rd_w=medCe&pd_rd_wg=avaSP&pf_rd_p=dc117900-5684-47fd-b023-067e2bf4e675&pf_rd_r=T11FY6FF4VVHY3RSYHP0&qid=1614104842&sr=1-2-9e4bad12-957b-4e27-9cac-f327b63aafec'
  //   },
  //   {
  //     name: 'Chesapeake Bay Candle Scented Candle, Balance + Harmony',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/61GKZ7EYolL._AC_SY879_.jpg',
  //     description: '• Approximate burn time of 50 hours\n' +
  //       '• The soft colored frosted jar candles allow the light of the flame to shine through when burning\n' +
  //       '• Made from a natural soy wax blend and feature self-trimming wicks\n' +
  //       '• Our fragrances that are skillfully enhanced with all natural essential oils\n' +
  //       '• Designed and poured in the USA, made with ingredients from around the world\n' +
  //       '• 100% recyclable in partnership with TerraCycle',
  //     rating: 4.5,
  //     link: 'https://www.amazon.com/Chesapeake-Bay-Candle-Balance-Harmony/dp/B01N0RSCBI/ref=sr_1_21?dchild=1&keywords=candles&qid=1614104842&sr=8-21'
  //   },
  //   {
  //     name: 'Basil, Lime & Mandarin Hand Poured Soy Candle',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/71c%2B%2BukDP-L._AC_SX679_.jpg',
  //     description: '🍃 NATURAL SOY CANDLE: We are Vegan Soy Candle. Made with Eco-friendly 100% USA Natural Soy wax from American-grown soybeans. Our candles are vegan, cruelty-free, phthalate-free, and petroleum-free.\n' +
  //       '🍃 PREMIUM SCENTS: Highly scented to fill your room with those beautiful aromas.\n' +
  //       '🍃 HANDCRAFTED: Our small team handcrafts our candles by hand. We hand-pour our candles. We pride ourselves on our meticulous craftsmanship, ethical production.\n',
  //     rating: 4.3,
  //     link: 'https://www.amazon.com/John-Scented-Candles-Highly-Lasting/dp/B07LGT433C/ref=sr_1_27?dchild=1&keywords=candles&qid=1614104842&sr=8-27'
  //   },
  //   {
  //     name: 'Village Candle Eucalyptus Mint Scented Candle',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/51ecGkFVnFL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  //     description: '• Fragrance notes of eucalyptus leaf and spearmint\n' +
  //       '• Pure, rich, vibrant green food-grade paraffin wax fragranced by the world\'s finest scented oils\n' +
  //       '• Village Candle\'s pioneered Dual Wick Technology provides greater, consistent fragrance release, longer burn time and even wax burn with less soot\n' +
  //       '• Large premium glass jar provides 145 - 170 hours of burn time\n' +
  //       '• Every scented jar candle is designed, sourced, poured and tested at Village Candle HQ to ensure the highest quality (made in Maine, USA)',
  //     rating: 4.5,
  //     link: 'https://www.amazon.com/Village-Candle-Eucalyptus-Glass-Scented/dp/B011BKKAFC/ref=sr_1_26?dchild=1&keywords=candles&qid=1614104842&sr=8-26'
  //   },
  //   {
  //     name: 'Patchouli & Amber Scented Candles',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/81tejYOIFUL._AC_SX679_.jpg',
  //     description: '🔥 Highly Scented & Long Lasting: Infused with cozy notes of Patchouli and Amber, our aromatherapy candles will help you relax, soothe, restore & balance your body and mind. With a burn time of 45 hours, the scent of these decorative candles is long lasting!\n' +
  //       '🔥 Premium Soy Candle: Made with you and your family in mind, this 100% natural soy wax candle is non-toxic, long burning, scented with essential oils and has a 100% wood wick. Our Patchouli candle is safe for your home.\n',
  //       rating: 4.3,
  //     link: 'https://www.amazon.com/Patchouli-Scented-Candles-Relaxing-Aromatherapy/dp/B08L47T3PP/ref=sr_1_35?dchild=1&keywords=candles&qid=1614104842&sr=8-35'
  //   },
  //   {
  //     name: 'Odor Eliminating Highly Fragranced Candle',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/71GsKjzgXwL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  //     description: '• Odor Eliminating\n' +
  //       '• Up to 80 hour burn time\n' +
  //       '• High fragrance load\n' +
  //       '• A blend of FDA food grade & soy waxes\n' +
  //       '• Not tested on animals / Cruelty free',
  //     rating: 4.4,
  //     link: 'https://www.amazon.com/Diannes-Custom-Candles-Eliminating-Fragranced/dp/B07QCQMZRQ/ref=sr_1_42?dchild=1&keywords=candles&qid=1614104842&sr=8-42'
  //   }
  // ];
  constructor() {
    this.candles = [
      new Product('Yankee Candle Balsam & Cedar Large Jar Candle',
      'https://images-na.ssl-images-amazon.com/images/I/71GsKjzgXwL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      'https://www.amazon.com/Yankee-Candle-Large-Balsam-Cedar/dp/B000JDGC78/ref=sr_1_33?dchild=1&keywords=candles&qid=1614104842&sr=8-33',
      '• Balsam, aromatic cedar wood, and juniper berry blend together for a festive forest fragrance\n' +
          '• Long-lasting 110-150 hour burn time\n' +
          '• Quality paraffin-grade candle wax delivers a clear, consistent burn.\n' +
          '• 22-ounce scented candle measures 6.6" H x 4" D\n' +
          '• Natural fiber candle wick delivers the best burn for each fragrance\n' +
          '• 100% recyclable in partnership with TerraCycle',
      4.7),
    new Product('Yankee Candle Large Jar Candle Lilac Blossoms',
      'https://images-na.ssl-images-amazon.com/images/I/71c%2B%2BukDP-L._AC_SX679_.jpg',
      'https://www.amazon.com/Yankee-Candle-Large-Lilac-Blossoms/dp/B000WQY7RO/ref=sr_1_4?dchild=1&keywords=candles&qid=1614104842&sr=8-4',
      '• This scent takes you to an alluring grove filled with lavender, white, and deep purple lilacs\n' +
            '• Long lasting 110 to 150 hour burn time\n' +
            '• Quality paraffin grade candle wax delivers a clear, consistent burn\n' +
            '• 22 ounce scented candle measures 6.6 inches H x 4 inches D\n' +
            '• Natural fiber candle wick delivers the best burn for each fragrance\n' +
            '• 100% recyclable in partnership with TerraCycle', 4.7),
      new Product('Mrs. Meyer\'s Clean Day Scented Soy Aromatherapy Candle',
        'https://images-na.ssl-images-amazon.com/images/I/81Rzk5DVmoL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://www.amazon.com/Mrs-Meyers-Scented-Candle-Lavender/dp/B01MG29NPS/ref=sr_1_1_sspa?dchild=1&keywords=candles&qid=1614104842&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOU8xRVdNS05SQVlBJmVuY3J5cHRlZElkPUEwMzU5OTI1M0dSN09CWDQyNU5XRCZlbmNyeXB0ZWRBZElkPUEwODU5NTAwMkVMUVVLNzdTWEoyTSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        '• Candle made from renewable ingredients like soy wax and vegetable wax\n' +
            '• Nonmetal, lead-free, long burning candle wick burns for 35 hours for a long-lasting Lavender scent\n' +
            '• Garden-fresh Lavender has an original and clean floral scent\n' +
            '• Comes in a recyclable glass candle jar - makes for an easy gift\n' +
            '• Mrs. Meyer\'s produces cruelty free candles. None of our products are tested on animals.',
        4.5),
      new Product('Diptyque Tubereuse Candle',
        'https://images-na.ssl-images-amazon.com/images/I/51lrHc9%2BKXL._AC_.jpg',
        'https://www.amazon.com/Diptyque-11033u-Tubereuse-Candle-6-5-oz/dp/B0043TU1VM/ref=sxin_11_hip-asp-01_980895a56449fae2fcd585db21604276f0c5a0c2?cv_ct_cx=candles&dchild=1&keywords=candles&pd_rd_i=B0043TU1VM&pd_rd_r=9a034025-1e63-4e98-b565-06a37335cdd4&pd_rd_w=medCe&pd_rd_wg=avaSP&pf_rd_p=dc117900-5684-47fd-b023-067e2bf4e675&pf_rd_r=T11FY6FF4VVHY3RSYHP0&qid=1614104842&sr=1-1-9e4bad12-957b-4e27-9cac-f327b63aafec',
        '• Approximate Burn Time: 50-60 Hours\n' +
            '• Net Weight: 6.5 oz\n' +
            '• Dimensions: 3.5 inches tall by 3 inches wide\n' +
            '• Wick Type: Lead-free cotton\n' +
            '• Wax Type: Proprietary Soy Blend',
        4.7),
      new Product('Diptyque Baies Candle',
        'https://images-na.ssl-images-amazon.com/images/I/51fezGtGC2L._SX300_SY300_QL70_FMwebp_.jpg',
        'https://www.amazon.com/Diptyque-11046u-Baies-Candle-6-5-oz/dp/B00429KMH6/ref=sxin_11_hip-asp-01_980895a56449fae2fcd585db21604276f0c5a0c2?cv_ct_cx=candles&dchild=1&keywords=candles&pd_rd_i=B00429KMH6&pd_rd_r=9a034025-1e63-4e98-b565-06a37335cdd4&pd_rd_w=medCe&pd_rd_wg=avaSP&pf_rd_p=dc117900-5684-47fd-b023-067e2bf4e675&pf_rd_r=T11FY6FF4VVHY3RSYHP0&qid=1614104842&sr=1-2-9e4bad12-957b-4e27-9cac-f327b63aafec',
        '• The scent of a bouquet of roses sweetened with black currant Leaves\n',
        4.7)
  ];
    this.notebooks = [
      new Product(' Luxury Lined Journal Notebooks- Journals For Writing ',
      'https://images-na.ssl-images-amazon.com/images/I/91u6DIFzmyL._AC_SL1500_.jpg',
      'https://www.amazon.com/Pack-Luxury-Notebook-Journal-Perforated/dp/B07NYZ3GVL/ref=sr_1_2_sspa?dchild=1&keywords=notebooks&qid=1614758090&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFUUTJBSlRPVEw3RkcmZW5jcnlwdGVkSWQ9QTA3MjU2MjNQREEwUDlFUkpGODgmZW5jcnlwdGVkQWRJZD1BMDUxMDQ1ODE2RFlLTDNUVDhSQTEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
      '• FUNCTIONAL: Constructed with an elastic closure strap, these notebooks includes an inner pocket folder\n' +
      '• THICK NO-BLEED LINED PAPER: Created with high quality 120 gsm paper\n' +
      '• PREMIUM QUALITY & LUXURIOUS: Durable soft leatherette cover forged in sophisticated Black or Steel Gray\n' +
      '• CUSTOMER HAPPINESS: Our responsive customer service team is fully committed to ensuring you have the best experience possible!\n',
      4.6),
      new Product('Notebook: Leopard Print Composition',
        'https://images-na.ssl-images-amazon.com/images/I/51+HJa6ST2L._SX385_BO1,204,203,200_.jpg',
        'https://www.amazon.com/Notebook-Leopard-Print-Composition-College/dp/1691415480/ref=sr_1_6?dchild=1&keywords=notebooks&qid=1614758090&sr=8-6',
        '• The minimal and well-designed composition notebook perfect for writing notes and jotting down thoughts.\n',
        4.8),
      new Product('Notebook: Black Cover - Size (8.5 x 11 inches)',
        'https://images-na.ssl-images-amazon.com/images/I/21nMHpD2ZlL._SX384_BO1,204,203,200_.jpg',
        'https://www.amazon.com/Notebook-Black-Cover-inches-Pages/dp/B08L1GS46Y/ref=sr_1_5?dchild=1&keywords=notebooks&qid=1614758090&sr=8-5',
        '• If you need a simple notebook to write down your thoughts, this one is just for you.\n'+'• Plain, large, with a black cover and a minimalist design, it will serve a multitude of purposes.',
        4.6),
      new Product('Notebook: Lined Notebook Journal (College Ruled Paper)',
        'https://images-na.ssl-images-amazon.com/images/I/31xvr3lm3nL._SX384_BO1,204,203,200_.jpg',
        'amazon.com/Notebook-Journal-College-inches-Letter/dp/B08TRLB72D/ref=sr_1_8?dchild=1&keywords=notebooks&qid=1614758090&sr=8-8',
        'This simple notebook is perfect for jotting down your wonderful ideas or inspirations, tracking down your fitness progress, keeping your food recipes.\n' +
        '• You can also use it as a dream, hobby, gratitude, spiritual or personal daily journal.\n' +
        '• Practically, this simple notebook can be used however you wish from school to office to home uses without the need to rely on your smartphone.',
        5.0),
      new Product('Amazon Basics Wide Ruled Wirebound',
        'https://images-na.ssl-images-amazon.com/images/I/61m9v%2By3QqL._SL1213_.jpg',
        'https://www.amazon.com/AmazonBasics-Wirebound-3-Subject-Notebook-150-Sheet/dp/B07HRB34TB/ref=sxin_11_trfob_3?cv_ct_cx=notebooks&dchild=1&keywords=notebooks&pd_rd_i=B07HRB34TB&pd_rd_r=b70c007f-c4ee-44e4-8559-5ec17b6e405b&pd_rd_w=gA2SH&pd_rd_wg=yqUiY&pf_rd_p=dff4df0f-9209-4529-b092-2f5171681cdf&pf_rd_r=5QB83T13TF0KP76ABRKB&qid=1614758090&sr=1-3-fcc74f9e-0165-48d2-a9e1-f41ea92a035c',
        '• 6-pack of 150-sheet 3-subject notebooks; wide-ruled format promotes neat, tidy lines of writing\n' +
        '• 3 subjects (50 pages each); dividers for easy organizing and quick flipping to different sections\n' +
        '• Dual spiral binding for secure containment; 3-hole punched for the option to add to a 3-ring binder (not included)\n' +
        '• Clean tear-off perforation; 15-pound paper weight; strong front and back covers (28-point white card stock)\n' +
        '• Measures 10.5 by 8 inches; backed by an Amazon Basics 1-year limited warranty',
        4.7)
    ];
    this.pencils = [
      new Product('TICONDEROGA Pencils',
      'https://images-na.ssl-images-amazon.com/images/I/81YeO93tB5L._AC_SL1500_.jpg',
      'amazon.com/Ticonderoga-Wood-Cased-Graphite-Pencils-13924/dp/B0000AQNPB/ref=sr_1_5?crid=K65XNG0V7Z93&dchild=1&keywords=pencils&qid=1614758951&sprefix=penc%2Caps%2C350&sr=8-5',
      '• Exclusive #2 graphite formula provides extra smooth performance\n' +
        '• Top quality, latex-free eraser provides easy, clean corrections\n' +
        '• Made with premium wood from responsibly managed forests\n' +
        '• Satin smooth finish enhances writing comfort\n' +
        '• PMA certified non-toxic',
      4.8),
      new Product('BIC Mechanical Pencils',
        'https://images-na.ssl-images-amazon.com/images/I/81pOid%2BsbyL._AC_SL1500_.jpg',
        'https://www.amazon.com/BIC-Xtra-Sparkle-Mechanical-Pencil-24-Count/dp/B0007L1VLO/ref=sr_1_6?crid=K65XNG0V7Z93&dchild=1&keywords=pencils&qid=1614758951&sprefix=penc%2Caps%2C350&sr=8-6',
        '• Reliable mechanical pencils with sparkly, fun barrels\n' +
        '• Smooth-writing 2 lead perfect for standardized tests\n' +
        '• The lead doesn’t smudge and erases cleanly\n' +
        '• Convenient retractable design\n' +
        '• Includes 24 mechanical pencils in fun colors',
        4.8),
      new Product('TICONDEROGA Pencils, Wood-Cased Graphite',
        'https://images-na.ssl-images-amazon.com/images/I/813BLTVlgEL._AC_SL1500_.jpg',
        'https://www.amazon.com/TICONDEROGA-Wood-Cased-Graphite-Pre-Sharpened-13915/dp/B001BQU4LC/ref=sr_1_7?crid=K65XNG0V7Z93&dchild=1&keywords=pencils&qid=1614758951&sprefix=penc%2Caps%2C350&sr=8-7',
        '• Exclusive #2 graphite formula provides extra smooth performance\n' +
        '• Pre-sharpened to save you time\n' +
        '• Top quality, latex-free eraser provides easy, clean corrections\n' +
        '• Made with premium wood from responsibly sourced forests\n' +
        '• PMA certified non-toxic',
        4.8),
      new Product('Write Dudes USA Gold Premium Cedar',
        'https://images-na.ssl-images-amazon.com/images/I/81o4rTBsiLL._AC_SL1500_.jpg',
        'https://www.amazon.com/Write-Dudes-Pre-Sharpened-12-Count-DDR56/dp/B005FPT78G/ref=sr_1_8?crid=K65XNG0V7Z93&dchild=1&keywords=pencils&qid=1614758951&sprefix=penc%2Caps%2C350&sr=8-8',
        '• Real wood barrel pencil\n' +
        '• Made in the USA\n' +
        '• Great for use at home, office, or school\n' +
        '• Presharpened, ready to use',
        4.7),
      new Product('Paper Mate SharpWriter Mechanical Pencils',
        'https://m.media-amazon.com/images/I/819xVHH1PJL._AC_SL1500_.jpg',
        'amazon.com/Paper-Mate-SharpWriter-Mechanical-Pencils/dp/B00OQQ05JA/ref=sxin_9?ascsubtag=amzn1.osa.87ed9f9a-e2b0-45dd-8e3d-ac879b05d7d7.ATVPDKIKX0DER.en_US&creativeASIN=B00OQQ05JA&crid=K65XNG0V7Z93&cv_ct_cx=pencils&cv_ct_id=amzn1.osa.87ed9f9a-e2b0-45dd-8e3d-ac879b05d7d7.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=pencils&linkCode=oas&pd_rd_i=B00OQQ05JA&pd_rd_r=f5ae3c59-5a28-4650-ae69-b1bd92384339&pd_rd_w=kBkyS&pd_rd_wg=uKLhm&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=4Z5G51G4W94TBMZ4JD69&qid=1614758951&sprefix=penc%2Caps%2C350&sr=1-2-64f3a41a-73ca-403a-923c-8152c45485fe&tag=theinventoryo-20',
        '• Mechanical pencil features shock-absorbing tip to reduce lead breakage\n' +
        '• Twistable tip eliminates the need to stop and sharpen\n' +
        '• #2 lead is perfect for standardized tests\n' +
        '• Pink eraser makes do-overs easy\n' +
        '• Includes 36, #2 mechanical pencils, 0.7mm',
        4.8)
    ];
    this.stickers = [
      new Product('(8 Pack) Sticky Notes 3x3 Inches,Bright Colors',
        'https://images-na.ssl-images-amazon.com/images/I/614tzjZ-uDL._AC_SL1500_.jpg',
        'https://www.amazon.com/Sticky-Inches-Bright-Self-Stick-Notebook/dp/B07WQ1VZKW/ref=sr_1_1?crid=ZVJG8UCJOMS&dchild=1&keywords=note+stickers&qid=1614759631&sprefix=note+sti%2Caps%2C444&sr=8-1',
        '• PORTABLE SIZE --- 3 in x 3 in, 8 pads/pack, 82 sheets/pad\n' +
        '• SUPER STICKY --- Strong adhesive, make sure sticky notes don\'t fall off, and removes cleanly as well\n' +
        '• BRIGHT PAPER --- 80gsm sturdy stickies don\'t tear apart, curl up or spill ink\n' +
        '• COLORFUL --- 8 Bright colors,Red, pink, orange, yellow, green, light blue, blue, purple.\n' +
        '• Can be pasted on the wall, blackboard, computer, desktop, refrigerator and almost all other smooth surfaces.',
        4.5),
      new Product('2000 Pieces Page Markers Tabs Page Flags',
        'https://images-na.ssl-images-amazon.com/images/I/61RczC1Ds4L._AC_SL1044_.jpg',
        'https://www.amazon.com/Pieces-Markers-Fluorescent-Colored-Writable/dp/B07X3H783T/ref=sr_1_2?crid=ZVJG8UCJOMS&dchild=1&keywords=note+stickers&qid=1614759631&sprefix=note+sti%2Caps%2C444&sr=8-2',
        '• HIGH QUALITY MATERIAL:Page markers tabs are made from high quality paper material, they are self adhesive, no odor, non-toxic.\n' +
        '• FLUORESCENT COLOR INDEX TABS AND 3 DIFFERENT SHAPE:Sticky index tabs has 11 different fluorescent color.\n' +
        '• WRITABLE AND REMOVABLE:Page flags are self adhesive and writable, you can write anything you want on the tabs, easy for you to remove them.\n' +
        '• WHAT YOU WILL GET:You will get 2000pieces of page markers tabs, it include 1600pieces arrow index tabs, they are 1.2x4.5cm/0.5x1.8inch;\n' +
        '• WIDE APPLICATION IN OUR LIFE:Arrow flag tabs note tabs has a wide application in our daily life, Sticky notes can be applied to notes.',
        4.6),
      new Product('Highland Sticky Notes, 3 x 3 Inches, Yellow, 24 Pack',
        'https://images-na.ssl-images-amazon.com/images/I/61q5DzDfSIL._AC_SL1500_.jpg',
        'https://www.amazon.com/Highland-Notes-3-Inches-Yellow-24-Pads/dp/B0018191SM/ref=sxin_9_ac_d_rm?ac_md=2-2-c2VsZiBzdGljayBub3Rlcw%3D%3D-ac_d_rm&crid=ZVJG8UCJOMS&cv_ct_cx=note+stickers&dchild=1&keywords=note+stickers&pd_rd_i=B0018191SM&pd_rd_r=a47e8cda-993a-4bec-9b81-8df80ab08580&pd_rd_w=BNYZc&pd_rd_wg=IwxVO&pf_rd_p=5ceb2a76-ceaa-45a9-982b-6fa61a20d67b&pf_rd_r=VB369FZZP4VQ18AG3FKC&psc=1&qid=1614759631&sprefix=note+sti%2Caps%2C444&sr=1-3-12d4272d-8adb-4121-8624-135149aa9081',
        '• 3 in x 3 in, Yellow\n' +
        '• Leave a note to return a call\n' +
        '• Use the color Yellow to perk up your message\n' +
        '• 24 Pads/Pack',
        4.8),
      new Product('Post-It Notes, 4 x 6 in, Lined, 5 Pads',
        'https://images-na.ssl-images-amazon.com/images/I/71tcYbRG0YL._AC_SL1500_.jpg',
        'amazon.com/Post-Marseille-Collection-Sheets-660-5PK-AST/dp/B0006HVJ3O/ref=sxin_9_ac_d_rm?ac_md=3-3-bm90ZSBzdGljaw%3D%3D-ac_d_rm&crid=ZVJG8UCJOMS&cv_ct_cx=note+stickers&dchild=1&keywords=note+stickers&pd_rd_i=B0006HVJ3O&pd_rd_r=a47e8cda-993a-4bec-9b81-8df80ab08580&pd_rd_w=BNYZc&pd_rd_wg=IwxVO&pf_rd_p=5ceb2a76-ceaa-45a9-982b-6fa61a20d67b&pf_rd_r=VB369FZZP4VQ18AG3FKC&psc=1&qid=1614759631&sprefix=note+sti%2Caps%2C444&sr=1-4-12d4272d-8adb-4121-8624-135149aa9081',
        '• 4 in x 6 in, Marseille Collection, Lined\n' +
        '• Post-it Notes stick securely and remove cleanly\n' +
        '• Unique adhesive designed for use on paper or in planners\n' +
        '• Use for to-do lists and longer notes and reminders\n' +
        '• 5 Pads/Pack, 100 Sheets/Pad\n' +
        '• Post-it Notes are recyclable\n' +
        '• The paper with Post-it Super Sticky Notes is sourced from certified, renewable and responsibly managed forests.',
        4.9),
      new Product('iMagitek 608 Pcs Color Palette Stickers, Writable Labels Page Markers',
        'https://images-na.ssl-images-amazon.com/images/I/51q09%2Bncp3L._AC_.jpg',
        'https://www.amazon.com/iMagitek-Palette-Stickers-Writable-Markers/dp/B0833PLZBH/ref=sr_1_5?crid=ZVJG8UCJOMS&dchild=1&keywords=note+stickers&qid=1614759631&sprefix=note+sti%2Caps%2C444&sr=8-5',
        '• Package: It includes 384 pieces round sticky notes, 64 pieces square sticky notes and 160 pieces index tabs.\n' +
        '• 4 Multiple Colors Styles: 4 different fluorescent colors index tabs are red, yellow, green and purple. Eye-catching colors, easy to locate information.\n' +
        '• Size: The round stickers are about 0.8inch. The index tabs are about 0.8 * 1inch.\n' +
        '• Wide Uses: They are perfect for page markers, book markers, reading notes, classify files, directory, document classification, magazines, diaries, catalogs.\n' +
        '• They will keep you organized and on task.',
        4.0)
    ];
  }

  ngOnInit(): void {
  }
  onProductRemove(index: number): void {
    this.notebooks = this.notebooks.filter((x) => x.id !== index);
    this.candles = this.candles.filter((x) => x.id !== index);
    this.pencils = this.pencils.filter((x) => x.id !== index);
    this.stickers = this.stickers.filter((x) => x.id !== index);
  }


}
