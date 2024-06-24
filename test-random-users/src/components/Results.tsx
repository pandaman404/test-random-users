interface ResultProps {
  count: number;
}

export const Results = ({ count }: ResultProps) => {
  return <h3> Resultados: {count}</h3>;
};
