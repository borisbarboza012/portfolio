
    let image = document.getElementById("image.png");
    image.addEventListener("mouseover", function() {
    image.style.border = "10px solid red";
    });

    
 function validerformulaire {
    const form = document.forms.contactForm;

    if (form.prenom.value ==="") {
        alert("Veillez entrer votre prénom");
        form.prenom.focus();
        return false;
    }
     if (form.nom.value ==="") {
        alert("Veillez entrer votre nom");
        form.nom.focus();
        return false;
    }
     if (form.objet.value ==="") {
        alert("Veillez entrer votre objet");
        form.objet.focus();
        return false;
    }
     if (form.message.value ==="") {
        alert("Veillez entrer votre message");
        form.message.focus();
        return false;
    }
    alert("Formulaire validé avec succès");
    return false;
 }
 document.form.contactForm.ousubmit = validerformulaire;

