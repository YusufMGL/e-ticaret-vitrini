interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
      <button
        onClick={() => onCategoryChange("")}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid #007bff',
          cursor: 'pointer',
          background: selectedCategory === "" ? '#007bff' : 'transparent',
          color: selectedCategory === "" ? 'white' : '#007bff'
        }}
      >
        Hepsi
      </button>
      
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #007bff',
            cursor: 'pointer',
            textTransform: 'capitalize',
            background: selectedCategory === cat ? '#007bff' : 'transparent',
            color: selectedCategory === cat ? 'white' : '#007bff'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;