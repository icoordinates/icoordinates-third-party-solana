export type IcoordinatesThirdPartySolana = {
  "version": "0.1.0",
  "name": "icoordinates_third_party_solana",
  "instructions": [
    {
      "name": "integrateThirdParty",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coordinates",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "coordinates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "color",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "website",
            "type": "string"
          },
          {
            "name": "slogan",
            "type": "string"
          },
          {
            "name": "initTimestamp",
            "type": "i64"
          },
          {
            "name": "state",
            "type": {
              "defined": "CoordinatesState"
            }
          },
          {
            "name": "country",
            "type": {
              "defined": "Country"
            }
          }
        ]
      }
    },
    {
      "name": "offerForCoordinates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "initiator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "coordinatesOnAuction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "startingPrice",
            "type": "u64"
          },
          {
            "name": "auctionEndtime",
            "type": "i64"
          },
          {
            "name": "lastPrice",
            "type": "u64"
          },
          {
            "name": "lastBidder",
            "type": "publicKey"
          },
          {
            "name": "bidTimes",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CoordinatesState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Idle"
          },
          {
            "name": "OnSale"
          },
          {
            "name": "OnAuction"
          }
        ]
      }
    },
    {
      "name": "Country",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Afghanistan"
          },
          {
            "name": "AlandIslands"
          },
          {
            "name": "Albania"
          },
          {
            "name": "Algeria"
          },
          {
            "name": "AmericanSamoa"
          },
          {
            "name": "Andorra"
          },
          {
            "name": "Angola"
          },
          {
            "name": "Anguilla"
          },
          {
            "name": "Antarctica"
          },
          {
            "name": "AntiguaAndBarbuda"
          },
          {
            "name": "Argentina"
          },
          {
            "name": "Armenia"
          },
          {
            "name": "Aruba"
          },
          {
            "name": "Australia"
          },
          {
            "name": "Austria"
          },
          {
            "name": "Azerbaijan"
          },
          {
            "name": "Bahamas"
          },
          {
            "name": "Bahrain"
          },
          {
            "name": "Bangladesh"
          },
          {
            "name": "Barbados"
          },
          {
            "name": "Belarus"
          },
          {
            "name": "Belgium"
          },
          {
            "name": "Belize"
          },
          {
            "name": "Benin"
          },
          {
            "name": "Bermuda"
          },
          {
            "name": "Bhutan"
          },
          {
            "name": "BoliviaPlurinationalStateOf"
          },
          {
            "name": "BonaireSintEustatiusAndSaba"
          },
          {
            "name": "BosniaAndHerzegovina"
          },
          {
            "name": "Botswana"
          },
          {
            "name": "BouvetIsland"
          },
          {
            "name": "Brazil"
          },
          {
            "name": "BritishIndianOceanTerritory"
          },
          {
            "name": "BruneiDarussalam"
          },
          {
            "name": "Bulgaria"
          },
          {
            "name": "BurkinaFaso"
          },
          {
            "name": "Burundi"
          },
          {
            "name": "CaboVerde"
          },
          {
            "name": "Cambodia"
          },
          {
            "name": "Cameroon"
          },
          {
            "name": "Canada"
          },
          {
            "name": "CaymanIslands"
          },
          {
            "name": "CentralAfricanRepublic"
          },
          {
            "name": "Chad"
          },
          {
            "name": "Chile"
          },
          {
            "name": "China"
          },
          {
            "name": "ChristmasIsland"
          },
          {
            "name": "CocosKeelingIslands"
          },
          {
            "name": "Colombia"
          },
          {
            "name": "Comoros"
          },
          {
            "name": "Congo"
          },
          {
            "name": "CongoDemocraticRepublicOfThe"
          },
          {
            "name": "CookIslands"
          },
          {
            "name": "CostaRica"
          },
          {
            "name": "CoteDIvoire"
          },
          {
            "name": "Croatia"
          },
          {
            "name": "Cuba"
          },
          {
            "name": "Curacao"
          },
          {
            "name": "Cyprus"
          },
          {
            "name": "Czechia"
          },
          {
            "name": "Denmark"
          },
          {
            "name": "Djibouti"
          },
          {
            "name": "Dominica"
          },
          {
            "name": "DominicanRepublic"
          },
          {
            "name": "Ecuador"
          },
          {
            "name": "Egypt"
          },
          {
            "name": "ElSalvador"
          },
          {
            "name": "EquatorialGuinea"
          },
          {
            "name": "Eritrea"
          },
          {
            "name": "Estonia"
          },
          {
            "name": "Ethiopia"
          },
          {
            "name": "FalklandIslandsMalvinas"
          },
          {
            "name": "FaroeIslands"
          },
          {
            "name": "Fiji"
          },
          {
            "name": "Finland"
          },
          {
            "name": "France"
          },
          {
            "name": "FrenchGuiana"
          },
          {
            "name": "FrenchPolynesia"
          },
          {
            "name": "FrenchSouthernTerritories"
          },
          {
            "name": "Gabon"
          },
          {
            "name": "Gambia"
          },
          {
            "name": "Georgia"
          },
          {
            "name": "Germany"
          },
          {
            "name": "Ghana"
          },
          {
            "name": "Gibraltar"
          },
          {
            "name": "Greece"
          },
          {
            "name": "Greenland"
          },
          {
            "name": "Grenada"
          },
          {
            "name": "Guadeloupe"
          },
          {
            "name": "Guam"
          },
          {
            "name": "Guatemala"
          },
          {
            "name": "Guernsey"
          },
          {
            "name": "Guinea"
          },
          {
            "name": "GuineaBissau"
          },
          {
            "name": "Guyana"
          },
          {
            "name": "Haiti"
          },
          {
            "name": "HeardIslandAndMcDonaldIslands"
          },
          {
            "name": "HolySee"
          },
          {
            "name": "Honduras"
          },
          {
            "name": "HongKong"
          },
          {
            "name": "Hungary"
          },
          {
            "name": "Iceland"
          },
          {
            "name": "India"
          },
          {
            "name": "Indonesia"
          },
          {
            "name": "IranIslamicRepublicOf"
          },
          {
            "name": "Iraq"
          },
          {
            "name": "Ireland"
          },
          {
            "name": "IsleOfMan"
          },
          {
            "name": "Israel"
          },
          {
            "name": "Italy"
          },
          {
            "name": "Jamaica"
          },
          {
            "name": "Japan"
          },
          {
            "name": "Jersey"
          },
          {
            "name": "Jordan"
          },
          {
            "name": "Kazakhstan"
          },
          {
            "name": "Kenya"
          },
          {
            "name": "Kiribati"
          },
          {
            "name": "KoreaDemocraticPeoplesRepublicOf"
          },
          {
            "name": "KoreaRepublicOf"
          },
          {
            "name": "Kuwait"
          },
          {
            "name": "Kyrgyzstan"
          },
          {
            "name": "LaoPeoplesDemocraticRepublic"
          },
          {
            "name": "Latvia"
          },
          {
            "name": "Lebanon"
          },
          {
            "name": "Lesotho"
          },
          {
            "name": "Liberia"
          },
          {
            "name": "Libya"
          },
          {
            "name": "Liechtenstein"
          },
          {
            "name": "Lithuania"
          },
          {
            "name": "Luxembourg"
          },
          {
            "name": "Macao"
          },
          {
            "name": "MacedoniaTheFormerYugoslavRepublicOf"
          },
          {
            "name": "Madagascar"
          },
          {
            "name": "Malawi"
          },
          {
            "name": "Malaysia"
          },
          {
            "name": "Maldives"
          },
          {
            "name": "Mali"
          },
          {
            "name": "Malta"
          },
          {
            "name": "MarshallIslands"
          },
          {
            "name": "Martinique"
          },
          {
            "name": "Mauritania"
          },
          {
            "name": "Mauritius"
          },
          {
            "name": "Mayotte"
          },
          {
            "name": "Mexico"
          },
          {
            "name": "MicronesiaFederatedStatesOf"
          },
          {
            "name": "MoldovaRepublicOf"
          },
          {
            "name": "Monaco"
          },
          {
            "name": "Mongolia"
          },
          {
            "name": "Montenegro"
          },
          {
            "name": "Montserrat"
          },
          {
            "name": "Morocco"
          },
          {
            "name": "Mozambique"
          },
          {
            "name": "Myanmar"
          },
          {
            "name": "Namibia"
          },
          {
            "name": "Nauru"
          },
          {
            "name": "Nepal"
          },
          {
            "name": "Netherlands"
          },
          {
            "name": "NewCaledonia"
          },
          {
            "name": "NewZealand"
          },
          {
            "name": "Nicaragua"
          },
          {
            "name": "Niger"
          },
          {
            "name": "Nigeria"
          },
          {
            "name": "Niue"
          },
          {
            "name": "NorfolkIsland"
          },
          {
            "name": "NorthernMarianaIslands"
          },
          {
            "name": "Norway"
          },
          {
            "name": "Oman"
          },
          {
            "name": "Pakistan"
          },
          {
            "name": "Palau"
          },
          {
            "name": "PalestineStateOf"
          },
          {
            "name": "Panama"
          },
          {
            "name": "PapuaNewGuinea"
          },
          {
            "name": "Paraguay"
          },
          {
            "name": "Peru"
          },
          {
            "name": "Philippines"
          },
          {
            "name": "Pitcairn"
          },
          {
            "name": "Poland"
          },
          {
            "name": "Portugal"
          },
          {
            "name": "PuertoRico"
          },
          {
            "name": "Qatar"
          },
          {
            "name": "Reunion"
          },
          {
            "name": "Romania"
          },
          {
            "name": "RussianFederation"
          },
          {
            "name": "Rwanda"
          },
          {
            "name": "SaintBarthélemy"
          },
          {
            "name": "SaintHelenaAscensionAndTristanDaCunha"
          },
          {
            "name": "SaintKittsAndNevis"
          },
          {
            "name": "SaintLucia"
          },
          {
            "name": "SaintMartinFrenchPart"
          },
          {
            "name": "SaintPierreAndMiquelon"
          },
          {
            "name": "SaintVincentAndTheGrenadines"
          },
          {
            "name": "Samoa"
          },
          {
            "name": "SanMarino"
          },
          {
            "name": "SaoTomeAndPrincipe"
          },
          {
            "name": "SaudiArabia"
          },
          {
            "name": "Senegal"
          },
          {
            "name": "Serbia"
          },
          {
            "name": "Seychelles"
          },
          {
            "name": "SierraLeone"
          },
          {
            "name": "Singapore"
          },
          {
            "name": "SintMaartenDutchPart"
          },
          {
            "name": "Slovakia"
          },
          {
            "name": "Slovenia"
          },
          {
            "name": "SolomonIslands"
          },
          {
            "name": "Somalia"
          },
          {
            "name": "SouthAfrica"
          },
          {
            "name": "SouthGeorgiaAndTheSouthSandwichIslands"
          },
          {
            "name": "SouthSudan"
          },
          {
            "name": "Spain"
          },
          {
            "name": "SriLanka"
          },
          {
            "name": "Sudan"
          },
          {
            "name": "Suriname"
          },
          {
            "name": "SvalbardAndJanMayen"
          },
          {
            "name": "Swaziland"
          },
          {
            "name": "Sweden"
          },
          {
            "name": "Switzerland"
          },
          {
            "name": "SyrianArabRepublic"
          },
          {
            "name": "TaiwanProvinceOfChina"
          },
          {
            "name": "Tajikistan"
          },
          {
            "name": "TanzaniaUnitedRepublicOf"
          },
          {
            "name": "Thailand"
          },
          {
            "name": "TimorLeste"
          },
          {
            "name": "Togo"
          },
          {
            "name": "Tokelau"
          },
          {
            "name": "Tonga"
          },
          {
            "name": "TrinidadAndTobago"
          },
          {
            "name": "Tunisia"
          },
          {
            "name": "Turkey"
          },
          {
            "name": "Turkmenistan"
          },
          {
            "name": "TurksAndCaicosIslands"
          },
          {
            "name": "Tuvalu"
          },
          {
            "name": "Uganda"
          },
          {
            "name": "Ukraine"
          },
          {
            "name": "UnitedArabEmirates"
          },
          {
            "name": "UnitedKingdomOfGreatBritainAndNorthernIreland"
          },
          {
            "name": "UnitedStatesOfAmerica"
          },
          {
            "name": "UnitedStatesMinorOutlyingIslands"
          },
          {
            "name": "Uruguay"
          },
          {
            "name": "Uzbekistan"
          },
          {
            "name": "Vanuatu"
          },
          {
            "name": "VenezuelaBolivarianRepublicOf"
          },
          {
            "name": "VietNam"
          },
          {
            "name": "VirginIslandsBritish"
          },
          {
            "name": "VirginIslandsUS"
          },
          {
            "name": "WallisAndFutuna"
          },
          {
            "name": "WesternSahara"
          },
          {
            "name": "Yemen"
          },
          {
            "name": "Zambia"
          },
          {
            "name": "Zimbabwe"
          }
        ]
      }
    }
  ]
};

