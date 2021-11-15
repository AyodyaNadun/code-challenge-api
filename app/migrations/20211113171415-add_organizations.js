module.exports = {
  async up(db, client) {
    await db.createCollection('organizations');
    await db.collection('organizations').insertMany([
      {
        "organization_id": 101,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/101.json",
        "external_id": "9270ed79-35eb-4a38-a46f-35725197ea8d",
        "name": "Enthaze",
        "domain_names": [
          "kage.com",
          "ecratic.com",
          "endipin.com",
          "zentix.com"
        ],
        "created_at": "2016-05-21T11:10:28 -10:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Fulton",
          "West",
          "Rodriguez",
          "Farley"
        ]
      },
      {
        "organization_id": 102,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/102.json",
        "external_id": "7cd6b8d4-2999-4ff2-8cfd-44d05b449226",
        "name": "Nutralab",
        "domain_names": [
          "trollery.com",
          "datagen.com",
          "bluegrain.com",
          "dadabase.com"
        ],
        "created_at": "2016-04-07T08:21:44 -10:00",
        "details": "Non profit",
        "shared_tickets": false,
        "tags": [
          "Cherry",
          "Collier",
          "Fuentes",
          "Trevino"
        ]
      },
      {
        "organization_id": 103,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/103.json",
        "external_id": "e73240f3-8ecf-411d-ad0d-80ca8a84053d",
        "name": "Plasmos",
        "domain_names": [
          "comvex.com",
          "automon.com",
          "verbus.com",
          "gogol.com"
        ],
        "created_at": "2016-05-28T04:40:37 -10:00",
        "details": "Non profit",
        "shared_tickets": false,
        "tags": [
          "Parrish",
          "Lindsay",
          "Armstrong",
          "Vaughn"
        ]
      },
      {
        "organization_id": 104,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/104.json",
        "external_id": "f6eb60ad-fe37-4a45-9689-b32031399f93",
        "name": "Xylar",
        "domain_names": [
          "anixang.com",
          "exovent.com",
          "photobin.com",
          "marqet.com"
        ],
        "created_at": "2016-03-21T10:11:18 -11:00",
        "details": "MegaCörp",
        "shared_tickets": false,
        "tags": [
          "Hendricks",
          "Mclaughlin",
          "Stephens",
          "Garner"
        ]
      },
      {
        "organization_id": 105,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/105.json",
        "external_id": "52f12203-6112-4fb9-aadc-70a6c816d605",
        "name": "Koffee",
        "domain_names": [
          "farmage.com",
          "extrawear.com",
          "bulljuice.com",
          "enaut.com"
        ],
        "created_at": "2016-06-06T02:50:27 -10:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Jordan",
          "Roy",
          "Mckinney",
          "Frost"
        ]
      },
      {
        "organization_id": 106,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/106.json",
        "external_id": "2355f080-b37c-44f3-977e-53c341fde146",
        "name": "Qualitern",
        "domain_names": [
          "gology.com",
          "myopium.com",
          "synkgen.com",
          "bolax.com"
        ],
        "created_at": "2016-07-23T09:48:02 -10:00",
        "details": "Artisân",
        "shared_tickets": false,
        "tags": [
          "Nolan",
          "Rivas",
          "Morse",
          "Conway"
        ]
      },
      {
        "organization_id": 107,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/107.json",
        "external_id": "773cc8fd-12e6-4f0b-9709-a370d98ee2e0",
        "name": "Sulfax",
        "domain_names": [
          "comvey.com",
          "quantalia.com",
          "velity.com",
          "enormo.com"
        ],
        "created_at": "2016-01-12T01:16:06 -11:00",
        "details": "MegaCörp",
        "shared_tickets": true,
        "tags": [
          "Travis",
          "Clarke",
          "Glenn",
          "Santos"
        ]
      },
      {
        "organization_id": 108,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/108.json",
        "external_id": "be72663b-338d-42f4-bd52-cf6584cad674",
        "name": "Zolarex",
        "domain_names": [
          "elemantra.com",
          "zizzle.com",
          "miraclis.com",
          "overplex.com"
        ],
        "created_at": "2016-07-26T09:35:57 -10:00",
        "details": "Non profit",
        "shared_tickets": false,
        "tags": [
          "Rosales",
          "Middleton",
          "Garrett",
          "Page"
        ]
      },
      {
        "organization_id": 109,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/109.json",
        "external_id": "5f930931-37fd-41a2-9c68-1cd5b99e7a3e",
        "name": "Möreganic",
        "domain_names": [
          "pearlesex.com",
          "netility.com",
          "rodemco.com",
          "cuizine.com"
        ],
        "created_at": "2016-06-03T10:50:56 -10:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Price",
          "Meyer",
          "Heath",
          "Skinner"
        ]
      },
      {
        "organization_id": 110,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/110.json",
        "external_id": "197f93c0-1729-4c82-9bb0-143e978f06ce",
        "name": "Kindaloo",
        "domain_names": [
          "translink.com",
          "netropic.com",
          "earthplex.com",
          "zilencio.com"
        ],
        "created_at": "2016-03-15T03:08:47 -11:00",
        "details": "Non profit",
        "shared_tickets": true,
        "tags": [
          "Chen",
          "Melton",
          "Stafford",
          "Landry"
        ]
      },
      {
        "organization_id": 111,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/111.json",
        "external_id": "852e22ab-76dc-4d92-9a1d-02d3e04349cb",
        "name": "Speedbolt",
        "domain_names": [
          "quintity.com",
          "radiantix.com",
          "enomen.com",
          "minga.com"
        ],
        "created_at": "2016-03-10T10:36:00 -11:00",
        "details": "Artisan",
        "shared_tickets": true,
        "tags": [
          "Sheppard",
          "Nunez",
          "Bartlett",
          "Giles"
        ]
      },
      {
        "organization_id": 112,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/112.json",
        "external_id": "32e979ff-47b4-43b9-8b74-eea1227905d9",
        "name": "Quilk",
        "domain_names": [
          "valreda.com",
          "strozen.com",
          "signity.com",
          "quantasis.com"
        ],
        "created_at": "2016-01-10T03:21:25 -11:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Hall",
          "Dorsey",
          "Shepard",
          "Carter"
        ]
      },
      {
        "organization_id": 113,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/113.json",
        "external_id": "67d9dbdb-a9c6-4a30-a003-202de05d09e2",
        "name": "Noralex",
        "domain_names": [
          "artiq.com",
          "mazuda.com",
          "surelogic.com",
          "fuelworks.com"
        ],
        "created_at": "2016-04-09T08:45:29 -10:00",
        "details": "MegaCörp",
        "shared_tickets": true,
        "tags": [
          "Maldonado",
          "Hebert",
          "Poole",
          "Mcleod"
        ]
      },
      {
        "organization_id": 114,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/114.json",
        "external_id": "49c97d6a-f1ec-422e-aabe-8a429e81e656",
        "name": "Isotronic",
        "domain_names": [
          "gynk.com",
          "goko.com",
          "zilidium.com",
          "accruex.com"
        ],
        "created_at": "2016-05-24T04:27:35 -10:00",
        "details": "Artisân",
        "shared_tickets": true,
        "tags": [
          "Burton",
          "Dunn",
          "Morton",
          "Maddox"
        ]
      },
      {
        "organization_id": 115,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/115.json",
        "external_id": "71010066-113a-48b5-8498-184ae2c72f93",
        "name": "Netur",
        "domain_names": [
          "tubalum.com",
          "imaginart.com",
          "olucore.com",
          "uniworld.com"
        ],
        "created_at": "2016-07-25T01:19:05 -10:00",
        "details": "Artisan",
        "shared_tickets": false,
        "tags": [
          "Wilkerson",
          "Knight",
          "Stephenson",
          "Witt"
        ]
      },
      {
        "organization_id": 116,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/116.json",
        "external_id": "dbc692fc-e1ae-47d8-a1d7-263d07710fe1",
        "name": "Zentry",
        "domain_names": [
          "datagene.com",
          "exoteric.com",
          "beadzza.com",
          "digiprint.com"
        ],
        "created_at": "2016-01-13T09:34:07 -11:00",
        "details": "Artisan",
        "shared_tickets": false,
        "tags": [
          "Schneider",
          "Hoover",
          "Wilcox",
          "Hewitt"
        ]
      },
      {
        "organization_id": 117,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/117.json",
        "external_id": "bf9b5a96-9b10-45ff-b638-a374a521dead",
        "name": "Comtext",
        "domain_names": [
          "aquazure.com",
          "keeg.com",
          "eventex.com",
          "zillar.com"
        ],
        "created_at": "2016-03-17T08:48:21 -11:00",
        "details": "Artisan",
        "shared_tickets": true,
        "tags": [
          "Burris",
          "Ortiz",
          "Langley",
          "Wall"
        ]
      },
      {
        "organization_id": 118,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/118.json",
        "external_id": "6970300e-f211-4c01-a538-70b4464a1d84",
        "name": "Limozen",
        "domain_names": [
          "otherway.com",
          "rodeomad.com",
          "suremax.com",
          "fishland.com"
        ],
        "created_at": "2016-02-11T04:24:09 -11:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Leon",
          "Ferguson",
          "Olsen",
          "Walsh"
        ]
      },
      {
        "organization_id": 119,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/119.json",
        "external_id": "2386db7c-5056-49c9-8dc4-46775e464cb7",
        "name": "Multron",
        "domain_names": [
          "bleeko.com",
          "pulze.com",
          "xoggle.com",
          "sultraxin.com"
        ],
        "created_at": "2016-02-29T03:45:12 -11:00",
        "details": "Non profit",
        "shared_tickets": false,
        "tags": [
          "Erickson",
          "Mccoy",
          "Wiggins",
          "Brooks"
        ]
      },
      {
        "organization_id": 120,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/120.json",
        "external_id": "82da5daf-d6ad-484d-a831-05cd3e2baea5",
        "name": "Andershun",
        "domain_names": [
          "valpreal.com",
          "puria.com",
          "bostonic.com",
          "roughies.com"
        ],
        "created_at": "2016-01-15T04:11:08 -11:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Robinson",
          "Santana",
          "Whitehead",
          "England"
        ]
      },
      {
        "organization_id": 121,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/121.json",
        "external_id": "3fffbf20-9172-4d1d-923b-f247d9132e3a",
        "name": "Hotcâkes",
        "domain_names": [
          "recrisys.com",
          "qiao.com",
          "makingway.com",
          "shopabout.com"
        ],
        "created_at": "2016-01-02T06:07:59 -11:00",
        "details": "MegaCorp",
        "shared_tickets": true,
        "tags": [
          "Howard",
          "Moreno",
          "Benton",
          "Bonner"
        ]
      },
      {
        "organization_id": 122,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/122.json",
        "external_id": "33c4e38d-bfa3-4b12-9bb6-6f547524cf33",
        "name": "Geekfarm",
        "domain_names": [
          "comstar.com",
          "zytrex.com",
          "austech.com",
          "enervate.com"
        ],
        "created_at": "2016-04-10T11:12:35 -10:00",
        "details": "Non profit",
        "shared_tickets": true,
        "tags": [
          "Hensley",
          "Garza",
          "Roberts",
          "Vega"
        ]
      },
      {
        "organization_id": 123,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/123.json",
        "external_id": "12831719-9173-47c7-8834-fa5b26877393",
        "name": "Terrasys",
        "domain_names": [
          "isoplex.com",
          "equicom.com",
          "premiant.com",
          "combogen.com"
        ],
        "created_at": "2016-04-23T04:40:09 -10:00",
        "details": "MegaCorp",
        "shared_tickets": true,
        "tags": [
          "Fisher",
          "Forbes",
          "Koch",
          "Lester"
        ]
      },
      {
        "organization_id": 124,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/124.json",
        "external_id": "15c21605-cbc6-440f-8da2-6e1601aed5fa",
        "name": "Bitrex",
        "domain_names": [
          "unisure.com",
          "boink.com",
          "quinex.com",
          "poochies.com"
        ],
        "created_at": "2016-05-11T12:16:15 -10:00",
        "details": "Non profit",
        "shared_tickets": true,
        "tags": [
          "Lott",
          "Hunter",
          "Beasley",
          "Glass"
        ]
      },
      {
        "organization_id": 125,
        "url": "http://initech.tokoin.io.com/api/v2/organizations/125.json",
        "external_id": "42a1a845-70cf-40ed-a762-acb27fd606cc",
        "name": "Strezzö",
        "domain_names": [
          "techtrix.com",
          "teraprene.com",
          "corpulse.com",
          "flotonic.com"
        ],
        "created_at": "2016-02-21T06:11:51 -11:00",
        "details": "MegaCorp",
        "shared_tickets": false,
        "tags": [
          "Vance",
          "Ray",
          "Jacobs",
          "Frank"
        ]
      }
    ]
    )
  },

  async down(db, client) {

  }
};
