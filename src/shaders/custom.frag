// custom.frag
precision mediump float;

uniform float time;
uniform float intensity;
varying vec2 vUv;

void main() {
  // 波動の中心からの距離
  vec2 center = vec2(0.5);
  float dist = distance(vUv, center);

  // 揺らぎの波動表現
  float wave = sin(dist * 20.0 - time * 2.0);

  // 光の強度と色
  float glow = smoothstep(0.2, 0.0, dist) * wave * intensity;

  vec3 color = vec3(0.2, 0.8, 1.0) + glow;

  gl_FragColor = vec4(color, 1.0);
}