export const IDL: IcoordinatesThirdPartySolana = {
  "version": "0.1.0",
  "name": "icoordinates_third_party_solana",
  "instructions": [
    {
      "name": "integrateThirdParty",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "coordinates",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "coordinates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "color",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "website",
            "type": "string"
          },
          {
            "name": "slogan",
            "type": "string"
          },
          {
            "name": "initTimestamp",
            "type": "i64"
          },
          {
            "name": "state",
            "type": {
              "defined": "CoordinatesState"
            }
          },
          {
            "name": "country",
            "type": {
              "defined": "Country"
            }
          }
        ]
      }
    },
    {
      "name": "offerForCoordinates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "initiator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "coordinatesOnAuction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "i64"
          },
          {
            "name": "y",
            "type": "i64"
          },
          {
            "name": "startingPrice",
            "type": "u64"
          },
          {
            "name": "auctionEndtime",
            "type": "i64"
          },
          {
            "name": "lastPrice",
            "type": "u64"
          },
          {
            "name": "lastBidder",
            "type": "publicKey"
          },
          {
            "name": "bidTimes",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CoordinatesState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Idle"
          },
          {
            "name": "OnSale"
          },
          {
            "name": "OnAuction"
          }
        ]
      }
    },
    {
      "name": "Country",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Afghanistan"
          },
          {
            "name": "AlandIslands"
          },
          {
            "name": "Albania"
          },
          {
            "name": "Algeria"
          },
          {
            "name": "AmericanSamoa"
          },
          {
            "name": "Andorra"
          },
          {
            "name": "Angola"
          },
          {
            "name": "Anguilla"
          },
          {
            "name": "Antarctica"
          },
          {
            "name": "AntiguaAndBarbuda"
          },
          {
            "name": "Argentina"
          },
          {
            "name": "Armenia"
          },
          {
            "name": "Aruba"
          },
          {
            "name": "Australia"
          },
          {
            "name": "Austria"
          },
          {
            "name": "Azerbaijan"
          },
          {
            "name": "Bahamas"
          },
          {
            "name": "Bahrain"
          },
          {
            "name": "Bangladesh"
          },
          {
            "name": "Barbados"
          },
          {
            "name": "Belarus"
          },
          {
            "name": "Belgium"
          },
          {
            "name": "Belize"
          },
          {
            "name": "Benin"
          },
          {
            "name": "Bermuda"
          },
          {
            "name": "Bhutan"
          },
          {
            "name": "BoliviaPlurinationalStateOf"
          },
          {
            "name": "BonaireSintEustatiusAndSaba"
          },
          {
            "name": "BosniaAndHerzegovina"
          },
          {
            "name": "Botswana"
          },
          {
            "name": "BouvetIsland"
          },
          {
            "name": "Brazil"
          },
          {
            "name": "BritishIndianOceanTerritory"
          },
          {
            "name": "BruneiDarussalam"
          },
          {
            "name": "Bulgaria"
          },
          {
            "name": "BurkinaFaso"
          },
          {
            "name": "Burundi"
          },
          {
            "name": "CaboVerde"
          },
          {
            "name": "Cambodia"
          },
          {
            "name": "Cameroon"
          },
          {
            "name": "Canada"
          },
          {
            "name": "CaymanIslands"
          },
          {
            "name": "CentralAfricanRepublic"
          },
          {
            "name": "Chad"
          },
          {
            "name": "Chile"
          },
          {
            "name": "China"
          },
          {
            "name": "ChristmasIsland"
          },
          {
            "name": "CocosKeelingIslands"
          },
          {
            "name": "Colombia"
          },
          {
            "name": "Comoros"
          },
          {
            "name": "Congo"
          },
          {
            "name": "CongoDemocraticRepublicOfThe"
          },
          {
            "name": "CookIslands"
          },
          {
            "name": "CostaRica"
          },
          {
            "name": "CoteDIvoire"
          },
          {
            "name": "Croatia"
          },
          {
            "name": "Cuba"
          },
          {
            "name": "Curacao"
          },
          {
            "name": "Cyprus"
          },
          {
            "name": "Czechia"
          },
          {
            "name": "Denmark"
          },
          {
            "name": "Djibouti"
          },
          {
            "name": "Dominica"
          },
          {
            "name": "DominicanRepublic"
          },
          {
            "name": "Ecuador"
          },
          {
            "name": "Egypt"
          },
          {
            "name": "ElSalvador"
          },
          {
            "name": "EquatorialGuinea"
          },
          {
            "name": "Eritrea"
          },
          {
            "name": "Estonia"
          },
          {
            "name": "Ethiopia"
          },
          {
            "name": "FalklandIslandsMalvinas"
          },
          {
            "name": "FaroeIslands"
          },
          {
            "name": "Fiji"
          },
          {
            "name": "Finland"
          },
          {
            "name": "France"
          },
          {
            "name": "FrenchGuiana"
          },
          {
            "name": "FrenchPolynesia"
          },
          {
            "name": "FrenchSouthernTerritories"
          },
          {
            "name": "Gabon"
          },
          {
            "name": "Gambia"
          },
          {
            "name": "Georgia"
          },
          {
            "name": "Germany"
          },
          {
            "name": "Ghana"
          },
          {
            "name": "Gibraltar"
          },
          {
            "name": "Greece"
          },
          {
            "name": "Greenland"
          },
          {
            "name": "Grenada"
          },
          {
            "name": "Guadeloupe"
          },
          {
            "name": "Guam"
          },
          {
            "name": "Guatemala"
          },
          {
            "name": "Guernsey"
          },
          {
            "name": "Guinea"
          },
          {
            "name": "GuineaBissau"
          },
          {
            "name": "Guyana"
          },
          {
            "name": "Haiti"
          },
          {
            "name": "HeardIslandAndMcDonaldIslands"
          },
          {
            "name": "HolySee"
          },
          {
            "name": "Honduras"
          },
          {
            "name": "HongKong"
          },
          {
            "name": "Hungary"
          },
          {
            "name": "Iceland"
          },
          {
            "name": "India"
          },
          {
            "name": "Indonesia"
          },
          {
            "name": "IranIslamicRepublicOf"
          },
          {
            "name": "Iraq"
          },
          {
            "name": "Ireland"
          },
          {
            "name": "IsleOfMan"
          },
          {
            "name": "Israel"
          },
          {
            "name": "Italy"
          },
          {
            "name": "Jamaica"
          },
          {
            "name": "Japan"
          },
          {
            "name": "Jersey"
          },
          {
            "name": "Jordan"
          },
          {
            "name": "Kazakhstan"
          },
          {
            "name": "Kenya"
          },
          {
            "name": "Kiribati"
          },
          {
            "name": "KoreaDemocraticPeoplesRepublicOf"
          },
          {
            "name": "KoreaRepublicOf"
          },
          {
            "name": "Kuwait"
          },
          {
            "name": "Kyrgyzstan"
          },
          {
            "name": "LaoPeoplesDemocraticRepublic"
          },
          {
            "name": "Latvia"
          },
          {
            "name": "Lebanon"
          },
          {
            "name": "Lesotho"
          },
          {
            "name": "Liberia"
          },
          {
            "name": "Libya"
          },
          {
            "name": "Liechtenstein"
          },
          {
            "name": "Lithuania"
          },
          {
            "name": "Luxembourg"
          },
          {
            "name": "Macao"
          },
          {
            "name": "MacedoniaTheFormerYugoslavRepublicOf"
          },
          {
            "name": "Madagascar"
          },
          {
            "name": "Malawi"
          },
          {
            "name": "Malaysia"
          },
          {
            "name": "Maldives"
          },
          {
            "name": "Mali"
          },
          {
            "name": "Malta"
          },
          {
            "name": "MarshallIslands"
          },
          {
            "name": "Martinique"
          },
          {
            "name": "Mauritania"
          },
          {
            "name": "Mauritius"
          },
          {
            "name": "Mayotte"
          },
          {
            "name": "Mexico"
          },
          {
            "name": "MicronesiaFederatedStatesOf"
          },
          {
            "name": "MoldovaRepublicOf"
          },
          {
            "name": "Monaco"
          },
          {
            "name": "Mongolia"
          },
          {
            "name": "Montenegro"
          },
          {
            "name": "Montserrat"
          },
          {
            "name": "Morocco"
          },
          {
            "name": "Mozambique"
          },
          {
            "name": "Myanmar"
          },
          {
            "name": "Namibia"
          },
          {
            "name": "Nauru"
          },
          {
            "name": "Nepal"
          },
          {
            "name": "Netherlands"
          },
          {
            "name": "NewCaledonia"
          },
          {
            "name": "NewZealand"
          },
          {
            "name": "Nicaragua"
          },
          {
            "name": "Niger"
          },
          {
            "name": "Nigeria"
          },
          {
            "name": "Niue"
          },
          {
            "name": "NorfolkIsland"
          },
          {
            "name": "NorthernMarianaIslands"
          },
          {
            "name": "Norway"
          },
          {
            "name": "Oman"
          },
          {
            "name": "Pakistan"
          },
          {
            "name": "Palau"
          },
          {
            "name": "PalestineStateOf"
          },
          {
            "name": "Panama"
          },
          {
            "name": "PapuaNewGuinea"
          },
          {
            "name": "Paraguay"
          },
          {
            "name": "Peru"
          },
          {
            "name": "Philippines"
          },
          {
            "name": "Pitcairn"
          },
          {
            "name": "Poland"
          },
          {
            "name": "Portugal"
          },
          {
            "name": "PuertoRico"
          },
          {
            "name": "Qatar"
          },
          {
            "name": "Reunion"
          },
          {
            "name": "Romania"
          },
          {
            "name": "RussianFederation"
          },
          {
            "name": "Rwanda"
          },
          {
            "name": "SaintBarthélemy"
          },
          {
            "name": "SaintHelenaAscensionAndTristanDaCunha"
          },
          {
            "name": "SaintKittsAndNevis"
          },
          {
            "name": "SaintLucia"
          },
          {
            "name": "SaintMartinFrenchPart"
          },
          {
            "name": "SaintPierreAndMiquelon"
          },
          {
            "name": "SaintVincentAndTheGrenadines"
          },
          {
            "name": "Samoa"
          },
          {
            "name": "SanMarino"
          },
          {
            "name": "SaoTomeAndPrincipe"
          },
          {
            "name": "SaudiArabia"
          },
          {
            "name": "Senegal"
          },
          {
            "name": "Serbia"
          },
          {
            "name": "Seychelles"
          },
          {
            "name": "SierraLeone"
          },
          {
            "name": "Singapore"
          },
          {
            "name": "SintMaartenDutchPart"
          },
          {
            "name": "Slovakia"
          },
          {
            "name": "Slovenia"
          },
          {
            "name": "SolomonIslands"
          },
          {
            "name": "Somalia"
          },
          {
            "name": "SouthAfrica"
          },
          {
            "name": "SouthGeorgiaAndTheSouthSandwichIslands"
          },
          {
            "name": "SouthSudan"
          },
          {
            "name": "Spain"
          },
          {
            "name": "SriLanka"
          },
          {
            "name": "Sudan"
          },
          {
            "name": "Suriname"
          },
          {
            "name": "SvalbardAndJanMayen"
          },
          {
            "name": "Swaziland"
          },
          {
            "name": "Sweden"
          },
          {
            "name": "Switzerland"
          },
          {
            "name": "SyrianArabRepublic"
          },
          {
            "name": "TaiwanProvinceOfChina"
          },
          {
            "name": "Tajikistan"
          },
          {
            "name": "TanzaniaUnitedRepublicOf"
          },
          {
            "name": "Thailand"
          },
          {
            "name": "TimorLeste"
          },
          {
            "name": "Togo"
          },
          {
            "name": "Tokelau"
          },
          {
            "name": "Tonga"
          },
          {
            "name": "TrinidadAndTobago"
          },
          {
            "name": "Tunisia"
          },
          {
            "name": "Turkey"
          },
          {
            "name": "Turkmenistan"
          },
          {
            "name": "TurksAndCaicosIslands"
          },
          {
            "name": "Tuvalu"
          },
          {
            "name": "Uganda"
          },
          {
            "name": "Ukraine"
          },
          {
            "name": "UnitedArabEmirates"
          },
          {
            "name": "UnitedKingdomOfGreatBritainAndNorthernIreland"
          },
          {
            "name": "UnitedStatesOfAmerica"
          },
          {
            "name": "UnitedStatesMinorOutlyingIslands"
          },
          {
            "name": "Uruguay"
          },
          {
            "name": "Uzbekistan"
          },
          {
            "name": "Vanuatu"
          },
          {
            "name": "VenezuelaBolivarianRepublicOf"
          },
          {
            "name": "VietNam"
          },
          {
            "name": "VirginIslandsBritish"
          },
          {
            "name": "VirginIslandsUS"
          },
          {
            "name": "WallisAndFutuna"
          },
          {
            "name": "WesternSahara"
          },
          {
            "name": "Yemen"
          },
          {
            "name": "Zambia"
          },
          {
            "name": "Zimbabwe"
          }
        ]
      }
    }
  ]
};
