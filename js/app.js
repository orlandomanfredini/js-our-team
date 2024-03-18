// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayOurTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        profileImg : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief editor',
        profileImg : 'angela-caroll-chief-editor.jpg', 
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        profileImg : 'walter-gordon-office-manager.jpg', 
    },
    {
        name : 'Angela Lopez',	
        role : 'Social Media Manager',
        profileImg : 'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',	
        role : 'Developer',
        profileImg : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',	
        role : 'Graphic Designer',
        profileImg : 'barbara-ramos-graphic-designer.jpg',
    }


]

// console.log(arrayOurTeam);


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe


for(let i = 0; i < arrayOurTeam.length; i++){
    let currentMember = arrayOurTeam[i];
    console.log('Il nome è: ' + currentMember.name, 'Il ruolo è: ' + currentMember.role,'La sua immagine profilo è: ' + currentMember.profileImg);
    

    const infoMember = document.createElement('li');
    infoMember.innerHTML = currentMember.name + currentMember.role + currentMember.profileImg;

    const appendInfo = document.getElementById('list');

    appendInfo.append(infoMember);
}










// DATI:
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

