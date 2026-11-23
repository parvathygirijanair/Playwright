# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM3\ecommerce.spec.js >> E-commerce shopping workflow
- Location: tests\POM3\ecommerce.spec.js:6:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.table tbody tr td:nth-child(2)')
Expected substring: "Benefit Bella Bamba"
Error: strict mode violation: locator('.table tbody tr td:nth-child(2)') resolved to 4 elements:
    1) <td class="align_left">…</td> aka getByRole('cell', { name: 'Benefit Bella Bamba' })
    2) <td>…</td> aka locator('#totals_table').getByRole('cell', { name: '$56.00' })
    3) <td>…</td> aka getByRole('cell', { name: '$2.00', exact: true })
    4) <td>…</td> aka getByRole('cell', { name: '$58.00' })

Call log:
  - Expect "toContainText" locator('.table tbody tr td:nth-child(2)') with timeout 5000ms
  - waiting for locator('.table tbody tr td:nth-child(2)')

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - banner [ref=f2e3]:
    - navigation [ref=f2e4]:
      - generic [ref=f2e5]:
        - link [ref=f2e7] [cursor=pointer]:
          - /url: https://automationteststore.com/
          - img "Automation Test Store" [ref=f2e8]
        - generic [ref=f2e10]:
          - list [ref=f2e13]:
            - listitem [ref=f2e14]:
              - link "Login or register" [ref=f2e15] [cursor=pointer]:
                - /url: https://automationteststore.com/index.php?rt=account/login
          - generic [ref=f2e17]:
            - generic [ref=f2e18]: Main Menu
            - list [ref=f2e19]:
              - listitem [ref=f2e20]:
                - link " Specials" [ref=f2e21] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/special
                  - generic [ref=f2e22]: 
                  - text: Specials
              - listitem [ref=f2e23]:
                - link " Account" [ref=f2e24] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=account/account
                  - generic [ref=f2e25]: 
                  - text: Account
                - text:  
              - listitem [ref=f2e26]:
                - link " Cart" [ref=f2e27] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/cart
                  - generic [ref=f2e28]: 
                  - text: Cart
              - listitem [ref=f2e29]:
                - link " Checkout" [ref=f2e30] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/shipping
                  - generic [ref=f2e31]: 
                  - text: Checkout
          - generic [ref=f2e34]:
            - textbox "Search Keywords" [ref=f2e35]
            - generic "Go" [ref=f2e36] [cursor=pointer]: 
    - generic [ref=f2e39]:
      - list [ref=f2e41]:
        - listitem [ref=f2e42]:
          - generic [ref=f2e43]: $ US Dollar
      - list [ref=f2e47]:
        - listitem [ref=f2e48]:
          - link " 2 Items - $56.00" [ref=f2e49] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=checkout/cart
            - generic [ref=f2e50]: 
            - text: 2 Items - $56.00
          - text:   
      - generic [ref=f2e53]:
        - link "Facebook" [ref=f2e54] [cursor=pointer]:
          - /url: http://www.facebook.com
        - link "Twitter" [ref=f2e55] [cursor=pointer]:
          - /url: https://twitter.com/
        - link "Linkedin" [ref=f2e56] [cursor=pointer]:
          - /url: https://uk.linkedin.com/
  - generic [ref=f2e57]:
    - navigation [ref=f2e60]:
      - list [ref=f2e61]:
        - listitem [ref=f2e62]:
          - link "Home" [ref=f2e63] [cursor=pointer]:
            - /url: https://automationteststore.com/
          - text:      
        - listitem [ref=f2e64]:
          - link "Apparel & accessories" [ref=f2e65] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=68
        - listitem [ref=f2e66]:
          - link "Makeup" [ref=f2e67] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=36
        - listitem [ref=f2e68]:
          - link "Skincare" [ref=f2e69] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=43
        - listitem [ref=f2e70]:
          - link "Fragrance" [ref=f2e71] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=49
        - listitem [ref=f2e72]:
          - link "Men" [ref=f2e73] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=58
        - listitem [ref=f2e74]:
          - link "Hair Care" [ref=f2e75] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=52
        - listitem [ref=f2e76]:
          - link "Books" [ref=f2e77] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=product/category&path=65
    - list [ref=f2e80]:
      - listitem [ref=f2e81]:
        - link " Home" [ref=f2e82] [cursor=pointer]:
          - /url: https://automationteststore.com/
          - generic "Home" [ref=f2e83]: 
          - text: Home
      - listitem [ref=f2e84]:
        - text: 
        - link "Basket" [ref=f2e85] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=checkout/cart
  - generic [ref=f2e89]:
    - heading " Shopping Cart" [level=1] [ref=f2e90]:
      - generic [ref=f2e91]:
        - generic [ref=f2e92]: 
        - text: Shopping Cart
    - generic [ref=f2e94]:
      - generic [ref=f2e95]:
        - table [ref=f2e96]:
          - rowgroup [ref=f2e97]:
            - row [ref=f2e98]:
              - columnheader "Image" [ref=f2e99]
              - columnheader "Name" [ref=f2e100]
              - columnheader "Model" [ref=f2e101]
              - columnheader "Unit Price" [ref=f2e102]
              - columnheader "Quantity" [ref=f2e103]
              - columnheader "Total" [ref=f2e104]
              - columnheader "Remove" [ref=f2e105]
            - row [ref=f2e106]:
              - cell [ref=f2e107]:
                - link [ref=f2e108] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52&key=52
              - cell [ref=f2e109]:
                - link "Benefit Bella Bamba" [ref=f2e110] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52&key=52
              - cell "523755" [ref=f2e111]
              - cell "$28.00" [ref=f2e112]
              - cell [ref=f2e113]:
                - textbox [ref=f2e115]: "2"
              - cell "$56.00" [ref=f2e116]
              - cell [ref=f2e117]:
                - link "" [ref=f2e118] [cursor=pointer]:
                  - /url: https://automationteststore.com/index.php?rt=checkout/cart&remove=52
        - generic [ref=f2e120]:
          - link " Checkout" [ref=f2e121] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f2e122]: 
            - text: Checkout
          - button " Update" [ref=f2e123] [cursor=pointer]:
            - generic [ref=f2e124]: 
            - text: Update
      - generic [ref=f2e125]:
        - table [ref=f2e127]:
          - rowgroup [ref=f2e128]:
            - row [ref=f2e129]:
              - columnheader "Apply Coupon Code" [ref=f2e130]
            - row [ref=f2e131]:
              - 'cell "Enter your code and click \"Apply Coupon\" and to see your discount instantly applied to your order. Coupon:  Apply Coupon" [ref=f2e132]':
                - paragraph [ref=f2e133]: Enter your code and click "Apply Coupon" and to see your discount instantly applied to your order.
                - generic [ref=f2e136]:
                  - generic [ref=f2e137]: "Coupon:"
                  - textbox [ref=f2e138]
                  - button " Apply Coupon" [ref=f2e139] [cursor=pointer]:
                    - generic [ref=f2e140]: 
                    - text: Apply Coupon
        - table [ref=f2e142]:
          - rowgroup [ref=f2e143]:
            - row [ref=f2e144]:
              - columnheader "Estimate Shipping & Taxes" [ref=f2e145]
            - row [ref=f2e146]:
              - cell "Country and State United Kingdom Greater London ZIP/Post Code  Estimate Shipments Flat Shipping Rate - $2.00" [ref=f2e147]:
                - generic [ref=f2e149]:
                  - generic [ref=f2e150]:
                    - generic [ref=f2e151]: Country and State
                    - generic [ref=f2e152]:
                      - combobox [ref=f2e154]:
                        - option "Afghanistan"
                        - option "Albania"
                        - option "Algeria"
                        - option "American Samoa"
                        - option "Andorra"
                        - option "Angola"
                        - option "Anguilla"
                        - option "Antarctica"
                        - option "Antigua and Barbuda"
                        - option "Argentina"
                        - option "Armenia"
                        - option "Aruba"
                        - option "Australia"
                        - option "Austria"
                        - option "Azerbaijan"
                        - option "Bahamas"
                        - option "Bahrain"
                        - option "Bangladesh"
                        - option "Barbados"
                        - option "Belarus"
                        - option "Belgium"
                        - option "Belize"
                        - option "Benin"
                        - option "Bermuda"
                        - option "Bhutan"
                        - option "Bolivia"
                        - option "Bosnia and Herzegowina"
                        - option "Botswana"
                        - option "Bouvet Island"
                        - option "Brazil"
                        - option "British Indian Ocean Territory"
                        - option "Brunei Darussalam"
                        - option "Bulgaria"
                        - option "Burkina Faso"
                        - option "Burundi"
                        - option "Cambodia"
                        - option "Cameroon"
                        - option "Canada"
                        - option "Cape Verde"
                        - option "Cayman Islands"
                        - option "Central African Republic"
                        - option "Chad"
                        - option "Chile"
                        - option "China"
                        - option "Christmas Island"
                        - option "Cocos (Keeling) Islands"
                        - option "Colombia"
                        - option "Comoros"
                        - option "Congo"
                        - option "Cook Islands"
                        - option "Costa Rica"
                        - option "Cote D'Ivoire"
                        - option "Croatia"
                        - option "Cuba"
                        - option "Cyprus"
                        - option "Czech Republic"
                        - option "Denmark"
                        - option "Djibouti"
                        - option "Dominica"
                        - option "Dominican Republic"
                        - option "East Timor"
                        - option "Ecuador"
                        - option "Egypt"
                        - option "El Salvador"
                        - option "Equatorial Guinea"
                        - option "Eritrea"
                        - option "Estonia"
                        - option "Ethiopia"
                        - option "Falkland Islands (Malvinas)"
                        - option "Faroe Islands"
                        - option "Fiji"
                        - option "Finland"
                        - option "France"
                        - option "France, Metropolitan"
                        - option "French Guiana"
                        - option "French Polynesia"
                        - option "French Southern Territories"
                        - option "Gabon"
                        - option "Gambia"
                        - option "Georgia"
                        - option "Germany"
                        - option "Ghana"
                        - option "Gibraltar"
                        - option "Greece"
                        - option "Greenland"
                        - option "Grenada"
                        - option "Guadeloupe"
                        - option "Guam"
                        - option "Guatemala"
                        - option "Guinea"
                        - option "Guinea-bissau"
                        - option "Guyana"
                        - option "Haiti"
                        - option "Heard and Mc Donald Islands"
                        - option "Honduras"
                        - option "Hong Kong"
                        - option "Hungary"
                        - option "Iceland"
                        - option "India"
                        - option "Indonesia"
                        - option "Iran (Islamic Republic of)"
                        - option "Iraq"
                        - option "Ireland"
                        - option "Israel"
                        - option "Italy"
                        - option "Jamaica"
                        - option "Japan"
                        - option "Jordan"
                        - option "Kazakhstan"
                        - option "Kenya"
                        - option "Kiribati"
                        - option "Korea, Republic of"
                        - option "Kuwait"
                        - option "Kyrgyzstan"
                        - option "Lao People's Democratic Republic"
                        - option "Latvia"
                        - option "Lebanon"
                        - option "Lesotho"
                        - option "Liberia"
                        - option "Libyan Arab Jamahiriya"
                        - option "Liechtenstein"
                        - option "Lithuania"
                        - option "Luxembourg"
                        - option "Macau"
                        - option "Macedonia"
                        - option "Madagascar"
                        - option "Malawi"
                        - option "Malaysia"
                        - option "Maldives"
                        - option "Mali"
                        - option "Malta"
                        - option "Marshall Islands"
                        - option "Martinique"
                        - option "Mauritania"
                        - option "Mauritius"
                        - option "Mayotte"
                        - option "Mexico"
                        - option "Micronesia, Federated States of"
                        - option "Moldova, Republic of"
                        - option "Monaco"
                        - option "Mongolia"
                        - option "Montserrat"
                        - option "Morocco"
                        - option "Mozambique"
                        - option "Myanmar"
                        - option "Namibia"
                        - option "Nauru"
                        - option "Nepal"
                        - option "Netherlands"
                        - option "Netherlands Antilles"
                        - option "New Caledonia"
                        - option "New Zealand"
                        - option "Nicaragua"
                        - option "Niger"
                        - option "Nigeria"
                        - option "Niue"
                        - option "Norfolk Island"
                        - option "North Korea"
                        - option "Northern Ireland"
                        - option "Northern Mariana Islands"
                        - option "Norway"
                        - option "Oman"
                        - option "Pakistan"
                        - option "Palau"
                        - option "Panama"
                        - option "Papua New Guinea"
                        - option "Paraguay"
                        - option "Peru"
                        - option "Philippines"
                        - option "Pitcairn"
                        - option "Poland"
                        - option "Portugal"
                        - option "Puerto Rico"
                        - option "Qatar"
                        - option "Reunion"
                        - option "Romania"
                        - option "Russia"
                        - option "Rwanda"
                        - option "Saint Kitts and Nevis"
                        - option "Saint Lucia"
                        - option "Saint Vincent and the Grenadines"
                        - option "Samoa"
                        - option "San Marino"
                        - option "Sao Tome and Principe"
                        - option "Saudi Arabia"
                        - option "Senegal"
                        - option "Seychelles"
                        - option "Sierra Leone"
                        - option "Singapore"
                        - option "Slovak Republic"
                        - option "Slovenia"
                        - option "Solomon Islands"
                        - option "Somalia"
                        - option "South Africa"
                        - option "South Georgia & South Sandwich Islands"
                        - option "Spain"
                        - option "Sri Lanka"
                        - option "St. Helena"
                        - option "St. Pierre and Miquelon"
                        - option "Sudan"
                        - option "Suriname"
                        - option "Svalbard and Jan Mayen Islands"
                        - option "Swaziland"
                        - option "Sweden"
                        - option "Switzerland"
                        - option "Syrian Arab Republic"
                        - option "Taiwan"
                        - option "Tajikistan"
                        - option "Tanzania, United Republic of"
                        - option "Thailand"
                        - option "Togo"
                        - option "Tokelau"
                        - option "Tonga"
                        - option "Trinidad and Tobago"
                        - option "Tunisia"
                        - option "Turkey"
                        - option "Turkmenistan"
                        - option "Turks and Caicos Islands"
                        - option "Tuvalu"
                        - option "Uganda"
                        - option "Ukraine"
                        - option "United Arab Emirates"
                        - option "United Kingdom" [selected]
                        - option "United States"
                        - option "United States Minor Outlying Islands"
                        - option "Uruguay"
                        - option "Uzbekistan"
                        - option "Vanuatu"
                        - option "Vatican City State (Holy See)"
                        - option "Venezuela"
                        - option "Viet Nam"
                        - option "Virgin Islands (British)"
                        - option "Virgin Islands (U.S.)"
                        - option "Wallis and Futuna Islands"
                        - option "Western Sahara"
                        - option "Yemen"
                        - option "Yugoslavia"
                        - option "Zaire"
                        - option "Zambia"
                        - option "Zimbabwe"
                      - combobox [ref=f2e156]:
                        - option "Aberdeen"
                        - option "Aberdeenshire"
                        - option "Anglesey"
                        - option "Angus"
                        - option "Argyll and Bute"
                        - option "Bedfordshire"
                        - option "Berkshire"
                        - option "Blaenau Gwent"
                        - option "Bridgend"
                        - option "Bristol"
                        - option "Buckinghamshire"
                        - option "Caerphilly"
                        - option "Cambridgeshire"
                        - option "Cardiff"
                        - option "Carmarthenshire"
                        - option "Ceredigion"
                        - option "Cheshire"
                        - option "Clackmannanshire"
                        - option "Conwy"
                        - option "Cornwall"
                        - option "Denbighshire"
                        - option "Derbyshire"
                        - option "Devon"
                        - option "Dorset"
                        - option "Dumfries and Galloway"
                        - option "Dundee"
                        - option "Durham"
                        - option "East Ayrshire"
                        - option "East Dunbartonshire"
                        - option "East Lothian"
                        - option "East Renfrewshire"
                        - option "East Riding of Yorkshire"
                        - option "East Sussex"
                        - option "Edinburgh"
                        - option "Essex"
                        - option "Falkirk"
                        - option "Fife"
                        - option "Flintshire"
                        - option "Glasgow"
                        - option "Gloucestershire"
                        - option "Greater London" [selected]
                        - option "Greater Manchester"
                        - option "Gwynedd"
                        - option "Hampshire"
                        - option "Herefordshire"
                        - option "Hertfordshire"
                        - option "Highlands"
                        - option "Inverclyde"
                        - option "Isle of Wight"
                        - option "Kent"
                        - option "Lancashire"
                        - option "Leicestershire"
                        - option "Lincolnshire"
                        - option "Merseyside"
                        - option "Merthyr Tydfil"
                        - option "Midlothian"
                        - option "Monmouthshire"
                        - option "Moray"
                        - option "Neath Port Talbot"
                        - option "Newport"
                        - option "Norfolk"
                        - option "North Ayrshire"
                        - option "North Lanarkshire"
                        - option "North Yorkshire"
                        - option "Northamptonshire"
                        - option "Northumberland"
                        - option "Nottinghamshire"
                        - option "Orkney Islands"
                        - option "Oxfordshire"
                        - option "Pembrokeshire"
                        - option "Perth and Kinross"
                        - option "Powys"
                        - option "Renfrewshire"
                        - option "Rhondda Cynon Taff"
                        - option "Rutland"
                        - option "Scottish Borders"
                        - option "Shetland Islands"
                        - option "Shropshire"
                        - option "Somerset"
                        - option "South Ayrshire"
                        - option "South Lanarkshire"
                        - option "South Yorkshire"
                        - option "Staffordshire"
                        - option "Stirling"
                        - option "Suffolk"
                        - option "Surrey"
                        - option "Swansea"
                        - option "Torfaen"
                        - option "Tyne and Wear"
                        - option "Vale of Glamorgan"
                        - option "Warwickshire"
                        - option "West Dunbartonshire"
                        - option "West Lothian"
                        - option "West Midlands"
                        - option "West Sussex"
                        - option "West Yorkshire"
                        - option "Western Isles"
                        - option "Wiltshire"
                        - option "Worcestershire"
                        - option "Wrexham"
                  - generic [ref=f2e157]:
                    - generic [ref=f2e158]: ZIP/Post Code
                    - generic [ref=f2e159]:
                      - textbox [ref=f2e160]
                      - button " Estimate" [ref=f2e162] [cursor=pointer]:
                        - generic [ref=f2e163]: 
                        - text: Estimate
                  - generic [ref=f2e164]:
                    - generic [ref=f2e165]: Shipments
                    - combobox [ref=f2e167]:
                      - option "Flat Shipping Rate - $2.00" [selected]
      - generic [ref=f2e169]:
        - table [ref=f2e170]:
          - rowgroup [ref=f2e171]:
            - row [ref=f2e172]:
              - cell "Sub-Total:" [ref=f2e173]
              - cell "$56.00" [ref=f2e174]
            - row [ref=f2e175]:
              - cell "Flat Shipping Rate:" [ref=f2e176]
              - cell "$2.00" [ref=f2e177]
            - row [ref=f2e178]:
              - cell "Total:" [ref=f2e179]
              - cell "$58.00" [ref=f2e180]
        - link " Continue Shopping" [ref=f2e181] [cursor=pointer]:
          - /url: https://automationteststore.com/index.php?rt=product/product&product_id=52
          - generic [ref=f2e182]: 
          - text: Continue Shopping
        - link " Checkout" [ref=f2e183] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f2e184]: 
          - text: Checkout
  - contentinfo [ref=f2e188]:
    - generic [ref=f2e190]:
      - generic [ref=f2e193]:
        - heading "About Us" [level=2] [ref=f2e194]
        - paragraph [ref=f2e195]: This store has been created to enable students to practice their automation testing skills. This is not a real store, no orders are actually placed or payments taken. This store is to be used for educational purposes only.
      - generic [ref=f2e198]:
        - heading "Contact Us" [level=2] [ref=f2e199]
        - list [ref=f2e200]:
          - listitem [ref=f2e201]:
            - generic [ref=f2e202]: 
            - text: +123 456 7890
          - listitem [ref=f2e203]:
            - generic [ref=f2e204]: 
            - text: admin@automationteststore.com
      - generic [ref=f2e207]:
        - heading "Testimonials" [level=2] [ref=f2e208]
        - generic [ref=f2e209]:
          - list [ref=f2e211]:
            - listitem [ref=f2e212]:
              - text: "\"Regular customer and products at great prices. Thanks again.\""
              - generic [ref=f2e213]: "By : Mrs Baker on trustedmegareviews.org"
            - listitem [ref=f2e214]:
              - text: "\"Really great products and professional service!\""
              - generic [ref=f2e215]: "By : Megan Witmore"
            - listitem [ref=f2e216]:
              - text: "\"I found this store to be very reasonably priced and the service was superb. Highly recommended \""
              - generic [ref=f2e217]: "By : Jason Sturidge"
            - listitem [ref=f2e218]:
              - text: "\"Returns were easy and my replacement item arrived very quickly. Really great service. Thanks and will be buying again.\""
              - generic [ref=f2e219]: "By : Kirsty Williams"
            - listitem [ref=f2e220]:
              - text: "\"Regular customer and products at great prices. Thanks again.\""
              - generic [ref=f2e221]: "By : Mrs Baker on trustedmegareviews.org"
            - listitem [ref=f2e222]:
              - text: "\"Really great products and professional service!\""
              - generic [ref=f2e223]: "By : Megan Witmore"
          - list [ref=f2e224]:
            - listitem [ref=f2e225]:
              - generic [ref=f2e226]: "1"
            - listitem [ref=f2e227]:
              - generic [ref=f2e228] [cursor=pointer]: "2"
            - listitem [ref=f2e229]:
              - generic [ref=f2e230] [cursor=pointer]: "3"
            - listitem [ref=f2e231]:
              - generic [ref=f2e232] [cursor=pointer]: "4"
      - generic [ref=f2e235]:
        - heading "Newsletter Signup" [level=2] [ref=f2e236]
        - generic [ref=f2e237]:  Sign up to Our Newsletter & get attractive Offers by subscribing to our newsletters.
        - generic [ref=f2e240]:
          - textbox "Subscribe to Newsletter" [ref=f2e241]
          - button "Subscribe" [ref=f2e243] [cursor=pointer]
    - generic [ref=f2e245]:
      - list [ref=f2e248]:
        - listitem [ref=f2e249]:
          - link "About Us" [ref=f2e251] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=1
        - listitem [ref=f2e252]:
          - link "Privacy Policy" [ref=f2e254] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=2
        - listitem [ref=f2e255]:
          - link "Return Policy" [ref=f2e257] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=3
        - listitem [ref=f2e258]:
          - link "Shipping" [ref=f2e260] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/content&content_id=4
        - listitem [ref=f2e261]:
          - link "Contact Us" [ref=f2e262] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/contact
        - listitem [ref=f2e263]:
          - link "Site Map" [ref=f2e264] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=content/sitemap
        - listitem [ref=f2e265]:
          - link "Login" [ref=f2e266] [cursor=pointer]:
            - /url: https://automationteststore.com/index.php?rt=account/login
      - generic [ref=f2e268]:
        - link "Facebook" [ref=f2e269] [cursor=pointer]:
          - /url: http://www.facebook.com
        - link "Twitter" [ref=f2e270] [cursor=pointer]:
          - /url: https://twitter.com/
        - link "Linkedin" [ref=f2e271] [cursor=pointer]:
          - /url: https://uk.linkedin.com/
    - generic [ref=f2e273]:
      - img "payments" [ref=f2e276]
      - generic [ref=f2e277]:
        - text: Powered By
        - link "AbanteCart" [ref=f2e278] [cursor=pointer]:
          - /url: http://www.abantecart.com
        - text: Automation Test Store © 2026
      - link [ref=f2e281] [cursor=pointer]:
        - /url: http://www.abantecart.com/contribute-to-abantecart
        - img "Support AbanteCart eCommerce" [ref=f2e282]
    - link "Back to top" [ref=f2e283] [cursor=pointer]:
      - /url: "#"
