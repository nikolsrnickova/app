import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ElementType<T extends HTMLElement> = DetailedHTMLProps<
    ButtonHTMLAttributes<T>,
    T
>;
