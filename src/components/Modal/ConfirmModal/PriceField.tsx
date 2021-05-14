import React from "react";

interface Props {
  name: string;
  content: string;
}

const PriceField = ({ name, content }: Props): React.ReactElement<Props> => {
  return (
    <div className="field">
      <span className="fieldName">{name}</span>
      <span className="fieldContent">{content}</span>
    </div>
  );
};

export default PriceField;