```

# Test source

```ts
  1  | 
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | class CartPage {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  | 
  8  |         // Locators
  9  |         this.cartIcon = page.locator('.cart');
  10 |         this.productName = page.locator('.table tbody tr td:nth-child(2)');
  11 |         this.productPrice = page.locator('.table tbody tr td:nth-child(4)');
  12 |         this.quantity = page.locator('input[name*="quantity"]');
  13 |         this.updateButton = page.locator('button[title="Update"]');
  14 |         this.checkoutButton = page.getByText('Checkout', { exact: true });
  15 |     }
  16 | 
  17 |     // Navigate to Cart
  18 |     async goToCart() {
  19 |         await this.cartIcon.click();
  20 |     }
  21 | 
  22 |     // Verify product details
  23 |     async verifyProduct(productName) {
> 24 |         await expect(this.productName).toContainText(productName);
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  25 |     }
  26 | 
  27 |     // Update quantity
  28 |     async updateQuantity(qty) {
  29 |         await this.quantity.fill(String(qty));
  30 |         await this.updateButton.click();
  31 |     }
  32 | 
  33 |     // Proceed to checkout
  34 |     async proceedToCheckout() {
  35 |         await this.checkoutButton.click();
  36 |     }
  37 | }
  38 | 
  39 | module.exports = CartPage;
  40 | 
```