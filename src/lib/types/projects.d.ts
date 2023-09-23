export interface Project {
    name: string, 
    slug: string, 
    description: string, 
    src?: string, 
    web?: string, 
    git?: string
}

export interface Category {
    name: string,
    icon: any
    projects: Project[]
}