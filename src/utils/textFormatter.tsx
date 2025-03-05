import React from 'react';

export const formatHighlightedText = (
  text: string, 
  highlightColor: string = 'text-[#800020]'
) => {
  // Patterns for matching
  const patterns = {
    sol: /(\d+\s*SOL)/g,
    aurSol: /(\d+\s*aurSOL)/g,
    jito: /Jito Staking/g,
    marinade: /Marinade Finance/g,
    compass: /Golden Compass/g
  };

  // Split the text and preserve the matched patterns
  const parts = text.split(/(100\s*SOL|50\s*aurSOL|Jito Staking|Marinade Finance|Golden Compass)/g);

  return parts.map((part, index) => {
    // Check if part matches any of our patterns
    if (
      patterns.sol.test(part) ||
      patterns.aurSol.test(part) ||
      patterns.jito.test(part) ||
      patterns.marinade.test(part) ||
      patterns.compass.test(part)
    ) {
      return (
        <span 
          key={index} 
          className={highlightColor}
        >
          {part}
        </span>
      );
    }
    return part;
  });
};

// Utility for handling multiple text formats
export const formatTextWithSymbols = (
  text: string, 
  symbol: string = '◈'
) => {
  return text.split('\n').map((line, index) => (
    <span key={index} className="flex items-start">
      {line.startsWith('◈') ? (
        <>
          <span className="mr-2">{symbol}</span>
          <span>{line.slice(1).trim()}</span>
        </>
      ) : (
        line
      )}
    </span>
  ));
};

// Helper for handling rich text content
export const parseRichText = (
  content: string, 
  options: {
    highlightColor?: string;
    symbolsEnabled?: boolean;
  } = {}
) => {
  const { 
    highlightColor = 'text-[#800020]', 
    symbolsEnabled = false 
  } = options;

  if (symbolsEnabled) {
    const lines = content.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {formatHighlightedText(line, highlightColor)}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return formatHighlightedText(content, highlightColor);
};

// Export any other text formatting utilities you might need
export const truncateText = (
  text: string, 
  maxLength: number
): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};