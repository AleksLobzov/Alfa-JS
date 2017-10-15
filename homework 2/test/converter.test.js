import converter from '../src/script';

const operations = [
    {
        "date": "2017-07-31",
        "amount": "5422",
        "links": [
          {
            "name": "link1",
            "href": "http://google.com",
            "method": "GET"
          }
        ]
    },

    {
        "date": "2017-07-31",
        "amount": "34343",
        "links": [
          {
            "name": "link2",
            "href": "https://amazon.com",
            "method": "GET"
          }
        ]
    },

    {
        "date": "2017-08-31",
        "amount": "5422",
        "links": [
          {
            "name": "link1",
            "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
            "method": "GET"
          }
        ]
    },

];

const result = {
    "2017-08-31": {
        "operations": [
            {
                "date": "2017-08-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
              "method": "GET"
            }
        ]
    },
    "2017-07-31": {
        "operations": [
            {
                "date": "2017-07-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "http://google.com",
                    "method": "GET"
                  }
                ]
            },
            {
                "date": "2017-07-31",
                "amount": "34343",
                "links": [
                  {
                    "name": "link2",
                    "href": "https://amazon.com",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "http://google.com",
              "method": "GET"
            },
            {
              "name": "link2",
              "href": "https://amazon.com",
              "method": "GET"
            }
        ]
    }
}

describe('converter', function() {

  it('test 1', function() {

    expect(converter(operations)).toBe(result);

  });

})
