const ID = "1mhB3n_RdUE6raNTCDuq59XT3ImiBH6ndvA1Kayss_4k";
const Name = encodeURI("Home_Index");
const SheetRange = "B3:E20";
const _URL = "https://docs.google.com/spreadsheets/d/" + ID + "/gviz/tq?sheet=" + Name + "&range=" + SheetRange;

QueryPost();

async function QueryPost() 
{
    const response = await fetch(_URL)
    var Data = await JSON.parse((await response.text()).substr(47).slice(0, -2))
    var Data_length = Data.table.rows.length;
    
    for (let i = 0; i < Data_length; i++) 
    {
        // Summary: This is a ContentBox
        const ContentBox = document.createElement("div");
        ContentBox.className = "Content_Display_1";

        // Summary: This is a HboxContainer
        const HboxContainer = document.createElement("div");
        HboxContainer.className = "H_box";
        
        // Summary: This is a 
        const Title = document.createElement("h2");
        Title.textContent = Data.table.rows[i].c[0].v;
        Title.className = "Text_Color_Black";

        // Summary: This is a Date string
        const Date = document.createElement("h3");
        Date.textContent = Data.table.rows[i].c[1].v;

        // Summary: This is a Horizontal Ruler
        const hr = document.createElement("hr");

        // Summary: This is a Text
        const text = document.createElement("p");
        text.textContent = Data.table.rows[i].c[2].v;

        // Summary: HboxContainer is appending with the Title and the date, making into one content
        HboxContainer.append(Title, Date);

        const image = document.createElement("img");
        image.src = Data.table.rows[i].c[3].v;
        image.width = 250

        

       
            
        // Summary: ContentContainer is appending all the content, making into one Object
        ContentBox.append(HboxContainer,hr,image,text);
        console.log("Null");
        

        // Summary: This object is now being displayed into the HTML
        document.getElementById("Append_This").append(ContentBox);

    }
}

