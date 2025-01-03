const Data = "Media_DataBank.JSON";

const Data_Value = fetch(Data).then(Data_Respond => Data_Respond.json())
.then(Value => 
{
    const Ad_Project_List = Value.Image[0].Ad_Project;

    const Class_Project = Value.Image[0].Class_Project;

    const Personal_Project = Value.Image[0].Personal_Project;

    const Vid_Film = Value.Video[0].Film;

    const Vid_Animation = Value.Video[0].Animation;

    
    if (document.getElementById("CLASS_PROJECT")) 
    {
        for (let i = 0; i < Class_Project.length; i++) 
        {
        
            const Button_Display = document.createElement("button");
            Button_Display.className = "Content_Image_Display";
            Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Class_Project[i] + "')")
        
            const Image = document.createElement("img");
            Image.src = Class_Project[i]
            Image.width = 150;
            Image.alt = "Image Not Found";
        
            const Title_Image = document.createElement("h3");
            Title_Image.textContent = Class_Project[i].substr(20)
        
            Button_Display.append(Image, Title_Image);
        
            document.getElementById("CLASS_PROJECT").appendChild(Button_Display);
        }
    }

    if (document.getElementById("AD_PROJECT")) 
    {
        for (let i = 0; i < Ad_Project_List.length; i++) 
        {
    
            const Button_Display = document.createElement("button");
            Button_Display.className = "Content_Image_Display";
            Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Ad_Project_List[i] + "')")
    
            const Image = document.createElement("img");
            Image.src = Ad_Project_List[i]
            Image.width = 150;
            Image.alt = "Image Not Found";
    
            const Title_Image = document.createElement("h3");
            Title_Image.textContent = Ad_Project_List[i].substr(17)
    
            Button_Display.append(Image,Title_Image);
    
            document.getElementById("AD_PROJECT").appendChild(Button_Display);
        }
    }

    if (document.getElementById("PERSONAL_PROJECT")) 
    {
        for (let i = 0; i < Personal_Project.length; i++) 
        {
        
            const Button_Display = document.createElement("button");
            Button_Display.className = "Content_Image_Display";
            Button_Display.setAttribute("onclick", "Image_Modal_Open('" + Personal_Project[i] + "')")
        
            const Image = document.createElement("img");
            Image.src = Personal_Project[i]
            Image.width = 150;
            Image.alt = "Image Not Found";
        
            const Title_Image = document.createElement("h3");
            Title_Image.textContent = Personal_Project[i].substr(23)
        
            Button_Display.append(Image,Title_Image);
        
            document.getElementById("PERSONAL_PROJECT").appendChild(Button_Display);
        }  
    }

    if (document.getElementById("FILM")) 
    {
        for (let i = 0; i < Vid_Film.length; i++) 
        {
            const Vid = document.createElement("video");
            Vid.src = Vid_Film[i];
            Vid.width = 600;
            Vid.controls = true;

            Vid.className = "Content_Video_Display";
                    
            document.getElementById("FILM").appendChild(Vid);
        }
    }

    if (document.getElementById("ANIMATION")) 
    {
        for (let i = 0; i < Vid_Animation.length; i++) 
        {
            const Vid = document.createElement("video");
            Vid.src = Vid_Animation[i];
            Vid.width = 600;
            Vid.controls = true;

            Vid.className = "Content_Video_Display";
                    
            document.getElementById("ANIMATION").appendChild(Vid);
        }
    }
  
})