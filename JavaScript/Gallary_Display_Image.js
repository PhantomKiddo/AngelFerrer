const Data = "Image_DataBank.JSON";

const Data_Value = fetch(Data).then(Data_Respond => Data_Respond.json())
.then(Value => 
{
    const Ad_Project_List = Value.Image[0].Ad_Project;

    const Class_Project = Value.Image[0].Class_Project;

    const Personal_Project = Value.Image[0].Personal_Project;

    for (let i = 0; i < Class_Project.length; i++) 
    {
    
        const Button_Display = document.createElement("button");
        Button_Display.className = "Content_Image_display";
        Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Class_Project[i] + "')")
    
        const Image = document.createElement("img");
        Image.src = Class_Project[i]
        Image.width = 150;
        Image.alt = "Image Not Found";
    
        //const Title_Image = document.createElement("h3");
        //Title_Image.textContent = Class_Project[i]
    
        Button_Display.append(Image);
    
        document.getElementById("CLASS_PROJECT").appendChild(Button_Display);
    }

    for (let i = 0; i < Ad_Project_List.length; i++) 
    {

        const Button_Display = document.createElement("button");
        Button_Display.className = "Content_Image_display";
        Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Ad_Project_List[i] + "')")

        const Image = document.createElement("img");
        Image.src = Ad_Project_List[i]
        Image.width = 150;
        Image.alt = "Image Not Found";

        //const Title_Image = document.createElement("h3");
        //Title_Image.textContent = Ad_Project_List[i]

        Button_Display.append(Image);

        document.getElementById("AD_PROJECT").appendChild(Button_Display);
    }

    for (let i = 0; i < Personal_Project.length; i++) 
        {
    
            const Button_Display = document.createElement("button");
            Button_Display.className = "Content_Image_display";
            Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Personal_Project[i] + "')")
    
            const Image = document.createElement("img");
            Image.src = Personal_Project[i]
            Image.width = 150;
            Image.alt = "Image Not Found";
    
            //const Title_Image = document.createElement("h3");
            //Title_Image.textContent = Personal_Project[i]
    
            Button_Display.append(Image);
    
            document.getElementById("PERSONAL_PROJECT").appendChild(Button_Display);
        }  
    }
)