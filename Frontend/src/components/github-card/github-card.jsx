import React, { useState, useEffect } from "react";
import "./github-card.css";

const API_URL = "https://api.github.com/users/";
const USERNAME = "Juandagarc"; // Cambia esto al nombre de usuario deseado

const GitHubCard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [counters, setCounters] = useState({
    followers: 0,
    following: 0,
    publicRepos: 0,
  });

  const getUser = async (username) => {
    try {
      const response = await fetch(API_URL + username);
      const data = await response.json();
      setUserInfo(data);
      animateCounters(username, data.followers, data.following, data.public_repos);
    } catch (error) {
      setError("No se encontró un perfil con este nombre de usuario");
    }
  };

  const getRepos = async (username) => {
    try {
      const response = await fetch(API_URL + username + "/repos");
      const data = await response.json();
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        repos: data,
      }));
    } catch (error) {
      setError("No se encontró un perfil con este nombre de usuario");
    }
  };

  const animateCounters = async (username, followersCount, followingCount, reposCount) => {
    try {
      const increment = 50; // Puedes ajustar la velocidad de incremento aquí
      const duration = 3000; // Ajusta la duración total de la animación

      const steps = {
        followers: followersCount / (duration / increment),
        following: followingCount / (duration / increment),
        publicRepos: reposCount / (duration / increment),
      };

      const intervalFollowers = setInterval(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          followers: Math.min(prevCounters.followers + steps.followers, followersCount),
        }));
      }, increment);

      const intervalFollowing = setInterval(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          following: Math.min(prevCounters.following + steps.following, followingCount),
        }));
      }, increment);

      const intervalRepos = setInterval(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          publicRepos: Math.min(prevCounters.publicRepos + steps.publicRepos, reposCount),
        }));
      }, increment);

      setTimeout(() => {
        clearInterval(intervalFollowers);
        clearInterval(intervalFollowing);
        clearInterval(intervalRepos);
        setCounters({
          followers: followersCount,
          following: followingCount,
          publicRepos: reposCount,
        });
      }, duration);

      await getRepos(username);
    } catch (error) {
      setError("No se encontró un perfil con este nombre de usuario");
    }
  };

  useEffect(() => {
    getUser(USERNAME);
  }, []);

  const createErrorCard = (msg) => {
    return (
      <div className="card">
        <h1>{msg}</h1>
      </div>
    );
  };

  return (
    <div>
      {error && createErrorCard(error)}
      {userInfo && (
        <div className="card">
          <div>
            <img src={userInfo.avatar_url} alt="image" className="avatar" />
            {/* <h2 className="center name">{userInfo.login}</h2> */}
          </div>
          <div className="user-info center">
            <h2 className="user-name">{userInfo.name}</h2>
            <p>{userInfo.bio}</p> <br />
            <ul className="info">
              <li>
                <strong>Followers</strong>
                <br />
                {Math.round(counters.followers)}
              </li>
              <li>
                <strong>Following</strong>
                <br />
                {Math.round(counters.following)}
              </li>
              <li>
                <strong>Repos</strong>
                <br />
                {Math.round(counters.publicRepos)}
              </li>
            </ul>
            <br />
            <div className="repo-container">
              {userInfo.repos &&
                userInfo.repos.map((item) => (
                  <a
                    key={item.id}
                    className="repo"
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
