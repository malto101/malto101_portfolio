/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Real-time Object Tracking in Videos using Deep Learning and Optical Flow",
    authors:
      "Piyush Modi; Dhruv Menon; Ark Verma; Anu Shaju Areeckal",
    conferences:
      "2024 2nd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT)",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "P. Modi, D. Menon, A. Verma and A. S. Areeckal, Real-time Object Tracking in Videos using Deep Learning and Optical Flow, 2024 2nd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT), Bengaluru, India, 2024, pp. 1114-1119, doi: 10.1109/IDCIoT59759.2024.10467997.",
    },
    abstract:
      "Precise tracking of objects in real-time videos is a challenging task. This study presents an integrated system that fuses computer vision and deep learning techniques to enhance object tracking in videos. Leveraging deep learning using YOLOv8 architecture, we first extract object position by predicting the location of bounding boxes in video frames. We then employ blurring and optical flow for precise object tracking. Optical flow analysis aids in mapping the object's movement across frames, allowing for accurate trajectory tracing. This comprehensive approach ensures the object's consistent identification throughout the video. The proposed method is trained and validated on DFL Soccer ball detection dataset. The work shows promising results in real-time tracking of football in the football match videos. The proposed system combines computer vision and deep learning technologies to provide an efficient and reliable method for tracking objects in dynamic video environments, with potential applications in surveillance, autonomous navigation, and more.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
    (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
