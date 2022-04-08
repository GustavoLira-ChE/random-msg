#!/usr/bin/env node
let random = require('../src/index.js');
random.randomMsg();

/* 
#!/usr/bin/env node es una instancia de una línea shebang : la primera línea en un archivo de texto plano ejecutable en plataformas similares a Unix que le dice al sistema a qué intérprete debe pasar ese archivo para su ejecución , a través del comando línea siguiendo la magia #! prefijo (llamado shebang ).

Nota: Windows no admite líneas shebang , por lo que efectivamente se ignoran allí; en Windows es solo la extensión del nombre de archivo de un archivo dado que determina qué ejecutable lo interpretará. Sin embargo, todavía los necesita en el contexto de npm . 
*/