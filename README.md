<h4>Département d’Informatique<br>
Module : Développement des applications web</h4><br>

Niveau : L2

<h1>Partie I</h1>
<ol>
  <li>Créer un projet et ajouter une page html</li><br>
  <li>Donner le code html de la page, elle est constituée de
    <ul>
      <li>un élément <div> avec un attribut class valant « MyDiv »</li>
      <li>et d’un formulaire comportant un seul champs input de type text ayant un id égal à «
      chaine »</li>
    </ul><br>
    
<li>Ajouter à votre projet un fichier javascript nommé « mesFonction.js »</li><br>
    
<li>Utiliser la balise « script » pour relier le fichier javascript à votre page html</li><br>

<li>Écrire, dans le fichier mesFonctions.js, une fonction javascript dénommée « inverse » qui est
    appelée à chaque fois que l’utilisateur tape un caractère dans le champ « chaine » (l’appel de la
    fonction est déclenché par l’événement <strong>keyup</strong>). Lorsque cette fonction est appelée, le contenu
    de balise de classe « MyDiv » affiche la phrase dans « chaine » mais inversée.</li><br>
    
<li>Visualiser votre page html et tester la fonction</li><br>

<li>Ajouter une feuille de style externe (fichier .css) à votre projet</li><br>
    
<li>Déclarer, dans la feuille de style, une classe de style appelée « phraseErronee » qui,
    lorsqu’appliquée, elle rend le bord rouge et une autre classe de style « phraseCorrecte » qui rend
    le bord vert.</li><br>
    
<li>Écrire, dans le fichier mesFonctions.js, une fonction dénommée « trouver » qui affiche le bord
    du champ « chaine » en rouge si la phrase écrite ne contient pas le caractère « dièse ». S‘il existe
    un caractère dièse ‘#’, alors le bord doit être vert. La fonction doit utiliser les classes CSS
    définies dans la question précédente.</li><br>
    
<li>Écrire la fonction « trouver » en utilisant setAttribute (‘style’,...) et setAttribute(‘class’,...)</li><br>
    
<li>Visualiser votre page html et tester la fonction</li>
</ol><br><br>


<h1>Partie II</h1>

<ol>
  <li>Créer une nouvelle page html dénommée « js-simple.html »</li><br>
  
  <li>Copier le code HTML du formulaire suivant :</li>
  <a href="https://ibb.co/YtYtnst"><img src="https://i.ibb.co/Wcqc8Jc/Capture.jpg" alt="Capture" border="0"></a><br><br>
  
  <li>Nous souhaitons vérifier avec une fonction javascript dénommée « checkPasswords » que le
  contenu introduit par l’utilisateur dans le champ pwd2 est égal à celui qu’il a introduit dans
  le champ pwd1. Écrire la fonction checkPasswords dans le fichier « mesFonctions.js » et
  reliez-le à votre fichier «js-simple.html».</li><br>
  
  <li>Visualiser votre page html et tester la fonction</li><br>
</ol>
