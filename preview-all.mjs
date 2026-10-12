import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const base=path.dirname(root);
const children=[1,2,3].map(i=>spawn(process.execPath,[path.join(base,`porto_vuyama_labs_${i}`,'server.mjs')],{stdio:'inherit',windowsHide:true}));
function stop(){children.forEach(c=>c.kill());}
process.on('SIGINT',()=>{stop();process.exit(0);});process.on('SIGTERM',()=>{stop();process.exit(0);});
children.forEach(c=>c.on('error',e=>{console.error(e.message);stop();process.exit(1);}));
