'use client';

import { ClipLoader } from "react-spinners";
import { LoaderSizeProps } from "react-spinners/helpers/props";

const override = {
    display: 'block',
    margin: '100px auto',
};

const LoadingPage = ({ loading }: LoaderSizeProps) => {
    return (
        <ClipLoader
            color="#3b82f6"
            cssOverride={override}
            loading={loading}
            size={150}
            aria-label="Loading animation"
        />
    );
};

export default LoadingPage;