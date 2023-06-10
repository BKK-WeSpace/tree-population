# Wespace 

This is a new wespace documentation and is under construction.

# Public Endpoints

The full Swagger docs for all public endpoints can be viewed in /api/api-docs

# Getting Started

```
npm install

npm run dev
```

# Contributing

This project uses the standard T3 folder structure. We might migrate to a monorepo structure with separate packages later. But for the time being, we see no need to do so. Those already familiar with T3 should be able to make contributions right away.

## Schemas

We use `Zod` for all request/respons schemas to make validations easier.

Instead of 

```ts
    interface SomeType {
        name: string;
    }
    // or
    type SomeType = {name: string}
```

We do

```ts
    const SomeSchema = z.object({
        name: z.string()
    });

    // and where needed

    function someFunc(stuff: z.infer<typeof SomeSchema>) {
        //...
    }
```

# About 

# Things yet to be done

- [x] Bring in maplibre
- [x] Integrate with Vallaris (requires a good backend architecture to make it not Vallaris-dependent).
- [x] Integrate https://github.com/jlalmes/trpc-openapi to integrate open-api specs (and also document it here)
- [ ] TODO trpc-openapi is not generating the correct types for enums and unions of literals.
- [ ] TODO Code of conduct
- [ ] TODO More stuff to this todo list
- [ ] TODO CI/CD -> Deployment, linting, testing, etc.
- [ ] TODO Add alicense file
- [ ] TODO Add a testing library

# for docs (what we need to add to this file)
- [ ] TODO Copy descriptions over from old docs (may need to update some stuff as well)
- [ ] TODO Documentation in Thai and English
- [ ] TODO Getting Started
- [ ] TODO How to contribute
- [ ] TODO Main reviewers
- [ ] TODO Branch naming conventions

# SD-TEAM dependent
- [ ] TODO Theme system with MUI (once we have the design)