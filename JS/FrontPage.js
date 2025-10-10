const SHEETID = "1mhB3n_RdUE6raNTCDuq59XT3ImiBH6ndvA1Kayss_4k";
const SHEETNAME = "Home_Index";
const RANGE = "B3:E20";

const url = "https://docs.google.com/spreadsheets/d/" + SHEETID + "/gviz/tq?tqx=out:json&sheet=$" + SHEETNAME + "&range=$" + RANGE ;



//________________________________________(Google_Sheet_datafetch)



fetch(url)
.then((response) => response.text())
.then((data) => 
{
    const Jsondata = JSON.parse(data.substring(47).slice(0, -2))
    
    const Finalized = Jsondata.table.rows

    //________________________________________(Finalized_data)

    Finalized.forEach(element => 
    {
       
        //________________________________________(Google_Sheet_datafetch)
        const Content = document.createElement('div');
        Content.className = 'Content_Block';

        const Title = document.createElement('h2');
        Title.className = 'WhtText';

        const Date_ = document.createElement('h3');
        Date_.className = 'WhtText';

        const Description = document.createElement('p');

        const Image_ = document.createElement('img');


        
        Title.textContent = element.c[0].v;
        Date_.textContent = element.c[1].f
        Description.textContent = element.c[2].v

        console.log(Description)
    });
})