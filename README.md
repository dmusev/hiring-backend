# Local Backend Setup

This is simple hiring back-end build with Nest.js, GraphQL, and TypeScript within Docker containers. 

## Prerequisites

Before you begin, ensure you have installed the following software:

- **[Node.js](https://nodejs.org/)**: Required to run the backend application. Version 14.x or higher is recommended.
- **[Docker](https://www.docker.com/get-started)**: Required for creating and managing your application's containers.
- **[Docker Compose](https://docs.docker.com/compose/install/)**: Used for defining and running multi-container Docker applications.
- **[Git](https://git-scm.com/downloads)**: Required for cloning the repository and managing version control.

## Docker Setup

Follow these steps to set up your application using Docker:

1. **Clone the Repository**

   Clone the backend repository to your local machine:

   ```bash
   git clone git@github.com:dmusev/hiring-backend.git
   cd hiring-backend
   ```

2. **Build and Run Docker Containers**
  
  Use Docker Compose to build and run the containers specified in your docker-compose.yml:

   ```bash
   docker-compose -f docker-compose.backend.yml up --build
   ```
   
3. **Verify Containers are running**

   Check the status of your Docker containers to ensure they are running correctly:
   
   ```bash
   docker ps
   ```

4. **Example Queries & Mutations**

Queries:

```
query GetAllCandidates {
  totalCandidates
  candidates {
    id
    name
    email
    offers {
      id
      title
      status
      salary
      candidate {
        id
        name
        email
      }
    }
  }
}
```

```
query GetAllOffers {
  totalOffers
  offers {
    id
    title
    status
    salary
    candidate {
      name
      email
    }
  }
}
```

Mutations:

```
mutation CreateNewCandidate {
  createCandidate(input: {
    name: "John Doe",
    email: "john.doe@example.com"
  }) {
    id
    name
    email
    offers {
      id
    }
  }
}
```

```
mutation CreateNewOffer {
  createOffer(input: {
    candidateId: "1",
    title: "Senior Software Engineer",
    salary: 120000,
    status: "pending"
  }) {
    id
    title
    status
    salary
    candidate {
      id
      name
      email
    }
  }
}
```

```
mutation Login {
  login(input: {
    id: "5",  # Replace with the actual candidate ID
    email: "henry.charles@example.com",
  }) {
    accessToken
  }
}
```