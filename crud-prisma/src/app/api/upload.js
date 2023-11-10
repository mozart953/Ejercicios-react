// Importa las dependencias
import nextConnect from 'next-connect';
import multer from 'multer';

// Configura multer para guardar las imágenes en la carpeta 'uploads'
const upload = multer({ dest: 'src/uploads/' });

// Crea el manejador de rutas
const handler = nextConnect();

// Utiliza multer para manejar la carga de la imagen
handler.use(upload.single('image'));

// Maneja la petición POST
handler.post((req, res) => {
  try {
    // La imagen se encuentra en req.file
    // Puedes guardar la ruta de la imagen en la base de datos aquí

    // Envía una respuesta al cliente
    res.status(200).json({ status: 'success', imagePath: `src/uploads/${req.file.filename}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Ocurrió un error en el servidor' });
  }
});

export default handler;
