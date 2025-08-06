precision mediump float;

uniform float uTime;
varying vec2 vUv;

// グリッド模様
float gridPattern(vec2 uv, float spacing, float thickness) {
  float xLine = smoothstep(thickness, 0.0, abs(fract(uv.x * spacing) - 0.5));
  float yLine = smoothstep(thickness, 0.0, abs(fract(uv.y * spacing) - 0.5));
  return max(xLine, yLine);
}

// サーキット模様
float circuitPattern(vec2 uv, float time) {
  float xMod = abs(sin(uv.x * 70.0 + time * 0.5));
  float yMod = abs(cos(uv.y * 70.0 + time * 0.5));
  return step(0.03, xMod * yMod);
}

void main() {
  vec3 colorA = vec3(0.01, 0.05, 0.09);
  vec3 colorB = vec3(0.1, 0.3, 0.6);
  float gradient = smoothstep(0.5, 1.5, vUv.y);
  vec3 baseColor = mix(colorA, colorB, gradient);

  vec2 movingUV = vUv + vec2(sin(uTime * 0.03) * 0.02, uTime * 0.05);
  float grid = gridPattern(movingUV, 40.0, 0.02);
  float pulse = sin(uTime * 3.0 + vUv.y * 12.0) * 0.5 + 0.5;
  float circuit = circuitPattern(movingUV, uTime);

  vec3 finalColor = baseColor
    + vec3(grid * pulse * 0.1)
    + vec3(circuit * 0.03);

  gl_FragColor = vec4(finalColor, 0.95);
}