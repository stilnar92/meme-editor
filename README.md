# Meme Generator

A modern, feature-rich meme generator built with React and Vite. Create, customize, and share memes with an intuitive user interface.

## Architecture Highlights

- **Separation of Concerns**: Clear separation between UI components and data management
  - UI Layer: Focused on presentation and user interactions
  - Data Layer: Handles meme state and operations
  - Clean interfaces between layers for better maintainability

## Features

- **Drag & Drop Text**: Easily position text anywhere on your meme
- **Rich Text Customization**:
  - Multiple fonts (Impact, Arial, Comic Sans, etc.)
  - Font size control
  - Text color and background
  - Outline width and color
  - Text alignment and transformation
  - Rotation and scaling
- **Modern UI**: Clean, responsive interface with side-by-side editor and controls
- **Real-time Preview**: See your changes instantly as you edit

## Project Structure

The project follows a feature-sliced design pattern with clear separation of UI and data:

```
src/
├── app/              # Application initialization
├── pages/            # Page components
│   └── editor/       # Main editor page
├── widgets/          # Complex components
│   └── MemeEditor/   
│       ├── ui/      # Pure UI components
│       ├── model/   # Data and business logic
│       └── lib/     # Utilities and helpers
├── features/         
│   └── memeEditor/   
│       ├── ui/      # Feature-specific UI components
│       ├── model/   # Feature-specific logic
│       └── api/     # Data manipulation API
├── entities/         # Business entities
│   └── meme/        
│       ├── ui/      # Entity-specific UI components
│       ├── model/   # Core business logic
│       └── lib/     # Entity-specific utilities
└── shared/          # Shared utilities and UI components
```

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- **React**: UI library
- **Vite**: Build tool
- **TailwindCSS**: Styling
- **React DnD**: Drag and drop functionality

## Development

### Key Components

#### UI Layer
- `MemeEditor/ui/EditorLayout`: Main layout component
- `MemeEditor/ui/Canvas`: Meme preview and interaction area
- `MemeEditor/ui/Controls`: Text manipulation controls
- `features/memeEditor/ui/text/TextControls`: Text styling interface

#### Data Layer
- `entities/meme/model/meme`: Core meme data structure and operations
- `features/memeEditor/model/useTextElements`: Text elements management
- `entities/meme/lib/styleConfig`: Style configuration and defaults

### Architecture

The application follows a clear separation between UI and data:

1. **UI Layer**
   - Pure presentational components
   - Controlled by data layer
   - Focus on user interactions and rendering
   - Minimal business logic

2. **Data Layer**
   - Manages application state
   - Handles business logic
   - Provides clean API for UI
   - Independent of UI implementation

3. **Integration**
   - UI components receive data via props
   - Actions are passed down as callbacks
   - Data layer is framework-agnostic
   - Easy to test and maintain

### Programmatic Meme Manipulation

You can programmatically create and manipulate memes using the provided hooks and utilities:

```jsx
import { useMemeStore } from '@/entities/meme';

function MemeCreator() {
  const { createMeme, addText, updateText, moveText, removeText } = useMemeStore();

  // Initialize meme with an image
  useEffect(() => {
    createMeme('path/to/image.jpg');
  }, []);

  // Add new text to meme
  const addNewText = () => {
    addText('Hello World', { x: 100, y: 100 });
  };

  // Update text style
  const customizeText = (id) => {
    updateText(id, {
      text: 'Customized Text',
      font: 'Impact',
      size: 48,
      color: '#FFFFFF',
      backgroundColor: 'transparent',
      outlineWidth: 2,
      outlineColor: '#000000',
      rotate: 0,
      scale: 1,
      textAlign: 'center',
      textTransform: 'uppercase'
    });
  };

  // Move text to a new position
  const repositionText = (id) => {
    moveText(id, 200, 150);
  };

  // Remove text
  const deleteText = (id) => {
    removeText(id);
  };

  return <MemeEditor />;
}
```

Example of creating a meme with multiple text elements:

```jsx
function createMemeProgrammatically() {
  // Initialize meme
  createMeme('meme-template.jpg');

  // Add top text
  const topTextId = addText('TOP TEXT', { x: 250, y: 50 });
  updateText(topTextId, {
    font: 'Impact',
    size: 48,
    color: '#FFFFFF',
    outlineWidth: 2,
    textTransform: 'uppercase'
  });

  // Add bottom text
  const bottomTextId = addText('BOTTOM TEXT', { x: 250, y: 350 });
  updateText(bottomTextId, {
    font: 'Impact',
    size: 48,
    color: '#FFFFFF',
    outlineWidth: 2,
    textTransform: 'uppercase'
  });
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
