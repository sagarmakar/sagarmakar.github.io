const fs = require('fs');
let html = fs.readFileSync('/app/index.html', 'utf8');

// Update section styles
html = html.replace(
  '    /* Main Content Sections */\n    section {\n      padding: 60px 0;\n      border-bottom: 1px solid var(--border);\n    }',
  '    /* Main Content Sections */\n    section {\n      padding: 40px;\n      margin: 40px 0;\n      background: var(--surface);\n      border: 1px solid var(--border);\n      border-radius: 16px;\n      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.03);\n    }\n\n    @media (max-width: 768px) {\n      section {\n        padding: 24px;\n        margin: 24px 0;\n        border-radius: 12px;\n      }\n    }'
);

html = html.replace(
  '    section:last-child {\n      border-bottom: none;\n    }',
  '    section:last-child {\n      margin-bottom: 40px;\n    }'
);

// Remove duplicate boxed styling from .boxed-section since section is now the box
html = html.replace(
  '    .boxed-section {\n      background: var(--surface);\n      border: 1px solid var(--border);\n      border-radius: 12px;\n      padding: 32px;\n      margin-bottom: 24px;\n      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n    }',
  '    .boxed-section {\n      /* Visual grouping, but no border since section is now boxed */\n      padding: 16px 0;\n      margin-bottom: 24px;\n    }'
);

// Update specific boxed-section overrides
html = html.replace(
  '    @media (max-width: 768px) {\n      .exp-box {\n        grid-template-columns: 1fr;\n        gap: 16px;\n      }\n      .boxed-section {\n        padding: 24px 16px;\n      }',
  '    @media (max-width: 768px) {\n      .exp-box {\n        grid-template-columns: 1fr;\n        gap: 16px;\n      }\n      .boxed-section {\n        padding: 16px 0;\n      }'
);

fs.writeFileSync('/app/index.html', html);
