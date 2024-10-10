import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './monaco-editor.component.html',
  styleUrl: './monaco-editor.component.css',
  providers: [
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: './assets/monaco',  // Pfad zu den Monaco-Assets
        defaultOptions: { scrollBeyondLastLine: false },
      },
    },
  ]
})
export class MonacoEditorComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\n  console.log("Hello world!");\n}';
}
