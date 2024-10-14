function SecretSocietyName(miembros) {
    const name = miembros.map(miembro => miembro.charAt(0).toUpperCase()).join(''); 
    return `Secret Society: ${name}`;
}

console.log(SecretSocietyName(['Esperanza', 'Franco', 'Nia'])); 
console.log(SecretSocietyName(['Diana', 'German', 'Roberto'])); 
console.log(SecretSocietyName(['Harry', 'Ron', 'Hermione'])); 
