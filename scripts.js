window.onload = () => {
  const buttons = document.querySelector(".buttons");
  buttons.onclick = runExercices;
  
  const results = document.querySelector(".results")

  results.textContent = "";

  function runExercices(e) {
    results.innerHTML = (
      e.target.id === "1" ?
      exercise_1() :
      e.target.id === "2" ?
      exercise_2() :
      e.target.id === "3" ?
      exercise_3() :
      e.target.id === "4" ?
      exercise_4() :
      e.target.id === "5" ?
      exercise_5() :
      ""
    )
  }

  const header = num => `Exercise ${num}\n${"-".repeat(10)}\n\n`;

  function exercise_1() {
    let result = header(1);
    
    const name = "FABIAN".split("");
    name.forEach(letter => result += letter + "\n");
    
    return result
  }

  function exercise_2() {
    let result = header(2);

    const name = "FABIAN-2021".split("");
    const vowels = ["A", "E", "I", "O", "U"];
    result += name.join("") + "\n";

    name.forEach(letter =>
      result += "\n" +
      (
        !isNaN(letter) ?
        `Names of people don't contain the number: ${letter}` :
        vowels.includes(letter) ?
        `I found the vowel: ${letter}` :
        /[a-zA-Z]/.test(letter) && !vowels.includes(letter) ?
        `I found the consonant: ${letter}` :
        `I found the character: ${letter}`
      ) + "\n"
    );

    return result;
  }

  function exercise_3() {
    let result = header(3);

    let name = "FABIAN FLORES VADELL";
    result += name + "\n\n";

    name = name.split("").filter(letter => letter !== " ");

    const uniqueLetters = new Set(name);
    const letterFreq = new Map();

    uniqueLetters.forEach(uniqueLetter =>
      letterFreq.set(uniqueLetter, name.filter(letter => letter === uniqueLetter).length)
    );

    letterFreq.forEach((value, key) => result += `${key} ${value}\n`);
    return result;
  }

  function exercise_4() {
    let result = header(4);

    let firstName = "FABIAN";
    firstName = firstName.split("");

    let lastName = "FLORES VADELL";
    lastName = lastName.split("");

    const fullName = firstName.concat(" ", lastName);
    result += `Fullname:\n${fullName}`;

    return result;
  }

  function exercise_5() {
    let result = header(5);

    const str =
      "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

    const emails = new Set(str.match(/\b\w+@\S+\.\w{2,3}\b/gi));
    result += "Emails founded:\n\n";
    emails.forEach(email => result += email + "\n");

    return result;
  }
};
