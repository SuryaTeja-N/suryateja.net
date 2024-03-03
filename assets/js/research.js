/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Enhanced Public Key Infrastructure for Public e-Services in India”",
    authors:
      "Surya Teja N, Ankush Singh",
    conferences:
      "2022 International Conference on Public Key Infrastructure",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Surya Teja Neerukattu, Enhanced Public Key Infrastructure for Public e-Services in India””,Journal of Science and Technology, Vol. 07, Issue 06,-August 2022, pp20-30.",
    },
    abstract:
      "Public Key Infrastructure (PKI) is enabling infrastructure that provides authentication processes,public-key cryptography, and digital signatures to ensure confidentiality, data integrity, authenticationand non-repudiation. PKI offers these trust and security services by using distinctive components likeCertificate Authority, Encryption key management, end-user encryption software tools for storing,renewing, and revoking digital keys and secure socket layer certificates. This paper will present anarchitectural model to provide pki as a service in India for e-governance to provide public services in a secure way by addressing several shortcomings of the current infrastructure and its proposed extensions.",
    absbox: "absPopup1",
  },
  {
    title: "REMOTLY MONITORING HEALTH OF THE SOLAR POWER SYSTEM USING MQTT",
    authors:
      "Surya Teja N, Sai Swaroop",
    conferences:
      "Sathyabama university, chennai, 2020",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "A wireless remote monitoring system for solar power system is proposed in this paper. It is an Internet of Things (IoT) application implemented with an objective to offer a cost-effective solution of monitoring system, which continuously presents parameters of solar system and its performance on mobile app or website using the cloud server like adafruit . so, This system is developed with solar panel to monitor string voltage, string current, voltage from battery. System is controlled by ATmega328p microcontroller which is in Arduino Uno. On board Node mcu 8266, GSM enhances the system performance with reduced area and facilitates to monitor system parameters after every minute.",
    absbox: "absPopup2",
  }, 
  {
    title: "A Call for More Rigor in Unsupervised Cross-lingual Learning",
    authors:
      "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "review motivations, training signals, and methodological issues related to unsupervised cross-lingual learning. They emphasize the need for comparable evaluation and discuss various approaches in this field",
    absbox: "absPopup2",
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
